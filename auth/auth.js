// auth/auth.js - Funções de autenticação (Global Scope)
// Uses global window.supabase

const SITE_URL = 'https://medpenguim2.netlify.app';
const APP_REDIRECT = `${SITE_URL}/app/index.html`;

async function getSession() {
    console.log('[AUTH] Getting session...');
    const { data, error } = await supabase.auth.getSession();
    if (error) console.error('[AUTH] Error getting session:', error);
    else console.log('[AUTH] Session retrieved:', data.session ? 'Active' : 'None');
    return data.session;
}

async function signIn(email, password) {
    console.log('[AUTH] SignIn with email:', email);
    try {
        const result = await supabase.auth.signInWithPassword({ email, password });
        console.log('[AUTH] SignIn result:', result.error ? 'ERROR' : 'SUCCESS');
        if (result.error) console.error('[AUTH] SignIn error:', result.error);
        return result;
    } catch (err) {
        console.error('[AUTH] SignIn exception:', err);
        throw err;
    }
}

async function signInWithGoogle() {
    console.log('[AUTH] Starting Google OAuth...');
    console.log('[AUTH] Redirect URL:', APP_REDIRECT);

    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: APP_REDIRECT
            }
        });

        if (error) {
            console.error('[AUTH] Google OAuth error:', error);
        } else {
            console.log('[AUTH] Google OAuth initiated successfully');
        }

        return { data, error };
    } catch (err) {
        console.error('[AUTH] Google OAuth exception:', err);
        throw err;
    }
}

async function signUp(email, password) {
    console.log('[AUTH] SignUp with email:', email);
    console.log('[AUTH] Email redirect URL:', APP_REDIRECT);

    try {
        const result = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: APP_REDIRECT
            }
        });

        console.log('[AUTH] SignUp result:', result.error ? 'ERROR' : 'SUCCESS');
        if (result.error) {
            console.error('[AUTH] SignUp error:', result.error);
        } else {
            console.log('[AUTH] User created:', result.data.user ? 'Yes' : 'No');
            console.log('[AUTH] Session created:', result.data.session ? 'Yes' : 'No (email confirmation required)');
        }

        return result;
    } catch (err) {
        console.error('[AUTH] SignUp exception:', err);
        throw err;
    }
}

async function signOut() {
    console.log('[AUTH] Signing out...');
    await supabase.auth.signOut();
    console.log('[AUTH] Redirecting to login...');
    window.location.href = '/login.html';
}

async function requireAuth() {
    console.log('[AUTH] Checking authentication requirement...');
    const session = await getSession();
    if (!session) {
        console.log('[AUTH] No session found, redirecting to login');
        window.location.href = '/login.html';
        return null;
    }
    console.log('[AUTH] Authentication verified');
    return session.user;
}

async function redirectIfAuth() {
    console.log('[AUTH] Checking if already authenticated...');
    const session = await getSession();
    if (session) {
        console.log('[AUTH] User already logged in, redirecting to app');
        window.location.href = '/app/index.html';
    } else {
        console.log('[AUTH] No active session');
    }
}

// Keep window globals for backward compatibility
window.getSession = getSession;
window.signIn = signIn;
window.signInWithGoogle = signInWithGoogle;
window.signUp = signUp;
window.signOut = signOut;
window.requireAuth = requireAuth;
window.redirectIfAuth = redirectIfAuth;
