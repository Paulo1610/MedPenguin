// app/js/mural.js

let muralPosts = [];
let isSubmitting = false;

// Cores e Ícones baseados no Mood (Humor)
const MOODS = {
    cansado: { icon: "🥱", color: "#64748b", label: "Cansado" },
    ansioso: { icon: "😰", color: "#f59e0b", label: "Ansioso" },
    triste: { icon: "😢", color: "#3b82f6", label: "Triste" },
    confuso: { icon: "😵‍💫", color: "#8b5cf6", label: "Confuso" },
    motivado: { icon: "🚀", color: "#10b981", label: "Motivado" },
    frustracao: { icon: "😫", color: "#ef4444", label: "Frustrado" }
};

// Codinomes para humanizar o anonimato
const ANONYMOUS_LABELS = [
    "Futuro Residente", "Colega de Internato", "Pinguim Solidário", 
    "Voz Amiga", "Estudante de Medicina", "Futuro Especialista", 
    "Alma de Plantão", "Respirando Fundo", "Colega de Anatomia"
];

// Configuração das Reações Seguras
const REACTIONS = {
    support: { icon: "❤️", label: "Estou com você", toast: "Você ofereceu seu apoio! ❤️", db_col: "support_count", color: "#ec4899" },
    empathy: { icon: "🤝", label: "Já passei por isso", toast: "Sua empatia faz a diferença! 🤝", db_col: "empathy_count", color: "#f59e0b" },
    hope: { icon: "🌱", label: "Vai melhorar", toast: "Você semeou esperança! 🌱", db_col: "hope_count", color: "#10b981" },
    help: { icon: "🧠", label: "Procure ajuda", toast: "Sua orientação é preciosa! 🧠", db_col: "help_count", color: "#8b5cf6" }
};

/**
 * Open the "New Post" modal
 */
function openNewPostModal() {
    const modal = document.getElementById('mural-modal');
    if (modal) modal.classList.remove('hidden');
}

/**
 * Close the "New Post" modal
 */
function closeNewPostModal() {
    const modal = document.getElementById('mural-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.getElementById('mural-content').value = '';
    }
}

/**
 * Submit a new post to the Supabase database
 */
async function submitMuralPost() {
    if (isSubmitting) return;
    
    const content = document.getElementById('mural-content').value.trim();
    const mood = document.getElementById('mural-mood').value;

    if (!content) {
        showMuralAlert("Escreva algo antes de postar!");
        return;
    }

    try {
        isSubmitting = true;
        const btn = document.getElementById('mural-submit-btn');
        btn.textContent = "Enviando...";
        btn.disabled = true;

        const { data: { session } } = await window.supabase.auth.getSession();
        if (!session) {
            showMuralAlert("Você precisa estar logado para postar.");
            return;
        }

        // --- TENTATIVA 1: API (Netlify Functions) ---
        try {
            const response = await fetch('/.netlify/functions/mural', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id: session.user.id,
                    content: content,
                    mood: mood
                })
            });

            if (response.ok) {
                closeNewPostModal();
                showMuralAlert("Seu desabafo foi publicado anonimamente. Respire fundo! 💙");
                loadMuralPosts();
                return;
            }
            
            // Se o erro for 404, significa que estamos localmente sem Netlify Dev
            if (response.status !== 404) {
                const errData = await response.json();
                throw new Error(errData.error || 'Erro na API');
            }
        } catch (apiErr) {
            console.warn("API não disponível, tentando conexão direta...");
        }

        // --- TENTATIVA 2: Backup Direto (Local/Fallback) ---
        const { error } = await window.supabase.from('mural_posts').insert([
            { user_id: session.user.id, content: content, mood: mood }
        ]);

        if (error) throw error;

        closeNewPostModal();
        showMuralAlert("Seu desabafo foi publicado anonimamente. Respire fundo! 💙");
        loadMuralPosts();
    } catch (err) {
        console.error("Erro ao postar:", err);
        showMuralAlert("Erro ao publicar. Tente novamente.");
    } finally {
        isSubmitting = false;
        const btn = document.getElementById('mural-submit-btn');
        btn.textContent = "Publicar (Anônimo)";
        btn.disabled = false;
    }
}

/**
 * Load all posts from the database (newest first)
 */
async function loadMuralPosts() {
    const feed = document.getElementById('mural-feed');
    if (!feed) return;

    feed.innerHTML = `
        <div class="loading-spinner" style="text-align:center; padding: 40px;">
            <p>Carregando desabafos...</p>
        </div>
    `;

    try {
        // --- TENTATIVA 1: API (Netlify Functions) ---
        try {
            const response = await fetch('/.netlify/functions/mural');
            if (response.ok) {
                const data = await response.json();
                muralPosts = data || [];
                renderMuralFeed();
                return;
            }
            // Se for 404, cai no catch para o fallback
            if (response.status !== 404) throw new Error('Erro na API');
        } catch (apiErr) {
            console.warn("API offline/local, usando conexão direta.");
        }

        // --- TENTATIVA 2: Backup Direto (Local/Fallback) ---
        const { data, error } = await window.supabase
            .from('mural_posts')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(50);

        if (error) throw error;

        muralPosts = data || [];
        renderMuralFeed();
    } catch (err) {
        console.error("Erro ao carregar mural:", err);
        feed.innerHTML = `
            <div style="text-align:center; padding: 40px; background: var(--surface); border-radius: 20px; border: 1px dashed var(--border);">
                <div style="font-size: 3rem; margin-bottom: 16px;">🌱</div>
                <h3 style="color: var(--text-main); margin-bottom: 8px;">Acesso Restrito</h3>
                <p style="color: var(--text-secondary); margin-bottom: 16px;">Para manter este espaço seguro e acolhedor, apenas alunos logados podem visualizar e interagir com o mural.</p>
                <p style="color: var(--error); font-size: 0.9rem;">(Ocorreu um erro ao carregar as mensagens. Tente recarregar a página.)</p>
            </div>
        `;
    }
}

/**
 * Render the loaded posts into the feed
 */
function renderMuralFeed() {
    const feed = document.getElementById('mural-feed');
    if (!feed) return;

    if (muralPosts.length === 0) {
        feed.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: var(--text-secondary); background: var(--surface); border-radius: 16px; border: 1px dashed var(--border);">
                <div style="font-size: 3rem; margin-bottom: 16px;">🌱</div>
                <h3 style="color: var(--text-main); margin-bottom: 8px;">O mural está pronto para te ouvir</h3>
                <p>Compartilhe o que está sentindo. Este é um espaço de apoio mútuo.</p>
            </div>
        `;
        return;
    }

    feed.innerHTML = '';

    muralPosts.forEach(post => {
        const moodData = MOODS[post.mood] || MOODS['cansado'];
        const date = new Date(post.created_at);
        const formattedDate = `${date.toLocaleDateString('pt-BR')} às ${date.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'})}`;
        
        // Identidade aleatória persistente baseada no ID do post para consistência
        const labelIndex = Math.abs(post.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % ANONYMOUS_LABELS.length;
        const anonymousLabel = ANONYMOUS_LABELS[labelIndex];

        const card = document.createElement('div');
        card.className = 'mural-card';
        card.style.cssText = `
            background: var(--surface);
            border: 1px solid var(--border);
            border-top: 4px solid ${moodData.color};
            border-radius: 20px;
            padding: 24px;
            margin-bottom: 24px;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            position: relative;
        `;
        
        const escapedContent = post.content.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 48px; height: 48px; border-radius: 12px; background: ${moodData.color}15; display: flex; align-items: center; justify-content: center; font-size: 1.8rem;">
                        ${moodData.icon}
                    </div>
                    <div>
                        <div style="font-weight: 700; color: var(--text-main); font-size: 1.1rem;">${anonymousLabel}</div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 2px;">Sentindo-se <b>${moodData.label}</b> • ${formattedDate}</div>
                    </div>
                </div>
            </div>
            
            <p style="color: var(--text-main); line-height: 1.7; font-size: 1.15rem; margin-bottom: 24px; word-wrap: break-word; font-weight: 400; padding: 0 4px;">
                "${escapedContent}"
            </p>
            
            <div style="display: flex; flex-wrap: wrap; gap: 10px; padding-top: 16px; border-top: 1px solid var(--border); position: relative; z-index: 10;">
                ${Object.keys(REACTIONS).map(key => {
                    const reaction = REACTIONS[key];
                    const count = post[reaction.db_col] || 0;
                    const hasReacted = localStorage.getItem(`mural_react_${key}_${post.id}`);
                    
                    return `
                        <button 
                            onclick="sendMuralReaction('${post.id}', '${key}')" 
                            id="btn-${key}-${post.id}"
                            style="background: ${hasReacted ? reaction.color + '20' : 'rgba(255,255,255,0.05)'}; 
                                   color: ${hasReacted ? reaction.color : 'rgba(255,255,255,0.6)'}; 
                                   border: 1px solid ${hasReacted ? reaction.color + '40' : 'rgba(255,255,255,0.1)'}; 
                                   padding: 8px 16px; border-radius: 12px; font-size: 0.9rem; font-weight: 600; 
                                   cursor: ${hasReacted ? 'default' : 'pointer'}; 
                                   display: flex; align-items: center; gap: 8px; transition: all 0.2s;
                                   pointer-events: auto; position: relative; z-index: 11;"
                            ${hasReacted ? 'disabled' : ''}>
                            <span style="font-size: 1.1rem;">${reaction.icon}</span> 
                            <span>${reaction.label}</span>
                            ${count > 0 ? `<span style="background: ${reaction.color}30; padding: 2px 8px; border-radius: 8px; font-size: 0.8rem; margin-left: 4px;">${count}</span>` : ''}
                        </button>
                    `;
                }).join('')}
            </div>
        `;
        
        feed.appendChild(card);
    });
}

/**
 * Send a safe reaction to a post
 */
async function sendMuralReaction(postId, reactionKey) {
    console.log(`Reagindo ao post ${postId} com ${reactionKey}`);
    const storageKey = `mural_react_${reactionKey}_${postId}`;
    if (localStorage.getItem(storageKey)) return;

    const reaction = REACTIONS[reactionKey];
    const postIndex = muralPosts.findIndex(p => p.id === postId || String(p.id) === String(postId));
    if (postIndex === -1) {
        console.error("Post não encontrado para reação:", postId);
        return;
    }

    // Bloquear outras reações desse post para evitar spam (opcional, mas seguro)
    localStorage.setItem(storageKey, 'true');

    try {
        // 1. Update Database via API
        const currentCount = muralPosts[postIndex][reaction.db_col] || 0;
        const newCount = currentCount + 1;

        await fetch('/.netlify/functions/mural', {
            method: 'PATCH',
            body: JSON.stringify({
                postId: postId,
                reactionColumn: reaction.db_col,
                count: newCount
            })
        });

        // 2. Reward User (XP/Coins)
        rewardSupportAction();

        // 3. UI Update
        showMuralAlert(reaction.toast);
        loadMuralPosts(); // Recarrega para atualizar contadores

    } catch (err) {
        console.error("Erro ao reagir:", err);
    }
}

/**
 * Gamification: Reward the user for supporting a colleague
 */
async function rewardSupportAction() {
    const { data: { session } } = await window.supabase.auth.getSession();
    if (!session) return;

    try {
        // Increment 1 coin via API
        await fetch('/.netlify/functions/pet', {
            method: 'PATCH',
            body: JSON.stringify({ 
                userId: session.user.id,
                action: 'incrementCoins',
                amount: 1
            })
        });
        console.log("Recompensa concedida via API: +1 Peixinho por ajudar um colega!");
    } catch (err) {
        // Silently fail reward if no pet exists or API error
    }
}


/**
 * Custom alert
 */
function showMuralAlert(msg) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
        background: #1e1b4b; color: white;
        padding: 14px 28px; border-radius: 99px; box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        z-index: 10000; font-weight: 600; border: 2px solid #ec4899;
        animation: slideDown 0.3s ease reverse;
    `;
    toast.textContent = msg;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Global initialization hook
const muralObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.id === 'mural-screen') {
            if (!mutation.target.classList.contains('hidden')) {
                loadMuralPosts();
                document.body.classList.add('mural-theme');
            } else {
                document.body.classList.remove('mural-theme');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const muralScreen = document.getElementById('mural-screen');
    if (muralScreen) {
        muralObserver.observe(muralScreen, { attributes: true, attributeFilter: ['class'] });
    }
});

window.openNewPostModal = openNewPostModal;
window.closeNewPostModal = closeNewPostModal;
window.submitMuralPost = submitMuralPost;
window.sendMuralReaction = sendMuralReaction;
