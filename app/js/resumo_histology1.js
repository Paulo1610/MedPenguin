/**
 * Material Didático Altamente Interativo — Histologia I (1º Semestre)
 * Conteúdo PROFUNDO convertido em componentes de retenção ativa.
 */
window.RESUMOS_HISTOLOGY1 = {

    300: {
        title: "Introdução à Histologia e Métodos",
        content: `
<div class="resumo-header-main">
    <h2>🔬 A Arte de Ver o Invisível</h2>
    <p>Entenda como as lâminas são preparadas e os conceitos básicos de coloração.</p>
</div>

<div class="resumo-section">
    <h3>⚙️ Preparo da Lâmina (O Caminho do Tecido)</h3>
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>1. Fixação:</strong> Uso de Formol para "congelar" a vida e evitar que as enzimas comam a célula.</div>
        <div class="resumo-timeline-item"><strong>2. Desidratação e Inclusão:</strong> O tecido é embebido em Parafina para ficar duro o suficiente para o corte.</div>
        <div class="resumo-timeline-item"><strong>3. Microtomia:</strong> Cortes ultra-finos (micrometros) para a luz passar.</div>
        <div class="resumo-timeline-item"><strong>4. Coloração (H&E):</strong> Hematoxilina (azul/roxo) cora o núcleo (ácido). Eosina (rosa) cora o citoplasma (básico).</div>
    </div>
</div>
`
    },

    301: {
        title: "Tecidos Epiteliais",
        content: `
<div class="resumo-header-main">
    <h2>🧱 Tecido Epitelial: Revestimento e Glândulas</h2>
    <p>Avascular e polarizado. Aprenda as classificações e especializações de membrana.</p>
</div>

<div class="resumo-section">
    <h3>🛡️ Características do Epitélio</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🩸</div>
                    <div class="flip-label">Nutrição Avascular</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    O epitélio não tem vasos. Ele se nutre por <strong>Difusão</strong> a partir do tecido conjuntivo subjacente (Lâmina Própria).
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🚬</div>
                    <div class="flip-label">Pseudoestratificado Ciliado</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    <strong>Epitélio Respiratório.</strong> Parece estratificado mas todas as células tocam a lâmina basal. Tem cílios para varrer muco.
                </div>
            </div>
        </div>
    </div>
</div>
`
    },

    302: {
        title: "Tecidos Conjuntivos",
        content: `
<div class="resumo-header-main">
    <h2>🕸️ O Tecido Conjuntivo Propriamente Dito</h2>
    <p>Matriz extracelular e as células de defesa e suporte.</p>
</div>

<div class="resumo-section">
    <h3>🔍 Frouxo vs Denso</h3>
    <div class="resumo-compare">
        <div class="resumo-compare-item" style="--compare-color: #3b82f6">
            <h5>Conjuntivo Frouxo</h5>
            <p>Muitas células e pouca fibra. Flexível e bem irrigado. Típico da derme papilar e abaixo de epitélios.</p>
        </div>
        <div class="resumo-compare-item" style="--compare-color: #ef4444">
            <h5>Conjuntivo Denso</h5>
            <p>Muitas fibras (Colágeno Tipo I) e poucas células. Pode ser <strong>Modelado</strong> (tendões) ou <strong>Não-modelado</strong> (derme profunda).</p>
        </div>
    </div>
</div>
`
    },

    303: {
        title: "Tecidos Conjuntivos Especializados",
        content: `
<div class="resumo-header-main">
    <h2>🦴 Adiposo, Cartilaginoso e Ósseo</h2>
    <p>Quando o conjuntivo endurece ou armazena energia.</p>
</div>

<div class="resumo-section">
    <h3>⚙️ Células do Osso</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🏗️</div>
                    <div class="flip-label">Osteoblastos</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    Construtores. Secretam a matriz óssea (osteoide).
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🚜</div>
                    <div class="flip-label">Osteoclastos</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    Destruidores. Células gigantes multinucleadas que reabsorvem o osso para remodelagem.
                </div>
            </div>
        </div>
    </div>
</div>
`
    },

    304: {
        title: "Tecido Muscular",
        content: `
<div class="resumo-header-main">
    <h2>💪 Contraindo para a Vida</h2>
    <p>Esquelético, Cardíaco e Liso. Identifique as estrias e núcleos.</p>
</div>

<div class="resumo-section">
    <h3>⚔️ Diferencial Microscópico</h3>
    <div class="resumo-accordion open">
        <div class="resumo-accordion-header">
            <h4>Tipos de Músculo (Clique)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <ul>
                <li><strong>Esquelético:</strong> Estriado, células longas, núcleos periféricos múltiplos.</li>
                <li><strong>Cardíaco:</strong> Estriado, células ramificadas, 1-2 núcleos centrais, Discos Intercalares.</li>
                <li><strong>Liso:</strong> Sem estrias, células fusiformes, núcleo central.</li>
            </ul>
        </div>
    </div>
</div>
`
    },

    305: {
        title: "Tecido Nervoso",
        content: `
<div class="resumo-header-main">
    <h2>🧠 A Rede de Comunicação</h2>
    <p>Neurônios e Células da Glia. A fiação elétrica do corpo humano.</p>
</div>

<div class="resumo-section">
    <h3>⚡ A Neuroglia: O Exército de Suporte</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">⭐️</div>
                    <div class="flip-label">Astrócitos</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    Formam a Barreira Hematoencefálica e sustentam os neurônios.
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🌭</div>
                    <div class="flip-label">Oligodendrócitos</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    Produzem a bainha de mielina no Sistema Nervoso Central.
                </div>
            </div>
        </div>
    </div>
</div>
`
    },

    306: {
        title: "Revisão e Correlação Histológica",
        content: `
<div class="resumo-header-main">
    <h2>🎯 Resumo Integrado: Histologia Básica</h2>
    <p>Consolidação dos 4 tecidos básicos e correlação clínica.</p>
</div>

<div class="resumo-section">
    <h3>🧪 Teste de Identificação</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Qual tecido é caracterizado por ter muita matriz extracelular, ser vascularizado e possuir fibroblastos como célula principal?</div>
        <div class="resumo-quiz-answer"><strong>Tecido Conjuntivo Propriamente Dito.</strong></div>
    </div>
</div>
`
    }
};
