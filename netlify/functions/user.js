const { createClient } = require('@supabase/supabase-js');

/**
 * Netlify Function: User Profile API
 * Handles updating user XP, level, and other profile details.
 */

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.handler = async (event, context) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'GET, PATCH, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    try {
        const { httpMethod, body, queryStringParameters } = event;
        const payload = body ? JSON.parse(body) : {};
        const userId = queryStringParameters?.userId || payload.userId;

        if (!userId) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'User ID is required' }) };
        }

        // --- GET: Fetch Profile ---
        if (httpMethod === 'GET') {
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', userId)
                .single();

            if (error) throw error;
            return { statusCode: 200, headers, body: JSON.stringify(data) };
        }

        // --- PATCH: Update Profile (XP, Level, etc.) ---
        if (httpMethod === 'PATCH') {
            const { updates, action, xpToAdd } = payload;

            let finalUpdates = updates || {};

            if (action === 'addXp' && xpToAdd) {
                // Fetch current XP/Level
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('xp, level')
                    .eq('id', userId)
                    .single();
                
                if (profile) {
                    const newXp = (profile.xp || 0) + xpToAdd;
                    const newLevel = Math.floor(newXp / 100) + 1;
                    finalUpdates = { 
                        ...finalUpdates,
                        xp: newXp, 
                        level: newLevel, 
                        last_activity_at: new Date().toISOString() 
                    };
                }
            }

            const { data, error } = await supabase
                .from('profiles')
                .update(finalUpdates)
                .eq('id', userId)
                .select()
                .single();

            if (error) throw error;
            return { statusCode: 200, headers, body: JSON.stringify(data) };
        }

        return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };

    } catch (error) {
        console.error('[User API Error]:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Erro ao processar perfil do usuário.' })
        };
    }
};
