const STATE = {
    currentBlockIndex: 0,
    currentQuestionIndex: 0,
    totalScore: 0,
    blockAnswers: [],
    blockSelections: [],
    questions: [],
    BLOCK_SIZE: 10,
    selectedSemesterId: null,
    selectedSubjectId: null,
    selectedUnitId: null,
    currentBlockErrors: [], // Stores { question, selectedIndex, correctIndex }
    language: localStorage.getItem('quiz_language') || 'pt', // Default to Portuguese
    mode: 'normal', // 'normal' | 'simulation'
    // XP System
    xp: parseInt(localStorage.getItem('medpenguim_xp') || '0'),
    level: 1, // Calculated from XP
    timer: 2400, // 40 minutes in seconds
    timerInterval: null,
    // Penguin popup
    consecutiveErrors: 0,
    penguinTimeout: null,
    // Notes System
    currentContextId: null,
    notesTimeout: null
};

// --- Dynamic Data Loading ---
const LOADED_SEMESTERS = new Set();

/**
 * Dynamically loads questions for a specific semester
 * @param {number|string} semesterId 
 * @returns {Promise}
 */
async function loadSemesterQuestions(semesterId) {
    if (!semesterId) return Promise.resolve();
    const semId = parseInt(semesterId);
    
    // If already loaded, skip
    if (LOADED_SEMESTERS.has(semId)) {
        console.log(`ℹ️ Questions for Semester ${semId} already loaded.`);
        return Promise.resolve();
    }

    console.log(`📥 Loading questions for Semester ${semId}...`);
    
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `js/questions_sem${semId}.js?v=${new Date().getTime()}`; // Cache bust
        script.charset = 'utf-8';
        
        script.onload = () => {
            LOADED_SEMESTERS.add(semId);
            console.log(`✅ Questions for Semester ${semId} loaded successfully.`);
            // Sync counts for the newly loaded questions
            if (typeof syncQuestionsCount === 'function') syncQuestionsCount();
            resolve();
        };
        
        script.onerror = (err) => {
            console.error(`❌ Failed to load questions for Semester ${semId}:`, err);
            // Fallback: If it's a known active semester, show error toast
            if (typeof showToast === 'function') {
                showToast(`Erro ao carregar questões do semestre ${semId}. Verifique sua conexão.`, 'error');
            }
            reject(err);
        };
        
        document.body.appendChild(script);
    });
}

// Data: Semesters & Subjects
const SEMESTERS = [
    { id: 1, title: { pt: "1º Semestre", es: "1º Semestre" }, icon: "🌱", active: true },
    { id: 2, title: { pt: "2º Semestre", es: "2º Semestre" }, icon: "🌿", active: true },
    { id: 3, title: { pt: "3º Semestre", es: "3º Semestre" }, icon: "🔥", active: true },
    { id: 4, title: { pt: "4º Semestre", es: "4º Semestre" }, icon: "⚡", active: false },
    { id: 5, title: { pt: "5º Semestre", es: "5º Semestre" }, icon: "🏥", active: false },
    { id: 6, title: { pt: "6º Semestre", es: "6º Semestre" }, icon: "🩺", active: false },
    { id: 7, title: { pt: "7º Semestre", es: "7º Semestre" }, icon: "🫀", active: false },
    { id: 8, title: { pt: "8º Semestre", es: "8º Semestre" }, icon: "👶", active: false }
];

const SUBJECTS = [
    // --- 1º Semestre ---
    {
        id: "anatomy1",
        semesterId: 1,
        title: { pt: "Anatomia I", es: "Anatomía I" },
        headerSubtitle: { pt: "Fundamentos Anatômicos", es: "Fundamentos Anatómicos" },
        icon: "💀",
        targetScreen: "units"
    },
    {
        id: "histology1",
        semesterId: 1,
        title: { pt: "Histologia I", es: "Histología I" },
        headerSubtitle: { pt: "Introdução à Histologia Básica", es: "Introducción a la Histología Básica" },
        icon: "🔬",
        targetScreen: "units"
    },
    {
        id: "embryology1",
        semesterId: 1,
        title: { pt: "Embriologia I", es: "Embriología I" },
        headerSubtitle: { pt: "Desenvolvimento Embrionário Inicial", es: "Desarrollo Embrionario Inicial" },
        icon: "👶",
        targetScreen: "units"
    },
    {
        id: "biology",
        semesterId: 1,
        title: { pt: "Biologia", es: "Biología" },
        headerSubtitle: { pt: "Biologia Celular e Molecular", es: "Biología Celular y Molecular" },
        icon: "🧬",
        targetScreen: "units"
    },
    // --- 3º Semestre ---
    {
        id: "biochemistry1",
        semesterId: 3,
        title: { pt: "Bioquímica I", es: "Bioquímica I" },
        headerSubtitle: { pt: "Metabolismo e Bioenergética", es: "Metabolismo y Bioenergética" },
        icon: "🧪",
        targetScreen: "units"
    },
    {
        id: "biophysics",
        semesterId: 3,
        title: { pt: "Biofísica", es: "Biofísica" },
        headerSubtitle: { pt: "Física Aplicada à Medicina", es: "Física Aplicada a la Medicina" },
        icon: "⚡",
        targetScreen: "units"
    },
    {
        id: "physio_med",
        semesterId: 3,
        title: { pt: "Fisiologia I", es: "Fisiología I" },
        headerSubtitle: { pt: "Guyton & Hall — Revisão de Fisiologia", es: "Guyton & Hall — Repaso de Fisiología" },
        icon: "🫀",
        targetScreen: "units"
    },
    {
        id: "immunology",
        semesterId: 3,
        title: { pt: "Imunologia", es: "Inmunología" },
        headerSubtitle: { pt: "Sistema Imune e Defesa", es: "Sistema Inmune y Defensa" },
        icon: "🛡️",
        targetScreen: "units"
    },
    {
        id: "genetics",
        semesterId: 3,
        title: { pt: "Genética Humana", es: "Genética Humana" },
        headerSubtitle: { pt: "Genética Médica e Hereditariedade", es: "Genética Médica y Herencia" },
        icon: "🧬",
        targetScreen: "units"
    },
    {
        id: "microbiology",
        semesterId: 3,
        title: { pt: "Microbiologia I", es: "Microbiología I" },
        headerSubtitle: { pt: "Bacteriologia e Virologia", es: "Bacteriología y Virología" },
        icon: "🦠",
        targetScreen: "units"
    },
    // --- 2º Semestre ---
    {
        id: "anatomy",
        semesterId: 2,
        title: { pt: "Anatomia II", es: "Anatomía II" },
        headerSubtitle: { pt: "Questões clássicas de Anatomia — 2º Semestre", es: "Preguntas clásicas de Anatomía — 2º Semestre" },
        icon: "💀",
        targetScreen: "units"
    },
    {
        id: "histology2",
        semesterId: 2,
        title: { pt: "Histologia II", es: "Histología II" },
        headerSubtitle: { pt: "Histologia de Sistemas", es: "Histología de Sistemas" },
        icon: "🔬",
        targetScreen: "units"
    },
    {
        id: "embryology",
        semesterId: 2,
        title: { pt: "Embriologia II", es: "Embriología II" },
        headerSubtitle: { pt: "Organogênese e Sistemas", es: "Organogénesis y Sistemas" },
        icon: "👶",
        targetScreen: "units"
    },
    {
        id: "biostatistics",
        semesterId: 2,
        title: { pt: "Bioestatística", es: "Bioestadística" },
        headerSubtitle: { pt: "Análise de Dados em Saúde", es: "Análisis de Datos en Salud" },
        icon: "📊",
        targetScreen: "units"
    },
    {
        id: "methodology",
        semesterId: 2,
        title: { pt: "Metodologia Científica", es: "Metodología Científica" },
        headerSubtitle: { pt: "Pesquisa e Escrita Científica", es: "Investigación y Escritura Científica" },
        icon: "📝",
        targetScreen: "units"
    },
    // --- 4º Semestre ---
    {
        id: "biochemistry2",
        semesterId: 4,
        title: { pt: "Bioquímica II — Fundamentos", es: "Bioquímica II — Fundamentos" },
        headerSubtitle: { pt: "Bioquímica Clínica e Metabólica", es: "Bioquímica Clínica y Metabólica" },
        icon: "🧪",
        targetScreen: "units"
    },
    {
        id: "physiology2",
        semesterId: 4,
        title: { pt: "Fisiologia 2", es: "Fisiología 2" },
        headerSubtitle: { pt: "Fisiologia de Sistemas II", es: "Fisiología de Sistemas II" },
        icon: "🫀",
        targetScreen: "units"
    },
    {
        id: "microbiology2",
        semesterId: 4,
        title: { pt: "Microbiologia 2", es: "Microbiología 2" },
        headerSubtitle: { pt: "Micologia e Parasitologia", es: "Micología y Parasitología" },
        icon: "🦠",
        targetScreen: "units"
    },
    {
        id: "epidemiology",
        semesterId: 4,
        title: { pt: "Epidemiologia e Saúde Pública", es: "Epidemiología y Salud Pública" },
        headerSubtitle: { pt: "Saúde Coletiva e Vigilância", es: "Salud Colectiva y Vigilancia" },
        icon: "🏥",
        targetScreen: "units"
    }
];

const TEXTS = {
    pt: {
        headerTitle: "MedPenguin",
        headerSubtitle: "Trajetória Acadêmica",
        headerTitlePhysio: "Fisiologia I",
        headerSubtitlePhysio: "Guyton & Hall — Revisão de Fisiologia",
        headerTitleAnatomy: "Anatomia II",
        headerSubtitleAnatomy: "Questões clássicas de Anatomia — 2º Semestre de Medicina",
        headerTitleAnatomyPractical: "Anatomia Prática",
        headerSubtitleAnatomyPractical: "Identificação anatômica e relações espaciais — 2º Semestre",
        headerTitleHistology2: "Histologia 2",
        headerSubtitleHistology2: "Parte Teórica e Prática de Histologia — 2º Semestre",
        headerTitleEmbryology: "Embriologia II",
        headerSubtitleEmbryology: "Fundamentos do Desenvolvimento Humano",
        unitsBtn: "⬅️ Voltar",
        totalProgress: "Progresso Total",
        block: "Bloco",
        question: "Questão",
        next: "Próxima Questão",
        prev: "Anterior",
        finishBlock: "Finalizar Bloco",
        finishUnit: "Finalizar Unidade",
        nextBlock: "Próximo Bloco",
        reviewErrors: "Revisar Erros",
        retry: "De Novo",
        backToGlobal: "Voltar para o Início",
        correct: "Resposta Correta!",
        incorrect: "Resposta Incorreta",
        noExplanation: "Sem explicação disponível.",
        noErrors: "Nenhum erro para revisar.",
        yourAnswer: "Sua resposta",
        correctAnswer: "Resposta correta",
        startBtn: "Começar Quiz",
        backBtn: "⬅️ Voltar",
        selectUnit: "Selecione uma Unidade para Estudar",
        selectSemester: "Selecione o Semestre",
        selectSubject: "Selecione a Matéria",
        heroSubtitleSemesters: "Explore conteúdos essenciais para cada etapa da sua formação médica.<br>Selecione seu semestre atual para continuar.",
        heroSubtitlePhysio: "Domine cada capítulo com questões estratégicas do Guyton & Hall.<br>Aprenda com feedback detalhado e eleve seu nível de conhecimento.",
        heroSubtitleAnatomy: "Questões elaboradas com base em conteúdos clássicos de Anatomia Humana.<br>📚 Base teórica: Moore, Gray's Anatomy for Students, Netter.",
        heroSubtitleAnatomyPractical: "Questões focadas em identificação visual e relações espaciais.<br>📚 Base teórica: Moore, Netter, Gray's Anatomy for Students.",
        heroSubtitleHistology2: "Teoria e prática: identificação de tecidos e análise de lâminas histológicas.<br>📚 Base teórica: Junqueira & Carneiro, Ross & Pawlina.",
        heroSubtitleEmbryology: "Domine os processos fundamentais da vida, desde a fecundação até a organogênese.<br>📚 Base teórica: Moore & Persaud, Langman.",
        heroSubtitleBiostatistics: "Análise de dados e interpretação de estudos científicos na saúde.<br>📚 Base teórica: Pagano & Gauvreau, Estatística Aplicada à Saúde.",
        heroSubtitleMethodology: "Pesquisa científica, metodologia e medicina baseada em evidências.<br>📚 Base teórica: Guyatt (MBE), CONSORT, PRISMA.",
        heroSubtitleHistology1: "Fundamentos de histologia: tecidos básicos, microscopia e preparação de lâminas.<br>📚 Base teórica: Junqueira & Carneiro, Ross & Pawlina.",
        insightExcellent: "Excelente! Você domina este tópico.",
        insightGood: "Muito bom! Continue assim.",
        insightAverage: "Bom, mas precisa revisar alguns conceitos.",
        insightPoor: "Recomendamos revisar a teoria antes de prosseguir.",
        tagHighYield: "Cai Muito",
        tagTrap: "Pegadinha",
        tagFundamental: "Fundamental",
        tipTitle: "Dica de Estudo",
        contextPlaceholder: "Fisiologia Cardiovascular",
        semesters: "Semestres",
        comingSoon: "Em breve...",
        // Navigation labels
        navHome: "Home",
        navBank: "Banco de Questões",
        navFlashcards: "Penguim Cards",
        // Flashcards specific texts
        flashcardsSubtitle: 'Revisão rápida por matéria com Penguim Cards interativos.',
        flashcardClickHint: 'Clique no flashcard para virar e ver a resposta.',
        // Button to go back to units list
        backToUnits: "Voltar para Unidades"
    },
    es: {
        headerTitle: "MedPenguin",
        headerSubtitle: "Trayectoria Académica",
        headerTitlePhysio: "Fisiología I",
        headerSubtitlePhysio: "Guyton & Hall — Repaso de Fisiología",
        headerTitleAnatomy: "Anatomía II",
        headerSubtitleAnatomy: "Preguntas clásicas de Anatomía — 2º Semestre de Medicina",
        headerTitleAnatomyPractical: "Anatomía Prática",
        headerSubtitleAnatomyPractical: "Identificación anatómica y relaciones espaciales — 2º Semestre",
        headerTitleHistology2: "Histología 2",
        headerSubtitleHistology2: "Parte Teórica y Práctica de Histología — 2º Semestre",
        headerTitleEmbryology: "Embriología II",
        headerSubtitleEmbryology: "Fundamentos del Desarrollo Humano",
        unitsBtn: "⬅️ Volver",
        totalProgress: "Progreso Total",
        block: "Bloque",
        question: "Pregunta",
        next: "Siguiente Pregunta",
        prev: "Anterior",
        finishBlock: "Finalizar Bloque",
        finishUnit: "Finalizar Unidad",
        nextBlock: "Siguiente Bloque",
        reviewErrors: "Revisar Errores",
        retry: "Intentar de Nuevo",
        backToGlobal: "Volver al Inicio",
        correct: "¡Respuesta Correcta!",
        incorrect: "Respuesta Incorrecta",
        noExplanation: "Sin explicación disponible.",
        noErrors: "No hay errores para revisar.",
        yourAnswer: "Tu respuesta",
        correctAnswer: "Respuesta correcta",
        startBtn: "Comenzar Quiz",
        backBtn: "⬅️ Volver",
        selectUnit: "Seleccione una Unidad para Estudar",
        selectSemester: "Seleccione el Semestre",
        selectSubject: "Seleccione la Materia",
        heroSubtitleSemesters: "Explora contenidos esenciales para cada etapa de tu formación médica.<br>Selecciona tu semestre actual para continuar.",
        heroSubtitlePhysio: "Domina cada capítulo con preguntas estratégicas de Guyton & Hall.<br>Aprende con retroalimentación detallada y eleva tu nivel de conocimiento.",
        heroSubtitleAnatomy: "Preguntas elaboradas con base en contenidos clásicos de Anatomía Humana.<br>📚 Base teórica: Moore, Gray's Anatomy for Students, Netter.",
        heroSubtitleAnatomyPractical: "Preguntas enfocadas en identificación visual y relaciones espaciales.<br>📚 Base teórica: Moore, Netter, Gray's Anatomy for Students.",
        heroSubtitleHistology2: "Teoría y práctica: identificación de tejidos y análisis de láminas histológicas.<br>📚 Base teórica: Junqueira & Carneiro, Ross & Pawlina.",
        heroSubtitleEmbryology: "Domina los procesos fundamentales de la vida, desde la fecundación hasta la organogénesis.<br>📚 Base teórica: Moore & Persaud, Langman.",
        heroSubtitleBiostatistics: "Análisis de datos e interpretación de estudios científicos en salud.<br>📚 Base teórica: Pagano & Gauvreau, Estadística Aplicada a la Salud.",
        heroSubtitleMethodology: "Investigación científica, metodología y medicina basada en evidencia.<br>📚 Base teórica: Guyatt (MBE), CONSORT, PRISMA.",
        heroSubtitleHistology1: "Fundamentos de histología: tejidos básicos, microscopía y preparación de láminas.<br>📚 Base teórica: Junqueira & Carneiro, Ross & Pawlina.",
        insightExcellent: "¡Excelente! Dominas este tema.",
        insightGood: "¡Muy bien! Sigue así.",
        insightAverage: "Bien, pero necesitas repasar algunos conceptos.",
        insightPoor: "Recomendamos revisar la teoría antes de continuar.",
        tagHighYield: "Alto Rendimiento",
        tagTrap: "Trampa",
        tagFundamental: "Fundamental",
        tipTitle: "Consejo de Estudio",
        contextPlaceholder: "Fisiología Cardiovascular",
        semesters: "Semestres",
        comingSoon: "Próximamente...",
        // Navigation labels
        navHome: "Inicio",
        navBank: "Banco de Preguntas",
        navFlashcards: "Tarjetas",
        // Flashcards specific texts
        flashcardsSubtitle: 'Repaso rápido por materia con flashcards interactivos.',
        flashcardClickHint: 'Haz clic en la tarjeta para voltearla y ver la respuesta.',
        // Button to go back to units list
        backToUnits: "Volver a Unidades"
    }
};

// DOM Elements
const screens = {
    dashboard: document.getElementById('dashboard-screen'),
    semesters: document.getElementById('semesters-screen'),
    subjects: document.getElementById('subjects-screen'),
    units: document.getElementById('units-screen'),
    start: document.getElementById('start-screen'),
    quiz: document.getElementById('quiz-screen'),
    blockResult: document.getElementById('block-result-screen'),
    final: document.getElementById('final-screen'),
    flashcards: document.getElementById('flashcards-screen'),
    'flashcard-viewer': document.getElementById('flashcard-viewer-screen'),
    resumo: document.getElementById('resumo-screen'),
    'resumo-reader': document.getElementById('resumo-reader-screen'),
    profile: document.getElementById('profile-screen'),
    settings: document.getElementById('settings-screen'),
    ranking: document.getElementById('ranking-screen'),
    calendario: document.getElementById('calendario-screen'),
    pet: document.getElementById('pet-screen'),
    lazer: document.getElementById('lazer-screen'),
    mural: document.getElementById('mural-screen'),
    anotacoes: document.getElementById('anotacoes-screen'),
    afiliados: document.getElementById('afiliados-screen'),
    vendas: document.getElementById('vendas-screen'),
    'pag-afiliados': document.getElementById('pag-afiliados-screen')
};

// Header Elements
const elHeaderTitle = document.getElementById('header-title');
const elHeaderSubtitle = document.getElementById('header-subtitle');
const elHeaderEmoji = document.getElementById('header-emoji');
const elNavUnitsBtn = document.getElementById('nav-units-btn');
const elHeaderNavDivider = document.getElementById('header-nav-divider');

// Quiz Elements
const elTotalProgressText = document.getElementById('total-progress-text');
const elTotalProgressFill = document.getElementById('total-progress-fill');
const elQuestionText = document.getElementById('question-text');
const elOptionsContainer = document.getElementById('options-container');
const elQuestionTags = document.getElementById('question-tags');
const elBlockLabel = document.getElementById('block-label');
const elQuestionNumber = document.getElementById('question-number');
const elBlockDots = document.getElementById('block-dots');
const elFeedbackArea = document.getElementById('feedback-area');
const elFeedbackTitle = document.getElementById('feedback-title');
const elFeedbackExplanation = document.getElementById('feedback-explanation');
const elFeedbackIcon = document.getElementById('feedback-icon');
const elNextBtn = document.getElementById('next-btn');
const elPrevBtn = document.getElementById('prev-btn');
const elGlobalProgress = document.getElementById('global-progress');

// Init
document.addEventListener('DOMContentLoaded', async () => {
    // FAILSAFE: Garantir que questionsData existe
    if (typeof questionsData === 'undefined') {
        window.questionsData = [];
    }

    try {
        initTheme();
        initLanguage();

        // Initialize sidebar navigation clicks
        initSidebarNav();

        // 1. Check Session
        const { data } = await supabase.auth.getSession();
        const session = data.session;

        // 2. Initialize User/Plan
        let user = null;
        let plan = 'free';

        if (session) {
            const result = await window.initUser();
            user = result.user;
            plan = result.plan;
        }

        // 3. Set Global Accessors
        window.currentUserPlan = plan;
        window.canAccess = window.canAccess; // already set by access.js
        window.isGuest = !session;

        // 4. Update Sidebar UI
        const userRoleEl = document.querySelector('.user-role');
        const userNameEl = document.querySelector('.user-name');
        const userAvatarEl = document.querySelector('.user-avatar');

        if (userRoleEl) {
            let roleText = plan === 'premium' ? 'Estudante Premium' : (session ? 'Estudante Free' : 'Visitante (👋 Demo)');
            if (window.isDevMode && window.isDevMode()) {
                roleText += ' (Dev)';
            }
            userRoleEl.textContent = roleText;
        }
        if (userNameEl && user) {
            userNameEl.textContent = user.user_metadata?.full_name || user.user_metadata?.name || 'Usuário';
            if (userAvatarEl) userAvatarEl.textContent = userNameEl.textContent.charAt(0).toUpperCase();
        } else if (userNameEl) {
            userNameEl.textContent = 'Visitante';
            if (userAvatarEl) userAvatarEl.textContent = 'V';
        }

        // 5. Auth Change Listener
        // 5. Auth Change Listener
        if (typeof window.onAuthChange === 'function') {
            window.onAuthChange(({ user: newUser, plan: newPlan }) => {
                window.currentUserPlan = newPlan;
                window.isGuest = !newUser;
                if (userRoleEl) {
                    userRoleEl.textContent = newPlan === 'premium' ? 'Estudante Premium' : 'Estudante Free';
                }
                updateUserHeader(newUser, newPlan);
            });
        } else {
            console.warn("onAuthChange not defined. Auth updates may not reflect immediately.");
        }

        // 6. Restore Session / Handle Routing
        await restoreSession();

        // 7. Initial Header Render
        updateUserHeader(user, plan);

        // 8. Initialize Quiz Buttons
        initQuizButtons();

        // 9. Initialize Dashboard Search
        if (typeof initDashboardSearch === 'function') {
            initDashboardSearch();
        }

        // 10. Affiliate Manager (Admin only - init nav item if admin)
        if (window.initAffiliateManager) {
            window.initAffiliateManager();
        }

    } catch (err) {
        console.error("Error during app initialization:", err);
        // Fallback for demo/guest mode if auth fails
        window.currentUserPlan = 'free';
        window.canAccess = canAccess;
        updateUserHeader(null, 'free');
        restoreSession();
    }
});

// Expose functions for HTML (onclick handlers)
window.openMobileMenu = openMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.showUnitsScreen = showUnitsScreen;
window.toggleLanguage = toggleLanguage;
window.toggleTheme = toggleTheme;
window.startQuiz = startQuiz;
window.nextBlock = nextBlock;
window.toggleReviewErrors = toggleReviewErrors;
window.retryBlock = retryBlock;
window.handleNextQuestion = handleNextQuestion;
window.handlePrevQuestion = handlePrevQuestion;
window.closePanel = closePanel;
window.showFlashcardsScreen = showFlashcardsScreen;
window.selectUnit = selectUnit;
window.renderSemesters = renderSemesters;
window.showSubjectsScreen = showSubjectsScreen;
window.navigateBack = navigateBack;
window.showScreen = showScreen;
window.handleCustomBack = handleCustomBack;
window.showPremiumModal = showPremiumModal;
window.closePremiumModal = closePremiumModal;
window.toggleUserDropdown = toggleUserDropdown;
window.logout = logout;
window.switchSettingsTab = switchSettingsTab;
// Flashcard controls
window.nextFlashcard = nextFlashcard;
window.prevFlashcard = prevFlashcard;
window.toggleFlashcard = toggleFlashcard;
// Quiz panels
window.openExplanationPanel = openExplanationPanel;
window.openStatsPanel = openStatsPanel;
window.toggleMobilePanel = toggleMobilePanel;
window.toggleTipReveal = toggleTipReveal;
// Audio player
window.toggleAudio = toggleAudio;
window.skipTime = skipTime;
window.toggleSpeed = toggleSpeed;
window.closeAudioPlayer = closeAudioPlayer;
// Resumo
window.switchResumoTab = switchResumoTab;

/* ============================================
   PROFILE & SETTINGS FUNCTIONS
   ============================================ */

function showProfileScreen() {
    showScreen('profile');

    // Populate Data
    const user = window.getUser ? window.getUser() : null;
    const plan = window.getUserPlan ? window.getUserPlan() : 'free';

    document.getElementById('profile-name').textContent = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Usuário';
    document.getElementById('profile-email').textContent = user?.email || 'email@exemplo.com';

    // Initials
    const name = user?.user_metadata?.full_name || user?.email || 'U';
    document.getElementById('profile-initials').textContent = name.charAt(0).toUpperCase();

    // Semester
    const currentSem = window.getUserSemester ? window.getUserSemester() : null;
    const currentUniv = window.getUserUniversity ? window.getUserUniversity() : null;
    
    const badgeEl = document.getElementById('profile-semester-badge');
    if (badgeEl) {
        badgeEl.textContent = currentSem ? `${currentSem}º Semestre` : 'Semestre não definido';
    }

    // University Badge
    const univBadge = document.getElementById('profile-university-badge');
    const univName = document.getElementById('profile-university-name');
    if (univBadge && univName) {
        if (currentUniv) {
            univName.textContent = currentUniv;
            univBadge.style.display = 'inline-flex';
        } else {
            univBadge.style.display = 'none';
        }
    }

    // Plan Badge
    const planBadge = document.getElementById('profile-plan-badge');
    const planActions = document.getElementById('profile-plan-actions');
    
    if (plan === 'premium') {
        if (planBadge) {
            planBadge.textContent = 'PREMIUM';
            planBadge.className = 'user-badge badge-premium';
        }
        if (planActions) planActions.style.display = 'none';
    } else {
        if (planBadge) {
            planBadge.textContent = 'FREE';
            planBadge.className = 'user-badge badge-free';
        }
        if (planActions) planActions.style.display = 'block';
    }

    // Stats from LocalStorage (Syncing from backend could be added here later)
    const stats = JSON.parse(localStorage.getItem('medpenguim_stats')) || {
        totalAnswered: 0,
        totalCorrect: 0,
        simulationsCompleted: 0
    };

    const totalEl = document.getElementById('profile-stats-total');
    const accuracyEl = document.getElementById('profile-stats-accuracy');
    const simulationsEl = document.getElementById('profile-stats-simulations');

    if (totalEl) totalEl.textContent = stats.totalAnswered || 0;
    if (accuracyEl) {
        const accuracy = stats.totalAnswered > 0 ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) : 0;
        accuracyEl.textContent = accuracy + '%';
    }
    if (simulationsEl) simulationsEl.textContent = stats.simulationsCompleted || 0;
}

/**
 * Initialize all quiz-related buttons centrally
 */
function initQuizButtons() {
    console.log('🔘 Inicializando botões do quiz...');

    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const reviewBtn = document.getElementById('review-btn');
    const retryBtn = document.getElementById('retry-btn');
    const continueBtn = document.getElementById('continue-btn');

    if (nextBtn) nextBtn.onclick = handleNextQuestion;
    if (prevBtn) prevBtn.onclick = handlePrevQuestion;
    if (reviewBtn) reviewBtn.onclick = toggleReviewErrors;
    if (retryBtn) retryBtn.onclick = retryBlock;
    if (continueBtn) continueBtn.onclick = nextBlock;
}

function showSettingsScreen() {
    showScreen('settings');

    // Default to first tab
    switchSettingsTab('account');

    // Populate Account Data
    const user = window.getUser ? window.getUser() : null;
    if (user) {
        const emailInput = document.getElementById('settings-email');
        if (emailInput) emailInput.value = user.email;
    }

    // Populate Academic Data
    const currentSem = window.getUserSemester ? window.getUserSemester() : '1';
    const currentUniv = window.getUserUniversity ? window.getUserUniversity() : '';
    const semSelect = document.getElementById('settings-semester');
    const univInput = document.getElementById('settings-university');
    
    if (semSelect) semSelect.value = currentSem;
    if (univInput) univInput.value = currentUniv;

    // Populate Plan Data
    const plan = window.getUserPlan ? window.getUserPlan() : 'free';
    const planContainer = document.getElementById('settings-plan-info');

    if (planContainer) {
        if (plan === 'premium') {
            planContainer.innerHTML = `
                <div style="padding: 16px; background: rgba(16, 185, 129, 0.1); border: 1px solid var(--success); border-radius: var(--radius-sm); margin-bottom: 16px;">
                    <h4 style="color: var(--success); margin-bottom: 4px;">Plano Premium Ativo</h4>
                    <p style="font-size: 0.9rem; color: var(--text-secondary);">Sua assinatura está ativa. Aproveite todos os recursos!</p>
                </div>
            `;
        } else {
            planContainer.innerHTML = `
                 <div style="padding: 16px; background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); border-radius: var(--radius-sm); margin-bottom: 16px;">
                    <h4 style="color: var(--text-main); margin-bottom: 4px;">Plano Gratuito</h4>
                    <p style="font-size: 0.9rem; color: var(--text-secondary);">Você tem acesso limitado aos conteúdos.</p>
                </div>
                <a href="../index.html#planos" class="btn btn-primary" style="width: 100%; text-align: center; display: block; text-decoration: none;">👑 Matricular-se no Premium</a>
            `;
        }

        // Add a debug/test toggle for premium if dev mode is detected
        if (localStorage.getItem('medpenguim_dev_mode') === 'true' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            const devBtn = document.createElement('button');
            devBtn.className = 'btn btn-outline';
            devBtn.style.marginTop = '16px';
            devBtn.style.width = '100%';
            devBtn.textContent = plan === 'premium' ? 'Simular Plano Gratuito (Dev)' : 'Simular Plano Premium (Dev)';
            devBtn.onclick = async () => {
                const newPlan = plan === 'premium' ? 'free' : 'premium';
                if (window.updateUserProfile) {
                    await window.updateUserProfile({ plan: newPlan });
                    if (window.initUser) await window.initUser();
                    showSettingsScreen();
                    showToast(`Plano alterado para ${newPlan}`, 'success');
                }
            };
            planContainer.appendChild(devBtn);
        }
    }
}

async function saveAcademicSettings() {
    const semSelect = document.getElementById('settings-semester');
    const univInput = document.getElementById('settings-university');
    if (!semSelect || !univInput) return;

    const newSem = parseInt(semSelect.value);
    const newUniv = univInput.value.trim();
    
    showToast('Salvando alterações...', 'info');
    
    if (window.updateUserProfile) {
        const success = await window.updateUserProfile({ 
            semester: newSem,
            university: newUniv
        });
        
        if (success) {
            showToast('Alterações salvas com sucesso!', 'success');
            // Refresh state
            if (window.initUser) await window.initUser();
            showProfileScreen();
        } else {
            showToast('Erro ao salvar no servidor.', 'error');
        }
    } else {
        // Fallback local
        localStorage.setItem('last_semester', newSem);
        localStorage.setItem('user_university', newUniv);
        showToast('Salvo localmente (offline)', 'success');
    }
}

window.saveAcademicSettings = saveAcademicSettings;

function switchSettingsTab(tabName) {
    // Hide all panels
    document.querySelectorAll('.settings-panel').forEach(el => el.classList.add('hidden'));

    // Show target panel
    const target = document.getElementById(`tab-${tabName}`);
    if (target) target.classList.remove('hidden');

    // Update buttons
    document.querySelectorAll('.settings-tab').forEach(btn => {
        btn.classList.remove('active');
        btn.style.borderBottom = 'none';
        btn.style.color = 'var(--text-secondary)';
    });

    // Highlight active button (need to find the button that called this, or search by sorting logic if complex. 
    // Simple approach: Iterate buttons and check onclick attribute or add id to buttons. 
    // For now, let's just make the clicked button active via the 'event' if possible, but the function signature doesn't have it.
    // Let's use a selector based on onclick.)
    const activeBtn = document.querySelector(`button[onclick="switchSettingsTab('${tabName}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.style.borderBottom = '2px solid var(--primary)';
        activeBtn.style.color = 'var(--text-main)';
    }
}

// Expose to window
window.showProfileScreen = showProfileScreen;
window.showSettingsScreen = showSettingsScreen;
window.showRankingScreen = showRankingScreen;

async function showRankingScreen() {
    showScreen('ranking');
    
    const loading = document.getElementById('ranking-loading');
    const podium = document.getElementById('ranking-podium');
    const list = document.getElementById('ranking-list');
    
    loading.style.display = 'block';
    podium.style.display = 'none';
    list.style.display = 'none';
    
    try {
        const topUsers = await window.getLeaderboard();
        
        loading.style.display = 'none';
        
        if (!topUsers || topUsers.length === 0) {
            loading.style.display = 'block';
            loading.innerHTML = '<p>Nenhum dado encontrado no momento.</p>';
            return;
        }
        
        // Render Podium (2nd, 1st, 3rd)
        podium.innerHTML = '';
        if (topUsers.length >= 1) {
            podium.style.display = 'flex';
            
            // Reorder for podium visual: 2, 1, 3
            const pData = [];
            if (topUsers[1]) pData.push({ ...topUsers[1], pos: 2 });
            if (topUsers[0]) pData.push({ ...topUsers[0], pos: 1 });
            if (topUsers[2]) pData.push({ ...topUsers[2], pos: 3 });
            
            pData.forEach(u => {
                const height = u.pos === 1 ? '160px' : (u.pos === 2 ? '130px' : '110px');
                const color = u.pos === 1 ? '#FBBF24' : (u.pos === 2 ? '#9CA3AF' : '#D97706');
                const name = u.full_name || u.display_name || 'Usuário';
                const ava = u.avatar_url ? `<img src="${u.avatar_url}" alt="Avatar" style="width: 50px; height: 50px; border-radius: 50%; border: 3px solid ${color}; object-fit: cover; margin-bottom: 8px;" />` 
                                       : `<div style="width: 50px; height: 50px; border-radius: 50%; background: ${color}; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.2rem; border: 3px solid var(--surface); margin-bottom: 8px;">${name.charAt(0).toUpperCase()}</div>`;
                                       
                podium.innerHTML += `
                    <div style="display: flex; flex-direction: column; align-items: center; width: 100px;">
                        ${ava}
                        <div style="font-weight: 600; font-size: 0.9rem; text-align: center; color: var(--text-main); line-height: 1.1; margin-bottom: 4px;">${name}</div>
                        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; height: ${height}; background: linear-gradient(180deg, ${color}33 0%, ${color}11 100%); border-top-left-radius: var(--radius-sm); border-top-right-radius: var(--radius-sm); border-top: 3px solid ${color};">
                            <span style="font-size: 1.8rem; font-weight: 900; color: ${color}; opacity: 0.8;">${u.pos}</span>
                            <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-main); margin-top: 8px;">${u.xp || 0} XP</span>
                        </div>
                    </div>
                `;
            });
        }
        
        // Render List (4th to 10th)
        list.innerHTML = '';
        if (topUsers.length > 3) {
            list.style.display = 'block';
            let htmlList = '';
            
            for (let i = 3; i < topUsers.length; i++) {
                const u = topUsers[i];
                const name = u.full_name || u.display_name || 'Usuário';
                htmlList += `
                    <div style="display: flex; align-items: center; padding: 16px; border-bottom: 1px solid var(--border);">
                        <div style="width: 30px; font-weight: bold; color: var(--text-secondary);">${i + 1}º</div>
                        <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--border); color: var(--text-main); display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 16px;">
                            ${u.avatar_url ? `<img src="${u.avatar_url}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" />` : name.charAt(0).toUpperCase()}
                        </div>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: var(--text-main);">${name}</div>
                            <div style="font-size: 0.8rem; color: var(--text-secondary);">Nível ${u.level || 1} ${u.streak_count > 0 ? `• 🔥 ${u.streak_count} dias` : ''}</div>
                        </div>
                        <div style="font-weight: 700; color: var(--primary);">${u.xp || 0} XP</div>
                    </div>
                `;
            }
            list.innerHTML = htmlList;
        }
    } catch (err) {
        console.error("Erro no ranking:", err);
        loading.innerHTML = '<p>Erro ao conectar ao banco de dados.</p>';
    }
}

function toggleSemesterEdit() {
    const form = document.getElementById('semester-edit-form');
    const btn = document.getElementById('btn-edit-semester');

    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
        btn.style.display = 'none';

        // Pre-select current value
        const currentSem = window.getUserSemester ? window.getUserSemester() : 1;
        if (currentSem) document.getElementById('semester-select').value = currentSem;

    } else {
        form.classList.add('hidden');
        btn.style.display = 'inline';
    }
}

async function saveSemester() {
    const select = document.getElementById('semester-select');
    const newVal = parseInt(select.value);

    if (!newVal) return;

    // Optimistic Update
    document.getElementById('profile-semester-display').textContent = `🗓️ ${newVal}º Semestre`;
    toggleSemesterEdit();

    // Show Loading or Toast could be nice here

    // Call user.js function
    const success = await window.updateUserSemester(newVal);

    if (success) {
        // Update also the "Context" if needed, e.g. last_semester
        localStorage.setItem('last_semester', newVal);
        // Also update the stat card
        document.getElementById('profile-semester').textContent = `${newVal}º`;
    } else {
        alert('Erro ao salvar semestre. Tente novamente.');
        // Revert UI if needed, but for now simple alert
    }
}

// Expose
window.toggleSemesterEdit = toggleSemesterEdit;
window.saveSemester = saveSemester;


/* ============================================
   MOBILE SIDEBAR LOGIC
   ============================================ */

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    sidebar.classList.toggle('active');

    if (overlay) {
        overlay.classList.toggle('active');
    } else {
        // Create overlay if it doesn't exist
        const newOverlay = document.createElement('div');
        newOverlay.id = 'sidebar-overlay';
        newOverlay.className = 'sidebar-overlay';
        newOverlay.onclick = toggleSidebar; // Close when clicking overly
        document.body.appendChild(newOverlay);

        // Small delay to allow transition
        setTimeout(() => newOverlay.classList.add('active'), 10);
    }
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (sidebar && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
    }
}

// Auto-close sidebar on route change (mobile)
const originalShowScreen = showScreen;
window.showScreen = function (screenId) {
    originalShowScreen(screenId);
    if (window.innerWidth <= 900) {
        closeSidebar();
    }
};

window.toggleSidebar = toggleSidebar; // Expose
window.closeSidebar = closeSidebar;




function showPremiumModal() {
    const modal = document.getElementById('premium-modal');
    if (modal) modal.classList.remove('hidden');
}

function closePremiumModal() {
    const modal = document.getElementById('premium-modal');
    if (modal) modal.classList.add('hidden');
}

/**
 * Updates the Header User Area based on Auth State
 */
function updateUserHeader(user, plan) {
    console.log('[UI] updateUserHeader called', { user: user ? 'Found' : 'Null', plan });
    const container = document.getElementById('header-user-area');

    if (!container) {
        console.error('[UI] header-user-area container NOT FOUND');
        return;
    }

    container.innerHTML = '';

    // 1. Guest (Not Logged In)
    if (!user) {
        container.innerHTML = `
            <a href="../login.html" class="btn-header-action btn-header-primary">
                Entrar / Criar Conta
            </a>
        `;
        return;
    }

    // 2. Logged In (Free or Premium)
    let fallbackName = 'Estudante';
    if (user.email === 'testesparatudo41@gmail.com') {
        fallbackName = 'Admin';
    } else if (user.email) {
        fallbackName = user.email.split('@')[0];
    }
    const firstName = (user.user_metadata?.full_name || user.user_metadata?.name || fallbackName).split(' ')[0];
    const initial = firstName.charAt(0).toUpperCase();

    // Update Sidebar if elements exist
    const sidebarName = document.getElementById('sidebar-user-name');
    const sidebarAvatar = document.getElementById('sidebar-user-avatar');
    const sidebarRole = document.getElementById('sidebar-user-role');
    if (sidebarName) sidebarName.textContent = firstName;
    if (sidebarAvatar) sidebarAvatar.textContent = initial;
    if (sidebarRole) sidebarRole.textContent = plan === 'premium' ? 'Estudante Premium' : 'Estudante Free';

    // Determine content based on plan
    let planBadge = '';
    let actionBtn = '';

    if (plan === 'premium') {
        planBadge = `<span class="user-badge badge-premium">PREMIUM</span>`;
        // No CTA for premium users, just info
    } else {
        planBadge = `<span class="user-badge badge-free">FREE</span>`;
        actionBtn = `
            <a href="../index.html#planos" class="btn-header-action btn-header-primary" style="font-size: 0.75rem; padding: 6px 12px;">
                ⭐ Assinar Premium
            </a>
        `;
    }

    container.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: flex-end; line-height: 1.2;">
            <span class="user-greeting">Olá, ${firstName}</span>
            ${planBadge}
        </div>
        ${actionBtn}
        
        <div style="position: relative;">
            <button class="user-avatar-btn" onclick="toggleUserDropdown()" id="user-avatar-btn">
                ${initial}
            </button>
            
            <div id="user-dropdown" class="user-dropdown hidden">
                <div style="padding: 12px; border-bottom: 1px solid var(--border);">
                    <div style="font-weight: 600; color: var(--text-main);">${user.user_metadata?.full_name || 'Usuário'}</div>
                    <div style="font-size: 0.8rem; color: var(--text-secondary); text-overflow: ellipsis; overflow: hidden;">${user.email}</div>
                    <div style="margin-top: 8px; font-size: 0.8rem; color: var(--primary-light); font-weight: 600;">
                        🏆 XP: ${STATE.xp} | Nível ${Math.floor(STATE.xp / 100) + 1}
                    </div>
               </div>
               <a href="#" class="dropdown-item" onclick="showProfileScreen()">👤 Meu Perfil</a>
               <a href="#" class="dropdown-item" onclick="showSettingsScreen()">⚙️ Configurações</a>
               <div class="dropdown-divider"></div>
               <div class="dropdown-item" onclick="logout()" style="color: var(--error);">
                    🚪 Sair
               </div>
            </div>
        </div>
    `;
}

function toggleUserDropdown() {
    const dropout = document.getElementById('user-dropdown');
    if (dropout) dropout.classList.toggle('hidden');

    // Close when clicking outside
    if (!dropout.classList.contains('hidden')) {
        document.addEventListener('click', function closeMenu(e) {
            if (!e.target.closest('#user-avatar-btn') && !e.target.closest('#user-dropdown')) {
                dropout.classList.add('hidden');
                document.removeEventListener('click', closeMenu);
            }
        });
    }
}

async function logout() {
    showConfirmModal('Sair da Conta', 'Tem certeza que deseja sair?', '🚪', async () => {
        // Sign out from Supabase but stay on page as guest
        await supabase.auth.signOut();

        // Clear local state
        window.currentUser = null;
        window.userPlan = 'free';
        window.isGuest = true;

        // Update UI
        updateUserHeader(null, 'free');

        // Reload to apply free restrictions (optional, but safer)
        window.location.reload();
    });
}

function showXPToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'xp-toast';
    toast.textContent = msg;
    document.body.appendChild(toast);

    // Animate
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    });

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

/* ============================================
   PENGUIN ANIMATION (Duolingo-style)
   ============================================ */

const PENGUIN_MESSAGES = [
    "Calma, todo mundo erra! Que tal dar uma olhada no resumo? 📖",
    "Ei, respira fundo! Você consegue! 💪",
    "Tá difícil? Tenta reler o conteúdo antes de seguir! 🧠",
    "Não desiste não! Cada erro é um passo pro acerto! 🚀",
    "Dica: dá uma revisada no resumo, vai te ajudar! 📚"
];

function showPenguinAnimation() {
    const overlay = document.getElementById('penguin-overlay');
    const character = document.getElementById('penguin-character');
    const messageEl = document.getElementById('penguin-message');
    if (!overlay || !character || !messageEl) return;

    // Pick random message
    const msg = PENGUIN_MESSAGES[Math.floor(Math.random() * PENGUIN_MESSAGES.length)];
    messageEl.textContent = msg;

    // Reset classes for fresh animation
    overlay.classList.remove('dismissing');
    character.classList.remove('wiggle');
    overlay.style.display = 'flex';

    // Re-trigger the timer bar animation
    const timerBar = overlay.querySelector('.penguin-timer-bar');
    if (timerBar) {
        timerBar.style.animation = 'none';
        timerBar.offsetHeight; // Force reflow
        timerBar.style.animation = '';
    }

    // Wiggle after bounce-in completes (~700ms)
    setTimeout(() => {
        character.classList.add('wiggle');
    }, 700);

    // Auto-dismiss after 4 seconds
    clearTimeout(STATE.penguinTimeout);
    STATE.penguinTimeout = setTimeout(() => {
        closePenguinAnimation();
    }, 4000);
}

function closePenguinAnimation() {
    const overlay = document.getElementById('penguin-overlay');
    if (!overlay || overlay.style.display === 'none') return;

    clearTimeout(STATE.penguinTimeout);
    overlay.classList.add('dismissing');

    // Wait for dismiss animation to finish, then hide
    setTimeout(() => {
        overlay.style.display = 'none';
        overlay.classList.remove('dismissing');
    }, 500);
}

function goToResumoFromPenguin() {
    closePenguinAnimation();
    // Navigate to resumo screen for current subject
    if (STATE.selectedSubjectId) {
        window.location.hash = '#/resumo';
    }
}

// Expose penguin functions
window.showPenguinAnimation = showPenguinAnimation;
window.closePenguinAnimation = closePenguinAnimation;
window.goToResumoFromPenguin = goToResumoFromPenguin;

window.showPremiumModal = showPremiumModal;
window.closePremiumModal = closePremiumModal;

function showPremiumModal() {
    const modal = document.getElementById('premium-modal');
    if (modal) modal.classList.remove('hidden');
}

function closePremiumModal() {
    const modal = document.getElementById('premium-modal');
    if (modal) modal.classList.add('hidden');
}

window.showConfirmModal = showConfirmModal;
window.closeConfirmModal = closeConfirmModal;

function showConfirmModal(title, text, icon, onConfirm) {
    const modal = document.getElementById('confirm-modal');
    if (!modal) return;
    
    document.getElementById('confirm-title').textContent = title || 'Confirmação';
    document.getElementById('confirm-text').innerHTML = text || 'Tem certeza?';
    document.getElementById('confirm-icon').textContent = icon || '⚠️';
    
    const yesBtn = document.getElementById('confirm-yes-btn');
    const noBtn = yesBtn ? yesBtn.previousElementSibling : null;
    
    // Reset buttons to default state
    if (yesBtn) {
        yesBtn.textContent = 'Confirmar';
        yesBtn.style.display = 'block';
        yesBtn.style.background = 'var(--error)';
    }
    if (noBtn) {
        noBtn.style.display = 'block';
        noBtn.textContent = 'Cancelar';
    }

    const newBtn = yesBtn.cloneNode(true);
    yesBtn.parentNode.replaceChild(newBtn, yesBtn);
    
    newBtn.onclick = () => {
        closeConfirmModal();
        if (onConfirm) onConfirm();
    };
    
    modal.classList.remove('hidden');
}

function closeConfirmModal() {
    const modal = document.getElementById('confirm-modal');
    if (modal) modal.classList.add('hidden');
}

/**
 * Initialize click handlers for sidebar nav items and keep active state in sync
 */
function initSidebarNav() {
    const navItems = document.querySelectorAll('.nav-item, .mobile-nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const route = item.getAttribute('data-route') || '/';
            // Normalize route to start with '/'
            const path = route.startsWith('/') ? route : `/${route}`;
            // Update hash (use direct assignment so browser treats it as navigation)
            window.location.hash = `#${path}`;
        });
    });
    // Keep active class in sync on routing changes
    window.addEventListener('hashchange', updateActiveNav);
    window.addEventListener('hashchange', handleRouting);
    // Also run once on init
    updateActiveNav();
}

function updateActiveNav() {
    const hash = window.location.hash || '#/';
    const navItems = document.querySelectorAll('.nav-item, .mobile-nav-item');
    navItems.forEach(item => {
        const route = item.getAttribute('data-route') || '/';
        const routeHash = `#${route.startsWith('/') ? route : `/${route}`}`;
        if (routeHash === hash) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

/* ============================================
   MOBILE MENU FUNCTIONS
   ============================================ */

function openMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    const btn = document.getElementById('mobile-menu-btn');

    if (menu) menu.classList.add('active');
    if (overlay) overlay.classList.add('active');
    if (btn) btn.classList.add('active');

    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    const btn = document.getElementById('mobile-menu-btn');

    if (menu) menu.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    if (btn) btn.classList.remove('active');

    document.body.style.overflow = '';
}

function restoreSession() {
    // We now have a Dashboard as the home page.
    // We no longer forcefully redirect the user to their last subject on load.
    // The Dashboard itself has a "Continue Studying" widget for that.
    handleRouting();
}

// --- Routing & Navigation ---

/**
 * Main Routing Function
 * Handles URL hash changes and determines which screen to show.
 */
/**
 * Main Routing Function
 * Handles URL hash changes and determines which screen to show.
 */
function handleRouting() {
    const hash = window.location.hash;
    const t = TEXTS[STATE.language];

    // Fechar modais do calendário ao navegar
    if (window.closeClassModal) window.closeClassModal();
    if (window.closeEventModal) window.closeEventModal();

    // Default route
    if (!hash || hash === '#/') {
        if (window.showDashboardScreen) {
            window.showDashboardScreen();
        } else {
            showScreen('dashboard');
        }
        return;
    }

    // #/banco
    if (hash === '#/banco') {
        showSemestersScreen();
        return;
    }

    // #/flashcards
    if (hash === '#/flashcards') {
        showFlashcardsScreen();
        return;
    }

    // #/resumo
    if (hash === '#/resumo') {
        showResumoScreen();
        return;
    }

    // #/profile
    if (hash === '#/profile') {
        showProfileScreen();
        return;
    }

    // #/settings
    if (hash === '#/settings') {
        showSettingsScreen();
        return;
    }

    // #/ranking
    if (hash === '#/ranking') {
        showRankingScreen();
        return;
    }

    // #/calendario
    if (hash === '#/calendario') {
        if (window.showCalendarScreen) {
            window.showCalendarScreen();
        } else {
            showScreen('calendario');
        }
        return;
    }

    // #/pet
    if (hash === '#/pet') {
        showScreen('pet');
        return;
    }

    // #/lazer
    if (hash === '#/lazer') {
        showScreen('lazer');
        return;
    }

    // #/mural
    if (hash === '#/mural') {
        showScreen('mural');
        return;
    }

    // #/anotacoes
    if (hash === '#/anotacoes') {
        showAnotacoesScreen();
        return;
    }

    // #/afiliados
    if (hash === '#/afiliados') {
        const adminEmails = ['testesparatudo41@gmail.com'];
        supabase.auth.getUser().then(({ data: authData }) => {
            if (authData?.user && adminEmails.includes(authData.user.email)) {
                showScreen('afiliados');
                if (window.initAffiliateManager) window.initAffiliateManager();
            } else {
                console.warn('[Afiliados] Acesso negado. Redirecionando...');
                showScreen('dashboard');
            }
        });
        return;
    }

    // #/vendas
    if (hash === '#/vendas') {
        const adminEmails = ['testesparatudo41@gmail.com'];
        supabase.auth.getUser().then(({ data: authData }) => {
            if (authData?.user && adminEmails.includes(authData.user.email)) {
                showScreen('vendas');
                if (window.loadVendasData) window.loadVendasData();
            } else {
                console.warn('[Vendas] Acesso negado. Redirecionando...');
                showScreen('dashboard');
            }
        });
        return;
    }

    // #/pag-afiliados
    if (hash === '#/pag-afiliados') {
        const adminEmails = ['testesparatudo41@gmail.com'];
        supabase.auth.getUser().then(({ data: authData }) => {
            if (authData?.user && adminEmails.includes(authData.user.email)) {
                showScreen('pag-afiliados');
                if (window.loadPagAfiliados) window.loadPagAfiliados();
            } else {
                console.warn('[Pag. Afiliados] Acesso negado. Redirecionando...');
                showScreen('dashboard');
            }
        });
        return;
    }


    // #/semester/:id
    if (hash.startsWith('#/semester/')) {
        const id = hash.split('/')[2];
        showSubjectsScreen(parseInt(id));
        return;
    }

    // #/subject/:id
    if (hash.startsWith('#/subject/')) {
        const id = hash.split('/')[2];
        showUnitsScreen(id);
        return;
    }

    // If no route matches, fallback to dashboard
    if (window.showDashboardScreen) {
        showDashboardScreen();
    } else {
        showScreen('dashboard');
    }
}

function showDashboardScreen() {
    showScreen('dashboard');

    const user = window.getUser ? window.getUser() : null;
    const firstName = user ? (user.user_metadata?.full_name || user.user_metadata?.name || 'Estudante').split(' ')[0] : 'Estudante';
    
    const greetingEl = document.getElementById('dash-greeting');
    if (greetingEl) greetingEl.textContent = `Olá, ${firstName}! 👋`;
    
    // XP and Level
    const currentXp = STATE.xp || 0;
    const currentLevel = Math.floor(currentXp / 100) + 1;
    const nextLevelXp = currentLevel * 100;
    
    if (document.getElementById('dash-level')) {
        document.getElementById('dash-level').textContent = currentLevel;
        document.getElementById('dash-xp').textContent = currentXp;
        document.getElementById('dash-next-xp').textContent = nextLevelXp;
        
        const xpPercent = ((currentXp % 100) / 100) * 100;
        document.getElementById('dash-xp-bar').style.width = `${xpPercent}%`;
    }

    // Recent Subject
    const lastSubjectId = localStorage.getItem('last_subject');
    if (lastSubjectId && typeof UNITS !== 'undefined') {
        const subject = UNITS.find(s => s.id == lastSubjectId);
        if (subject && document.getElementById('dash-recent-title')) {
            const lang = STATE.language || 'pt';
            document.getElementById('dash-recent-title').textContent = subject.title ? subject.title[lang] : (subject.name || 'Matéria');
            document.getElementById('dash-recent-subtitle').textContent = "Continue de onde parou";
            document.getElementById('dash-recent-icon').textContent = subject.icon || "📚";
            document.getElementById('dash-recent-subject').onclick = () => window.location.hash = `#/subject/${lastSubjectId}`;
        }
    }

    // Daily Stats — lê do objeto diário com reset automático por dia
    const today = new Date().toISOString().split('T')[0];
    const dailyRaw = JSON.parse(localStorage.getItem('medpenguim_daily') || '{}');
    const isToday = dailyRaw.date === today;
    const dailyCorrect = isToday ? (dailyRaw.correct || 0) : 0;
    const dailyQuestions = isToday ? (dailyRaw.questions || 0) : 0;
    const dailyXp = isToday ? (dailyRaw.xp || 0) : 0;

    let accuracy = 0;
    if (dailyQuestions > 0) {
        accuracy = Math.round((dailyCorrect / dailyQuestions) * 100);
    }

    if (document.getElementById('dash-stat-questions')) {
        document.getElementById('dash-stat-questions').textContent = dailyCorrect;
        document.getElementById('dash-stat-accuracy').textContent = `${accuracy}%`;
        document.getElementById('dash-stat-xp').textContent = dailyXp;
    }
    
    // Upcoming Events (from calendar)
    if (window.fetchCalendarEvents) {
        window.fetchCalendarEvents().then(events => {
            const container = document.getElementById('dash-events-container');
            if (!container) return;
            
            if (!events || events.length === 0) {
                container.innerHTML = `
                    <div style="text-align: center; padding: 20px 0; color: var(--text-secondary); font-size: 0.9rem;">
                        <span style="font-size: 2rem; display: block; margin-bottom: 8px;">📅</span>
                        Nenhum evento programado para os próximos dias.
                    </div>
                `;
                return;
            }
            
            // Sort by date ascending and take top 3
            const upcoming = events
                .filter(e => new Date(e.event_date) >= new Date(new Date().setHours(0,0,0,0)))
                .sort((a, b) => new Date(a.event_date) - new Date(b.event_date))
                .slice(0, 3);
                
            if (upcoming.length === 0) {
                 container.innerHTML = `
                    <div style="text-align: center; padding: 20px 0; color: var(--text-secondary); font-size: 0.9rem;">
                        <span style="font-size: 2rem; display: block; margin-bottom: 8px;">📅</span>
                        Nenhum evento programado.
                    </div>
                `;
                return;
            }

            container.innerHTML = upcoming.map(evt => {
                const isExam = evt.type === 'prova';
                const color = isExam ? 'var(--error)' : (evt.type === 'trabalho' ? 'var(--warning)' : 'var(--primary)');
                const dateObj = new Date(evt.event_date);
                dateObj.setMinutes(dateObj.getMinutes() + dateObj.getTimezoneOffset());
                const dateStr = dateObj.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
                
                return `
                    <div style="display: flex; gap: 12px; align-items: center; padding: 12px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: var(--radius-sm);">
                        <div style="min-width: 44px; height: 44px; background: ${color}22; color: ${color}; border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-weight: bold; line-height: 1;">
                            <span style="font-size: 0.9rem;">${dateStr.split('/')[0]}</span>
                            <span style="font-size: 0.65rem; text-transform: uppercase;">${dateObj.toLocaleDateString('pt-BR', { month: 'short' }).replace('.','')}</span>
                        </div>
                        <div style="flex: 1; min-width: 0;">
                            <div style="color: var(--text-main); font-weight: 600; font-size: 0.95rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${evt.title}</div>
                            <div style="color: ${color}; font-size: 0.75rem; font-weight: 600; margin-top: 2px;">${isExam ? 'Prova' : 'Aula'}</div>
                        </div>
                    </div>
                `;
            }).join('');
        });
    } else {
        const container = document.getElementById('dash-events-container');
        if (container) {
            container.innerHTML = `
                <div style="text-align: center; padding: 20px 0; color: var(--text-secondary); font-size: 0.9rem;">
                    Calendário não disponível no momento.
                </div>
            `;
        }
    }
}

window.showDashboardScreen = showDashboardScreen;

/**
 * Shows the Anotacoes (Notes) screen
 */
async function showAnotacoesScreen() {
    showScreen('anotacoes');
    const container = document.getElementById('notes-container');
    const emptyState = document.getElementById('notes-empty-state');
    
    if (!container || !window.supabase) return;

    container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">Carregando suas anotações...</div>';
    if (emptyState) emptyState.style.display = 'none';

    try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            container.innerHTML = '';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }

        const { data: notes, error } = await supabase
            .from('user_notes')
            .select('*')
            .eq('user_id', user.id)
            .order('updated_at', { ascending: false });

        if (error) throw error;

        if (!notes || notes.length === 0) {
            container.innerHTML = '';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }

        const lang = STATE.language || 'pt';
        container.innerHTML = notes.map(note => {
            const date = new Date(note.updated_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            // Extrair ID limpo para busca (case-insensitive)
            let searchId = String(note.context_id).toLowerCase();
            searchId = searchId.replace('unit_', '').replace('resumo_', '');
            
            let displayTitle = note.context_id;
            let displaySemester = '';

            // 1. Tentar encontrar em UNITS
            if (typeof UNITS !== 'undefined' && !isNaN(searchId) && searchId !== '') {
                const unit = UNITS.find(u => u.id == searchId);
                if (unit) {
                    displayTitle = unit.title[lang] || unit.title.pt;
                    const subj = SUBJECTS.find(s => s.id === unit.subjectId);
                    if (subj) displaySemester = `${subj.semesterId}º Semestre`;
                }
            } 
            // 2. Tentar encontrar em SUBJECTS diretamente
            else if (typeof SUBJECTS !== 'undefined') {
                const subj = SUBJECTS.find(s => String(s.id).toLowerCase() === searchId || String(s.id).toLowerCase() === String(note.context_id).toLowerCase());
                if (subj) {
                    displayTitle = subj.title[lang] || subj.title.pt;
                    displaySemester = `${subj.semesterId}º Semestre`;
                }
            }
            
            const badgeText = displaySemester ? `${displayTitle} • ${displaySemester}` : displayTitle;

            return `
                <div class="note-card" style="background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 20px; display: flex; flex-direction: column; gap: 12px; transition: all 0.2s; cursor: pointer; position: relative; overflow: hidden;" 
                     onclick="handleNoteClick('${displayTitle.replace(/'/g, "\\'")}', \`${note.content.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`)">
                    <div style="position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: var(--primary); opacity: 0.5;"></div>
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                        <span style="font-weight: 700; color: var(--primary); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(59, 130, 246, 0.1); padding: 4px 8px; border-radius: 6px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 240px;" title="${badgeText}">${badgeText}</span>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 0.7rem; color: var(--text-secondary); white-space: nowrap;">${date}</span>
                        </div>
                    </div>
                    <div style="color: var(--text-main); font-size: 0.9rem; line-height: 1.6; white-space: pre-wrap; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 6; -webkit-box-orient: vertical;">${note.content}</div>
                    <div style="margin-top: auto; display: flex; justify-content: flex-end;">
                        <span style="font-size: 0.75rem; color: var(--primary); font-weight: 600;">Ver mais →</span>
                    </div>
                </div>
            `;
        }).join('');

        const cards = container.querySelectorAll('.note-card');
        cards.forEach(card => {
            card.onmouseenter = () => {
                card.style.transform = 'translateY(-4px)';
                card.style.borderColor = 'var(--primary)';
                card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            };
            card.onmouseleave = () => {
                card.style.transform = 'translateY(0)';
                card.style.borderColor = 'var(--border)';
                card.style.boxShadow = 'none';
            };
        });

    } catch (err) {
        console.error("Erro ao carregar anotações:", err);
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--error);">Ocorreu um erro ao carregar as anotações. Tente novamente mais tarde.</div>`;
    }
}

function handleNoteClick(title, content) {
    showConfirmModal(title, `<div style="text-align: left; max-height: 400px; overflow-y: auto; padding: 10px; line-height: 1.6; color: var(--text-main); white-space: pre-wrap;">${content}</div>`, '📝', null);
    
    // Customiza para ser apenas um botão de fechar
    const yesBtn = document.getElementById('confirm-yes-btn');
    const noBtn = yesBtn ? yesBtn.previousElementSibling : null;
    if (yesBtn) {
        yesBtn.textContent = 'Entendido';
        yesBtn.style.background = 'var(--primary)';
    }
    if (noBtn) noBtn.style.display = 'none';
}

window.handleNoteClick = handleNoteClick;
window.showAnotacoesScreen = showAnotacoesScreen;



/**
 * Simple toast notification
 */
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '12px';
    toast.style.color = '#fff';
    toast.style.zIndex = '100000';
    toast.style.fontWeight = '600';
    toast.style.background = type === 'success' ? '#10b981' : (type === 'error' ? '#ef4444' : '#3b82f6');
    toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
    toast.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    toast.style.transform = 'translateY(100px)';
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => toast.style.transform = 'translateY(0)', 10);
    setTimeout(() => {
        toast.style.transform = 'translateY(100px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}
window.showToast = showToast;

/**
 * MedPenguin - App Logic
 */

// Helper para resolver URL de imagens no Supabase Storage
function getImageUrl(img) {
    if (!img) return '';
    if (img.startsWith('http')) return img;
    
    // Melhora a detecção de ambiente local (localhost, IPs privados ou protocolo file)
    const isLocal = window.location.hostname === 'localhost' || 
                   window.location.hostname === '127.0.0.1' || 
                   window.location.hostname.startsWith('192.168.') ||
                   window.location.hostname.startsWith('10.') ||
                   window.location.protocol === 'file:';

    if (isLocal) {
        return img;
    }

    // No Supabase, removemos o prefixo 'img/' se existir, pois geralmente o bucket já é o diretório raiz
    const fileName = img.startsWith('img/') ? img.replace('img/', '') : img;
    return `${MEDPENGUIM_CONFIG.supabaseUrl}/storage/v1/object/public/questoes/${fileName}`;
}

/**
 * Dashboard Search Logic
 */
function initDashboardSearch() {
    const searchInput = document.getElementById('dashboard-search-input');
    const resultsOverlay = document.getElementById('search-results-overlay');
    const clearBtn = document.getElementById('search-clear-btn');
    const container = document.getElementById('search-container');

    if (!searchInput || !resultsOverlay) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length < 2) {
            resultsOverlay.style.display = 'none';
            if (clearBtn) clearBtn.style.display = 'none';
            container.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            container.style.background = 'rgba(255, 255, 255, 0.03)';
            return;
        }

        if (clearBtn) clearBtn.style.display = 'block';
        container.style.borderColor = 'var(--primary)';
        container.style.background = 'rgba(255, 255, 255, 0.05)';

        // Filter UNITS and SUBJECTS
        const filteredUnits = (typeof UNITS !== 'undefined' ? UNITS : []).filter(u => 
            (u.title && u.title.pt && u.title.pt.toLowerCase().includes(query)) || 
            (u.title && u.title.es && u.title.es.toLowerCase().includes(query)) ||
            (u.subtitle && u.subtitle.pt && u.subtitle.pt.toLowerCase().includes(query)) ||
            (u.id && u.id.toString().includes(query))
        ).slice(0, 8); // Limit results for performance

        const filteredSubjects = (typeof SUBJECTS !== 'undefined' ? SUBJECTS : []).filter(s => 
            (s.title && s.title.pt && s.title.pt.toLowerCase().includes(query)) || 
            (s.title && s.title.es && s.title.es.toLowerCase().includes(query))
        ).slice(0, 3);

        renderSearchResults(filteredUnits, filteredSubjects);
    });

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            resultsOverlay.style.display = 'none';
            clearBtn.style.display = 'none';
            container.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            container.style.background = 'rgba(255, 255, 255, 0.03)';
            searchInput.focus();
        });
    }

    // Close overlay when clicking outside
    document.addEventListener('click', (e) => {
        if (!container.contains(e.target) && !resultsOverlay.contains(e.target)) {
            resultsOverlay.style.display = 'none';
        }
    });

    // Enter key selects first result
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const firstResult = resultsOverlay.querySelector('.search-result-item');
            if (firstResult) firstResult.click();
        }
    });

    // Add global '/' shortcut to focus search
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            searchInput.focus();
            searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

function renderSearchResults(units, subjects) {
    const resultsOverlay = document.getElementById('search-results-overlay');
    if (!resultsOverlay) return;
    
    if (units.length === 0 && subjects.length === 0) {
        resultsOverlay.innerHTML = `
            <div style="padding: 24px; text-align: center; color: var(--text-secondary);">
                <div style="font-size: 2rem; margin-bottom: 8px;">🔍</div>
                Nenhum resultado encontrado para sua busca.
            </div>
        `;
        resultsOverlay.style.display = 'block';
        return;
    }

    const lang = STATE.language || 'pt';
    let html = '';

    if (subjects.length > 0) {
        html += `<div style="padding: 12px 16px 8px; font-size: 0.75rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em; color: var(--primary); border-bottom: 1px solid var(--border); opacity: 0.8;">Matérias</div>`;
        subjects.forEach(s => {
            const title = s.title ? (s.title[lang] || s.title.pt) : 'Matéria';
            const subtitle = s.headerSubtitle ? (s.headerSubtitle[lang] || s.headerSubtitle.pt) : '';
            html += `
                <div class="search-result-item" style="padding: 12px 16px; display: flex; align-items: center; gap: 12px; cursor: pointer; transition: all 0.2s;" onclick="handleSubjectSearchClick('${s.id}')">
                    <div style="width: 40px; height: 40px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">${s.icon || '📚'}</div>
                    <div style="flex: 1; min-width: 0;">
                        <div style="font-weight: 600; color: var(--text-main); font-size: 0.95rem;">${title}</div>
                        <div style="font-size: 0.75rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${subtitle}</div>
                    </div>
                </div>
            `;
        });
    }

    if (units.length > 0) {
        html += `<div style="padding: 12px 16px 8px; font-size: 0.75rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em; color: var(--success); border-bottom: 1px solid var(--border); ${subjects.length > 0 ? 'border-top: 1px solid var(--border); margin-top: 4px;' : ''} opacity: 0.8;">Tópicos e Unidades</div>`;
        units.forEach(u => {
            const title = u.title ? (u.title[lang] || u.title.pt) : 'Unidade';
            const subtitle = u.subtitle ? (u.subtitle[lang] || u.subtitle.pt) : '';
            html += `
                <div class="search-result-item" style="padding: 12px 16px; display: flex; align-items: center; gap: 12px; cursor: pointer; transition: all 0.2s;" onclick="handleUnitSearchClick(${u.id}, '${u.subjectId}')">
                    <div style="width: 40px; height: 40px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">${u.icon || '📖'}</div>
                    <div style="flex: 1; min-width: 0;">
                        <div style="font-weight: 600; color: var(--text-main); font-size: 0.95rem;">${title}</div>
                        <div style="font-size: 0.75rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Unidade ${u.id} • ${subtitle}</div>
                    </div>
                </div>
            `;
        });
    }

    resultsOverlay.innerHTML = html;
    resultsOverlay.style.display = 'block';

    // Add dynamic hover effects
    const items = resultsOverlay.querySelectorAll('.search-result-item');
    items.forEach(item => {
        item.onmouseenter = () => {
            item.style.background = 'rgba(255, 255, 255, 0.05)';
            item.style.transform = 'translateX(4px)';
        };
        item.onmouseleave = () => {
            item.style.background = 'transparent';
            item.style.transform = 'translateX(0)';
        };
    });
}

function handleSubjectSearchClick(subjectId) {
    const resultsOverlay = document.getElementById('search-results-overlay');
    const searchInput = document.getElementById('dashboard-search-input');
    if (resultsOverlay) resultsOverlay.style.display = 'none';
    if (searchInput) searchInput.value = '';
    
    STATE.selectedSubjectId = subjectId;
    if (typeof renderUnits === 'function') renderUnits();
    if (typeof showScreen === 'function') showScreen('units');
}

function handleUnitSearchClick(unitId, subjectId) {
    const resultsOverlay = document.getElementById('search-results-overlay');
    const searchInput = document.getElementById('dashboard-search-input');
    if (resultsOverlay) resultsOverlay.style.display = 'none';
    if (searchInput) searchInput.value = '';
    
    STATE.selectedSubjectId = subjectId;
    STATE.selectedUnitId = unitId;
    if (typeof startQuiz === 'function') startQuiz(unitId);
}

window.handleSubjectSearchClick = handleSubjectSearchClick;
window.handleUnitSearchClick = handleUnitSearchClick;



/**
 * Syncs units with available questionsData
 */
function syncQuestionsCount() {
    const dataToUse = (typeof questionsData !== 'undefined' && questionsData) ? questionsData : window.questionsData || [];

    if (!dataToUse || dataToUse.length === 0) {
        console.warn('⚠️ syncQuestionsCount: Nenhuma questão disponível para sincronizar');
        UNITS.forEach(unit => {
            unit.questionCount = 0;
        });
        return;
    }

    UNITS.forEach(unit => {
        let lookupId = unit.id;

        const count = dataToUse.filter(q => q.unitId == lookupId).length;
        unit.questionCount = count;
    });

    console.log("✅ Units question count synced from questionsData.");
}

function updateHash(path) {
    // Avoid triggering event if it's the same
    if (window.location.hash !== '#' + path) {
        window.history.pushState(null, null, '#' + path);
        handleRouting(); // Manually trigger because pushState doesn't trigger hashchange
    }
}

// Back Button Handler
function navigateBack() {
    const hash = window.location.hash;

    // Quiz -> Unit Start
    if (!screens.quiz.classList.contains('hidden') || !screens.blockResult.classList.contains('hidden') || !screens.final.classList.contains('hidden')) {
        if (!screens.quiz.classList.contains('hidden')) {
            showConfirmModal('Sair do quiz?', 'Seu progresso atual neste bloco será perdido. Deseja realmente sair?', '🚪', () => {
                selectUnit(STATE.selectedUnitId); // Back to start screen
            });
        } else if (screens.quiz.classList.contains('hidden')) {
            selectUnit(STATE.selectedUnitId);
        }
        return;
    }

    // Unit Start -> Units List
    if (!screens.start.classList.contains('hidden')) {
        // Go back to Units list (Subject view)
        window.location.hash = `#/subject/${STATE.selectedSubjectId}`;
        return;
    }

    // Units List (Subject View) -> Semesters
    if (hash.startsWith('#/subject/')) {
        const subject = SUBJECTS.find(s => s.id === STATE.selectedSubjectId);
        const semId = subject ? subject.semesterId : 3; // default fallback
        window.location.hash = `#/semester/${semId}`;
        return;
    }

    // Semesters -> Home (or nothing)
    if (hash.startsWith('#/semester/')) {
        window.location.hash = '#/';
        return;
    }
}

// Override default back button of browser? 
// No, standard browser back works with hash changes natively.
// But we have internal custom "Back" buttons in the header/UI.
function handleCustomBack() {
    // Logic for internal back button clicks
    if (!screens.quiz.classList.contains('hidden')) {
        showConfirmModal('Sair do quiz?', 'Seu progresso atual neste bloco será perdido. Deseja realmente sair?', '🚪', () => {
            showUnitsScreen(STATE.selectedSubjectId);
        });
        return;
    }
    if (!screens.start.classList.contains('hidden')) {
        showUnitsScreen(STATE.selectedSubjectId);
        return;
    }

    // For routing levels, we use history.back() to respect the hash stack
    window.history.back();
}


// --- Screen Rendering ---

// --- Screen Rendering ---

function showScreen(screenName) {
    // Hide all screens
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    // Show target
    if (screens[screenName]) screens[screenName].classList.remove('hidden');

    // HIDE NOTES BUTTON BY DEFAULT
    // It will be re-enabled by specific study screens (quiz, start, resumo-reader)
    if (typeof updateNotesVisibility === 'function') {
        updateNotesVisibility(false);
    }

    const t = TEXTS[STATE.language];

    // Global Header Defaults (Generic Medicine)
    elHeaderTitle.textContent = t.headerTitle;
    elHeaderSubtitle.textContent = t.headerSubtitle;
    elNavUnitsBtn.classList.remove('hidden');
    if (elHeaderNavDivider) elHeaderNavDivider.classList.remove('hidden');
    elGlobalProgress.classList.add('hidden');

    // Helper to get correct header texts based on subject
    const getSubjectTexts = () => {
        const subjectId = STATE.selectedSubjectId;
        const subject = SUBJECTS.find(s => s.id === subjectId);

        // Set emoji if subject found
        if (subject && subject.icon) {
            elHeaderEmoji.textContent = subject.icon;
        } else {
            elHeaderEmoji.textContent = '';
        }

        if (subject) {
            return {
                title: subject.title[STATE.language],
                subtitle: (subject.headerSubtitle && subject.headerSubtitle[STATE.language])
                    ? subject.headerSubtitle[STATE.language]
                    : t.headerSubtitle // fallback
            };
        }

        // Default Fallback
        return { title: t.headerTitle, subtitle: t.headerSubtitle };
    };

    // Specific Header Contextualization
    const topLevelScreens = ['dashboard', 'semesters', 'profile', 'settings', 'ranking', 'calendario', 'anotacoes', 'flashcards', 'resumo', 'lazer'];
    
    if (topLevelScreens.includes(screenName)) {
        elNavUnitsBtn.classList.add('hidden');
        if (elHeaderNavDivider) elHeaderNavDivider.classList.add('hidden');
        elHeaderEmoji.textContent = ''; // Clear emoji on home
    } else if (screenName === 'subjects') {
        elNavUnitsBtn.setAttribute('onclick', "window.location.hash = '#/'");
        elHeaderEmoji.textContent = ''; // Clear emoji on subjects list
        // Keep generic header for now, or maybe "Semester X"
    } else if (screenName === 'units') {
        // Context based on selected subject
        const subjectTexts = getSubjectTexts();
        elHeaderTitle.textContent = subjectTexts.title;
        elHeaderSubtitle.textContent = subjectTexts.subtitle;

        const subject = SUBJECTS.find(s => s.id === STATE.selectedSubjectId);
        if (subject) {
            elNavUnitsBtn.setAttribute('onclick', `window.location.hash = '#/semester/${subject.semesterId}'`);
        }
    } else if (screenName === 'quiz' || screenName === 'start' || screenName === 'blockResult') {
        // Deep context (Quiz/Start) - use subject-specific texts
        const subjectTexts = getSubjectTexts();
        elHeaderTitle.textContent = subjectTexts.title;
        elHeaderSubtitle.textContent = subjectTexts.subtitle;

        if (screenName === 'quiz') elGlobalProgress.classList.remove('hidden');
        elNavUnitsBtn.setAttribute('onclick', 'handleCustomBack()');
    } else {
        elNavUnitsBtn.setAttribute('onclick', 'handleCustomBack()');
        elHeaderEmoji.textContent = '';
    }

}




function showSemestersScreen() {
    STATE.selectedSemesterId = null;
    STATE.selectedSubjectId = null;
    STATE.selectedUnitId = null;

    showScreen('semesters');
    renderSemesters();
}

function showSubjectsScreen(semesterId) {
    if (!semesterId) {
        window.location.hash = '#/';
        return;
    }

    STATE.selectedSemesterId = semesterId;
    localStorage.setItem('last_semester', semesterId);

    // Show loading state if needed
    showScreen('subjects');
    const grid = document.getElementById('subjects-grid');
    if (grid) grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px;"><div class="spinner" style="margin: 0 auto 16px;"></div><p>Carregando matérias e questões...</p></div>';

    // Load questions before rendering
    loadSemesterQuestions(semesterId).finally(() => {
        // Find subjects
        const subjects = SUBJECTS.filter(s => s.semesterId === parseInt(semesterId));
        renderSubjects(subjects, parseInt(semesterId));
    });
}

function showUnitsScreen(subjectId) {
    const sId = subjectId || STATE.selectedSubjectId;
    if (!sId) {
        window.location.hash = '#/';
        return;
    }

    STATE.selectedSubjectId = sId;
    localStorage.setItem('last_subject', sId);

    // Show screen first so user sees progress
    showScreen('units');
    
    // Find subject to get semester
    const subject = SUBJECTS.find(s => s.id === sId);
    if (subject && subject.semesterId) {
        STATE.selectedSemesterId = subject.semesterId;
        
        // Load questions before rendering units to ensure counts are accurate
        loadSemesterQuestions(subject.semesterId).then(() => {
            renderUnits();
        });
    } else {
        renderUnits();
    }

    const t = TEXTS[STATE.language];
    if (subject) {
        const titleEl = document.querySelector('#units-screen .hero h2');
        if (titleEl) titleEl.textContent = subject.title[STATE.language];
        
        const heroSubtitle = document.querySelector('#units-screen .hero-subtitle');
        if (heroSubtitle) {
            if (sId === 'anatomy') {
                heroSubtitle.innerHTML = t.heroSubtitleAnatomy;
            } else if (sId === 'histology1') {
                heroSubtitle.innerHTML = t.heroSubtitleHistology1;
            } else if (sId === 'histology2') {
                heroSubtitle.innerHTML = t.heroSubtitleHistology2;
            } else if (sId === 'embryology') {
                heroSubtitle.innerHTML = t.heroSubtitleEmbryology;
            } else if (sId === 'biostatistics') {
                heroSubtitle.innerHTML = t.heroSubtitleBiostatistics;
            } else if (sId === 'methodology') {
                heroSubtitle.innerHTML = t.heroSubtitleMethodology;
            } else if (sId === 'physio_med') {
                heroSubtitle.innerHTML = t.heroSubtitlePhysio;
            } else {
                heroSubtitle.innerHTML = subject && subject.headerSubtitle
                    ? subject.headerSubtitle[STATE.language]
                    : 'Revisão de conteúdos essenciais.';
            }
        }
    }


    renderUnits();
}



function selectUnit(unitId) {
    console.log('📖 Selecionando Unit:', unitId);

    // IMPORTANTE: Sempre definir STATE.selectedUnitId primeiro!
    STATE.selectedUnitId = unitId;

    const unit = getUnitById(unitId);
    if (!unit) {
        console.error('❌ Unit não encontrada:', unitId);
        return;
    }

    // Determine subject and semester
    const subject = SUBJECTS.find(s => s.id === unit.subjectId);
    const semesterId = subject ? subject.semesterId : 1;

    // Bloqueio de conteúdo premium usando access.js por matéria
    // Bloqueio de conteúdo premium usando access.js por matéria
    if (!window.canAccess(`subject:${subject.id}`)) {
        showPremiumModal();
        return;
    }

    stopTimer(); // Ensure any running timer is stopped
    STATE.mode = 'normal'; // Reset mode defaults
    // localStorage.setItem('selectedUnit', unitId); // Legacy

    const t = TEXTS[STATE.language];

    // Update Start Screen Info
    document.getElementById('start-unit-name').textContent = unit.title[STATE.language];
    document.getElementById('start-description').textContent = `${unit.subtitle[STATE.language] || ''}`;

    // Update Static Texts in Start Screen
    document.querySelector('#start-screen .hero-card h2').textContent = unit.title[STATE.language];
    
    // Resume Logic
    const startBtn = document.getElementById('start-btn');
    const startActionBox = document.getElementById('start-action-box');
    if (startActionBox) startActionBox.style.display = 'flex';
    
    const progressData = JSON.parse(localStorage.getItem(`progress_unit_${unitId}`)) || { completed: [] };
    const answeredCount = progressData.completed ? progressData.completed.length : 0;
    
    if (answeredCount > 0) {
        // Show immediate resume modal
        const resumeModal = document.getElementById('resume-modal');
        document.getElementById('resume-modal-text').textContent = `Você já completou ${answeredCount} questões desta unidade.`;
        
        document.getElementById('resume-modal-continue-btn').onclick = () => {
            resumeModal.classList.add('hidden');
            startQuiz(true);
        };
        document.getElementById('resume-modal-restart-btn').onclick = () => {
            resumeModal.classList.add('hidden');
            startQuiz(false);
        };
        
        resumeModal.classList.remove('hidden');
        return; // Don't show start screen yet
    } else {
        // Normal flow
        startBtn.textContent = t.startBtn;
        startBtn.onclick = () => startQuiz(false);
    }

    document.querySelector('#start-screen .btn-secondary').textContent = t.backBtn;
    // Update Back Button action on start screen
    document.querySelector('#start-screen .btn-secondary').onclick = () => showUnitsScreen(STATE.selectedSubjectId);

    // Update Header
    elHeaderTitle.textContent = `${t.block} ${unit.id}: ${unit.title[STATE.language]}`;
    elHeaderSubtitle.textContent = unit.subtitle[STATE.language];

    console.log('✅ Unit selecionada:', STATE.selectedUnitId, '- Título:', unit.title[STATE.language]);

    showScreen('start');
    
    // Enable notes for the intro screen
    if (typeof updateNotesVisibility === 'function') {
        updateNotesVisibility(true, `unit_${unitId}`, 'Estudo');
    }
}

// --- Renders ---

function renderSemesters() {
    const grid = document.getElementById('semesters-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const t = TEXTS[STATE.language];

    SEMESTERS.forEach(sem => {
        const isFree = window.canAccess(`semester:${sem.id}`);
        const isPremium = window.currentUserPlan === 'premium';
        const hasAccess = isFree || isPremium;
        const isActive = sem.active;

        const card = document.createElement('div');
        card.className = `unit-card glass-card ${isActive ? '' : 'disabled'}`;
        card.style.opacity = isActive ? '1' : '0.6';
        if (!isActive) card.style.cursor = 'not-allowed';

        card.onclick = () => {
            if (!isActive) {
                if (typeof showToast === 'function') {
                    showToast('🔒 Conteúdo em desenvolvimento! Em breve estará disponível.', 'info');
                } else if (typeof showConfirmModal === 'function') {
                    showConfirmModal('Em Breve', 'Conteúdo em desenvolvimento! Em breve estará disponível.', '🚧');
                } else {
                    alert('Conteúdo em desenvolvimento! Em breve estará disponível.');
                }
                return;
            }
            window.location.hash = `#/semester/${sem.id}`;
        };

        // Badge logic: Active semesters show FREE/PREMIUM, inactive show "Em breve"
        let badgeHTML;
        if (!isActive) {
            badgeHTML = `<span class="badge" style="background: rgba(255, 255, 255, 0.08); color: #94a3b8; font-size: 0.6rem; margin-bottom: 8px; border: 1px solid rgba(255,255,255,0.1);">EM BREVE ⏳</span>`;
        } else if (isFree) {
            badgeHTML = `<span class="badge" style="background: rgba(16, 185, 129, 0.1); color: #10b981; font-size: 0.6rem; margin-bottom: 8px;">FREE ✅</span>`;
        } else {
            badgeHTML = `<span class="badge" style="background: rgba(59, 130, 246, 0.1); color: #3b82f6; font-size: 0.6rem; margin-bottom: 8px;">PREMIUM 💎</span>`;
        }

        card.innerHTML = `
            <div class="unit-header">
                ${badgeHTML}
                <div class="unit-icon" style="font-size: 2.5rem; margin-top: 8px;">${sem.icon}</div>
            </div>
            <h3 class="unit-title" style="margin-top: 12px;">${sem.title[STATE.language]}</h3>
        `;
        grid.appendChild(card);
    });
}

function renderSubjects(subjects, semesterId) {
    const grid = document.getElementById('subjects-grid');
    const titleEl = document.getElementById('subject-screen-title');
    const t = TEXTS[STATE.language];

    if (!grid) return;
    grid.innerHTML = '';

    // Update title
    const sem = SEMESTERS.find(s => s.id === semesterId);
    if (sem) {
        titleEl.textContent = `${t.selectSubject} - ${sem.title[STATE.language]}`;
    }

    if (subjects.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">${t.comingSoon}</p>`;
        return;
    }

    subjects.forEach(sub => {
        const isFree = window.canAccess(`subject:${sub.id}`);
        const isPremium = window.currentUserPlan === 'premium';
        const hasAccess = isFree || isPremium;

        const card = document.createElement('div');
        card.className = `unit-card glass-card ${!hasAccess ? 'locked' : ''}`;
        card.onclick = () => {
            if (!hasAccess) {
                showPremiumModal();
                return;
            }
            window.location.hash = `#/subject/${sub.id}`;
        };

        const badgeHTML = isFree ? `<span class="badge" style="background: rgba(16, 185, 129, 0.1); color: #10b981; font-size: 0.6rem; margin-bottom: 8px;">FREE ✅</span>` : `<span class="badge" style="background: rgba(59, 130, 246, 0.1); color: #3b82f6; font-size: 0.6rem; margin-bottom: 8px;">PREMIUM 💎</span>`;

        card.innerHTML = `
            <div class="unit-header">
                ${badgeHTML}
                <div class="unit-icon" style="font-size: 2.5rem; margin-top: 8px;">${sub.icon}</div>
            </div>
            <h3 class="unit-title" style="margin-top: 12px;">${sub.title[STATE.language]}</h3>
        `;

        // Inject Unlock Button for locked content
        if (!hasAccess) {
            const unlockBtn = document.createElement('button');
            unlockBtn.className = 'unlock-btn';

            // Check for expiration
            const isExpired = window.isPlanExpired && window.isPlanExpired();
            unlockBtn.textContent = isExpired ? 'Renovar Assinatura' : 'Assinar para desbloquear';

            unlockBtn.onclick = (e) => {
                e.stopPropagation(); // Prevent card click
                if (window.isGuest) {
                    window.location.href = '../index.html?action=checkout#planos';
                } else {
                    showPremiumModal();
                }
            };
            card.appendChild(unlockBtn);
        }

        grid.appendChild(card);
    });
}

// --- Units Logic ---

function renderUnits() {
    const grid = document.getElementById('units-grid');
    if (!grid || typeof UNITS === 'undefined') return;

    // Filter units by selected subject
    const currentSubjectId = STATE.selectedSubjectId || 'physio_med';

    const filteredUnits = UNITS.filter(u => u.subjectId === currentSubjectId);

    console.log(`🗓️ Renderizando unidades para matéria: ${currentSubjectId}`);
    console.log(`   Unidades filtradas: ${filteredUnits.length}`);

    // Update counts if data available
    if (typeof questionsData !== 'undefined') {
        let unitsWithQuestions = 0;
        filteredUnits.forEach(u => {
            const count = questionsData.filter(q => q.unitId === u.id).length;
            u.questionCount = count;
            if (count > 0) unitsWithQuestions++;
            if (count === 0) {
                console.warn(`   ⚠️ Unit ${u.id} (${u.title.pt}) - ${count} questões`);
            }
        });
        console.log(`   ✅ ${unitsWithQuestions} unidades com questões`);
    } else {
        console.warn('   ⚠️ questionsData não está disponível!');
    }

    grid.innerHTML = '';

    if (filteredUnits.length === 0) {
        const msg = STATE.language === 'pt' ? 'Conteúdo em desenvolvimento' : 'Contenido en desarrollo';
        const subMsg = STATE.language === 'pt' ? 'Em breve novas questões para esta disciplina.' : 'Pronto nuevas preguntas para esta asignatura.';

        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: var(--text-secondary); animation: fadeIn 0.5s ease;">
                <div style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.7;">🚧</div>
                <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-main); font-weight: 600;">${msg}</h3>
                <p style="font-size: 1rem; opacity: 0.8;">${subMsg}</p>
            </div>
        `;
        return;
    }

    // Check if we need category grouping (for histology2 or anatomy)
    const hasCategories = filteredUnits.some(u => u.category);

    if (hasCategories && (currentSubjectId === 'histology2' || currentSubjectId === 'anatomy')) {
        // Determine which categories to use based on subject
        let categories;
        if (currentSubjectId === 'histology2') {
            categories = ['theoretical', 'practical', 'simulation'];
        } else if (currentSubjectId === 'anatomy') {
            categories = ['main', 'complementary', 'simulation'];
        }
        const t = TEXTS[STATE.language];

        categories.forEach(cat => {
            const categoryUnits = filteredUnits.filter(u => u.category === cat);
            if (categoryUnits.length === 0) return;

            // Add category header
            const categoryHeader = document.createElement('div');
            categoryHeader.style.gridColumn = '1 / -1';
            categoryHeader.style.marginTop = (cat === 'theoretical' || cat === 'main') ? '0' : '2rem';

            let icon = '🧠';
            if (cat === 'practical') icon = '🔬';
            if (cat === 'simulation') icon = '⏱️';
            if (cat === 'main') icon = '📚';
            if (cat === 'complementary') icon = '📝';

            categoryHeader.innerHTML = `
                <h3 style="color: var(--text-primary); font-size: 1.25rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: 1.5rem;">${icon}</span>
                    ${categoryUnits[0].categoryTitle[STATE.language]}
                </h3>
            `;
            grid.appendChild(categoryHeader);

            // Add units in this category
            categoryUnits.forEach(unit => {
                const card = document.createElement('div');
                card.className = 'unit-card glass-card';
                card.onclick = () => selectUnit(unit.id);

                // Get progress
                const progress = getUnitProgress(unit.id);

                card.innerHTML = `
                    <div class="unit-header">
                        <div class="unit-icon">${unit.icon}</div>
                        <span class="unit-id">${t.block.toUpperCase()} ${unit.id}</span>
                    </div>
                    <h3 class="unit-title">${unit.title[STATE.language]}</h3>
                    <p class="unit-subtitle">${unit.subtitle[STATE.language] || ''}</p>
                    <div class="unit-stats">
                        <span class="unit-count">${unit.questionCount} ${t.question}s</span>
                        <span class="unit-progress-text">${progress}%</span>
                    </div>
                `;

                grid.appendChild(card);
            });
        });
    } else {
        // Standard rendering without categories
        filteredUnits.forEach(unit => {
            const card = document.createElement('div');
            card.className = 'unit-card glass-card';
            card.onclick = () => selectUnit(unit.id);

            // Get progress
            const progress = getUnitProgress(unit.id);

            const t = TEXTS[STATE.language];

            card.innerHTML = `
                <div class="unit-header">
                    <div class="unit-icon">${unit.icon}</div>
                    <span class="unit-id">${t.block.toUpperCase()} ${unit.id}</span>
                </div>
                <h3 class="unit-title">${unit.title[STATE.language]}</h3>
                <p class="unit-subtitle">${unit.subtitle[STATE.language] || ''}</p>
                <div class="unit-stats">
                    <span class="unit-count">${unit.questionCount} ${t.question}s</span>
                    <span class="unit-progress-text">${progress}%</span>
                </div>
            `;

            grid.appendChild(card);
        });
    }
}

// --- Logic Helpers ---

function getUnitById(unitId) {
    return UNITS.find(u => u.id == unitId);
}

function getUnitProgress(unitId) {
    const key = `progress_unit_${unitId}`;
    const data = JSON.parse(localStorage.getItem(key));
    if (!data || !data.completed) return 0;

    const unit = getUnitById(unitId);
    if (!unit || unit.questionCount === 0) return 0;

    return Math.round((data.completed.length / unit.questionCount) * 100);
}

// --- Quiz Logic ---

function isSimulation() {
    return STATE.mode === 'simulation';
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function startTimer() {
    STATE.timer = 40 * 60; // 40 minutes
    const elTimerDisplay = document.getElementById('timer-display');
    const elQuizTimer = document.getElementById('quiz-timer');

    if (elQuizTimer) elQuizTimer.classList.remove('hidden');
    if (elTimerDisplay) elTimerDisplay.textContent = formatTime(STATE.timer);

    clearInterval(STATE.timerInterval);
    STATE.timerInterval = setInterval(() => {
        STATE.timer--;
        if (elTimerDisplay) elTimerDisplay.textContent = formatTime(STATE.timer);

        // Warning at 5 mins (300s)
        if (STATE.timer === 300) {
            if (elQuizTimer) elQuizTimer.style.animation = 'pulse-red 0.5s infinite';
            // Optional: toast or non-blocking alert preferred, but alert ok for now
        }

        if (STATE.timer <= 0) {
            finishSimulation();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(STATE.timerInterval);
    const elQuizTimer = document.getElementById('quiz-timer');
    if (elQuizTimer) {
        elQuizTimer.classList.add('hidden');
        elQuizTimer.style.animation = '';
    }
}

function loadQuestions() {
    console.log('✅ Carregando questões para unitId:', STATE.selectedUnitId);

    // Validar que temos um unitId válido
    if (!STATE.selectedUnitId) {
        console.error('❌ ERRO CRÍTICO: STATE.selectedUnitId é null!');
        STATE.questions = [];
        return;
    }

    // Garantir que temos dados de questões
    const dataToUse = (typeof questionsData !== 'undefined' && questionsData) ? questionsData : window.questionsData || [];

    if (!dataToUse || dataToUse.length === 0) {
        console.error('❌ Nenhuma questão disponível no banco de dados');
        STATE.questions = [];
        return;
    }

    const unit = getUnitById(STATE.selectedUnitId);
    let lookupId = STATE.selectedUnitId;

    // Carregar questões
    STATE.questions = dataToUse.filter(q => q.unitId == lookupId);

    console.log(`📝 ${STATE.questions.length} questões carregadas para unitId ${lookupId}`);

    if (STATE.questions.length === 0) {
        const available = [...new Set(dataToUse.map(q => q.unitId))].sort((a, b) => a - b);
        console.warn(`⚠️ Nenhuma questão encontrada para unitId ${lookupId}`);
        console.warn(`🔍 UnitIds disponíveis: ${available.join(', ')}`);
    }

    updateTotalProgress();
}

function startQuiz(isResume = false) {
    console.log(`🚀 INICIANDO QUIZ - UnitId: ${STATE.selectedUnitId} | Resume: ${isResume}`);

    // Garantir que uma unidade foi selecionada
    if (!STATE.selectedUnitId) {
        console.error('❌ Nenhuma unidade foi selecionada!');
        alert('⚠️ Selecione uma unidade antes de iniciar o quiz');
        return;
    }

    // Se estiver recomeçando, limpa o progresso local
    if (!isResume) {
        localStorage.removeItem(`progress_unit_${STATE.selectedUnitId}`);
    }

    // Carregar as questões
    loadQuestions();

    // Validar que temos questões
    if (!STATE.questions || STATE.questions.length === 0) {
        const unit = getUnitById(STATE.selectedUnitId);
        const unitName = unit ? unit.title[STATE.language] : `Unit ${STATE.selectedUnitId}`;
        console.error(`❌ Nenhuma questão para ${unitName}`);
        alert(`❌ Nenhuma questão disponível para ${unitName}`);
        return;
    }

    console.log(`📝 ${STATE.questions.length} questões carregadas - Iniciando quiz`);

    // Configurar modo (normal vs simulado)
    const unit = getUnitById(STATE.selectedUnitId);
    if (unit && unit.type === 'simulation') {
        STATE.mode = 'simulation';
        startTimer();
        STATE.BLOCK_SIZE = STATE.questions.length;
    } else {
        STATE.mode = 'normal';
        STATE.BLOCK_SIZE = STATE.questions.length <= 15 ? STATE.questions.length : 10;
    }

    // Resetar estado por padrão
    STATE.currentBlockIndex = 0;
    STATE.currentQuestionIndex = 0;
    STATE.totalScore = 0;
    STATE.blockAnswers = [];
    STATE.blockSelections = [];
    STATE.consecutiveErrors = 0;

    // Se resume, ajusta o bloco
    if (isResume) {
        const progressData = JSON.parse(localStorage.getItem(`progress_unit_${STATE.selectedUnitId}`)) || { completed: [] };
        const count = progressData.completed ? progressData.completed.length : 0;
        
        if (count > 0 && count < STATE.questions.length) {
            STATE.currentBlockIndex = Math.floor(count / STATE.BLOCK_SIZE);
            STATE.currentQuestionIndex = count % STATE.BLOCK_SIZE;
            
            // Reconstroi blockAnswers mockado só para exibir as bolinhas preenchidas ou vazias?
            // loadBlock vai zerar currentQuestionIndex e criar blockAnswers novo. 
            // Ops: vamos alterar loadBlock para aceitar startQuestionIndex opcionais, 
            // ou apenas deixo setado o STATE.currentQuestionIndex e em loadBlock eu preservo se isResume?
            // O mais limpo: O loadBlock SEMPRE começa o bloco na questão 0. As questões já feitas *desse bloco*
            // podemos marcar como "já preenchidas corretas" para o UI.
        } else if (count >= STATE.questions.length) {
            // Se já finalizou tudo, apenas recomeça
            localStorage.removeItem(`progress_unit_${STATE.selectedUnitId}`);
            isResume = false;
        }
    }

    // Iniciar quiz
    showScreen('quiz');
    loadBlock(STATE.currentBlockIndex, isResume ? STATE.currentQuestionIndex : 0);
}

function loadBlock(blockIndex, startQuestionIndex = 0) {
    STATE.currentBlockIndex = blockIndex;
    STATE.currentQuestionIndex = startQuestionIndex;
    STATE.blockAnswers = new Array(STATE.BLOCK_SIZE).fill(null);
    STATE.blockSelections = new Array(STATE.BLOCK_SIZE).fill(null);
    STATE.currentBlockErrors = [];

    if (startQuestionIndex > 0) {
        // Preencher como acertadas visualmente
        for (let i = 0; i < startQuestionIndex; i++) {
            STATE.blockAnswers[i] = true;
            STATE.blockSelections[i] = 'resume'; 
        }
    }

    // Update Block Label
    elBlockLabel.textContent = `Bloco ${blockIndex + 1}`;

    // Render Dots
    renderDots();

    // Load current question of block

    renderQuestion();
}

function initLanguage() {
    const lang = localStorage.getItem('quiz_language') || 'pt';
    STATE.language = lang;
    document.documentElement.lang = lang;
    updateLanguageToggleBtn();
    updateStaticTexts();

    // Add listener for desktop toggle
    const langBtn = document.getElementById('language-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
}

function toggleLanguage() {
    STATE.language = STATE.language === 'pt' ? 'es' : 'pt';
    localStorage.setItem('quiz_language', STATE.language);
    document.documentElement.lang = STATE.language;
    updateLanguageToggleBtn();

    // Update UI immediately
    updateStaticTexts();
    renderUnits(); // Re-render units if on units screen

    // If in quiz, re-render current question
    if (!screens.quiz.classList.contains('hidden')) {
        renderQuestion();
        // Update header if in quiz
        const unit = getUnitById(STATE.selectedUnitId);
        if (unit) {
            const t = TEXTS[STATE.language];
            elHeaderTitle.textContent = `${t.block} ${unit.id}: ${unit.title[STATE.language]}`;
            elHeaderSubtitle.textContent = unit.subtitle[STATE.language];
        }
    } else if (!screens.semesters.classList.contains('hidden')) {
        renderSemesters();
    } else if (!screens.subjects.classList.contains('hidden')) {
        renderSubjects(SUBJECTS.filter(s => s.semesterId === STATE.selectedSemesterId), STATE.selectedSemesterId);
    } else if (!screens.units.classList.contains('hidden')) {
        renderUnits();
    }

    // If flashcards subjects screen is visible, re-render subjects and header
    if (!screens.flashcards.classList.contains('hidden')) {
        const t = TEXTS[STATE.language];
        elHeaderTitle.textContent = `📚 ${t.navFlashcards}`;
        elHeaderSubtitle.textContent = t.flashcardsSubtitle || '';
        renderFlashcardsSubjects();
    }

    // If flashcard viewer is open, reload current flashcard and update header
    if (!screens['flashcard-viewer'].classList.contains('hidden')) {
        const t = TEXTS[STATE.language];
        const subjectName = t.headerTitleAnatomy || (STATE.language === 'es' ? 'Anatomía II' : 'Anatomia II');
        elHeaderTitle.textContent = `📚 ${subjectName}`;
        elHeaderSubtitle.textContent = t.flashcardClickHint || '';
        // reload current flashcard to pick up language change
        if (typeof currentFlashcardIndex !== 'undefined') {
            loadFlashcard(currentFlashcardIndex);
        }
    }
}

function updateLanguageToggleBtn() {
    const btn = document.getElementById('language-toggle');
    const mobileBtn = document.getElementById('mobile-language-toggle');

    // Show flag of the current language or target? Logic was: current.
    const text = STATE.language === 'pt' ? '🇧🇷🇵🇹 PT' : '🇪🇸🇲🇽 ES';

    if (btn) btn.textContent = text;
    if (mobileBtn) mobileBtn.textContent = text;
}

function updateStaticTexts() {
    const t = TEXTS[STATE.language];

    // Note: Global Header is updated dynamically in showScreen now

    // Buttons
    if (elNavUnitsBtn.textContent.includes('⬅️')) {
        // Keep arrow if present, just update text
        elNavUnitsBtn.textContent = '⬅️ ' + t.unitsBtn.replace('⬅️ ', '');
    }

    // Semesters Screen
    const semTitle = document.querySelector('#semesters-screen h2');
    const semSub = document.querySelector('#semesters-screen .hero-subtitle');
    if (semTitle) semTitle.textContent = t.selectSemester;
    if (semSub) semSub.innerHTML = t.heroSubtitleSemesters;

    // Subjects Screen
    // Title is dynamic
    const subjSub = document.querySelector('#subjects-screen .hero-subtitle');
    if (subjSub) subjSub.innerHTML = t.heroSubtitleSemesters;

    // Sidebar and Mobile menu labels
    const navHomeEls = document.querySelectorAll('.nav-item[data-route="/"] .nav-text');
    navHomeEls.forEach(el => el.textContent = t.navHome || 'Home');

    const navBankEls = document.querySelectorAll('.nav-item[data-route="/banco"] .nav-text');
    navBankEls.forEach(el => el.textContent = t.navBank || 'Banco de Questões');

    const navFlashEls = document.querySelectorAll('.nav-item[data-route="/flashcards"] .nav-text');
    navFlashEls.forEach(el => el.textContent = t.navFlashcards || 'Flashcards');

    // Mobile menu items (second span is the label)
    const mHome = document.querySelectorAll('.mobile-nav-item[data-route="/"]');
    mHome.forEach(it => {
        const spans = it.querySelectorAll('span');
        if (spans[1]) spans[1].textContent = t.navHome || 'Home';
    });

    const mBank = document.querySelectorAll('.mobile-nav-item[data-route="/banco"]');
    mBank.forEach(it => {
        const spans = it.querySelectorAll('span');
        if (spans[1]) spans[1].textContent = t.navBank || 'Banco de Questões';
    });

    const mFlash = document.querySelectorAll('.mobile-nav-item[data-route="/flashcards"]');
    mFlash.forEach(it => {
        const spans = it.querySelectorAll('span');
        if (spans[1]) spans[1].textContent = t.navFlashcards || 'Flashcards';
    });

    // Units Screen
    const unitTitle = document.querySelector('#units-screen h2');
    const unitSub = document.querySelector('#units-screen .hero-subtitle');
    if (unitTitle) unitTitle.textContent = t.selectUnit;
    // Show correct subtitle based on selected subject
    if (unitSub) {
        if (STATE.selectedSubjectId === 'anatomy') {
            unitSub.innerHTML = t.heroSubtitleAnatomy;
        } else if (STATE.selectedSubjectId === 'histology1') {
            unitSub.innerHTML = t.heroSubtitleHistology1;
        } else if (STATE.selectedSubjectId === 'histology2') {
            unitSub.innerHTML = t.heroSubtitleHistology2;
        } else {
            unitSub.innerHTML = t.heroSubtitlePhysio;
        }
    }


    // Quiz Static
    elTotalProgressText.previousElementSibling.textContent = t.totalProgress;
    elNextBtn.textContent = t.next;
    elPrevBtn.textContent = t.prev;

    // Block Result
    document.getElementById('review-btn').textContent = t.reviewErrors;
    document.getElementById('retry-btn').textContent = t.retry;

    // Navigation Buttons in Result Screens
    const btnBackUnitsResult = document.querySelector('#block-result-screen .btn-secondary[onclick="showUnitsScreen()"]');
    if (btnBackUnitsResult) {
        btnBackUnitsResult.textContent = t.backToUnits;
        btnBackUnitsResult.onclick = () => showUnitsScreen(STATE.selectedSubjectId);
    }

    const btnBackUnitsFinal = document.querySelector('#final-screen button[onclick="showUnitsScreen()"]');
    if (btnBackUnitsFinal) {
        btnBackUnitsFinal.onclick = () => showUnitsScreen(STATE.selectedSubjectId);
    }
}
function renderDots() {
    elBlockDots.innerHTML = '';
    for (let i = 0; i < STATE.BLOCK_SIZE; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (i === STATE.currentQuestionIndex) dot.classList.add('active');

        // If answered
        if (STATE.blockAnswers[i] !== null) {
            if (isSimulation()) {
                dot.style.backgroundColor = 'var(--primary)'; // Neutral answered state
                dot.style.borderColor = 'var(--primary)';
            } else {
                dot.classList.add(STATE.blockAnswers[i] ? 'correct' : 'wrong');
            }
        }

        elBlockDots.appendChild(dot);
    }
}

function renderQuestion() {
    const globalIndex = calculateGlobalIndex();
    const question = STATE.questions[globalIndex];

    if (question) {
        updateNotesVisibility(true, `unit_${STATE.selectedUnitId}`, 'Questões');
    }

    if (!question) {
        // End of questions for this unit?
        // Instead of skipping to finishUnit, we must show the results of this partial block.
        finishBlock();
        return;
    }

    // Reset UI
    hideFeedbackButtons();
    if (typeof elFeedbackArea !== 'undefined' && elFeedbackArea) elFeedbackArea.classList.add('hidden');
    if (typeof elOptionsContainer !== 'undefined') elOptionsContainer.classList.remove('answered');

    // Handle Previous Button Visibility
    const prevBtn = document.getElementById('prev-btn');
    if (prevBtn) {
        prevBtn.style.display = STATE.currentQuestionIndex > 0 ? 'block' : 'none';
    }

    // Ensure Next Button is hidden for new question
    if (elNextBtn) elNextBtn.style.display = 'none';

    const t = TEXTS[STATE.language];

    // Handle localized text
    const qText = question.text[STATE.language] || question.text;
    const qOptions = question.options[STATE.language] || question.options;
    const qTip = question.tip ? (question.tip[STATE.language] || question.tip) : null;
    const qExplanation = question.explanation ? (question.explanation[STATE.language] || question.explanation) : null;

    elQuestionText.innerHTML = qText;
    elQuestionNumber.textContent = `${t.question} ${globalIndex + 1}/${STATE.questions.length}`;
    elBlockLabel.textContent = `${t.block} ${STATE.currentBlockIndex + 1}`;

    elQuestionTags.innerHTML = '';

    // Feature: Source Label (Discrete, before question)
    // Always show source. Default to "MedPenguin" if not specified.
    const sourceText = question.source || "MedPenguin";

    const sourceBadge = document.createElement('span');
    sourceBadge.className = 'tag source-tag';
    sourceBadge.style.backgroundColor = 'transparent';
    sourceBadge.style.color = 'var(--text-secondary)';
    sourceBadge.style.border = '1px solid var(--border-color)';
    sourceBadge.style.fontSize = '0.75rem';
    sourceBadge.style.padding = '2px 8px';
    sourceBadge.style.marginBottom = '4px'; // Spacing
    sourceBadge.textContent = sourceText;
    elQuestionTags.appendChild(sourceBadge);

    // Previously rendered other tags here. Removing per user request to show ONLY source.
    /* 
    if (question.tags) { ... } 
    */

    // Generate Simulated Percentages (Randomized but consistent for session)
    // We store in STATE to persist if user navigates back/forth or answers
    if (!STATE.tempPercentages) STATE.tempPercentages = {};

    let percentages;
    if (STATE.tempPercentages[question.id]) {
        percentages = STATE.tempPercentages[question.id];
    } else {
        // Generate new
        const count = qOptions.length;
        const correctIdx = question.correctIndex;
        percentages = new Array(count).fill(0);
        let remaining = 100;

        // Give correct answer a boost (between 40-70%)
        const correctVal = 40 + Math.floor(Math.random() * 30);
        percentages[correctIdx] = correctVal;
        remaining -= correctVal;

        // Distribute rest
        for (let i = 0; i < count; i++) {
            if (i === correctIdx) continue;
            // Last one gets the rest
            if (remaining <= 5) {
                percentages[i] = remaining;
                remaining = 0;
            } else {
                const val = Math.floor(Math.random() * (remaining - 5));
                percentages[i] = val;
                remaining -= val;
            }
        }
        // Add any leftover to a random wrong answer or correct
        if (remaining > 0) percentages[correctIdx] += remaining;

        STATE.tempPercentages[question.id] = percentages;
    }

    STATE.currentPercentages = percentages; // For handleAnswer access

    // Options
    elOptionsContainer.innerHTML = ''; // Force clear options container
    qOptions.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';

        // Structure: 
        // Header: Option text (Left aligned)
        // Footer: Percentage (Left aligned)
        // Right: Scissors (Absolute/Grid)

        const letter = String.fromCharCode(65 + idx);

        btn.innerHTML = `
            <div class="opt-row">
                <div class="opt-content">
                    <span class="opt-letter"><strong>${letter})</strong></span>
                    <span class="opt-text">${opt}</span>
                </div>
                <div class="opt-scissors" title="Eliminar alternativa (Modo Prova)">
                    ✂️
                </div>
            </div>
            <div class="opt-stats">
                <span class="stat-bar" style="width: ${percentages[idx]}%"></span>
                <span class="stat-text">${percentages[idx]}% dos alunos responderam</span>
            </div>
        `;

        // Handle Scissors Click (Elimination)
        const scissorsBtn = btn.querySelector('.opt-scissors');
        scissorsBtn.onclick = (e) => {
            e.stopPropagation(); // Prevent answer selection
            btn.classList.toggle('eliminated');
        };

        btn.onclick = () => {
            // If eliminated, prevent clicking?
            if (btn.classList.contains('eliminated')) return;
            handleAnswer(idx);
        };

        // If already answered in this session
        if (STATE.blockSelections[STATE.currentQuestionIndex] !== null) {
            btn.disabled = true;
            // Disable scissors interaction
            scissorsBtn.style.pointerEvents = 'none';
            scissorsBtn.style.opacity = '0'; // Hide scissors after answering

            // Show stats immediately if answered
            elOptionsContainer.classList.add('answered');

            if (isSimulation()) {
                if (idx === STATE.blockSelections[STATE.currentQuestionIndex]) {
                    btn.style.borderColor = 'var(--primary)';
                    btn.style.backgroundColor = 'rgba(14, 165, 233, 0.1)';
                    btn.style.color = 'var(--text-main)';
                }
            } else {
                if (idx === question.correctIndex) btn.classList.add('correct');
                if (idx === STATE.blockSelections[STATE.currentQuestionIndex] && idx !== question.correctIndex) {
                    btn.classList.add('wrong');
                }
            }
        }

        elOptionsContainer.appendChild(btn);
    });

    // If already answered, show feedback buttons (only if NOT simulation)
    if (STATE.blockSelections[STATE.currentQuestionIndex] !== null) {
        if (!isSimulation()) {
            showFeedbackButtons();
        }
        elNextBtn.style.display = 'block';
    }

    // Update Side Panel (Image & Tip)
    // Re-resolve these vars as they are not scope local in original code (oops, they were local in renderQuestion)
    // We are inside renderQuestion, so it is fine.

    // ... (Use variables defined in renderQuestion scope)
    const elImgContainer = document.getElementById('q-image-container');
    const elImg = document.getElementById('q-image');
    const elTipContainer = document.getElementById('q-tip-container');
    const elTipText = document.getElementById('q-tip-text');
    const elPlaceholder = document.getElementById('q-placeholder');
    // Use the qTip variable already defined at the top of renderQuestion

    let hasSideContent = false;

    if (question.image) {
        elImg.src = getImageUrl(question.image);
        elImgContainer.classList.remove('hidden');
        hasSideContent = true;

        // Hide image container if file not found
        elImg.onerror = () => {
            elImgContainer.classList.add('hidden');
            if (!qTip) elPlaceholder.classList.remove('hidden');
        };

        // Add zoom capability
        elImg.onclick = () => {
            const modal = document.getElementById('image-modal');
            const modalImg = document.getElementById('modal-image');
            modalImg.src = getImageUrl(question.image);
            modal.classList.remove('hidden');
        };
    } else {
        elImgContainer.classList.add('hidden');
    }

    if (qTip) {
        elTipText.innerHTML = qTip;
        document.querySelector('.tip-header h4').textContent = t.tipTitle;
        elTipContainer.classList.remove('hidden');
        // Reset tip to hidden (blurred) state
        elTipText.classList.remove('tip-visible');
        elTipText.classList.add('tip-hidden');
        const eyeIcon = document.getElementById('tip-eye-icon');
        if (eyeIcon) eyeIcon.textContent = '👁️';
        hasSideContent = true;
    } else {
        elTipContainer.classList.add('hidden');
    }

    if (hasSideContent) {
        elPlaceholder.classList.add('hidden');
    } else {
        elPlaceholder.classList.remove('hidden');
    }
}

function toggleTipReveal() {
    const tipText = document.getElementById('q-tip-text');
    const eyeIcon = document.getElementById('tip-eye-icon');
    if (!tipText) return;

    const isHidden = tipText.classList.contains('tip-hidden');
    if (isHidden) {
        tipText.classList.remove('tip-hidden');
        tipText.classList.add('tip-visible');
        if (eyeIcon) eyeIcon.textContent = '🐧';
    } else {
        tipText.classList.remove('tip-visible');
        tipText.classList.add('tip-hidden');
        if (eyeIcon) eyeIcon.textContent = '👁️';
    }
}

function handleAnswer(selectedIndex) {
    const globalIndex = calculateGlobalIndex();
    const question = STATE.questions[globalIndex];

    const isCorrect = selectedIndex === question.correctIndex;

    // Save state
    STATE.blockAnswers[STATE.currentQuestionIndex] = isCorrect;
    STATE.blockSelections[STATE.currentQuestionIndex] = selectedIndex;
    STATE.lastAnswerCorrect = isCorrect; // Store for panel use

    // Update Profile Stats
    updateLocalStats(isCorrect, false);

    // Penguin popup — track consecutive errors
    if (!isSimulation()) {
        if (!isCorrect) {
            STATE.consecutiveErrors++;
            if (STATE.consecutiveErrors >= 3) {
                STATE.consecutiveErrors = 0;
                // Small delay so user sees the wrong answer feedback first
                setTimeout(() => showPenguinAnimation(), 600);
            }
        } else {
            STATE.consecutiveErrors = 0;
        }
    }

    // XP System
    if (isCorrect && !isSimulation()) {
        const xpGain = 10;
        STATE.xp += xpGain;
        localStorage.setItem('medpenguim_xp', STATE.xp);
        
        if (typeof showXPToast === 'function') {
            showXPToast(`+${xpGain} XP`);
        }

        // Check if user functions exist before calling
        const currentUser = (typeof window.getUser === 'function') ? window.getUser() : null;
        if (typeof updateUserHeader === 'function') {
            updateUserHeader(currentUser, window.currentUserPlan);
        }
        
        // Update backend if logged in and function exists
        if (typeof window.updateUserXp === 'function') {
            window.updateUserXp(xpGain);
        }
    }

    // Visuals
    const buttons = elOptionsContainer.children;
    for (let btn of buttons) btn.disabled = true;

    // Hide scissors after answering
    const allScissors = elOptionsContainer.querySelectorAll('.opt-scissors');
    allScissors.forEach(s => {
        s.style.pointerEvents = 'none';
        s.style.opacity = '0';
    });

    if (isSimulation()) {
        // Simulation Mode: Neutral selection
        buttons[selectedIndex].style.borderColor = 'var(--primary)';
        buttons[selectedIndex].style.backgroundColor = 'rgba(14, 165, 233, 0.1)';
        buttons[selectedIndex].style.color = 'var(--text-main)';
        // Show Next button immediately
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) nextBtn.style.display = 'block';
    } else {
        // Mark correct/wrong options visually
        buttons[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');
        if (!isCorrect) {
            buttons[question.correctIndex].classList.add('correct');
        }

        // Show feedback action buttons (NOT the feedback itself)
        showFeedbackButtons();
    }

    // Update Dots
    renderDots();

    // Show Next Button
    if (elNextBtn) elNextBtn.style.display = 'block';

    // Save progress to localStorage
    saveProgress(question.id, isCorrect);
    updateTotalProgress();
}

function showFeedback(isCorrect) {
    elFeedbackArea.classList.remove('hidden');
    const t = TEXTS[STATE.language];

    const globalIndex = calculateGlobalIndex();
    const question = STATE.questions[globalIndex];
    const qExplanation = question.explanation ? (question.explanation[STATE.language] || question.explanation) : null;

    elFeedbackIcon.textContent = isCorrect ? '✅' : '❌';
    elFeedbackTitle.textContent = isCorrect ? t.correct : t.incorrect;
    elFeedbackExplanation.innerHTML = qExplanation || t.noExplanation;

    elFeedbackArea.className = `feedback-area ${isCorrect ? 'correct' : 'wrong'}`;
}

function handleNextQuestion() {
    // If last question in block
    if (STATE.currentQuestionIndex === STATE.BLOCK_SIZE - 1) {
        finishBlock();
    } else {
        STATE.currentQuestionIndex++;
        renderQuestion();
        renderDots();
    }
}

function handlePrevQuestion() {
    if (STATE.currentQuestionIndex > 0) {
        STATE.currentQuestionIndex--;
        renderQuestion();
        renderDots();
    }
}

function finishBlock() {
    try {
        stopTimer(); // Ensure timer stops

        showScreen('blockResult');

        // Calculate Score (Adaptive for partial blocks)
        const totalQuestionsInBlock = STATE.blockSelections.filter(s => s !== null).length;
        const validTotal = totalQuestionsInBlock > 0 ? totalQuestionsInBlock : STATE.BLOCK_SIZE;

        const correctCount = STATE.blockAnswers.filter(a => a === true).length;
        const percentage = Math.round((correctCount / validTotal) * 100);

        const elBlockHeader = document.querySelector('#block-result-screen h2');
        const elBlockNum = document.getElementById('result-block-num');
        const elScorePct = document.getElementById('score-percentage');
        const elScoreCount = document.getElementById('score-count');

        if (isSimulation()) {
            if (elBlockHeader) elBlockHeader.innerHTML = "Resultado do Simulado";
        } else {
            if (elBlockNum) {
                elBlockHeader.innerHTML = `Resultado do Bloco <span id="result-block-num">${STATE.currentBlockIndex + 1}</span>`;
            }
        }

        if (elScorePct) elScorePct.textContent = `${percentage}%`;
        if (elScoreCount) elScoreCount.textContent = `${correctCount}/${validTotal}`;

        // Circle Animation
        const circle = document.getElementById('score-circle-path');
        if (circle) {
            circle.style.strokeDasharray = `${percentage}, 100`;
            circle.style.stroke = percentage >= 70 ? 'var(--success)' : (percentage >= 40 ? 'var(--warning)' : 'var(--error)');
        }

        // Pedagogical Insight
        const insight = document.getElementById('pedagogical-insight');
        const t = TEXTS[STATE.language];

        if (insight) {
            if (percentage >= 90) insight.textContent = t.insightExcellent;
            else if (percentage >= 70) insight.textContent = t.insightGood;
            else if (percentage >= 50) insight.textContent = t.insightAverage;
            else insight.textContent = t.insightPoor;
        }

        // Populate Errors (or All for Simulado)
        STATE.currentBlockErrors = [];
        STATE.blockAnswers.forEach((isCorrect, idx) => {
            // In simulation, we show ALL questions in the review list
            // In normal mode, only errors
            if (!isCorrect || isSimulation()) {
                const globalIndex = calculateGlobalIndexForBlock(idx);
                const question = STATE.questions[globalIndex];
                if (question) {
                    STATE.currentBlockErrors.push({
                        question: question,
                        selectedIndex: STATE.blockSelections[idx],
                        correctIndex: question.correctIndex
                    });
                }
            }
        });

        const btnReview = document.getElementById('review-btn');
        const btnRetry = document.getElementById('retry-btn');
        const btnContinue = document.getElementById('continue-btn');
        const errorContainer = document.getElementById('error-review-container');

        // Hide Review List initially
        if (errorContainer) {
            errorContainer.classList.add('hidden');
            errorContainer.innerHTML = '';
        }

        // Button Logic
        if (percentage === 100) {
            if (btnReview) btnReview.style.display = 'none';
            if (btnRetry) btnRetry.style.display = 'inline-block'; // Allow retry even if correct (practice)
        } else {
            if (btnReview) btnReview.style.display = 'inline-block';
            if (btnRetry) btnRetry.style.display = 'inline-block';
        }

        // "Next Block" visibility
        if (btnContinue) {
            const nextGlobalIndex = (STATE.currentBlockIndex + 1) * STATE.BLOCK_SIZE;
            if (nextGlobalIndex >= STATE.questions.length) {
                btnContinue.textContent = t.finishUnit;
            } else {
                btnContinue.textContent = t.nextBlock;
            }
        }
    } catch (e) {
        console.error("Error in finishBlock:", e);
        alert("Ocorreu um erro ao finalizar o bloco. Verifique o console.");
    }
}

function finishSimulation() {
    finishBlock();
}

function calculateGlobalIndexForBlock(localIndex) {
    return (STATE.currentBlockIndex * STATE.BLOCK_SIZE) + localIndex;
}

function retryBlock() {
    // Reset state for this block
    loadBlock(STATE.currentBlockIndex);
    showScreen('quiz');
}

function nextBlock() {
    STATE.currentBlockIndex++;
    // Check if we have more questions
    const nextGlobalIndex = STATE.currentBlockIndex * STATE.BLOCK_SIZE;
    if (nextGlobalIndex >= STATE.questions.length) {
        finishUnit();
    } else {
        loadBlock(STATE.currentBlockIndex);
        showScreen('quiz');
    }
}

function finishUnit() {
    if (STATE.mode === 'simulation') {
        updateLocalStats(null, true);
    }
    showScreen('final');
}

// Helpers
function calculateGlobalIndex() {
    return (STATE.currentBlockIndex * STATE.BLOCK_SIZE) + STATE.currentQuestionIndex;
}

function formatTag(tag) {
    const t = TEXTS[STATE.language];
    const map = {
        'high_yield': t.tagHighYield,
        'trap': t.tagTrap,
        'fundamental': t.tagFundamental
    };
    return map[tag] || tag;
}

function getUnitById(id) {
    return UNITS.find(u => u.id == id);
}

/**
 * Update local profile statistics (total answered, correct, simulations completed)
 * @param {boolean|null} isCorrect - Whether the answer was correct (null for simulation finish)
 * @param {boolean} isSimulationFinish - Whether this marks the end of a simulation
 */
function updateLocalStats(isCorrect, isSimulationFinish) {
    try {
        const key = 'medpenguim_stats';
        let stats = JSON.parse(localStorage.getItem(key)) || {
            totalAnswered: 0,
            totalCorrect: 0,
            simulationsCompleted: 0
        };

        if (isSimulationFinish) {
            stats.simulationsCompleted = (stats.simulationsCompleted || 0) + 1;
        } else {
            stats.totalAnswered = (stats.totalAnswered || 0) + 1;
            if (isCorrect) {
                stats.totalCorrect = (stats.totalCorrect || 0) + 1;
            }
        }

        localStorage.setItem(key, JSON.stringify(stats));

        // ---- Daily Stats (para o Dashboard) ----
        const today = new Date().toISOString().split('T')[0];
        const dailyKey = 'medpenguim_daily';
        let daily = JSON.parse(localStorage.getItem(dailyKey)) || {};

        // Reset se for um novo dia
        if (daily.date !== today) {
            daily = { date: today, questions: 0, correct: 0, xp: 0 };
        }

        if (!isSimulationFinish && isCorrect !== null) {
            daily.questions = (daily.questions || 0) + 1;
            if (isCorrect) {
                daily.correct = (daily.correct || 0) + 1;
                daily.xp = (daily.xp || 0) + 10; // +10 XP por acerto
            }
        }

        localStorage.setItem(dailyKey, JSON.stringify(daily));

        // Sync as chaves antigas que o Dashboard lê
        localStorage.setItem('daily_questions', daily.questions);
        localStorage.setItem('daily_correct', daily.correct);
        localStorage.setItem('daily_xp', daily.xp);

    } catch (e) {
        console.warn('⚠️ Erro ao salvar stats locais:', e);
    }
}

function saveProgress(questionId, isCorrect) {
    // Basic implementation
    const key = `progress_unit_${STATE.selectedUnitId}`;
    let data = JSON.parse(localStorage.getItem(key)) || { completed: [] };

    if (!data.completed.includes(questionId)) {
        data.completed.push(questionId);
        localStorage.setItem(key, JSON.stringify(data));
    }
}

function updateTotalProgress() {
    const key = `progress_unit_${STATE.selectedUnitId}`;
    let data = JSON.parse(localStorage.getItem(key)) || { completed: [] };
    const count = data.completed.length;
    const total = STATE.questions.length;

    elTotalProgressText.textContent = `${count}/${total}`;
    elTotalProgressFill.style.width = `${(count / total) * 100}%`;
}

// Review Errors Logic
function toggleReviewErrors() {
    const container = document.getElementById('error-review-container');
    const isHidden = container.classList.contains('hidden');

    if (isHidden) {
        renderReviewErrors(container);
        container.classList.remove('hidden');
    } else {
        container.classList.add('hidden');
    }
}

function renderReviewErrors(container) {
    container.innerHTML = '';

    if (!STATE.currentBlockErrors || STATE.currentBlockErrors.length === 0) {
        container.innerHTML = '<p class="no-errors">Nenhum erro para revisar.</p>';
        return;
    }

    STATE.currentBlockErrors.forEach((item, index) => {
        try {
            const div = document.createElement('div');
            div.className = 'review-item';

            const t = TEXTS[STATE.language];
            const qText = item.question.text[STATE.language] || item.question.text;
            const qOptions = item.question.options[STATE.language] || item.question.options;
            const qExplanation = item.question.explanation ? (item.question.explanation[STATE.language] || item.question.explanation) : null;

            // Handle cases where selectedIndex is null (skipped question)
            let myAnswer = "N/A";
            let answerClass = "wrong";
            let icon = "❌";

            if (item.selectedIndex !== null && qOptions[item.selectedIndex]) {
                myAnswer = qOptions[item.selectedIndex];
                if (item.selectedIndex === item.correctIndex) {
                    answerClass = "correct";
                    icon = "✅";
                }
            }

            const correctAnswer = qOptions[item.correctIndex] || "Erro nos dados da questão";
            const explanation = qExplanation || t.noExplanation;

            div.innerHTML = `
                <div class="review-question"><strong>${index + 1}.</strong> ${qText}</div>
                <div class="review-choice ${answerClass}">${icon} ${t.yourAnswer}: ${myAnswer}</div>
                <div class="review-choice correct">✅ ${t.correctAnswer}: ${correctAnswer}</div>
                <div class="review-explanation">💡 ${explanation}</div>
            `;
            container.appendChild(div);
        } catch (err) {
            console.error("Error rendering review item:", err);
        }
    });
}

// Theme Logic
function initTheme() {
    const saved = localStorage.getItem('theme');
    const themeToggle = document.getElementById('theme-toggle');
    if (saved === 'light') {
        document.body.classList.add('light-mode');
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('light-mode');
        if (themeToggle) themeToggle.textContent = '🌙';
        if (!saved) localStorage.setItem('theme', 'dark');
    }

    // Add listener for desktop toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    const icon = isLight ? '🌙' : '☀️';
    if (themeToggle) themeToggle.textContent = icon;
    if (mobileThemeToggle) mobileThemeToggle.textContent = `${icon} Tema`;
}

// ============================================
// FEEDBACK SIDE PANEL SYSTEM
// ============================================

// Check if viewport is mobile
function isMobileView() {
    return window.innerWidth <= 768;
}

// Show the feedback action buttons after answering
function showFeedbackButtons() {
    const feedbackButtons = document.getElementById('feedback-buttons');
    if (feedbackButtons) {
        feedbackButtons.classList.remove('hidden');
    }

    // Also show mobile panels (hidden by CSS on desktop)
    const mobileExplanation = document.getElementById('mobile-explanation-panel');
    const mobileStats = document.getElementById('mobile-stats-panel');
    if (mobileExplanation) mobileExplanation.classList.remove('hidden');
    if (mobileStats) mobileStats.classList.remove('hidden');

    // Prepare content for panels
    preparePanelContent();
}

// Hide feedback buttons and panels when changing questions
function hideFeedbackButtons() {
    const feedbackButtons = document.getElementById('feedback-buttons');
    if (feedbackButtons) {
        feedbackButtons.classList.add('hidden');
    }

    // Hide and collapse mobile panels
    const mobileExplanation = document.getElementById('mobile-explanation-panel');
    const mobileStats = document.getElementById('mobile-stats-panel');
    if (mobileExplanation) {
        mobileExplanation.classList.add('hidden');
        mobileExplanation.classList.remove('expanded');
    }
    if (mobileStats) {
        mobileStats.classList.add('hidden');
        mobileStats.classList.remove('expanded');
    }

    // Close desktop panel if open
    closePanel();
}

// Prepare content for both desktop and mobile panels
function preparePanelContent() {
    const globalIndex = calculateGlobalIndex();
    const question = STATE.questions[globalIndex];
    if (!question) return;

    const t = TEXTS[STATE.language];
    const qExplanation = question.explanation ? (question.explanation[STATE.language] || question.explanation) : t.noExplanation;
    const qOptions = question.options[STATE.language] || question.options;

    // Set explanation text for all panels
    const panelExplanation = document.getElementById('panel-explanation-text');
    const mobileExplanation = document.getElementById('mobile-explanation-text');
    if (panelExplanation) panelExplanation.innerHTML = qExplanation;
    if (mobileExplanation) mobileExplanation.innerHTML = qExplanation;

    // Build stats content
    const percentages = STATE.currentPercentages || [];
    let statsHTML = '';

    qOptions.forEach((opt, idx) => {
        const letter = String.fromCharCode(65 + idx);
        const pct = percentages[idx] || 0;
        const isCorrect = idx === question.correctIndex;

        statsHTML += `
            <div class="stats-item ${isCorrect ? 'correct-answer' : ''}">
                <span class="stats-letter">${letter})</span>
                <div class="stats-bar-wrapper">
                    <div class="stats-bar-bg">
                        <div class="stats-bar-fill" style="width: ${pct}%"></div>
                    </div>
                </div>
                <span class="stats-percentage">${pct}%</span>
            </div>
        `;
    });

    // Set stats content for all panels
    const panelStats = document.getElementById('panel-stats-content');
    const mobileStats = document.getElementById('mobile-stats-content');
    if (panelStats) panelStats.innerHTML = statsHTML;
    if (mobileStats) mobileStats.innerHTML = statsHTML;
}

// Open explanation panel (desktop: side panel, mobile: accordion)
function openExplanationPanel() {
    if (isMobileView()) {
        // On mobile, toggle the accordion
        toggleMobilePanel('explanation');
    } else {
        // On desktop, open side panel with explanation
        openSidePanel('explanation');
    }
}

// Open stats panel (desktop: side panel, mobile: accordion)
function openStatsPanel() {
    if (isMobileView()) {
        // On mobile, toggle the accordion
        toggleMobilePanel('stats');
    } else {
        // On desktop, open side panel with stats
        openSidePanel('stats');
    }
}

// Open the desktop side panel with specific content
function openSidePanel(type) {
    const panel = document.getElementById('feedback-side-panel');
    const overlay = document.getElementById('panel-overlay');
    const panelTitle = document.getElementById('panel-title');
    const explanationSection = document.getElementById('panel-explanation-section');
    const statsSection = document.getElementById('panel-stats-section');

    if (!panel || !overlay) return;

    // Set title and show correct section
    if (type === 'explanation') {
        panelTitle.innerHTML = '💡 Explicação';
        explanationSection.classList.remove('hidden');
        statsSection.classList.add('hidden');
    } else {
        panelTitle.innerHTML = '📊 Estatísticas';
        explanationSection.classList.add('hidden');
        statsSection.classList.remove('hidden');
    }

    // Show panel and overlay
    panel.classList.remove('hidden');
    overlay.classList.remove('hidden');

    // Trigger animation
    requestAnimationFrame(() => {
        panel.classList.add('visible');
        overlay.classList.add('visible');
    });

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close the desktop side panel
function closePanel() {
    const panel = document.getElementById('feedback-side-panel');
    const overlay = document.getElementById('panel-overlay');

    if (!panel || !overlay) return;

    // Remove visible class to trigger slide-out animation
    panel.classList.remove('visible');
    overlay.classList.remove('visible');

    // After animation, hide completely
    setTimeout(() => {
        panel.classList.add('hidden');
        overlay.classList.add('hidden');
    }, 350);

    // Restore body scroll
    document.body.style.overflow = '';
}

// Toggle mobile accordion panel
function toggleMobilePanel(type) {
    const panelId = type === 'explanation' ? 'mobile-explanation-panel' : 'mobile-stats-panel';
    const panel = document.getElementById(panelId);

    if (!panel) return;

    // Toggle expanded state
    panel.classList.toggle('expanded');
}

// Close panel on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePanel();
    }
});

/* ============================================
   FLASHCARDS SYSTEM
   ============================================ */

let flashcardsData = [];
let currentFlashcardIndex = 0;
let currentFlashcardSubject = 'anatomy2';

function initFlashcards() {
    console.log('Flashcards initialized from DB');
}
function showFlashcardsScreen() {
    STATE.selectedUnitId = null;
    STATE.selectedSubjectId = null;
    STATE.selectedSemesterId = null;

    showScreen('flashcards');

    const t = TEXTS[STATE.language];
    elHeaderTitle.textContent = `📚 ${t.navFlashcards}`;
    elHeaderSubtitle.textContent = t.flashcardsSubtitle || 'Revisão rápida com flashcards.';
    elNavUnitsBtn.setAttribute('onclick', "window.location.hash = '#/'");

    renderFlashcardsSemesters();
}

function renderFlashcardsSemesters() {
    const grid = document.getElementById('flashcards-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const t = TEXTS[STATE.language];
    elHeaderTitle.textContent = `📚 ${t.navFlashcards}`;
    elHeaderSubtitle.textContent = t.flashcardsSubtitle || 'Selecione o semestre.';
    elNavUnitsBtn.setAttribute('onclick', "window.location.hash = '#/'");

    // Only show semesters that have data in FLASHCARDS_DB
    Object.entries(FLASHCARDS_DB).forEach(([semesterId, semesterData]) => {
        if (!semesterData || !semesterData.subjects || Object.keys(semesterData.subjects).length === 0) return;

        const card = document.createElement('div');
        card.className = 'unit-card';
        card.onclick = () => renderFlashcardsSubjects(semesterId);

        card.innerHTML = `
            <div class="unit-header">
                <div class="unit-icon" style="font-size: 2.5rem;">📚</div>
            </div>
            <h3 class="unit-title" style="margin-top: 12px;">${semesterData.name}</h3>
            <p class="unit-subtitle" style="margin-top: 8px; margin-bottom: 0;">${Object.keys(semesterData.subjects).length} matérias</p>
        `;
        grid.appendChild(card);
    });
}

function renderFlashcardsSubjects(semesterId) {
    const grid = document.getElementById('flashcards-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const semesterData = FLASHCARDS_DB[semesterId];
    if (!semesterData) return;

    STATE.selectedSemesterId = semesterId;
    const t = TEXTS[STATE.language];
    elHeaderTitle.textContent = `📚 ${semesterData.name}`;
    elHeaderSubtitle.textContent = t.selectSubject || 'Selecione a matéria.';
    elNavUnitsBtn.setAttribute('onclick', "renderFlashcardsSemesters()");

    Object.entries(semesterData.subjects).forEach(([subjectId, subject]) => {
        const card = document.createElement('div');
        card.className = 'unit-card';
        card.onclick = () => renderFlashcardsUnits(semesterId, subjectId);

        const lang = STATE.language;
        const title = subject.title[lang] || subject.title.pt;
        const totalUnits = subject.units ? subject.units.length : 0;

        card.innerHTML = `
            <div class="unit-header">
                <div class="unit-icon" style="font-size: 2.5rem;">${subject.icon}</div>
            </div>
            <h3 class="unit-title" style="margin-top: 12px;">${title}</h3>
            <p class="unit-subtitle" style="margin-top: 8px; margin-bottom: 0;">${totalUnits} unidades</p>
        `;
        grid.appendChild(card);
    });
}

function renderFlashcardsUnits(semesterId, subjectId) {
    const grid = document.getElementById('flashcards-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const semesterData = FLASHCARDS_DB[semesterId];
    if (!semesterData) return;
    const subject = semesterData.subjects[subjectId];
    if (!subject) return;

    STATE.selectedSubjectId = subjectId;
    const lang = STATE.language;
    const t = TEXTS[STATE.language];
    const subjectName = subject.title[lang] || subject.title.pt;

    elHeaderTitle.textContent = `📚 ${subjectName}`;
    elHeaderSubtitle.textContent = t.selectUnit || 'Selecione a unidade.';
    elNavUnitsBtn.setAttribute('onclick', `renderFlashcardsSubjects('${semesterId}')`);

    subject.units.forEach(unit => {
        const card = document.createElement('div');
        card.className = 'unit-card';
        card.onclick = () => startFlashcards(semesterId, subjectId, unit.id);

        const unitTitle = (typeof unit.title === 'object') ? (unit.title[lang] || unit.title.pt) : unit.title;
        const cardCount = unit.flashcards ? unit.flashcards.length : 0;

        card.innerHTML = `
            <div class="unit-header">
                <div class="unit-icon" style="font-size: 2.5rem;">📄</div>
            </div>
            <h3 class="unit-title" style="margin-top: 12px;">${unitTitle}</h3>
            <p class="unit-subtitle" style="margin-top: 8px; margin-bottom: 0;">${cardCount} flashcards</p>
        `;
        grid.appendChild(card);
    });
}

function startFlashcards(semesterId, subjectId, unitId) {
    currentFlashcardSubject = subjectId;
    currentFlashcardIndex = 0;

    const semester = FLASHCARDS_DB[semesterId];
    if (!semester) return;

    const subject = semester.subjects[subjectId];
    if (!subject) return;

    const unit = subject.units.find(u => u.id === unitId);
    if (!unit) {
        console.error('Unit not found', unitId);
        return;
    }

    flashcardsData = unit.flashcards || [];

    showScreen('flashcard-viewer');

    const t = TEXTS[STATE.language];
    const lang = STATE.language;
    const subjectName = subject.title[lang] || subject.title.pt;
    const unitTitle = (typeof unit.title === 'object') ? (unit.title[lang] || unit.title.pt) : unit.title;

    // Update headers
    const elMethodsTitle = document.getElementById('flashcard-subject-title');
    if (elMethodsTitle) elMethodsTitle.textContent = subjectName;

    elHeaderTitle.textContent = `📚 ${unitTitle}`;
    elHeaderSubtitle.textContent = t.flashcardClickHint || 'Clique no cartão para virar';
    elNavUnitsBtn.setAttribute('onclick', `renderFlashcardsUnits('${semesterId}', '${subjectId}')`);

    setTimeout(() => {
        loadFlashcard(0);
    }, 100);
}

// Load a specific flashcard with optional slide direction
function loadFlashcard(index, direction) {
    if (flashcardsData.length === 0) {
        console.warn('No flashcards loaded yet');
        return;
    }

    if (index < 0 || index >= flashcardsData.length) {
        return;
    }

    const flashcardEl = document.getElementById('flashcard');
    const inner = document.getElementById('flashcard-inner');

    // If there's a direction, animate slide
    if (direction && flashcardEl) {
        const outClass = direction === 'next' ? 'fc-slide-out-left' : 'fc-slide-out-right';
        const inClass = direction === 'next' ? 'fc-slide-in-right' : 'fc-slide-in-left';

        flashcardEl.classList.add(outClass);

        setTimeout(() => {
            // Reset flip
            if (inner && inner.classList.contains('flipped')) {
                inner.style.transition = 'none';
                inner.classList.remove('flipped');
                // Re-enable transition after DOM reflow
                inner.offsetHeight;
                inner.style.transition = '';
            }

            // Update content
            _updateFlashcardContent(index);

            // Slide in
            flashcardEl.classList.remove(outClass);
            flashcardEl.classList.add(inClass);

            setTimeout(() => {
                flashcardEl.classList.remove(inClass);
            }, 260);
        }, 210);
    } else {
        // No animation (first load)
        if (inner && inner.classList.contains('flipped')) {
            inner.classList.remove('flipped');
        }
        _updateFlashcardContent(index);
    }
}

// Internal: update flashcard DOM content and progress
function _updateFlashcardContent(index) {
    currentFlashcardIndex = index;
    const flashcard = flashcardsData[index];
    if (!flashcard) return;

    const questionEl = document.getElementById('flashcard-question');
    const answerEl = document.getElementById('flashcard-answer');
    const counterEl = document.getElementById('flashcard-counter');
    const progressFill = document.getElementById('flashcard-progress-fill');

    const lang = STATE.language || 'pt';
    let qText = flashcard.question;
    let aText = flashcard.answer;
    if (typeof flashcard.question === 'object') {
        qText = flashcard.question[lang] || flashcard.question.pt || '';
    }
    if (typeof flashcard.answer === 'object') {
        aText = flashcard.answer[lang] || flashcard.answer.pt || '';
    }
    if (questionEl) questionEl.textContent = qText;
    if (answerEl) answerEl.textContent = aText;
    if (counterEl) counterEl.textContent = `${index + 1} / ${flashcardsData.length}`;

    // Update progress bar
    if (progressFill) {
        const pct = flashcardsData.length > 1
            ? ((index) / (flashcardsData.length - 1)) * 100
            : 100;
        progressFill.style.width = `${pct}%`;
    }

    // Update button states
    const prevBtn = document.getElementById('flashcard-prev-btn');
    const nextBtn = document.getElementById('flashcard-next-btn');
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === flashcardsData.length - 1;
}

// Toggle flashcard flip
function toggleFlashcard() {
    try {
        const inner = document.getElementById('flashcard-inner') || document.querySelector('.flashcard-inner');
        if (!inner) {
            console.error('Elemento flashcard-inner não encontrado');
            return;
        }
        inner.classList.toggle('flipped');
    } catch (error) {
        console.error('Erro ao fazer flip do flashcard:', error);
    }
}

// Navigate to next flashcard with slide animation
function nextFlashcard() {
    if (currentFlashcardIndex < flashcardsData.length - 1) {
        loadFlashcard(currentFlashcardIndex + 1, 'next');
    }
}

// Navigate to previous flashcard with slide animation
function prevFlashcard() {
    if (currentFlashcardIndex > 0) {
        loadFlashcard(currentFlashcardIndex - 1, 'prev');
    }
}

// --- Swipe Support (Touch) ---
(function initFlashcardSwipe() {
    let touchStartX = 0;
    let touchStartY = 0;
    let isSwiping = false;

    document.addEventListener('touchstart', function(e) {
        const viewer = document.getElementById('flashcard-viewer-screen');
        if (!viewer || viewer.classList.contains('hidden')) return;

        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
        isSwiping = true;
    }, { passive: true });

    document.addEventListener('touchend', function(e) {
        if (!isSwiping) return;
        isSwiping = false;

        const viewer = document.getElementById('flashcard-viewer-screen');
        if (!viewer || viewer.classList.contains('hidden')) return;

        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        // Only trigger if horizontal swipe is dominant and long enough
        if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
            if (diffX < 0) {
                nextFlashcard();
            } else {
                prevFlashcard();
            }
        }
    }, { passive: true });
})();

// --- Keyboard Navigation ---
document.addEventListener('keydown', function(e) {
    const viewer = document.getElementById('flashcard-viewer-screen');
    if (!viewer || viewer.classList.contains('hidden')) return;

    // Don't intercept if user is typing in an input/textarea
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch(e.key) {
        case 'ArrowRight':
            e.preventDefault();
            nextFlashcard();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            prevFlashcard();
            break;
        case ' ':
            e.preventDefault();
            toggleFlashcard();
            break;
    }
});
function showResumoScreen() {
    STATE.selectedUnitId = null;
    STATE.selectedSubjectId = null;

    showScreen('resumo');

    const t = TEXTS[STATE.language];
    elHeaderTitle.textContent = '📚 Resumo';
    elHeaderSubtitle.textContent = 'Consulte seus resumos e materiais de estudo.';
    elNavUnitsBtn.setAttribute('onclick', "window.location.hash = '#/'");

    // Initialize Resumo Feature if not already loaded
    if (!window.audioSummaryInitialized) {
        initResumoFeature();
        window.audioSummaryInitialized = true;
    }
}

// ==========================================
// RESUMO FEATURE (New Spotify/Notion Style)
// ==========================================

let resumoData = null;
let currentResumoType = 'text'; // 'audio' or 'text'
let currentActiveSemester = 's2'; // Default
let audioPlayerState = {
    isPlaying: false,
    currentUnit: null,
    volume: 1
};

// --- Initialization ---

async function initResumoFeature() {
    console.log('Initializing Resumo Feature...');
    try {
        // Load Data
        if (typeof window.RESUMO_DATA !== 'undefined' && window.RESUMO_DATA.semesters) {
            console.log('Loaded data from window.RESUMO_DATA');
            resumoData = window.RESUMO_DATA.semesters;
        } else if (typeof RESUMO_DATA !== 'undefined' && RESUMO_DATA.semesters) {
            console.log('Loaded data from CONST RESUMO_DATA');
            resumoData = RESUMO_DATA.semesters;
        } else {
            console.log('Fetching data via API/File...');
            // Fallback fetch
            const paths = ['../data/resumo-data.json', '/data/resumo-data.json', 'data/resumo-data.json'];
            for (const path of paths) {
                try {
                    const res = await fetch(path);
                    if (res.ok) {
                        const data = await res.json();
                        resumoData = data.semesters;
                        console.log('Loaded data from fetch:', path);
                        break;
                    }
                } catch (e) {
                    console.warn('Fetch failed for:', path);
                }
            }
        }

        if (!resumoData) throw new Error("Dados de resumo não encontrados.");

        // Setup UI
        setupResumoFilters();

        // Initial Render
        // Check if we can restore state or default to s2
        renderResumoGrid(currentActiveSemester);

        // Setup Player
        initAudioPlayerButtons();

    } catch (error) {
        console.error("Resumo Init Error:", error);
        document.getElementById('resumo-content-container').innerHTML =
            `<div style="text-align:center; padding: 40px; color: var(--text-muted)">Erro ao carregar conteúdo.<br><small>${error.message}</small></div>`;
    }
}

// --- Filters & UI ---

function setupResumoFilters() {
    const semSelect = document.getElementById('resumo-semester-select');
    if (!semSelect || !resumoData) return;

    semSelect.innerHTML = '';
    Object.entries(resumoData).forEach(([key, semester]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = semester.name;
        if (key === currentActiveSemester) option.selected = true;
        semSelect.appendChild(option);
    });
}

function onSemesterFilterChange(semesterKey) {
    currentActiveSemester = semesterKey;
    renderResumoGrid(semesterKey);
}

function switchResumoTab(type) {
    if (type === 'audio') {
        alert('Resumos em áudio estarão disponíveis em breve!');
        return;
    }

    currentResumoType = type;

    // Update Toggles
    document.querySelectorAll('.resumo-toggle-btn').forEach(btn => {
        if (btn.textContent.toLowerCase().includes(type === 'audio' ? 'áudio' : 'texto')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderResumoGrid(currentActiveSemester);
}

// --- Grid Rendering ---

function renderResumoGrid(semesterKey) {
    const container = document.getElementById('resumo-content-container');
    const semester = resumoData[semesterKey];

    if (!container || !semester) return;

    container.innerHTML = '';

    // Collect subjects that have content for the current type
    const availableSubjects = [];
    Object.entries(semester.subjects).forEach(([subjKey, subject]) => {
        const units = currentResumoType === 'audio' ? subject.audio_units : subject.text_units;
        if (units && units.length > 0) {
            availableSubjects.push({ key: subjKey, ...subject, units });
        }
    });

    if (availableSubjects.length === 0) {
        container.innerHTML = `
            <div class="resumo-empty-state">
                <p>${currentResumoType === 'audio' ? '🎧 Resumos em áudio estarão disponíveis em breve!' : 'Nenhum conteúdo de texto encontrado para este semestre.'}</p>
            </div>`;
        return;
    }

    // --- Subject Tabs (Pills) ---
    const tabsBar = document.createElement('div');
    tabsBar.className = 'resumo-subject-tabs';

    availableSubjects.forEach((subj, idx) => {
        const pill = document.createElement('button');
        pill.className = 'resumo-subject-pill' + (idx === 0 ? ' active' : '');
        pill.style.setProperty('--pill-color', subj.color || '#3b82f6');
        pill.innerHTML = `<span class="pill-dot" style="background:${subj.color || '#3b82f6'}"></span> ${subj.title}`;
        pill.onclick = () => {
            // Toggle active tab
            tabsBar.querySelectorAll('.resumo-subject-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            // Show only this subject's cards
            renderResumoSubjectCards(cardsContainer, subj);
        };
        tabsBar.appendChild(pill);
    });

    container.appendChild(tabsBar);

    // --- Cards Container ---
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'resumo-cards-area';
    container.appendChild(cardsContainer);

    // Render first subject by default
    renderResumoSubjectCards(cardsContainer, availableSubjects[0]);
}

function renderResumoSubjectCards(container, subject) {
    container.innerHTML = '';

    // Subject header
    const header = document.createElement('div');
    header.className = 'resumo-subject-header';
    header.innerHTML = `
        <div class="resumo-subject-icon" style="background:${subject.color || '#3b82f6'}20; color:${subject.color || '#3b82f6'}">📖</div>
        <div>
            <h3>${subject.title}</h3>
            <span class="resumo-subject-count">${subject.units.length} ${subject.units.length === 1 ? 'resumo' : 'resumos'} disponíveis</span>
        </div>
    `;
    container.appendChild(header);

    // Grid
    const grid = document.createElement('div');
    grid.className = 'resumo-grid';

    subject.units.forEach(unit => {
        const card = createResumoCard(unit, subject);
        grid.appendChild(card);
    });

    container.appendChild(grid);
}

function createResumoCard(unit, subject) {
    const card = document.createElement('div');
    const isLocked = unit.premium && !canAccess('premium') && !isDevMode();
    const typeIcon = currentResumoType === 'audio' ? '🎧' : '📄';

    card.className = `resumo-card ${isLocked ? 'locked' : ''}`;

    // On Click Logic
    if (isLocked) {
        card.onclick = () => showPremiumModal();
    } else if (currentResumoType === 'audio') {
        card.onclick = () => playAudioUnit(unit, subject);
    } else if (unit.type === 'inline' && unit.blockId) {
        card.onclick = () => showResumoReader(unit.blockId, unit.title, subject.key || 'physio_med');
    } else {
        card.onclick = () => window.open(unit.file, '_blank');
    }

    card.innerHTML = `
        <div class="resumo-card-header">
            <div class="resumo-icon-box" style="color: ${subject.color || 'var(--primary)'}; background: ${subject.color ? subject.color + '20' : 'rgba(59,130,246,0.1)'}">
                ${typeIcon}
            </div>
            <div class="resumo-card-info">
                <h4>${unit.title}</h4>
                <div class="resumo-card-meta">
                    <span>${currentResumoType === 'audio' ? (unit.duration || '00:00') : (unit.type === 'inline' ? 'Leitura' : (unit.pages + ' págs'))}</span>
                    ${unit.premium ? '<span style="color:#F59E0B">💎 Premium</span>' : '<span>Free</span>'}
                </div>
            </div>
        </div>
        ${currentResumoType === 'audio' ? '<div class="resumo-play-overlay">▶️</div>' : ''}
    `;

    return card;
}

// --- Player Logic (Separated) ---

// DEBUG HELPER
window.debugShowPlayer = () => {
    const bar = document.getElementById('audio-player-bar');
    if (bar) {
        bar.classList.remove('hidden');
        bar.style.display = 'flex';
        console.log('Player forced visible');
    } else {
        console.error('Player bar not found');
    }
};

function playAudioUnit(unit, subject) {
    const audioEl = document.getElementById('main-audio-element');
    const playerBar = document.getElementById('audio-player-bar');

    if (!audioEl || !playerBar) return;

    // Update State
    audioPlayerState.currentUnit = unit;
    audioPlayerState.isPlaying = true;

    // Update UI Elements
    playerBar.classList.remove('hidden');
    // FORCE DISPLAY for debugging
    playerBar.style.display = 'flex';
    console.log('Player Bar Visibility Forced:', playerBar.style.display, playerBar.classList);

    // Fix: Match IDs with index.html (audio-title, audio-subtitle)
    const titleEl = document.getElementById('audio-title');
    const subtitleEl = document.getElementById('audio-subtitle');

    if (titleEl) titleEl.textContent = unit.title;
    if (subtitleEl) subtitleEl.textContent = subject.title;

    // Load and Play
    audioEl.src = unit.file;
    audioEl.play().catch(e => {
        console.error("Playback failed:", e);
        if (e.name === 'NotSupportedError') {
            alert("Formato de áudio não suportado ou arquivo não encontrado.");
        }
    });

    updatePlayerUI();
}

function updatePlayerUI() {
    // Fix: Match ID with index.html (audio-play-btn)
    const playBtn = document.getElementById('audio-play-btn');
    if (playBtn) {
        playBtn.textContent = audioPlayerState.isPlaying ? '⏸' : '▶️';
    }
}

// Fix: Match function name with index.html (toggleAudio)
function toggleAudio() {
    const audioEl = document.getElementById('main-audio-element');
    if (!audioEl) return;

    if (audioEl.paused) {
        audioEl.play();
        audioPlayerState.isPlaying = true;
    } else {
        audioEl.pause();
        audioPlayerState.isPlaying = false;
    }
    updatePlayerUI();
}

// Fix: Match function name with index.html (skipTime)
function skipTime(seconds) {
    const audioEl = document.getElementById('main-audio-element');
    if (audioEl) audioEl.currentTime += seconds;
    console.log('Skipping time:', seconds); // Debug
}

// Speed Control
function toggleSpeed() {
    const audioEl = document.getElementById('main-audio-element');
    const speedBtn = document.getElementById('audio-speed-btn');

    if (!audioEl || !speedBtn) return;

    let currentSpeed = audioEl.playbackRate;
    let newSpeed;

    if (currentSpeed === 1) newSpeed = 1.5;
    else if (currentSpeed === 1.5) newSpeed = 2;
    else newSpeed = 1;

    audioEl.playbackRate = newSpeed;
    speedBtn.textContent = newSpeed + 'x';
}

function initAudioPlayerButtons() {
    const audioEl = document.getElementById('main-audio-element');
    const seekSlider = document.getElementById('audio-seek-slider');
    const volSlider = document.getElementById('audio-volume-slider');

    if (!audioEl) return;

    // Time Update
    audioEl.addEventListener('timeupdate', () => {
        const percent = (audioEl.currentTime / audioEl.duration) * 100;
        if (seekSlider) seekSlider.value = percent || 0;

        document.getElementById('audio-current-time').textContent = formatTime(audioEl.currentTime);
        document.getElementById('audio-progress-fill').style.width = `${percent}%`;

        if (!isNaN(audioEl.duration)) {
            document.getElementById('audio-duration').textContent = formatTime(audioEl.duration);
        }
    });

    // Seek
    if (seekSlider) {
        seekSlider.addEventListener('input', (e) => {
            const time = (e.target.value / 100) * audioEl.duration;
            audioEl.currentTime = time;
        });
    }

    // Volume
    if (volSlider) {
        volSlider.addEventListener('input', (e) => {
            audioEl.volume = e.target.value;
            // Update icon based on volume
            const icon = document.querySelector('.audio-vol-icon');
            if (icon) {
                if (audioEl.volume === 0) icon.textContent = '🔈';
                else if (audioEl.volume < 0.5) icon.textContent = '🔉';
                else icon.textContent = '🔊';
            }
        });
    }

    // Enable play button on load
    audioEl.addEventListener('loadedmetadata', () => {
        const playBtn = document.getElementById('audio-play-btn');
        const prevBtn = document.getElementById('audio-prev-btn');
        const nextBtn = document.getElementById('audio-next-btn');

        if (playBtn) playBtn.disabled = false;
        if (prevBtn) prevBtn.disabled = false;
        if (nextBtn) nextBtn.disabled = false;
    });

    // End
    audioEl.addEventListener('ended', () => {
        audioPlayerState.isPlaying = false;
        updatePlayerUI();
    });
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

function closeAudioPlayer() {
    const playerBar = document.getElementById('audio-player-bar');
    const audioEl = document.getElementById('main-audio-element');

    if (audioEl) audioEl.pause();
    if (playerBar) playerBar.classList.add('hidden');
}

// ==========================================
// RESUMO READER — Inline HTML Content Viewer
// ==========================================

/**
 * Looks up inline content by blockId across all RESUMOS_* data objects
 */
function findResumoContent(blockId) {
    // Search all RESUMOS_* data objects on window
    const sources = [
        window.RESUMOS_ANATOMY1,
        window.RESUMOS_ANATOMY2,
        window.RESUMOS_HISTOLOGY1,
        window.RESUMOS_HISTOLOGY2,
        window.RESUMOS_EMBRYOLOGY1,
        window.RESUMOS_EMBRYOLOGY2,
        window.RESUMOS_BIOSTATS,
        window.RESUMOS_METHODOLOGY,
        window.RESUMOS_BIOLOGY,
        window.RESUMOS_BIOCHEMISTRY1,
        window.RESUMOS_BIOPHYSICS,
        window.RESUMOS_PHYSIOLOGY,
        window.RESUMOS_IMMUNOLOGY,
        window.RESUMOS_GENETICS,
        window.RESUMOS_MICROBIOLOGY
    ];

    for (const source of sources) {
        if (source && source[blockId]) {
            return source[blockId];
        }
    }
    return null;
}

function initResumoInteractive(container) {
    // Accordions
    container.querySelectorAll('.resumo-accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const acc = header.closest('.resumo-accordion');
            if (acc) acc.classList.toggle('open');
        });
    });
    // Flip Cards
    container.querySelectorAll('.resumo-flip-card').forEach(card => {
        card.addEventListener('click', () => card.classList.toggle('flipped'));
    });
    // Quiz Reveals
    container.querySelectorAll('.resumo-quiz-answer').forEach(answer => {
        answer.addEventListener('click', () => answer.classList.add('revealed'));
    });
}

function showResumoReader(blockId, title, subjectId = null) {
    if (subjectId) {
        STATE.selectedSubjectId = subjectId;
        localStorage.setItem('last_subject', subjectId);
    }
    const data = findResumoContent(blockId);
    const titleEl = document.getElementById('resumo-reader-title');
    const contentEl = document.getElementById('resumo-reader-content');

    if (!data || !contentEl) {
        console.warn('[Resumo] Content not found for block', blockId);
        return;
    }

    titleEl.textContent = title || data.title;
    contentEl.innerHTML = data.content;

    // Initialize interactive elements
    initResumoInteractive(contentEl);

    // Scroll to top
    contentEl.scrollTop = 0;

    showScreen('resumo-reader');

    // Update header
    elHeaderTitle.textContent = '📖 Resumo';
    elHeaderSubtitle.textContent = title || data.title;
    
    updateNotesVisibility(true, `resumo_${blockId}`, 'Resumo');
}

function closeResumoReader() {
    showScreen('resumo');
    elHeaderTitle.textContent = '📚 Resumo';
    elHeaderSubtitle.textContent = 'Consulte seus resumos e materiais de estudo.';
    updateNotesVisibility(false);
}

// Expose globally
window.showResumoReader = showResumoReader;
window.closeResumoReader = closeResumoReader;

/* ==========================================
   NOTES SYSTEM LOGIC
   ========================================== */

async function toggleNotes(contextId = null, label = 'Geral') {
    const sidebar = document.getElementById('notes-sidebar');
    const textarea = document.getElementById('notes-textarea');
    const labelEl = document.getElementById('notes-context-label');
    
    if (contextId && contextId !== STATE.currentContextId) {
        STATE.currentContextId = contextId;
        labelEl.textContent = label;
        await loadNote(contextId);
    }

    sidebar.classList.toggle('active');
    
    if (sidebar.classList.contains('active')) {
        textarea.focus();
    }
}

async function loadNote(contextId) {
    if (!window.supabase) return;
    
    try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const textarea = document.getElementById('notes-textarea');
        const statusText = document.querySelector('.status-text');
        const statusDot = document.querySelector('.status-dot');

        const { data, error } = await supabase
            .from('user_notes')
            .select('content')
            .eq('user_id', user.id)
            .eq('context_id', contextId)
            .maybeSingle();

        if (error) throw error;

        textarea.value = data ? data.content : '';
        statusText.textContent = 'Pronto';
        statusDot.className = 'status-dot saved';
    } catch (err) {
        console.error('[Notes] Error loading:', err);
    }
}

async function saveNote() {
    if (!window.supabase || !STATE.currentContextId) return;
    
    try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const content = document.getElementById('notes-textarea').value;
        const statusText = document.querySelector('.status-text');
        const statusDot = document.querySelector('.status-dot');

        statusText.textContent = 'Salvando...';
        statusDot.className = 'status-dot saving';

        const { error } = await supabase
            .from('user_notes')
            .upsert({
                user_id: user.id,
                context_id: STATE.currentContextId,
                content: content,
                updated_at: new Date().toISOString()
            }, { onConflict: 'user_id, context_id' });

        if (error) throw error;

        statusText.textContent = 'Salvo';
        statusDot.className = 'status-dot saved';
    } catch (err) {
        console.error('[Notes] Error saving:', err);
        const statusText = document.querySelector('.status-text');
        if (statusText) statusText.textContent = 'Erro ao salvar';
    }
}

// Event Listeners for Notes
document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('notes-textarea');
    if (textarea) {
        textarea.addEventListener('input', () => {
            const statusDot = document.querySelector('.status-dot');
            if (statusDot) statusDot.className = 'status-dot saving';
            
            clearTimeout(STATE.notesTimeout);
            STATE.notesTimeout = setTimeout(saveNote, 1500);
        });
    }
});

// Helper to show/hide notes button
function updateNotesVisibility(show, contextId = null, label = 'Geral') {
    const btn = document.getElementById('btn-open-notes');
    if (!btn) return;

    if (show) {
        btn.classList.remove('hidden');
        if (contextId && contextId !== STATE.currentContextId) {
            STATE.currentContextId = contextId;
            const labelEl = document.getElementById('notes-context-label');
            if (labelEl) labelEl.textContent = label;
            loadNote(contextId);
        }
    } else {
        btn.classList.add('hidden');
        const sidebar = document.getElementById('notes-sidebar');
        if (sidebar) sidebar.classList.remove('active');
    }
}

window.toggleNotes = toggleNotes;
