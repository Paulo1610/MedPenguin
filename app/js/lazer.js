// app/js/lazer.js

/**
 * Updates the Lazer Hub with real-time data from Pet and Mural
 */
async function updateLazerHub() {
    const { data: { session } } = await window.supabase.auth.getSession();
    if (!session) return;

    // 1. Fetch Pet Data
    try {
        const response = await fetch(`/.netlify/functions/pet?userId=${session.user.id}`);
        const petData = await response.json();

        const petStatusEl = document.getElementById('lazer-pet-status');
        if (petData && !petData.error && petStatusEl) {
            let statusText = "";
            if (petData.energy < 20) statusText = "😴 Está dormindo...";
            else if (petData.happiness < 40) statusText = "😢 Quer atenção!";
            else if (petData.energy < 50) statusText = "🍕 Está com fome";
            else statusText = "💖 Está muito feliz!";
            
            petStatusEl.innerHTML = `
                <div style="font-size: 0.85rem; color: #cbd5e1; margin-top: 8px;">
                    <b>${petData.pet_name}</b>: ${statusText}<br>
                    <span style="color: #f59e0b;">💰 ${petData.coins} Peixinhos</span>
                </div>
            `;
        }
    } catch (e) { console.error("Erro ao carregar status do pet no hub via API"); }


    // 2. Fetch Mural Count (last 24h)
    try {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        const { count } = await window.supabase
            .from('mural_posts')
            .select('*', { count: 'exact', head: true })
            .gt('created_at', yesterday.toISOString());

        const muralStatusEl = document.getElementById('lazer-mural-status');
        if (muralStatusEl) {
            muralStatusEl.innerHTML = `
                <div style="font-size: 0.85rem; color: #cbd5e1; margin-top: 8px;">
                    ${count > 0 ? `🔥 <b>${count}</b> novos desabafos hoje` : '✨ Mural calmo hoje'}
                </div>
            `;
        }
    } catch (e) { console.error("Erro ao carregar contagem do mural"); }

    // 3. Update Study Progress Header
    try {
        // Simple streak/points logic (using pet coins as a proxy for now, 
        // or we could fetch from user_stats if it exists)
        const headerPoints = document.getElementById('lazer-points-display');
        if (headerPoints) {
            // Get total XP if available, else just a placeholder
            headerPoints.innerText = "Sua jornada está incrível!";
        }
    } catch (e) {}
}

// Global initialization hook
const lazerObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.id === 'lazer-screen' && !mutation.target.classList.contains('hidden')) {
            updateLazerHub();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const lazerScreen = document.getElementById('lazer-screen');
    if (lazerScreen) {
        lazerObserver.observe(lazerScreen, { attributes: true, attributeFilter: ['class'] });
    }
});
