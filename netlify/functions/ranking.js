const { createClient } = require('@supabase/supabase-js');

/**
 * Netlify Function: Ranking API
 * Fetches the global leaderboard (Top 10)
 */

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.handler = async (event, context) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    try {
        // Busca o ranking global do Supabase usando Service Role (ignora RLS)
        const { data, error } = await supabase
            .from('leaderboard')
            .select('*')
            .limit(10);

        if (error) throw error;

        // Opcional: Adicionar cache-control para melhorar a performance
        // headers['Cache-Control'] = 'public, max-age=60'; // Cache de 1 minuto

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(data)
        };

    } catch (error) {
        console.error('[Ranking API Error]:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Erro ao carregar ranking.' })
        };
    }
};
