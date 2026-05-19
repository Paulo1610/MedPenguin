/**
 * MedPenguim - Sistema de Afiliados (Gestão e Captura)
 */

(function () {
    const STORAGE_KEY = 'medpenguin_ref';
    const EXPIRATION_DAYS = 30;

    /**
     * Captura de Leads (Last Click wins)
     */
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');

    if (ref) {
        const now = new Date();
        const item = {
            value: ref,
            expiry: now.getTime() + (EXPIRATION_DAYS * 24 * 60 * 60 * 1000),
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(item));
        console.log(`[Afiliados] Referência salva: ${ref}`);
    }

    window.getAffiliateCode = function() {
        const itemStr = localStorage.getItem(STORAGE_KEY);
        if (!itemStr) return null;
        const item = JSON.parse(itemStr);
        if (new Date().getTime() > item.expiry) {
            localStorage.removeItem(STORAGE_KEY);
            return null;
        }
        return item.value;
    };

    /**
     * Admin Management Logic
     */
    const ADMIN_EMAILS = [
        'testesparatudo41@gmail.com'
    ];

    window.initAffiliateManager = async function() {
        console.log('[Afiliados] Verificando acesso admin...');
        
        // Wait up to 3 seconds for session if not immediately available
        let user = null;
        for (let i = 0; i < 6; i++) {
            const { data } = await supabase.auth.getUser();
            if (data?.user) {
                user = data.user;
                break;
            }
            await new Promise(r => setTimeout(r, 500));
        }

        // Block access if not logged in or not admin
        if (!user || !ADMIN_EMAILS.includes(user.email)) {
            console.log('[Afiliados] Acesso negado. Não é administrador.');
            return;
        }

        console.log('[Afiliados] Acesso admin liberado para:', user.email);
        
        // Show Nav Items
        const navItem = document.getElementById('nav-affiliates');
        if (navItem) navItem.classList.remove('hidden');
        const navVendas = document.getElementById('nav-vendas');
        if (navVendas) navVendas.classList.remove('hidden');
        const navPag = document.getElementById('nav-pag-afiliados');
        if (navPag) navPag.classList.remove('hidden');

        // Load Data
        loadAffiliates();
        loadAffiliateStats();

        // Form Submission
        const form = document.getElementById('form-register-affiliate');
        if (form && !form.dataset.initialized) {
            form.dataset.initialized = "true";
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                console.log('[Afiliados] Submetendo formulário...');
                
                const btn = form.querySelector('button[type="submit"]');
                const originalText = btn.textContent;
                btn.disabled = true;
                btn.textContent = 'Registrando...';

                const name = document.getElementById('aff-name').value;
                const email = document.getElementById('aff-email').value;
                const code = document.getElementById('aff-code').value.toUpperCase();
                const commission = parseFloat(document.getElementById('aff-commission').value) / 100;

                try {
                    const { error } = await supabase
                        .from('affiliates')
                        .insert([{ name, email, ref_code: code, commission_rate: commission }]);

                    if (error) throw error;

                    if (window.showToast) showToast('Afiliado registrado com sucesso!', 'success');
                    else alert('Afiliado registrado com sucesso!');
                    
                    form.reset();
                    loadAffiliates();
                } catch (err) {
                    console.error('[Afiliados] Erro ao registrar:', err);
                    const msg = err.message || 'Erro desconhecido';
                    if (window.showToast) showToast('Erro: ' + msg, 'error');
                    else alert('Erro ao registrar: ' + msg);
                } finally {
                    btn.disabled = false;
                    btn.textContent = originalText;
                }
            });
        }
    };

    async function loadAffiliates() {
        const listContainer = document.getElementById('affiliates-list');
        if (!listContainer) return;

        try {
            // Fetch affiliates
            const { data: affiliates, error: affError } = await supabase
                .from('affiliates')
                .select('*')
                .order('created_at', { ascending: false });

            if (affError) throw affError;

            // Fetch sales counts
            const { data: sales, error: salesError } = await supabase
                .from('affiliate_sales')
                .select('affiliate_id');

            if (salesError) throw salesError;

            // Map counts
            const salesCountMap = {};
            sales.forEach(s => {
                salesCountMap[s.affiliate_id] = (salesCountMap[s.affiliate_id] || 0) + 1;
            });

            if (affiliates.length === 0) {
                listContainer.innerHTML = '<tr><td colspan="6" style="padding: 24px; text-align: center; color: var(--text-secondary);">Nenhum afiliado encontrado.</td></tr>';
                return;
            }

            listContainer.innerHTML = affiliates.map(aff => {
                const refLink = `https://medpenguin.com.br/app/?ref=${aff.ref_code}`;
                return `
                <tr style="border-bottom: 1px solid var(--border);">
                    <td style="padding: 12px;">
                        <div style="font-weight: 600;">${aff.name}</div>
                        <div style="font-size: 0.75rem; color: var(--text-secondary);">${aff.email}</div>
                    </td>
                    <td style="padding: 12px;"><code style="background: var(--background); padding: 2px 6px; border-radius: 4px;">${aff.ref_code}</code></td>
                    <td style="padding: 12px; max-width: 220px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 0.78rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 160px;" title="${refLink}">${refLink}</span>
                            <button onclick="navigator.clipboard.writeText('${refLink}').then(() => { this.textContent='✅'; setTimeout(() => this.textContent='📋', 1500); })" style="background: var(--surface-elevated); border: 1px solid var(--border); color: var(--text-main); border-radius: 6px; padding: 3px 8px; cursor: pointer; font-size: 0.85rem; flex-shrink: 0;" title="Copiar link">📋</button>
                        </div>
                    </td>
                    <td style="padding: 12px;">${(aff.commission_rate * 100).toFixed(0)}%</td>
                    <td style="padding: 12px; font-weight: bold; color: var(--primary);">${salesCountMap[aff.id] || 0}</td>
                    <td style="padding: 12px;">
                        <button onclick="deleteAffiliate('${aff.id}')" style="background: none; border: none; color: var(--error); cursor: pointer; font-size: 1.1rem;" title="Remover">🗑️</button>
                    </td>
                </tr>
            `}).join('');

        } catch (err) {
            console.error('Erro ao carregar afiliados:', err);
            listContainer.innerHTML = '<tr><td colspan="6" style="padding: 24px; text-align: center; color: var(--error);">Erro ao carregar dados.</td></tr>';
        }
    }

    async function loadAffiliateStats() {
        // Here we would sum the affiliate_sales table
        // For MVP, we'll just show placeholders or basic sums if data exists
        try {
            const { data, error } = await supabase
                .from('affiliate_sales')
                .select('sale_amount, commission_amount, created_at');

            if (error) throw error;

            const now = new Date();
            const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            const oneMonthAgo = new Date(now.getFullYear(), now.getMonth(), 1);
            const oneYearAgo = new Date(now.getFullYear(), 0, 1);

            let weekly = 0, monthly = 0, yearly = 0, totalSales = 0;

            data.forEach(sale => {
                const saleDate = new Date(sale.created_at);
                totalSales += sale.sale_amount; // Sum the actual total sales amount
                if (saleDate >= oneWeekAgo) weekly += sale.commission_amount;
                if (saleDate >= oneMonthAgo) monthly += sale.commission_amount;
                if (saleDate >= oneYearAgo) yearly += sale.commission_amount;
            });

            document.getElementById('aff-total-weekly').textContent = formatCurrency(weekly);
            document.getElementById('aff-total-monthly').textContent = formatCurrency(monthly);
            document.getElementById('aff-total-yearly').textContent = formatCurrency(yearly);
            const elTotalAll = document.getElementById('aff-total-all');
            if (elTotalAll) elTotalAll.textContent = formatCurrency(totalSales);

        } catch (err) {
            console.error('Erro ao carregar estatísticas:', err);
        }
    }

    function formatCurrency(val) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
    }

    window.deleteAffiliate = async function(id) {
        if (!confirm('Tem certeza que deseja remover este afiliado?')) return;

        try {
            const { error } = await supabase.from('affiliates').delete().eq('id', id);
            if (error) throw error;
            showToast('Afiliado removido.', 'success');
            loadAffiliates();
        } catch (err) {
            showToast('Erro ao remover: ' + err.message, 'error');
        }
    };

    /**
     * Vendas Screen Logic
     */
    window.loadVendasData = async function () {
        const listEl = document.getElementById('vendas-list');
        if (!listEl) return;

        listEl.innerHTML = '<tr><td colspan="6" style="padding: 32px; text-align: center; color: var(--text-secondary);">Carregando...</td></tr>';

        try {
            // Fetch all affiliates for the dropdown + name lookup
            const { data: affiliates } = await supabase.from('affiliates').select('id, name, ref_code');
            const affMap = {};
            if (affiliates) {
                affiliates.forEach(a => affMap[a.id] = a);

                // Populate filter dropdown (only once)
                const sel = document.getElementById('vendas-filter-affiliate');
                if (sel && sel.options.length <= 1) {
                    affiliates.forEach(a => {
                        const opt = document.createElement('option');
                        opt.value = a.id;
                        opt.textContent = `${a.name} (${a.ref_code})`;
                        sel.appendChild(opt);
                    });
                }
            }

            // Build query with filters
            let query = supabase
                .from('affiliate_sales')
                .select('*')
                .order('created_at', { ascending: false });

            // Period filter
            const period = document.getElementById('vendas-filter-period')?.value || 'all';
            const now = new Date();
            if (period === 'today') {
                query = query.gte('created_at', new Date(now.setHours(0, 0, 0, 0)).toISOString());
            } else if (period === 'week') {
                query = query.gte('created_at', new Date(Date.now() - 7 * 86400000).toISOString());
            } else if (period === 'month') {
                query = query.gte('created_at', new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString());
            } else if (period === 'year') {
                query = query.gte('created_at', new Date(new Date().getFullYear(), 0, 1).toISOString());
            }

            // Affiliate filter
            const affFilter = document.getElementById('vendas-filter-affiliate')?.value || 'all';
            if (affFilter !== 'all') {
                query = query.eq('affiliate_id', affFilter);
            }

            const { data: sales, error } = await query;
            if (error) throw error;

            // KPI totals (always from all data, not filtered)
            const { data: allSales } = await supabase.from('affiliate_sales').select('sale_amount, commission_amount, created_at');
            const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
            let totalRev = 0, monthRev = 0, totalComm = 0;
            (allSales || []).forEach(s => {
                totalRev += s.sale_amount || 0;
                totalComm += s.commission_amount || 0;
                if (new Date(s.created_at) >= monthStart) monthRev += s.sale_amount || 0;
            });

            const fmt = v => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);
            const el = id => document.getElementById(id);
            if (el('vendas-total-revenue')) el('vendas-total-revenue').textContent = fmt(totalRev);
            if (el('vendas-month-revenue')) el('vendas-month-revenue').textContent = fmt(monthRev);
            if (el('vendas-total-commission')) el('vendas-total-commission').textContent = fmt(totalComm);
            if (el('vendas-total-count')) el('vendas-total-count').textContent = (allSales || []).length;

            // Render table
            if (!sales || sales.length === 0) {
                listEl.innerHTML = '<tr><td colspan="6" style="padding: 32px; text-align: center; color: var(--text-secondary);">Nenhuma venda encontrada para este filtro.</td></tr>';
                return;
            }

            listEl.innerHTML = sales.map(s => {
                const aff = affMap[s.affiliate_id];
                const affName = aff ? aff.name : (s.affiliate_id ? '—' : 'Orgânico');
                const affCode = aff ? `<span style="font-size:0.75rem; color: var(--text-secondary);">${aff.ref_code}</span>` : '';
                const date = new Date(s.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
                const statusColor = s.status === 'paid' ? '#10b981' : (s.status === 'pending' ? '#f59e0b' : '#ef4444');
                const statusLabel = s.status === 'paid' ? 'Pago' : (s.status === 'pending' ? 'Pendente' : (s.status || 'Pago'));
                return `
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 12px; font-size: 0.85rem; color: var(--text-secondary); white-space: nowrap;">${date}</td>
                        <td style="padding: 12px;">
                            <div style="font-weight: 600; font-size: 0.9rem;">${s.buyer_email || '—'}</div>
                        </td>
                        <td style="padding: 12px;">
                            <div style="font-weight: 600;">${affName}</div>
                            ${affCode}
                        </td>
                        <td style="padding: 12px; font-weight: 700; color: #10b981;">${fmt(s.sale_amount || 0)}</td>
                        <td style="padding: 12px; color: #f59e0b; font-weight: 600;">${fmt(s.commission_amount || 0)}</td>
                        <td style="padding: 12px;">
                            <span style="background: ${statusColor}22; color: ${statusColor}; padding: 4px 10px; border-radius: 20px; font-size: 0.78rem; font-weight: 700;">${statusLabel}</span>
                        </td>
                    </tr>`;
            }).join('');

        } catch (err) {
            console.error('[Vendas] Erro ao carregar:', err);
            listEl.innerHTML = `<tr><td colspan="6" style="padding: 32px; text-align: center; color: var(--error);">Erro ao carregar dados: ${err.message}</td></tr>`;
        }
    };

    /* ============================================================
       PAG. AFILIADOS — Quinzena Payment System
    ============================================================ */

    // Holds current quinzena data between calcular → fechar
    let _quinzenaData = null;

    /**
     * Set default date range to current quinzena on page load
     */
    function setDefaultQuinzenaDates() {
        const today = new Date();
        const day = today.getDate();
        const year = today.getFullYear();
        const month = today.getMonth();

        let start, end;
        if (day <= 15) {
            start = new Date(year, month, 1);
            end   = new Date(year, month, 15);
        } else {
            start = new Date(year, month, 16);
            end   = new Date(year, month + 1, 0); // last day of month
        }

        const fmt = d => d.toISOString().split('T')[0];
        const s = document.getElementById('pag-period-start');
        const e = document.getElementById('pag-period-end');
        if (s && !s.value) s.value = fmt(start);
        if (e && !e.value) e.value = fmt(end);
    }

    /**
     * Load and render payment history from affiliate_payouts
     */
    window.loadPagAfiliados = async function () {
        setDefaultQuinzenaDates();

        const tbody = document.getElementById('pag-historico-list');
        if (!tbody) return;
        tbody.innerHTML = '<tr><td colspan="7" style="padding:32px;text-align:center;color:var(--text-secondary);">Carregando...</td></tr>';

        try {
            const { data: payouts, error } = await supabase
                .from('affiliate_payouts')
                .select('*, affiliates(name, ref_code)')
                .order('created_at', { ascending: false });

            if (error) throw error;

            if (!payouts || payouts.length === 0) {
                tbody.innerHTML = '<tr><td colspan="7" style="padding:32px;text-align:center;color:var(--text-secondary);">Nenhum fechamento registrado ainda.</td></tr>';
                return;
            }

            const fmt = v => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);
            const fmtDate = s => new Date(s + 'T00:00:00').toLocaleDateString('pt-BR');

            tbody.innerHTML = payouts.map(p => {
                const affName = p.affiliates?.name || '—';
                const affCode = p.affiliates?.ref_code || '';
                const isPaid  = p.status === 'paid';
                const statusBadge = isPaid
                    ? `<span style="background:#10b98122;color:#10b981;padding:4px 10px;border-radius:20px;font-size:0.78rem;font-weight:700;">✅ Pago</span>`
                    : `<span style="background:#f59e0b22;color:#f59e0b;padding:4px 10px;border-radius:20px;font-size:0.78rem;font-weight:700;">⏳ Pendente</span>`;
                const actionBtn = isPaid
                    ? `<span style="font-size:0.8rem;color:var(--text-secondary);">Pago em ${p.paid_at ? new Date(p.paid_at).toLocaleDateString('pt-BR') : '—'}</span>`
                    : `<button onclick="marcarPago('${p.id}')" style="background:linear-gradient(135deg,#10b981,#059669);border:none;color:white;padding:7px 14px;border-radius:8px;font-weight:700;cursor:pointer;font-size:0.82rem;">💸 Marcar Pago</button>`;

                return `
                <tr style="border-bottom:1px solid var(--border);">
                    <td style="padding:12px;font-size:0.85rem;white-space:nowrap;color:var(--text-secondary);">${fmtDate(p.period_start)} → ${fmtDate(p.period_end)}</td>
                    <td style="padding:12px;">
                        <div style="font-weight:600;">${affName}</div>
                        <div style="font-size:0.75rem;color:var(--text-secondary);">${affCode}</div>
                    </td>
                    <td style="padding:12px;text-align:center;font-weight:700;color:var(--primary);">${p.sale_count}</td>
                    <td style="padding:12px;font-weight:700;color:#10b981;">${fmt(p.total_sales)}</td>
                    <td style="padding:12px;font-weight:700;color:#f59e0b;">${fmt(p.total_commission)}</td>
                    <td style="padding:12px;">${statusBadge}</td>
                    <td style="padding:12px;">${actionBtn}</td>
                </tr>`;
            }).join('');

        } catch (err) {
            console.error('[Pag. Afiliados] Erro:', err);
            tbody.innerHTML = `<tr><td colspan="7" style="padding:32px;text-align:center;color:var(--error);">Erro: ${err.message}</td></tr>`;
        }
    };

    /**
     * Calculate pending commissions per affiliate for the selected period
     */
    window.calcularQuinzena = async function () {
        const start = document.getElementById('pag-period-start')?.value;
        const end   = document.getElementById('pag-period-end')?.value;

        if (!start || !end) {
            if (window.showToast) showToast('Selecione as datas de início e fim.', 'error');
            return;
        }

        const summaryEl = document.getElementById('pag-quinzena-summary');
        const emptyEl   = document.getElementById('pag-quinzena-empty');
        const cardsEl   = document.getElementById('pag-quinzena-cards');

        summaryEl.style.display = 'none';
        emptyEl.style.display   = 'none';
        _quinzenaData = null;

        try {
            // Fetch pending sales in range
            const { data: sales, error } = await supabase
                .from('affiliate_sales')
                .select('*, affiliates(id, name, ref_code, email)')
                .eq('payout_status', 'pending')
                .gte('created_at', start + 'T00:00:00')
                .lte('created_at', end + 'T23:59:59');

            if (error) throw error;

            if (!sales || sales.length === 0) {
                emptyEl.style.display = 'block';
                return;
            }

            // Group by affiliate
            const byAff = {};
            sales.forEach(s => {
                const aff = s.affiliates || {};
                const id  = s.affiliate_id || 'organico';
                if (!byAff[id]) {
                    byAff[id] = { id, name: aff.name || 'Orgânico', code: aff.ref_code || '—', email: aff.email || '', sales: [], totalSales: 0, totalComm: 0 };
                }
                byAff[id].sales.push(s.id);
                byAff[id].totalSales += s.sale_amount || 0;
                byAff[id].totalComm  += s.commission_amount || 0;
            });

            _quinzenaData = { start, end, byAff };

            const fmt = v => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);

            cardsEl.innerHTML = Object.values(byAff).map(a => `
                <div style="background:var(--surface-elevated);border:1px solid var(--border);border-radius:12px;padding:20px;">
                    <div style="font-weight:700;font-size:1rem;color:var(--text-main);margin-bottom:4px;">${a.name}</div>
                    <div style="font-size:0.78rem;color:var(--text-secondary);margin-bottom:16px;">Código: ${a.code} · ${a.sales.length} venda(s)</div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                        <div style="text-align:center;padding:12px;background:rgba(16,185,129,0.08);border-radius:8px;">
                            <div style="font-size:0.72rem;color:var(--text-secondary);margin-bottom:4px;">Total Vendas</div>
                            <div style="font-weight:800;color:#10b981;font-size:1.1rem;">${fmt(a.totalSales)}</div>
                        </div>
                        <div style="text-align:center;padding:12px;background:rgba(245,158,11,0.08);border-radius:8px;">
                            <div style="font-size:0.72rem;color:var(--text-secondary);margin-bottom:4px;">Comissão</div>
                            <div style="font-weight:800;color:#f59e0b;font-size:1.1rem;">${fmt(a.totalComm)}</div>
                        </div>
                    </div>
                </div>
            `).join('');

            summaryEl.style.display = 'block';

        } catch (err) {
            console.error('[Quinzena] Erro ao calcular:', err);
            if (window.showToast) showToast('Erro ao calcular: ' + err.message, 'error');
        }
    };

    /**
     * Close the quinzena: create payout records + mark sales as paid
     */
    window.fecharQuinzena = async function () {
        if (!_quinzenaData) return;

        const btn = document.getElementById('btn-fechar-quinzena');
        if (btn) { btn.disabled = true; btn.textContent = 'Fechando...'; }

        const batch = `${_quinzenaData.start}_${_quinzenaData.end}`;

        try {
            const affiliates = Object.values(_quinzenaData.byAff);

            for (const aff of affiliates) {
                if (aff.id === 'organico') continue; // skip organic sales

                // Create payout record
                const { error: payErr } = await supabase.from('affiliate_payouts').insert([{
                    affiliate_id:     aff.id,
                    period_start:     _quinzenaData.start,
                    period_end:       _quinzenaData.end,
                    total_sales:      aff.totalSales,
                    total_commission: aff.totalComm,
                    sale_count:       aff.sales.length,
                    status:           'pending'
                }]);
                if (payErr) throw payErr;

                // Mark sales as paid
                const { error: updErr } = await supabase
                    .from('affiliate_sales')
                    .update({ payout_status: 'paid', payout_batch: batch })
                    .in('id', aff.sales);
                if (updErr) throw updErr;
            }

            if (window.showToast) showToast(`Quinzena fechada! ${affiliates.length} afiliado(s) processado(s).`, 'success');

            // Reset UI
            _quinzenaData = null;
            document.getElementById('pag-quinzena-summary').style.display = 'none';
            if (btn) { btn.disabled = false; btn.textContent = '✅ Confirmar Fechamento'; }

            // Reload history
            window.loadPagAfiliados();

        } catch (err) {
            console.error('[Fechar Quinzena] Erro:', err);
            if (window.showToast) showToast('Erro ao fechar: ' + err.message, 'error');
            if (btn) { btn.disabled = false; btn.textContent = '✅ Confirmar Fechamento'; }
        }
    };

    /**
     * Mark a specific payout as paid (after bank transfer)
     */
    window.marcarPago = async function (payoutId) {
        if (!confirm('Confirmar que o pagamento foi realizado?')) return;

        try {
            const { error } = await supabase
                .from('affiliate_payouts')
                .update({ status: 'paid', paid_at: new Date().toISOString() })
                .eq('id', payoutId);

            if (error) throw error;

            if (window.showToast) showToast('Pagamento registrado com sucesso!', 'success');
            window.loadPagAfiliados();

        } catch (err) {
            console.error('[Marcar Pago] Erro:', err);
            if (window.showToast) showToast('Erro: ' + err.message, 'error');
        }
    };

})();
