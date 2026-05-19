/**
 * Material Didático Altamente Interativo — Histologia II (2º Semestre)
 * Conteúdo PROFUNDO convertido em componentes de retenção ativa.
 */
window.RESUMOS_HISTOLOGY2 = {

    200: {
        title: "Quiz Geral: Revisão Integrada de Histologia II",
        content: `
<div class="resumo-header-main">
    <h2>🎯 Master Quiz: Histologia de Sistemas</h2>
    <p>Uma revisão rápida dos pontos mais críticos que caem em prova. Teste seu conhecimento antes do simulado.</p>
</div>

<div class="resumo-section">
    <h3>🔍 Flash-Revisão de Estruturas Chave</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🫁</div>
                    <div class="flip-label">Pneumócitos Tipo II</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    Responsáveis pela produção do <strong>Surfactante</strong>. Eles impedem que o alvéolo colapse (feche) durante a expiração. Se faltarem, ocorre a Síndrome do Desconforto Respiratório.
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🥩</div>
                    <div class="flip-label">Células Parietais (Estômago)</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    Localizadas nas glândulas gástricas, secretam <strong>Ácido Clorídrico (HCl)</strong> e o <strong>Fator Intrínseco</strong> (essencial para absorver Vitamina B12).
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">💧</div>
                    <div class="flip-label">Podócitos (Rim)</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    Células do folheto visceral da cápsula de Bowman. Seus "pés" (pedicelos) formam a fenda de filtração que impede proteínas de saírem na urina.
                </div>
            </div>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>⚔️ Duelo de Glândulas Endócrinas</h3>
    <div class="resumo-compare">
        <div class="resumo-compare-item" style="--compare-color: #ef4444">
            <h5>Adrenal (Córtex)</h5>
            <p><strong>Zonas de Secreção:</strong> Glomerulosa (Aldosterona), Fasciculada (Cortisol) e Reticular (Andrógenos). Origem mesodérmica.</p>
        </div>
        <div class="resumo-compare-item" style="--compare-color: #3b82f6">
            <h5>Adrenal (Medula)</h5>
            <p><strong>Células Cromafins:</strong> Secretam Adrenalina e Noradrenalina. É basicamente um gânglio simpático modificado. Origem na Crista Neural.</p>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🧪 Caso Clínico Rápido</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Um corte histológico mostra um órgão com epitélio pseudoestratificado ciliado, presença de placas de cartilagem hialina e glândulas seromucosas. Que órgão é este?</div>
        <div class="resumo-quiz-answer"><strong>Brônquio.</strong> A presença de <strong>placas de cartilagem</strong> é o diferencial. A traqueia tem anéis em "C", e os bronquíolos já não possuem mais cartilagem nem glândulas.</div>
    </div>
</div>
`
    },

    203: {
        title: "Digestório e Respiratório",
        content: `
<div class="resumo-header-main">
    <h2>🍽️ Trato Digestório e Pulmões</h2>
    <p>Do esôfago aos alvéolos. Entenda a transição de epitélios e a especialização funcional.</p>
</div>

<div class="resumo-section">
    <h3>🧱 As 4 Camadas do Tubo Digestivo</h3>
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>1. Mucosa:</strong> Epitélio, lâmina própria e muscular da mucosa. Função de absorção e proteção.</div>
        <div class="resumo-timeline-item"><strong>2. Submucosa:</strong> Tecido conjuntivo denso com vasos e o <em>Plexo de Meissner</em> (controle glandular).</div>
        <div class="resumo-timeline-item"><strong>3. Muscular Externa:</strong> Duas camadas de músculo com o <em>Plexo de Auerbach</em> (peristaltismo).</div>
        <div class="resumo-timeline-item"><strong>4. Serosa ou Adventícia:</strong> Capa externa de revestimento.</div>
    </div>
</div>

<div class="resumo-section">
    <h3>🫁 A Árvore Respiratória</h3>
    <div class="resumo-accordion open">
        <div class="resumo-accordion-header">
            <h4>Transição de Epitélio (Clique para ver)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>Conforme descemos para os pulmões, o epitélio muda para permitir trocas gasosas:</p>
            <ul>
                <li><strong>Traqueia/Brônquios:</strong> Pseudoestratificado Ciliado com células caliciformes.</li>
                <li><strong>Bronquíolos:</strong> Simples Cúbico (perdem cílios e glândulas). Aparecem as <em>Células de Clara</em>.</li>
                <li><strong>Alvéolos:</strong> Simples Pavimentoso (Pneumócitos I e II) para difusão ultra-rápida de gases.</li>
            </ul>
        </div>
    </div>
</div>
`
    },

    204: {
        title: "Urinário e Endócrino",
        content: `
<div class="resumo-header-main">
    <h2>💧 Filtração Renal e Controle Hormonal</h2>
    <p>O néfron como unidade mestre e as glândulas que regem o corpo.</p>
</div>

<div class="resumo-section">
    <h3>🔬 O Néfron: Fábrica de Urina</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🕸️</div>
                    <div class="flip-label">Corpúsculo Renal</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    Composto pelo Glomérulo e Cápsula de Bowman. É o local da filtração inicial do plasma.
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🌀</div>
                    <div class="flip-label">Túbulo Contorcido Proximal</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    Reabsorve 100% da glicose e aminoácidos. Tem uma borda em escova (microvilosidades) imensa para aumentar a área de absorção.
                </div>
            </div>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🦋 Tireoide: A Orquestradora</h3>
    <div class="resumo-compare">
        <div class="resumo-compare-item" style="--compare-color: #3b82f6">
            <h5>Células Foliculares</h5>
            <p>Organizadas em folículos cheios de coloide. Produzem T3 e T4, que controlam o metabolismo basal.</p>
        </div>
        <div class="resumo-compare-item" style="--compare-color: #ec4899">
            <h5>Células Parafoliculares (C)</h5>
            <p>Ficam entre os folículos. Secretam <strong>Calcitonina</strong>, que baixa o cálcio no sangue.</p>
        </div>
    </div>
</div>
`
    },

    205: {
        title: "Reprodutor e Tegumentar",
        content: `
<div class="resumo-header-main">
    <h2>🧬 Reprodução e a Barreira da Pele</h2>
    <p>A gametogênese e as camadas de proteção do maior órgão do corpo.</p>
</div>

<div class="resumo-section">
    <h3>🥚 Sistema Reprodutor Feminino</h3>
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>Folículo Primordial:</strong> Oócito parado na meiose cercado por células pavimentosas.</div>
        <div class="resumo-timeline-item"><strong>Folículo Antral:</strong> Aparece uma cavidade cheia de líquido (Antro).</div>
        <div class="resumo-timeline-item"><strong>Corpo Lúteo:</strong> O que sobra após a ovulação. Secreta progesterona para manter o útero pronto para o bebê.</div>
    </div>
</div>

<div class="resumo-section">
    <h3>🛡️ Pele: Epiderme e seus Estratos</h3>
    <div class="resumo-accordion">
        <div class="resumo-accordion-header">
            <h4>As 5 Camadas da Epiderme (Clique para listar)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <ol>
                <li><strong>Basal:</strong> Células-tronco e Melanócitos.</li>
                <li><strong>Espinhoso:</strong> Desmossomos fortes (Células de Langerhans vivem aqui).</li>
                <li><strong>Granuloso:</strong> Grânulos de queratohialina.</li>
                <li><strong>Lúcido:</strong> Apenas em pele grossa (palmas e plantas).</li>
                <li><strong>Córneo:</strong> Células mortas cheias de queratina.</li>
            </ol>
        </div>
    </div>
</div>
`
    }
};
