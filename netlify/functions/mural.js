const { createClient } = require('@supabase/supabase-js');

/**
 * Netlify Function: Mural API
 * Handles fetching, submitting and reacting to mural posts
 */

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.handler = async (event, context) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    try {
        // --- GET: List Posts ---
        if (event.httpMethod === 'GET') {
            const { data, error } = await supabase
                .from('mural_posts')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(50);

            if (error) throw error;
            return { statusCode: 200, headers, body: JSON.stringify(data) };
        }

        // --- POST: New Post ---
        if (event.httpMethod === 'POST') {
            const body = JSON.parse(event.body);
            const { content, mood, user_id } = body;

            if (!content || content.length > 500) {
                return { statusCode: 400, headers, body: JSON.stringify({ error: 'Desabafo inválido ou muito longo.' }) };
            }

            const { data, error } = await supabase
                .from('mural_posts')
                .insert([{ content, mood: mood || 'cansado', user_id }])
                .select();

            if (error) throw error;
            return { statusCode: 201, headers, body: JSON.stringify(data[0]) };
        }

        // --- PATCH: Reactions ---
        if (event.httpMethod === 'PATCH') {
            const body = JSON.parse(event.body);
            const { postId, reactionColumn, count } = body;

            if (!postId || !reactionColumn) {
                return { statusCode: 400, headers, body: JSON.stringify({ error: 'Post ID e coluna são obrigatórios.' }) };
            }

            const { data, error } = await supabase
                .from('mural_posts')
                .update({ [reactionColumn]: count })
                .eq('id', postId)
                .select();

            if (error) throw error;
            return { statusCode: 200, headers, body: JSON.stringify(data[0]) };
        }

        return { statusCode: 405, headers, body: JSON.stringify({ error: 'Método não permitido.' }) };

    } catch (error) {
        console.error('[Mural API Error]:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Erro interno no servidor de Mural.' })
        };
    }
};
