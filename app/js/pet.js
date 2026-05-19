// ==========================================
// MEDPENGUIN TAMAGOTCHI LOGIC (API Version)
// ==========================================

let currentPet = null;

/**
 * Loads the pet from API.
 */
async function loadPet() {
    const { data: { session } } = await window.supabase.auth.getSession();
    if (!session) {
        document.getElementById('pet-setup').style.display = 'none';
        document.getElementById('pet-main').style.display = 'none';
        
        let msg = document.getElementById('pet-login-msg');
        if (!msg) {
            msg = document.createElement('div');
            msg.id = 'pet-login-msg';
            msg.style.cssText = 'text-align: center; padding: 60px 20px; color: var(--text-secondary); max-width: 400px; margin: 0 auto; background: var(--surface); border-radius: 20px; border: 1px dashed var(--border);';
            msg.innerHTML = '<div style="font-size: 3rem; margin-bottom: 16px;">🐧</div><h3 style="color: var(--text-main); margin-bottom: 8px;">Acesso Exclusivo</h3><p>Faça login ou crie uma conta para adotar seu Pinguim Virtual e acumular peixinhos!</p>';
            document.getElementById('pet-screen').appendChild(msg);
        }
        return;
    }

    try {
        const response = await fetch(`/.netlify/functions/pet?userId=${session.user.id}`);
        const data = await response.json();

        if (response.status === 200 && !data) {
            // No pet found - show adoption screen
            document.getElementById('pet-setup').style.display = 'block';
            document.getElementById('pet-main').style.display = 'none';
        } else if (data && !data.error) {
            // Pet found!
            currentPet = data;
            document.getElementById('pet-setup').style.display = 'none';
            document.getElementById('pet-main').style.display = 'block';
            updatePetUI();
        } else {
            console.error("Erro ao carregar pet via API:", data.error);
        }
    } catch (err) {
        console.error("Erro fatal ao carregar pet:", err);
    }
}

/**
 * Creates a new pet via API
 */
async function adoptPet() {
    const nameInput = document.getElementById('new-pet-name').value.trim();
    if (!nameInput) {
        showPetAlert("Por favor, dê um nome ao seu pinguim!");
        return;
    }

    const { data: { session } } = await window.supabase.auth.getSession();
    if (!session) return;

    try {
        const response = await fetch('/.netlify/functions/pet', {
            method: 'POST',
            body: JSON.stringify({ userId: session.user.id, name: nameInput })
        });
        const data = await response.json();

        if (data.error) throw new Error(data.error);
        
        currentPet = data;
        document.getElementById('pet-setup').style.display = 'none';
        document.getElementById('pet-main').style.display = 'block';
        updatePetUI();
        
        // Show celebration
        const mood = document.getElementById('pet-svg-mood');
        mood.textContent = "💖";
        mood.style.opacity = "1";
        mood.style.transform = "translateY(-20px)";
        
        setTimeout(() => {
            mood.style.opacity = "0";
            mood.style.transform = "translateY(0)";
            updatePetUI();
        }, 2000);

    } catch (err) {
        console.error("Erro ao adotar pet:", err);
        showPetAlert("Houve um erro ao adotar o pet. Tente novamente.");
    }
}

/**
 * Updates the visual bars and stats
 */
function updatePetUI() {
    if (!currentPet) return;

    document.getElementById('pet-name-display').innerText = currentPet.pet_name;
    document.getElementById('pet-coins').innerText = `${currentPet.coins} 🐟`;

    const hapBar = document.getElementById('pet-happiness-bar');
    if (hapBar) {
        hapBar.style.width = `${currentPet.happiness}%`;
        hapBar.style.backgroundColor = currentPet.happiness > 50 ? '#10b981' : (currentPet.happiness > 20 ? '#f59e0b' : '#ef4444');
    }

    const engBar = document.getElementById('pet-energy-bar');
    if (engBar) {
        engBar.style.width = `${currentPet.energy}%`;
        engBar.style.backgroundColor = currentPet.energy > 50 ? '#3b82f6' : (currentPet.energy > 20 ? '#f59e0b' : '#ef4444');
    }

    // Update SVG elements
    const eyes = document.getElementById('pet-svg-eyes');
    const mood = document.getElementById('pet-svg-mood');
    const rightFlipper = document.getElementById('pet-svg-right-flipper');
    
    if (eyes && mood && rightFlipper) {
        // Reset defaults
        eyes.style.transform = "scaleY(1)";
        rightFlipper.style.animation = "none";
        rightFlipper.style.transform = "rotate(0deg)";
        mood.style.opacity = "0";

        if (currentPet.energy < 20) {
            // Dormindo
            eyes.style.transform = "scaleY(0.1)"; 
            mood.textContent = "💤";
            mood.style.opacity = "1";
        } else if (currentPet.happiness < 30) {
            // Triste
            eyes.style.transform = "scaleY(0.6) translateY(2px)";
            mood.textContent = "😢";
            mood.style.opacity = "1";
        } else if (currentPet.happiness > 80 && currentPet.energy > 80) {
            // Muito feliz / Wave
            rightFlipper.style.animation = "wave 0.8s infinite alternate ease-in-out";
        }
    }
}

/**
 * Feeds the pet (Cost: 10 coins, +20 energy)
 */
async function feedPet() {
    if (!currentPet) return;
    if (currentPet.coins < 10) {
        showPetAlert("Peixinhos insuficientes! Vá estudar (faça quizzes) para ganhar mais!");
        return;
    }

    const { data: { session } } = await window.supabase.auth.getSession();
    if (!session) return;

    const newEnergy = Math.min(100, currentPet.energy + 20);
    const newCoins = currentPet.coins - 10;

    // Update locally for immediate feedback
    currentPet.energy = newEnergy;
    currentPet.coins = newCoins;
    updatePetUI();

    // Show fish animation
    const item = document.getElementById('pet-svg-item');
    const eyes = document.getElementById('pet-svg-eyes');
    if (item && eyes) {
        item.textContent = "🐟";
        item.style.opacity = "1";
        item.style.transform = "translateY(-10px) rotate(-15deg)";
        eyes.style.transform = "scaleY(1.2)";

        setTimeout(() => {
            item.style.opacity = "0";
            item.style.transform = "translateY(0) rotate(0deg)";
            updatePetUI();
        }, 1500);
    }

    // Save to API
    try {
        await fetch('/.netlify/functions/pet', {
            method: 'PATCH',
            body: JSON.stringify({ 
                userId: session.user.id,
                updates: { 
                    energy: newEnergy, 
                    coins: newCoins,
                    last_fed_at: new Date().toISOString()
                }
            })
        });
    } catch (e) {
        console.error("Erro ao salvar alimentação:", e);
    }
}

/**
 * Plays with the pet (Cost: 5 coins, +20 happiness, -5 energy)
 */
async function playPet() {
    if (!currentPet) return;
    if (currentPet.coins < 5) {
        showPetAlert("Peixinhos insuficientes! Vá estudar para ganhar mais!");
        return;
    }
    if (currentPet.energy < 10) {
        showPetAlert(`${currentPet.pet_name} está muito cansado para brincar. Alimente-o primeiro!`);
        return;
    }

    const { data: { session } } = await window.supabase.auth.getSession();
    if (!session) return;

    const newHappiness = Math.min(100, currentPet.happiness + 20);
    const newEnergy = Math.max(0, currentPet.energy - 5);
    const newCoins = currentPet.coins - 5;

    currentPet.happiness = newHappiness;
    currentPet.energy = newEnergy;
    currentPet.coins = newCoins;
    updatePetUI();

    // Show toy/play animation (Jump)
    const avatar = document.getElementById('pet-svg-avatar');
    const mood = document.getElementById('pet-svg-mood');
    
    if (avatar && mood) {
        avatar.style.transform = "translateY(-30px) scale(1.1)";
        mood.textContent = "🎾";
        mood.style.opacity = "1";

        setTimeout(() => {
            avatar.style.transform = "translateY(0) scale(1)";
            mood.style.opacity = "0";
            updatePetUI();
        }, 1000);
    }

    // Save to API
    try {
        await fetch('/.netlify/functions/pet', {
            method: 'PATCH',
            body: JSON.stringify({ 
                userId: session.user.id,
                updates: { 
                    happiness: newHappiness,
                    energy: newEnergy,
                    coins: newCoins
                }
            })
        });
    } catch (e) {
        console.error("Erro ao salvar brincadeira:", e);
    }
}

/**
 * Fun interaction without logic
 */
function pokePet() {
    if (!currentPet) return;
    
    const avatar = document.getElementById('pet-svg-avatar');
    const eyes = document.getElementById('pet-svg-eyes');
    const mood = document.getElementById('pet-svg-mood');
    
    if (avatar && eyes && mood) {
        avatar.style.transform = "scale(1.15) rotate(5deg)";
        
        if (currentPet.energy < 20) {
            eyes.style.transform = "scaleY(1)"; // Acorda assustado
            mood.textContent = "💢";
            mood.style.opacity = "1";
        } else {
            mood.textContent = "❤️";
            mood.style.opacity = "1";
        }

        setTimeout(() => {
            avatar.style.transform = "scale(1) rotate(0deg)";
            updatePetUI();
        }, 800);
    }
}

/**
 * Custom alert logic for the pet screen
 */
function showPetAlert(message) {
    const alertBox = document.getElementById('pet-alert');
    if (!alertBox) {
        alert(message);
        return;
    }
    alertBox.textContent = message;
    alertBox.style.display = 'block';
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 3000);
}

// Inicializar quando o Supabase estiver pronto ou a DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    // Escuta mudanças de aba para carregar o Pet quando o usuário entrar na tela
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.target.id === 'pet-screen' && !mutation.target.classList.contains('hidden')) {
                loadPet();
            }
        });
    });

    const petScreen = document.getElementById('pet-screen');
    if (petScreen) {
        observer.observe(petScreen, { attributes: true, attributeFilter: ['class'] });
    }
});

// Expose functions globally for HTML buttons
window.adoptPet = adoptPet;
window.feedPet = feedPet;
window.playPet = playPet;
window.pokePet = pokePet;
