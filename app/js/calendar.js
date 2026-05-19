/**
 * MedPenguin - Calendário Acadêmico (SISTEMA DE PERSISTÊNCIA GLOBAL)
 */

window.currentMonth = new Date().getMonth();
window.currentYear = new Date().getFullYear();
window.userClass = null; 
window.calendarEvents = [];
window.presetEvents = []; 
const CACHE_KEY = 'medpenguin_user_class';

function notify(msg) {
    if (window.showXPToast) window.showXPToast(msg);
    else console.log("MedPenguin Notify:", msg);
}

/**
 * INICIALIZAÇÃO AUTOMÁTICA (RODA NO F5)
 * Este bloco garante que a turma do usuário seja carregada do cache (instantâneo)
 * e depois sincronizada com o banco de dados (confiável).
 */
(async function initGlobalPersistence() {
    console.log("[MedPenguin] Cérebro de Persistência Ativado...");
    
    // 1. Tentar ler o cache imediatamente para carregar dados salvos
    try {
        const saved = localStorage.getItem(CACHE_KEY);
        if (saved) {
            window.userClass = JSON.parse(saved);
            console.log("[MedPenguin] Turma carregada do cache:", window.userClass.name);
            
            // Renderiza na lateral e tenta buscar presets
            renderClassInfo();
            if (window.userClass.university) {
                fetchPresets(window.userClass.university).then(() => {
                    updateUpcomingEvents();
                    if (document.getElementById('calendar-grid')) {
                        renderCalendar(window.currentMonth, window.currentYear);
                    }
                });
            }
        }
    } catch(e) { console.error("Erro ao ler cache no boot:", e); }

    // 2. Esperar o Supabase estar pronto e configurar sincronização em tempo real
    const checkSupabase = setInterval(async () => {
        // Verifica se o client já foi inicializado (seja por este script ou pelo index.html)
        const hasClient = window.supabase && typeof window.supabase.from === 'function';
        
        if (hasClient) {
            clearInterval(checkSupabase);
            console.log("[MedPenguin] Supabase detectado. Configurando sync de auth...");

            // Sincronização inicial
            try {
                const { data: { session } } = await window.supabase.auth.getSession();
                if (session?.user) {
                    console.log("[MedPenguin] Sincronizando login inicial:", session.user.id);
                    await syncDatabase(session.user.id);
                }
            } catch(e) { console.error("Erro na sync inicial:", e); }

            // Escutar mudanças de autenticação (Login/Logout)
            window.supabase.auth.onAuthStateChange(async (event, session) => {
                if (session?.user) {
                    console.log("[MedPenguin] Auth change detectada, sincronizando...");
                    await syncDatabase(session.user.id);
                } else {
                    console.log("[MedPenguin] Logout detectado, limpando estado da turma.");
                    window.userClass = null;
                    window.calendarEvents = [];
                    localStorage.removeItem(CACHE_KEY);
                    renderNoClassState();
                }
            });
        } else {
            // Se o client ainda não existe mas o script da biblioteca está presente, tenta criar
            if (typeof supabase !== 'undefined' && typeof supabase.createClient === 'function') {
                window.supabase = supabase.createClient(MEDPENGUIM_CONFIG.supabaseUrl, MEDPENGUIM_CONFIG.supabaseKey);
            }
        }
    }, 500);
})();

/**
 * Busca presets separadamente para ser reutilizável
 */
async function fetchPresets(universityName) {
    // Tentar detectar se o nome da universidade é "Geral" mas o nome da turma tem "UCP"
    let targetUni = universityName;
    if ((!targetUni || targetUni === 'Geral') && window.userClass?.name) {
        if (window.userClass.name.toUpperCase().includes('UCP')) {
            targetUni = 'UCP';
        }
    }

    if (!targetUni || targetUni === 'Geral') return;

    try {
        const uni = encodeURIComponent(targetUni);
        const baseUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') 
            ? 'https://medpenguim.com.br' 
            : '';
        
        const response = await fetch(`${baseUrl}/.netlify/functions/calendar-presets?university=${uni}`);
        if (response.ok) {
            const presets = await response.json();
            window.presetEvents = presets.map(p => ({
                ...p,
                event_date: p.date, 
                isPreset: true
            }));
            console.log(`[MedPenguin] ${window.presetEvents.length} presets carregados para ${universityName}`);
        }
    } catch (e) {
        console.error("Erro ao carregar presets:", e);
    }
}

/**
 * Sincroniza dados com o banco de dados
 */
async function syncDatabase(userId) {
    if (!userId) return;
    
    try {
        console.log("[MedPenguin] Buscando filiação de turma para:", userId);
        const { data: member, error } = await window.supabase
            .from('class_members')
            .select('*, classes(*, universities(name))')
            .eq('user_id', userId)
            .maybeSingle();

        if (error) {
            console.error("[MedPenguin] Erro ao buscar membro:", error);
            throw error;
        }

        if (member && member.classes) {
            console.log("[MedPenguin] Turma encontrada no banco:", member.classes.name);
            window.userClass = {
                id: member.classes.id,
                name: member.classes.name,
                university: member.classes.universities?.name || 'Geral',
                role: member.role,
                inviteCode: member.classes.invite_code
            };
            localStorage.setItem(CACHE_KEY, JSON.stringify(window.userClass));
            
            // 1. Busca eventos da Turma (DB)
            const { data: evts } = await window.supabase
                .from('calendar_events')
                .select('*')
                .eq('class_id', window.userClass.id);
            
            if (evts) window.calendarEvents = evts;

            // 2. Busca eventos Institucionais (API)
            await fetchPresets(window.userClass.university);
            
            // Atualiza UI
            renderClassInfo();
            updateUpcomingEvents();
            
            const btnAdd = document.getElementById('btn-add-event');
            if (btnAdd) {
                if (window.userClass.role === 'rep') {
                    btnAdd.classList.remove('hidden');
                } else {
                    btnAdd.classList.add('hidden');
                }
            }

            if (document.getElementById('calendar-grid')) {
                renderCalendar(window.currentMonth, window.currentYear);
            }
        } else {
            console.log("[MedPenguin] Nenhuma turma encontrada para este usuário no banco.");
            // Se não encontrou no banco, limpa o estado (garante que logout/troca de conta funcione)
            window.userClass = null;
            localStorage.removeItem(CACHE_KEY);
            renderNoClassState();
        }

    } catch(err) {
        console.error("[MedPenguin] Erro de sincronização:", err);
    }
}

async function showCalendarScreen() {
    showScreen('calendario');
    
    const elTitle = document.getElementById('header-title');
    const elSubtitle = document.getElementById('header-subtitle');
    if (elTitle) elTitle.textContent = 'Calendário';
    if (elSubtitle) elSubtitle.textContent = '🗓️ Organização Acadêmica';
    
    if (window.userClass) {
        renderClassInfo();
    } else {
        renderNoClassState();
    }

    renderCalendar(window.currentMonth, window.currentYear);
}

function renderClassInfo() {
    const content = document.getElementById('class-info-content');
    if (!content || !window.userClass) return;
    
    content.innerHTML = `
        <div style="padding: 2px;">
            <div style="margin-bottom:12px;">
                <div style="font-weight:700;color:white;font-size:0.95rem;line-height:1.2;">${window.userClass.name}</div>
                <div style="font-size:0.7rem;color:var(--text-secondary);margin-top:2px;">${window.userClass.university}</div>
            </div>
            
            <div style="padding:10px;background:rgba(255,255,255,0.03);border-radius:12px;margin-bottom:12px;border:1px solid rgba(255,255,255,0.1);text-align:center;">
                <div style="font-size:0.55rem;text-transform:uppercase;color:var(--text-secondary);margin-bottom:2px;letter-spacing:1px;">Código da Turma</div>
                <div style="font-family:monospace;font-size:1rem;color:var(--primary-light);font-weight:700;">${window.userClass.inviteCode}</div>
            </div>
            
            <div style="display:flex;flex-direction:column;gap:8px;">
                <button class="btn-primary full-width" onclick="shareToWhatsApp('${window.userClass.inviteCode}')" 
                    style="background:#10B981;height:38px;font-size:0.8rem;border-radius:10px;display:flex;align-items:center;justify-content:center;gap:8px;border:none;cursor:pointer;">
                    📱 Convidar Colegas
                </button>
                
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                    <button class="btn-secondary" onclick="copyInviteCode()" 
                        style="font-size:0.7rem;height:36px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:white;cursor:pointer;">
                        📋 Copiar
                    </button>
                    <button class="btn-secondary" onclick="leaveClass()" 
                        style="font-size:0.7rem;height:36px;border-radius:10px;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);color:#ef4444;cursor:pointer;">
                        🚪 Sair
                    </button>
                </div>
            </div>
        </div>`;
}

function renderNoClassState() {
    const content = document.getElementById('class-info-content');
    if (content) content.innerHTML = '<button class="btn-primary full-width" onclick="showJoinClassScreen()">Conectar Turma</button>';
}

function renderCalendar(month, year) {
    const grid = document.getElementById('calendar-grid');
    if (!grid) {
        console.error("[MedPenguin] Elemento #calendar-grid não encontrado!");
        return;
    }
    
    const m = parseInt(month);
    const y = parseInt(year);
    
    console.log(`[MedPenguin] Renderizando: ${m}/${y}`);
    grid.innerHTML = '';
    
    const firstDay = new Date(y, m, 1).getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const today = new Date();
    const monthNames = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    
    const titleEl = document.getElementById('calendar-month-year');
    if (titleEl) titleEl.textContent = `${monthNames[m]} ${y}`;
    
    const classNameEl = document.getElementById('calendar-class-name');
    if (classNameEl) classNameEl.textContent = window.userClass ? window.userClass.name : 'Calendário Acadêmico';

    for (let i = 0; i < firstDay; i++) {
        const d = document.createElement('div');
        d.className = 'calendar-day empty';
        grid.appendChild(d);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        if (day === today.getDate() && m === today.getMonth() && y === today.getFullYear()) {
            dayEl.classList.add('today');
        }
        
        dayEl.innerHTML = `<span class="day-number">${day}</span>`;
        
        const dateStr = `${y}-${String(m+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
        
        const dayEvents = [
            ...(window.calendarEvents || []).filter(e => {
                if (!e || !e.event_date) return false;
                const eDate = String(e.event_date).split('T')[0];
                return eDate === dateStr;
            }),
            ...(window.presetEvents || []).filter(e => {
                if (!e || !e.event_date) return false;
                return e.event_date === dateStr;
            })
        ];
        
        if (dayEvents.length > 0) {
            const preview = document.createElement('div');
            preview.className = `event-preview ${dayEvents[0].type || 'outro'}`;
            preview.textContent = dayEvents[0].title || 'Evento';
            dayEl.appendChild(preview);

            const dotsContainer = document.createElement('div');
            dotsContainer.className = 'day-events';
            dayEvents.forEach(e => {
                const dot = document.createElement('div');
                dot.className = `event-dot ${e.type || 'outro'}`;
                dotsContainer.appendChild(dot);
            });
            dayEl.appendChild(dotsContainer);

            dayEl.style.cursor = 'pointer';
            dayEl.onclick = (e) => {
                e.stopPropagation();
                if (window.showDayDetails) window.showDayDetails(day, dayEvents);
            };
        }
        grid.appendChild(dayEl);
    }
}

window.joinClass = async () => {
    const btn = document.querySelector('#class-state-join .btn-primary');
    const input = document.getElementById('invite-code-input');
    const code = input?.value.toUpperCase().trim();
    
    if (!code) return alert("Por favor, digite o código da turma!");
    if (btn) { btn.disabled = true; btn.textContent = "Verificando..."; }

    try {
        if (!window.supabase) throw new Error("O sistema está inicializando...");

        const { data: { session } } = await window.supabase.auth.getSession();
        if (!session?.user) throw new Error("Você não está logado.");

        const { data: cls, error: clsErr } = await window.supabase.from('classes').select('*').eq('invite_code', code).maybeSingle();
        if (clsErr) throw clsErr;
        if (!cls) throw new Error("Código inválido!");

        const isRep = cls.representative_id === session.user.id;
        const { error: upsertErr } = await window.supabase.from('class_members').upsert({ 
            user_id: session.user.id, 
            class_id: cls.id, 
            role: isRep ? 'rep' : 'student' 
        }, { on_conflict: 'user_id' });

        if (upsertErr) throw upsertErr;

        window.closeClassModal();
        await syncDatabase(session.user.id);
        notify(isRep ? "👑 Representante reconhecido!" : "✅ Turma conectada!");

    } catch (err) {
        alert(err.message);
    } finally {
        if (btn) { btn.disabled = false; btn.textContent = "Confirmar e Entrar"; }
    }
};

window.handleCreateClass = async () => {
    const btn = document.querySelector('#class-state-create .btn-primary');
    const uniSelect = document.getElementById('create-class-uni');
    const name = document.getElementById('create-class-name')?.value.trim();
    const sem = document.getElementById('create-class-semester')?.value;

    if (!name) return alert('Dê um nome para a turma!');
    if (btn) { btn.disabled = true; btn.textContent = "Criando..."; }

    try {
        const { data: { session } } = await window.supabase.auth.getSession();
        if (!session?.user) throw new Error("Você precisa estar logado!");

        const universityId = uniSelect.value;
        const universityName = uniSelect.options[uniSelect.selectedIndex].text.split(' - ')[0];
        const rnd = Math.random().toString(36).substring(2,6).toUpperCase();
        const inviteCode = `${universityName}-${sem}${name.substring(0,3).toUpperCase()}-${rnd}`;

        const { data: newClass, error: e1 } = await window.supabase.from('classes').insert([{ 
            name, semester: parseInt(sem), invite_code: inviteCode, 
            representative_id: session.user.id, university_id: universityId
        }]).select().single();

        if (e1) throw e1;

        await window.supabase.from('class_members').upsert({ 
            user_id: session.user.id, class_id: newClass.id, role: 'rep' 
        }, { on_conflict: 'user_id' });

        window.closeClassModal();
        await syncDatabase(session.user.id);
        notify("✅ Turma criada com sucesso!");
    } catch (err) {
        alert(err.message);
    } finally {
        if (btn) { btn.disabled = false; btn.textContent = "Criar e Gerar Código"; }
    }
};

window.confirmLeaveClass = async () => {
    const btn = document.querySelector('#leave-class-modal .btn-primary');
    if (btn) { btn.disabled = true; btn.textContent = "Saindo..."; }

    try {
        const { data: { session } } = await window.supabase.auth.getSession();
        if (session?.user) {
            await window.supabase.from('class_members').delete().eq('user_id', session.user.id);
        }
        window.userClass = null; 
        window.calendarEvents = [];
        localStorage.removeItem(CACHE_KEY);
        window.closeLeaveModal();
        renderNoClassState();
        renderCalendar(window.currentMonth, window.currentYear);
        notify("👋 Turma removida.");
    } catch(e) {
        alert(e.message);
    } finally {
        if (btn) { btn.disabled = false; btn.textContent = "Sim, desejo sair"; }
    }
};

window.showJoinClassScreen = () => { window.resetClassModal(); document.getElementById('class-modal').classList.remove('hidden'); };
window.closeClassModal = () => { document.getElementById('class-modal').classList.add('hidden'); };
window.resetClassModal = () => {
    document.getElementById('class-state-select').classList.remove('hidden');
    document.getElementById('class-state-join').classList.add('hidden');
    document.getElementById('class-state-create').classList.add('hidden');
};
window.showJoinClassForm = () => {
    document.getElementById('class-state-select').classList.add('hidden');
    document.getElementById('class-state-join').classList.remove('hidden');
};
window.showCreateClassForm = () => {
    document.getElementById('class-state-select').classList.add('hidden');
    document.getElementById('class-state-create').classList.remove('hidden');
};
window.copyInviteCode = () => { if (window.userClass?.inviteCode) { navigator.clipboard.writeText(window.userClass.inviteCode); alert("Copiado!"); } };
window.shareToWhatsApp = (code) => { window.open(`https://wa.me/?text=${encodeURIComponent(`Código: *${code}*`)}`, '_blank'); };
window.changeMonth = (delta) => {
    window.currentMonth += delta;
    if (window.currentMonth > 11) { window.currentMonth = 0; window.currentYear++; } 
    else if (window.currentMonth < 0) { window.currentMonth = 11; window.currentYear--; }
    renderCalendar(window.currentMonth, window.currentYear);
};
window.leaveClass = () => { document.getElementById('leave-class-modal').classList.remove('hidden'); };
window.closeLeaveModal = () => { document.getElementById('leave-class-modal').classList.add('hidden'); };
window.openAddEventModal = () => { 
    if (!window.userClass) return alert("Você precisa estar conectado a uma turma!");
    document.getElementById('event-modal').classList.remove('hidden'); 
};
window.closeEventModal = () => { 
    document.getElementById('event-modal').classList.add('hidden'); 
    document.getElementById('event-title').value = '';
    document.getElementById('event-date').value = '';
    document.getElementById('event-desc').value = '';
};

window.handleEventSubmit = async (e) => {
    e.preventDefault();
    if (!window.userClass) return;
    const btn = e.target.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = "Salvando..."; }
    try {
        const title = document.getElementById('event-title').value;
        const date = document.getElementById('event-date').value;
        const type = document.getElementById('event-type').value;
        const desc = document.getElementById('event-desc').value;
        const { data, error } = await window.supabase.from('calendar_events').insert([{
            class_id: window.userClass.id, title, event_date: date, type, description: desc
        }]).select();
        if (error) throw error;
        if (data?.length > 0) window.calendarEvents.push(data[0]);
        window.closeEventModal();
        renderCalendar(window.currentMonth, window.currentYear);
        updateUpcomingEvents();
        notify("🗓️ Data agendada com sucesso!");
    } catch(err) {
        alert(err.message);
    } finally {
        if (btn) { btn.disabled = false; btn.textContent = "Salvar no Calendário"; }
    }
};

function showDayDetails(day, events) {
    const modal = document.getElementById('day-details-modal');
    const content = document.getElementById('day-details-content');
    if (!modal || !content) return;
    document.getElementById('day-details-title').textContent = `Eventos: Dia ${day}`;
    content.innerHTML = events.map(e => `
        <div class="detail-event-card ${e.type}">
            <h4 style="margin:0 0 5px 0;">${e.title}</h4>
            <p style="margin:0;font-size:0.8rem;opacity:0.9;">${e.description || ''}</p>
        </div>`).join('<hr style="border:none;border-top:1px solid rgba(255,255,255,0.1);margin:10px 0;">');
    modal.classList.remove('hidden');
}
window.showDayDetails = showDayDetails;
window.closeDayDetailsModal = () => { document.getElementById('day-details-modal').classList.add('hidden'); };

function updateUpcomingEvents() {
    const list = document.getElementById('upcoming-events-list');
    if (!list) return;
    const today = new Date().toISOString().split('T')[0];
    const allEvents = [
        ...(window.calendarEvents || []).filter(e => e.event_date >= today),
        ...(window.presetEvents || []).filter(e => e.event_date >= today)
    ].sort((a, b) => a.event_date.localeCompare(b.event_date));
    const upcoming = allEvents.slice(0, 3);
    
    if (upcoming.length === 0) {
        list.innerHTML = `
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 0; padding: 10px 0;">
                Nenhuma prova ou evento marcado em breve.
            </p>
        `;
        return;
    }

    list.innerHTML = upcoming.map(e => `
        <div class="upcoming-event ${e.type} ${e.isPreset ? 'preset' : ''}">
            <div class="event-info">
                <h4>${e.isPreset ? '🏛️ ' : ''}${e.title}</h4>
                <div class="event-date">${new Date(e.event_date + 'T12:00:00').toLocaleDateString('pt-BR')}</div>
            </div>
        </div>`).join('');
}

window.showCalendarScreen = showCalendarScreen;
window.initCalendar = showCalendarScreen;
window.fetchCalendarEvents = async () => {
    let activeClass = window.userClass;
    if (!activeClass) {
        try {
            const saved = localStorage.getItem(CACHE_KEY);
            if (saved) activeClass = JSON.parse(saved);
        } catch(e){}
    }
    
    // Se não temos presets ainda, tentamos buscar agora
    if (activeClass && (!window.presetEvents || window.presetEvents.length === 0)) {
        await fetchPresets(activeClass.university);
    }

    const today = new Date().toISOString().split('T')[0];
    let allEvents = [...(window.presetEvents || [])];

    if (activeClass && window.supabase) {
        try {
            const { data: evts, error } = await window.supabase
                .from('calendar_events').select('*').eq('class_id', activeClass.id)
                .gte('event_date', today).order('event_date', { ascending: true }).limit(10);
            
            if (!error && evts) {
                // Merge sem duplicatas (baseado em ID ou título+data)
                evts.forEach(e => {
                    if (!allEvents.find(existing => existing.id === e.id)) {
                        allEvents.push(e);
                    }
                });
            }
        } catch(err) {
            console.error("[MedPenguin] Error fetching class events:", err);
        }
    }

    // Filtrar futuros e ordenar
    return allEvents
        .filter(e => {
            if (!e.event_date) return false;
            return e.event_date >= today;
        })
        .sort((a, b) => a.event_date.localeCompare(b.event_date))
        .slice(0, 3);
};
