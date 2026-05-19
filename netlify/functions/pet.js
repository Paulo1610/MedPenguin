const { createClient } = require('@supabase/supabase-js');

/**
 * Netlify Function: Pet API
 * Handles loading, adopting and updating the virtual pet status.
 */

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.handler = async (event, context) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, OPTIONS',
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

        // --- GET: Load Pet ---
        if (httpMethod === 'GET') {
            const { data, error } = await supabase
                .from('user_pets')
                .select('*')
                .eq('user_id', userId)
                .maybeSingle();

            if (error) throw error;
            return { statusCode: 200, headers, body: JSON.stringify(data) };
        }

        // --- POST: Adopt Pet ---
        if (httpMethod === 'POST') {
            const { name } = payload;
            if (!name) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Pet name is required' }) };

            const { data, error } = await supabase
                .from('user_pets')
                .insert([{ 
                    user_id: userId, 
                    pet_name: name,
                    coins: 50, 
                    happiness: 100,
                    energy: 100
                }])
                .select()
                .single();

            if (error) throw error;
            return { statusCode: 201, headers, body: JSON.stringify(data) };
        }

        // --- PATCH: Update Pet (Feed/Play/Reward) ---
        if (httpMethod === 'PATCH') {
            const { updates, action, amount } = payload;
            
            let query = supabase.from('user_pets');
            let result;

            if (action === 'incrementCoins') {
                // Fetch current coins first (or use a SQL increment if possible)
                // For simplicity here, we'll fetch and update
                const { data: pet } = await query.select('coins').eq('user_id', userId).single();
                if (!pet) throw new Error('Pet not found');
                
                result = await query.update({ coins: (pet.coins || 0) + (amount || 1) }).eq('user_id', userId).select().single();
            } else {
                if (!updates) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Updates are required' }) };
                result = await query.update(updates).eq('user_id', userId).select().single();
            }

            if (result.error) throw result.error;
            return { statusCode: 200, headers, body: JSON.stringify(result.data) };
        }


        return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };

    } catch (error) {
        console.error('[Pet API Error]:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Erro interno no servidor de Pet.' })
        };
    }
};
