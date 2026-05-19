/**
 * MedPenguim - Configuração Centralizada
 * Todas as credenciais e configurações globais ficam aqui.
 */
const MEDPENGUIM_CONFIG = {
    supabaseUrl: 'YOUR_SUPABASE_URL',
    supabaseKey: 'YOUR_SUPABASE_PUBLISHABLE_KEY',
    siteUrl: (window.location.hostname === 'medpenguin.com.br' || window.location.hostname === 'www.medpenguin.com.br') 
             ? 'https://medpenguin.com.br' 
             : window.location.origin
};

/**
 * Valida CPF com algoritmo de dígitos verificadores.
 * @param {string} cpf - CPF com ou sem formatação
 * @returns {boolean} true se válido
 */
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) return false;

    // Rejeitar CPFs com todos os dígitos iguais (ex: 111.111.111-11)
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    // Validar primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    // Validar segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
}

