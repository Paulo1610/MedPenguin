/**
 * Netlify Function: Calendar Presets API
 * Returns standard academic calendars for supported universities.
 */

const UCP_PARAGUAY_2026 = [
    { date: '2026-01-05', title: 'Inicio de Matrículas', type: 'evento', description: 'Período para matriculación administrativa.' },
    { date: '2026-02-02', title: 'Inicio de Clases (1º Semestre)', type: 'evento', description: 'Comienzo oficial de las actividades académicas.' },
    { date: '2026-04-01', title: 'Semana Santa (Receso)', type: 'feriado', description: 'Receso académico hasta el 05/04.' },
    { date: '2026-04-02', title: 'Semana Santa (Receso)', type: 'feriado' },
    { date: '2026-04-03', title: 'Semana Santa (Receso)', type: 'feriado' },
    { date: '2026-04-04', title: 'Semana Santa (Receso)', type: 'feriado' },
    { date: '2026-04-05', title: 'Semana Santa (Receso)', type: 'feriado' },
    { date: '2026-04-20', title: '1ª Época de Exámenes Parciales', type: 'prova', description: 'Periodo de exámenes parciales.' },
    { date: '2026-05-01', title: 'Día del Trabajador (Feriado)', type: 'feriado' },
    { date: '2026-05-14', title: 'Día de la Independencia (Feriado)', type: 'feriado' },
    { date: '2026-05-15', title: 'Día de la Independencia (Feriado)', type: 'feriado' },
    { date: '2026-06-15', title: '2ª Época de Exámenes Parciales', type: 'prova' },
    { date: '2026-07-06', title: 'Exámenes Finales (1ª Oportunidad)', type: 'prova' },
    { date: '2026-07-20', title: 'Receso de Invierno', type: 'feriado', description: 'Hasta el 31/07.' },
    { date: '2026-08-03', title: 'Inicio de Clases (2º Semestre)', type: 'evento' },
    { date: '2026-08-15', title: 'Fundación de Asunción (Feriado)', type: 'feriado' },
    { date: '2026-09-21', title: '1ª Época de Exámenes Parciales (2º Sem.)', type: 'prova' },
    { date: '2026-09-29', title: 'Batalla de Boquerón (Feriado)', type: 'feriado' },
    { date: '2026-11-09', title: '2ª Época de Exámenes Parciales (2º Sem.)', type: 'prova' },
    { date: '2026-11-30', title: 'Exámenes Finales (1ª Op - 2º Sem.)', type: 'prova' },
    { date: '2026-12-14', title: 'Exámenes Finales (2ª Oportunidad)', type: 'prova' },
    { date: '2026-12-25', title: 'Navidad (Feriado)', type: 'feriado' }
];

exports.handler = async (event) => {
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
        const { university } = event.queryStringParameters || {};

        if (university && university.toUpperCase().includes('UCP')) {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify(UCP_PARAGUAY_2026)
            };
        }

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify([])
        };

    } catch (error) {
        console.error('[Calendar Presets Error]:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Erro ao carregar calendários predefinidos.' })
        };
    }
};
