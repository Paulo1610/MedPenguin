/**
 * access.js - Módulo central de regras de acesso a conteúdo premium
 * 
 * Define quais recursos são premium e expõe a função canAccess()
 * para verificação de permissões.
 */

// Lista de recursos que requerem plano premium
const PREMIUM_RESOURCES = [
    'bloco-502'  // Bioestatística - Probabilidade e Distribuições
];

// Recursos gratuitos - Uma matéria por semestre
const FREE_SUBJECTS = [
    'anatomy1',    // S1 - Anatomia I
    'histology2',  // S2 - Histologia II
    'physio_med'   // S3 - Fisiologia Médica (Fisiologia I)
];

const IS_LOCAL = ["localhost", "127.0.0.1"].includes(window.location.hostname) || window.location.protocol === "file:";

/**
 * Verifica se o modo de desenvolvimento está ativo.
 * Permite desativar via console: localStorage.setItem('force_prod', 'true')
 * @returns {boolean}
 */
window.isDevMode = function () {
    const forceProd = localStorage.getItem('force_prod') === 'true';
    if (IS_LOCAL && !forceProd) {
        return true;
    }
    return false;
}

// Log informativo para o usuário
if (window.isDevMode()) {
    console.log("%c🛠️ MODO DESENVOLVIMENTO ATIVO: Todos os conteúdos estão liberados localmente.", "color: #3b82f6; font-weight: bold;");
    console.log("Para testar os bloqueios premium reais, use: localStorage.setItem('force_prod', 'true') e recarregue a página.");
}

/**
 * Verifica se o usuário atual pode acessar um recurso.
 * 
 * @param {string} resource - Identificador do recurso (ex: 'semester-1', 'subject:anatomy1')
 * @returns {boolean} - true se pode acessar, false se bloqueado
 */
window.canAccess = function (resource) {
    // DEV_MODE: Libera tudo localmente
    if (window.isDevMode()) return true;

    const userPlan = window.currentUserPlan;

    // Se o usuário é Premium, tem acesso a tudo
    if (userPlan === 'premium') return true;

    // Se for uma das matérias gratuitas liberadas
    if (resource.startsWith('subject:')) {
        const subjectId = resource.replace('subject:', '');
        if (FREE_SUBJECTS.includes(subjectId)) return true;
    }

    // Semesters: liberar 1º, 2º e 3º semestre (possuem matéria gratuita)
    if (resource.startsWith('semester:')) {
        const semId = parseInt(resource.replace('semester:', ''));
        if (userPlan === 'premium') return true;
        return semId >= 1 && semId <= 3;
    }

    // Fallback: blocos/recursos específicos que só premium pode acessar
    if (resource === 'bloco-502') {
        return userPlan === 'premium';
    }

    // Por padrão, usuários free não têm acesso a recursos não-explicitamente liberados
    return userPlan === 'premium';
}

/**
 * Verifica se um recurso é premium (independente do plano do usuário)
 * 
 * @param {string} resource - Identificador do recurso
 * @returns {boolean} - true se é recurso premium
 */
window.isPremiumResource = function (resource) {
    return PREMIUM_RESOURCES.includes(resource);
}

/**
 * Retorna a lista de todos os recursos premium
 * 
 * @returns {string[]} - Array com os identificadores dos recursos premium
 */
window.getPremiumResources = function () {
    return [...PREMIUM_RESOURCES];
}
