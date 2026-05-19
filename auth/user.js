// auth/user.js - Gerenciamento de estado de usuário (Global Scope)
// Uses global window.supabase

// Estado global simples do usuário
let currentUser = null;
let userPlan = null;
let userSemester = null;
let userAvatarUrl = null;

/**
 * Busca o perfil completo do usuário na tabela public.profiles
 * @param {string} userId - ID do usuário autenticado
 * @returns {Promise<{plan: string, semester: number|null}>}
 */
let userUniversity = null;

/**
 * Busca o perfil completo do usuário na tabela public.profiles
 * @param {string} userId - ID do usuário autenticado
 * @returns {Promise<{plan: string, semester: number|null, university: string|null}>}
 */
async function fetchUserProfile(userId) {
    const { data, error } = await supabase
        .from('profiles')
        .select('plan, semester, university, premium_until, avatar_url')
        .eq('id', userId)
        .single();

    if (error) {
        console.error('Erro ao buscar perfil do usuário:', error);
        return { plan: 'free', semester: null, university: null, isExpired: false };
    }

    let plan = data?.plan || 'free';
    let isExpired = false;

    // Check expiration
    if (plan === 'premium' && data?.premium_until) {
        const expiresAt = new Date(data.premium_until);
        if (expiresAt < new Date()) {
            console.warn('[User] Plano Premium expirado em:', expiresAt);
            plan = 'free';
            isExpired = true;
        }
    }

    return {
        plan: plan,
        semester: data?.semester || null,
        university: data?.university || null,
        avatarUrl: data?.avatar_url || null,
        isExpired: isExpired
    };
}

let userIsExpired = false;

/**
 * Inicializa o usuário e carrega seu perfil.
 * Deve ser chamado ao carregar o app ou após login.
 * @returns {Promise<{user: object|null, plan: string|null, semester: number|null, university: string|null, isExpired: boolean}>}
 */
window.initUser = async function () {
    const session = await window.getSession();

    if (!session) {
        currentUser = null;
        userPlan = null;
        userSemester = null;
        userUniversity = null;
        userIsExpired = false;
        console.log('[User] Nenhum usuário logado');
        return { user: null, plan: null, semester: null, university: null, isExpired: false };
    }

    currentUser = session.user;
    const profile = await fetchUserProfile(currentUser.id);
    userPlan = profile.plan;
    userSemester = profile.semester;
    userUniversity = profile.university;
    userAvatarUrl = profile.avatarUrl;
    userIsExpired = profile.isExpired;

    console.log('[User] Usuário logado:', currentUser.email);
    console.log('[User] Plano:', userPlan, '| Semestre:', userSemester, '| Univ:', userUniversity);

    return { user: currentUser, plan: userPlan, semester: userSemester, university: userUniversity, avatarUrl: userAvatarUrl, isExpired: userIsExpired };
}

/**
 * Retorna se o plano está expirado
 * @returns {boolean}
 */
window.isPlanExpired = function () {
    if (window.isDevMode && window.isDevMode()) return false;
    return userIsExpired;
}

/**
 * Retorna o usuário atual (sem buscar novamente)
 * @returns {object|null}
 */
window.getUser = function () {
    return currentUser;
}

/**
 * Retorna o plano atual (sem buscar novamente)
 * @returns {string|null}
 */
window.getUserPlan = function () {
    return userPlan;
}

/**
 * Retorna o semestre atual (sem buscar novamente)
 * @returns {number|null}
 */
window.getUserSemester = function () {
    return userSemester;
}

/**
 * Retorna a universidade atual (sem buscar novamente)
 * @returns {string|null}
 */
window.getUserUniversity = function () {
    return userUniversity;
}

/**
 * Retorna a URL do avatar atual
 * @returns {string|null}
 */
window.getUserAvatarUrl = function () {
    return userAvatarUrl;
}

/**
 * Atualiza campos do perfil do usuário
 * @param {object} updates - Objeto com os campos para atualizar (semester, university, full_name, etc)
 * @returns {Promise<boolean>}
 */
window.updateUserProfile = async function (updates) {
    if (!currentUser) return false;

    const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', currentUser.id);

    if (error) {
        console.error('Erro ao atualizar perfil:', error);
        return false;
    }

    // Atualiza estado local
    if (updates.semester !== undefined) userSemester = updates.semester;
    if (updates.university !== undefined) userUniversity = updates.university;
    if (updates.plan !== undefined) userPlan = updates.plan;
    
    return true;
}

/**
 * Atualiza o semestre do usuário no Supabase e no estado local (Legado)
 * @param {number} newSemester 
 * @returns {Promise<boolean>} sucesso
 */
window.updateUserSemester = async function (newSemester) {
    return window.updateUserProfile({ semester: newSemester });
}

/**
 * Atualiza a URL do avatar do usuário
 * @param {string} url 
 * @returns {Promise<boolean>}
 */
window.updateUserAvatar = async function (url) {
    if (!currentUser) return false;

    const { error } = await supabase
        .from('profiles')
        .update({ avatar_url: url })
        .eq('id', currentUser.id);

    if (error) {
        console.error('Erro ao atualizar avatar:', error);
        return false;
    }

    userAvatarUrl = url;
    return true;
}

window.onAuthChange = function (callback) {
    supabase.auth.onAuthStateChange(async (event, session) => {
        console.log('[User] Auth state changed:', event);

        if (session?.user) {
            currentUser = session.user;
            const profile = await fetchUserProfile(currentUser.id);
            userPlan = profile.plan;
            userSemester = profile.semester;
            userUniversity = profile.university;
            userAvatarUrl = profile.avatarUrl;
            userIsExpired = profile.isExpired;
            console.log('[User] Perfil atualizado:', profile);
        } else {
            currentUser = null;
            userPlan = null;
            userSemester = null;
            userUniversity = null;
            userAvatarUrl = null;
            userIsExpired = false;
        }

        if (callback) {
            callback({ user: currentUser, plan: userPlan, semester: userSemester, university: userUniversity, avatarUrl: userAvatarUrl, isExpired: userIsExpired, event });
        }
    });
}

/**
 * Salva o progresso da unidade (Cloud Sync + Local)
 * @param {number} unitId 
 * @param {object} data - { last_question_index, last_block_index, completed_count }
 */
window.saveUnitProgress = async function (unitId, data) {
    const userId = currentUser?.id;
    const storageKey = `progress_unit_${unitId}`;
    
    // 1. Salvar Localmente (Sempre)
    localStorage.setItem(storageKey, JSON.stringify({
        ...data,
        updated_at: new Date().toISOString()
    }));

    // 2. Sincronizar com Supabase se logado
    if (userId) {
        const { error } = await supabase
            .from('user_progress')
            .upsert({
                user_id: userId,
                unit_id: unitId,
                last_question_index: data.last_question_index,
                last_block_index: data.last_block_index,
                completed_count: data.completed_count,
                updated_at: new Date().toISOString()
            }, {
                onConflict: 'user_id,unit_id'
            });

        if (error) {
            console.error('[Sync] Erro ao salvar progresso no Supabase:', error);
        } else {
            console.log('[Sync] Progresso salvo no Cloud para Unit:', unitId);
        }
    }
}

/**
 * Busca o progresso de uma unidade (Cloud ou Local)
 * @param {number} unitId 
 * @returns {Promise<object|null>}
 */
window.fetchUnitProgress = async function (unitId) {
    const userId = currentUser?.id;
    const storageKey = `progress_unit_${unitId}`;

    // Preferência 1: Supabase (se logado)
    if (userId) {
        const { data, error } = await supabase
            .from('user_progress')
            .select('*')
            .eq('user_id', userId)
            .eq('unit_id', unitId)
            .single();

        if (data && !error) {
            console.log('[Sync] Progresso carregado do Cloud para Unit:', unitId);
            // Atualizar cache local
            localStorage.setItem(storageKey, JSON.stringify(data));
            return data;
        }
    }

    // Preferência 2: Local Storage
    const localData = localStorage.getItem(storageKey);
    return localData ? JSON.parse(localData) : null;
}

/**
 * Busca todo o progresso do usuário para alimentar os cards
 * @returns {Promise<Array>}
 */
window.fetchAllProgress = async function () {
    const userId = currentUser?.id;
    if (!userId) return [];

    const { data, error } = await supabase
        .from('user_progress')
        .select('unit_id, completed_count')
        .eq('user_id', userId);

    if (error) {
        console.error('[Sync] Erro ao buscar progresso global:', error);
        return [];
    }

    return data || [];
}

/**
 * Busca o ranking global (Top 10) do Supabase
 * @returns {Promise<Array>}
 */
window.getLeaderboard = async function () {
    const { data, error } = await supabase
        .from('leaderboard')
        .select('*')
        .limit(10);
        
    if (error) {
        console.error('Erro ao buscar leaderboard:', error);
        return [];
    }
    
    return data || [];
}

/**
 * Atualiza o XP do usuário no banco (Adiciona XP)
 * @param {number} xpToAdd 
 * @returns {Promise<boolean>}
 */
window.updateUserXp = async function (xpToAdd) {
    if (!currentUser) return false;
    
    // Obtém o XP atual primeiro
    const { data: profile, error: readError } = await supabase
        .from('profiles')
        .select('xp, level')
        .eq('id', currentUser.id)
        .single();
        
    if (readError) {
        console.error('Erro ao ler perfil para XP:', readError);
        return false;
    }
    
    const newXp = (profile.xp || 0) + xpToAdd;
    const newLevel = Math.floor(newXp / 100) + 1;
    
    const { error: updateError } = await supabase
        .from('profiles')
        .update({ xp: newXp, level: newLevel, last_activity_at: new Date().toISOString() })
        .eq('id', currentUser.id);
        
    if (updateError) {
        console.error('Erro ao atualizar XP:', updateError);
        return false;
    }
    
    return true;
}
