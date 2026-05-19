/**
 * Material Didático — Metodologia Científica (2º Semestre)
 */
window.RESUMOS_METHODOLOGY = {

    601: {
        title: "Delineamentos de Pesquisa e Epidemiologia",
        content: `
<div class="resumo-header-main">
    <h2>🧪 A Arquitetura da Pesquisa Científica</h2>
    <p>O tipo de estudo determina a força da evidência. Aprender a classificar é essencial para a prática baseada em evidências.</p>
</div>
<div class="resumo-section">
    <h3>📊 Estudos Observacionais</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">📸</div><div class="flip-label">Transversal (Cross-Sectional)</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">Fotografia de um momento. Mede exposição e desfecho ao mesmo tempo. Calcula <strong>Prevalência</strong>. Rápido e barato. Limitação: não determina causalidade (não sabe o que veio primeiro). Ex: Inquérito de saúde nacional.</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">⏪</div><div class="flip-label">Caso-Controle</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">Olha para o <strong>passado</strong>. Compara quem tem a doença (casos) com quem não tem (controles) em relação a exposições passadas. Ideal para doenças <strong>raras</strong>. Medida de associação: <strong>Odds Ratio (OR)</strong>. Sujeito a viés de memória.</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">⏩</div><div class="flip-label">Coorte</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">Acompanha grupos <strong>para o futuro</strong>. Expostos vs Não-expostos → vê quem desenvolve a doença. Mede <strong>Incidência</strong> e <strong>Risco Relativo (RR)</strong>. Pode ser prospectiva ou retrospectiva. Caro e lento. Melhor evidência observacional.</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">📋</div><div class="flip-label">Ecológico e Transversal</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">Estudo ecológico: usa populações como unidade (não indivíduos). Erro clássico: <strong>Falácia Ecológica</strong> — concluir sobre indivíduos com dados de grupos. Ex: "Países com mais TVs têm mais câncer" (confundidor: riqueza).</div></div></div>
    </div>
</div>
<div class="resumo-section">
    <h3>🏆 A Pirâmide de Evidências</h3>
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>⬆️ Topo — Metanálise e Revisão Sistemática:</strong> Combina dados de múltiplos ECRs. Maior poder estatístico. Padrão máximo de evidência.</div>
        <div class="resumo-timeline-item"><strong>Ensaio Clínico Randomizado (ECR):</strong> Padrão ouro para intervenções. Randomização elimina confundidores. Cegamento reduz viés.</div>
        <div class="resumo-timeline-item"><strong>Estudos de Coorte:</strong> Melhor observacional. Permite calcular RR e incidência.</div>
        <div class="resumo-timeline-item"><strong>Caso-Controle:</strong> Bom para doenças raras. Calcula OR.</div>
        <div class="resumo-timeline-item"><strong>⬇️ Base — Transversal, Relatos de Caso, Opinião de Especialista:</strong> Menor força de evidência. Gera hipóteses, não comprova causalidade.</div>
    </div>
</div>
<div class="resumo-section">
    <h3>🧪 Quiz Clínico</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Um estudo acompanha 1.000 fumantes e 1.000 não-fumantes por 20 anos. Ao final, 150 fumantes e 30 não-fumantes desenvolvem câncer de pulmão. Qual é o Risco Relativo (RR) e como interpretá-lo?</div>
        <div class="resumo-quiz-answer"><strong>RR = (150/1000) ÷ (30/1000) = 0,15 ÷ 0,03 = 5.</strong> Interpretação: Fumantes têm <strong>5 vezes mais risco</strong> de desenvolver câncer de pulmão do que não-fumantes. RR > 1 indica fator de risco. RR = 1 indica ausência de associação. RR < 1 indica fator protetor. Esse é um estudo de <strong>Coorte Prospectivo</strong>.</div>
    </div>
</div>`
    },

    602: {
        title: "Medicina Baseada em Evidências e Bioestatística Aplicada",
        content: `
<div class="resumo-header-main">
    <h2>📐 Os Números que Definem a Medicina Moderna</h2>
    <p>Sensibilidade, Especificidade, VPP, VPN — as 4 medidas que todo médico precisa dominar para interpretar exames.</p>
</div>
<div class="resumo-section">
    <h3>🎯 A Tabela 2×2: A Base de Tudo</h3>
    <div class="resumo-accordion open">
        <div class="resumo-accordion-header">
            <h4>Como montar a Tabela 2×2 (Clique)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>A tabela cruza o resultado do <strong>teste</strong> (positivo/negativo) com o <strong>padrão-ouro</strong> (doente/sadio):</p>
            <ul>
                <li><strong>VP (Verdadeiro Positivo):</strong> Teste (+) e realmente doente.</li>
                <li><strong>FP (Falso Positivo):</strong> Teste (+) mas sadio (erro tipo I).</li>
                <li><strong>FN (Falso Negativo):</strong> Teste (-) mas doente (erro tipo II — o mais perigoso!).</li>
                <li><strong>VN (Verdadeiro Negativo):</strong> Teste (-) e realmente sadio.</li>
            </ul>
        </div>
    </div>
</div>
<div class="resumo-section">
    <h3>📏 As 4 Medidas de Desempenho do Teste</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">🔍</div><div class="flip-label">Sensibilidade</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">VP / (VP + FN). Capacidade de identificar corretamente os <strong>doentes</strong>. Alta sensibilidade = poucos Falsos Negativos. Use para <strong>rastreamento</strong> (não pode perder doentes). Lembrete: <strong>SnNout</strong> — Se alta Sensibilidade e Negativo, descarta a doença.</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">✅</div><div class="flip-label">Especificidade</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">VN / (VN + FP). Capacidade de identificar corretamente os <strong>sadios</strong>. Alta especificidade = poucos Falsos Positivos. Use para <strong>confirmação diagnóstica</strong>. Lembrete: <strong>SpPin</strong> — Se alta Especificidade e Positivo, confirma a doença.</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">➕</div><div class="flip-label">VPP (Valor Preditivo +)</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">VP / (VP + FP). De todos que testaram positivo, quantos são de fato doentes? Depende da <strong>prevalência</strong> — quanto mais rara a doença, menor o VPP (mais falsos positivos).</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">➖</div><div class="flip-label">VPN (Valor Preditivo -)</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">VN / (VN + FN). De todos que testaram negativo, quantos são realmente sadios? Alta prevalência reduz o VPN. O mais importante em rastreamento — quer garantir que o negativo seja mesmo sadio.</div></div></div>
    </div>
</div>
<div class="resumo-section">
    <h3>🧪 Quiz Clínico</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Um novo teste para HIV tem Sensibilidade de 99% e Especificidade de 95%. Numa população de baixo risco com prevalência de 0,1%, você aplica o teste em 10.000 pessoas. Quantos Falsos Positivos haverá e por que isso é um problema clínico?</div>
        <div class="resumo-quiz-answer">Dos 10.000 testados: ~10 são HIV+ (prevalência 0,1%). O teste detecta 9,9 (≈10 VP). Dos 9.990 sadios, 5% dão falso positivo = <strong>499 Falsos Positivos</strong>. Portanto, de ~509 resultados positivos, apenas 10 são verdadeiros (~VPP=2%). Isso significa que <strong>98% dos positivos em população de baixo risco são falsos</strong> — causando ansiedade, estigma e exames desnecessários. Por isso, testes de rastreamento positivos devem ser confirmados com testes mais específicos.</div>
    </div>
</div>`
    },

    603: {
        title: "Ética em Pesquisa e Redação Científica",
        content: `
<div class="resumo-header-main">
    <h2>📝 A Ética que Sustenta a Ciência</h2>
    <p>Os princípios de Belmont, o TCLE e as diretrizes que protegem participantes de pesquisa.</p>
</div>
<div class="resumo-section">
    <h3>⚖️ Os Princípios de Belmont (1979)</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">🤝</div><div class="flip-label">Respeito às Pessoas (Autonomia)</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">Os indivíduos devem ser tratados como agentes autônomos. Aqueles com autonomia reduzida (crianças, cognitivamente prejudicados) merecem proteção especial. Operacionaliza-se pelo <strong>Consentimento Livre e Esclarecido (TCLE)</strong>.</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">❤️</div><div class="flip-label">Beneficência</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">Maximizar benefícios e minimizar danos. Não é apenas "fazer o bem" — inclui <strong>não maleficência</strong> (não causar dano). A pesquisa deve ter relação risco/benefício favorável e justificável.</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">⚖️</div><div class="flip-label">Justiça</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">Distribuição equitativa dos ônus e benefícios da pesquisa. Grupos vulneráveis (pobres, presos) não devem ser escolhidos por conveniência para suportar os riscos enquanto outros colhem os benefícios.</div></div></div>
    </div>
</div>
<div class="resumo-section">
    <h3>📋 Estrutura do Artigo Científico (IMRaD)</h3>
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>I — Introdução:</strong> Por que fizemos? Contextualiza o problema, apresenta a hipótese e o objetivo do estudo.</div>
        <div class="resumo-timeline-item"><strong>M — Métodos:</strong> Como fizemos? Tipo de estudo, população, critérios de inclusão/exclusão, análise estatística. Deve ser reproduzível.</div>
        <div class="resumo-timeline-item"><strong>R — Resultados:</strong> O que encontramos? Dados brutos apresentados objetivamente. Sem interpretação — tabelas e figuras.</div>
        <div class="resumo-timeline-item"><strong>aD — Discussão:</strong> O que significa? Interpretação dos resultados, comparação com literatura, limitações do estudo.</div>
        <div class="resumo-timeline-item"><strong>Conclusão:</strong> Responde diretamente ao objetivo. Sugere implicações clínicas e próximos estudos necessários.</div>
    </div>
</div>
<div class="resumo-section">
    <h3>🧪 Quiz Clínico</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Um pesquisador faz um ECR sobre novo antibiótico. A análise interina mostra que o antibiótico é claramente superior. O comitê de segurança recomenda interromper o estudo antes do prazo. Isso é ético ou antiético? Justifique.</div>
        <div class="resumo-quiz-answer"><strong>Ético — e obrigatório.</strong> O princípio da <strong>Beneficência/Não-maleficência</strong> exige que, quando há clara superioridade de um braço do estudo, os participantes no grupo controle não podem continuar sendo privados do tratamento eficaz. O <strong>Comitê de Monitoramento de Dados e Segurança (DSMB)</strong> existe exatamente para isso — interromper estudos por eficácia comprovada ou por dano excessivo. Continuar seria antiético.</div>
    </div>
</div>`
    }
};
