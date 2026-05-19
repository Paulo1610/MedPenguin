/**
 * Material Didático — Biologia Celular (1º Semestre)
 */
window.RESUMOS_BIOLOGY = {

    801: {
        title: "Estrutura Celular e Organelas",
        content: `
<div class="resumo-header-main">
    <h2>🔬 A Fábrica Microscópica: A Célula Eucariótica</h2>
    <p>Cada organela é um departamento especializado. Conhecer a função é conhecer a doença quando ela falha.</p>
</div>
<div class="resumo-section">
    <h3>🏭 As Organelas e Suas Funções</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">🧬</div><div class="flip-label">Núcleo</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">Centro de comando. Contém o DNA (cromatina). O <strong>nucléolo</strong> produz rRNA. A <strong>carioteca</strong> (envelope nuclear) tem poros para troca de moléculas com o citoplasma.</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">⚡</div><div class="flip-label">Mitocôndria</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">Usina de ATP. Tem seu próprio DNA circular (origem evolutiva: bactéria endossimbionte). A membrana interna forma as <strong>cristas</strong> onde ocorre a Fosforilação Oxidativa. Herança <strong>exclusivamente materna</strong>.</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">📦</div><div class="flip-label">Complexo de Golgi</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">"Correios da célula". Recebe proteínas do REG, processa, empacota e direciona para secreção ou para lisossomos. Forma as <strong>vesículas secretoras</strong>.</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">💀</div><div class="flip-label">Lisossomo</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">Estômago da célula. Cheio de enzimas hidrolíticas em pH ácido (~4,5). Digere resíduos, bactérias (após fagocitose) e organelas velhas (autofagia). Defeito: <strong>Doenças de Depósito Lisossômico</strong> (ex: Gaucher, Tay-Sachs).</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">🏗️</div><div class="flip-label">Retículo Endoplasmático</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back"><strong>REG (Rugoso):</strong> com ribossomos, sintetiza proteínas para secreção. <strong>REL (Liso):</strong> sem ribossomos, sintetiza lipídios, esteroides e detoxifica drogas (hepatócitos têm muito REL).</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">🧹</div><div class="flip-label">Peroxissomo</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">Desintoxica o H₂O₂ usando <strong>catalase</strong>. Realiza a beta-oxidação de ácidos graxos de cadeia muito longa. Defeito: <strong>Síndrome de Zellweger</strong> (acúmulo de ácidos graxos no SNC).</div></div></div>
    </div>
</div>
<div class="resumo-section">
    <h3>🧪 Quiz Clínico</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Uma criança de 6 meses apresenta hepatoesplenomegalia progressiva e células de Gaucher na biópsia de medula. Qual organela está com defeito enzimático e qual substância está se acumulando?</div>
        <div class="resumo-quiz-answer"><strong>Lisossomo.</strong> Falta a enzima lisossômica <strong>glicocerebrosidase</strong>, que deveria degradar o glicocerebrosídeo (glucosilceramida). Sem a enzima, esse lipídio acumula nos macrófagos (células de Gaucher) do fígado, baço e medula óssea.</div>
    </div>
</div>`
    },

    802: {
        title: "Transporte pela Membrana",
        content: `
<div class="resumo-header-main">
    <h2>🌉 A Alfândega Celular: Membrana Plasmática</h2>
    <p>Bicamada lipídica fluida com proteínas que controlam rigorosamente o que entra e sai.</p>
</div>
<div class="resumo-section">
    <h3>⚖️ Passivo vs Ativo — A Regra do ATP</h3>
    <div class="resumo-compare">
        <div class="resumo-compare-item" style="--compare-color: #3b82f6">
            <h5>Transporte Passivo (sem ATP)</h5>
            <p>A favor do gradiente. <strong>Difusão Simples:</strong> gases (O₂, CO₂), moléculas lipofílicas. <strong>Difusão Facilitada:</strong> glicose (GLUT), íons (canais). <strong>Osmose:</strong> água pelo aquaporina.</p>
        </div>
        <div class="resumo-compare-item" style="--compare-color: #ef4444">
            <h5>Transporte Ativo (gasta ATP)</h5>
            <p>Contra o gradiente. <strong>Primário:</strong> Bomba Na⁺/K⁺-ATPase (3 Na⁺ para fora, 2 K⁺ para dentro — mantém potencial de repouso). <strong>Secundário:</strong> Cotransporte SGLT1 (glicose+Na⁺ no intestino).</p>
        </div>
    </div>
</div>
<div class="resumo-section">
    <h3>🚢 Transporte em Massa (Vesicular)</h3>
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>Endocitose:</strong> Célula engloba material externo. Fagocitose (partículas sólidas — macrófagos engolindo bactérias) e Pinocitose (líquidos).</div>
        <div class="resumo-timeline-item"><strong>Endocitose Mediada por Receptor:</strong> Ligante (ex: LDL) liga ao receptor → invaginação em <em>clatrina</em> → vesícula internalizada. Defeito: <strong>Hipercolesterolemia Familiar</strong> (receptor LDL ausente).</div>
        <div class="resumo-timeline-item"><strong>Exocitose:</strong> Vesícula funde com membrana e joga conteúdo para fora. Ex: secreção de insulina, neurotransmissores na fenda sináptica.</div>
    </div>
</div>
<div class="resumo-section">
    <h3>🧪 Quiz Clínico</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ A Digoxina (medicamento cardíaco) age inibindo a Bomba Na⁺/K⁺-ATPase. Explique a cadeia de eventos que faz o coração bater mais forte após essa inibição.</div>
        <div class="resumo-quiz-answer">Bomba inibida → <strong>Na⁺ acumula dentro</strong> da célula → o trocador Na⁺/Ca²⁺ (que normalmente joga Ca²⁺ para fora usando o gradiente de Na⁺) perde eficiência → <strong>Ca²⁺ acumula intracelular</strong> → mais Ca²⁺ disponível para a troponina → <strong>contração miocárdica mais forte</strong> (efeito inotrópico positivo).</div>
    </div>
</div>`
    },

    803: {
        title: "Citoesqueleto e Organelas de Movimento",
        content: `
<div class="resumo-header-main">
    <h2>🏗️ Os Trilhos e Motores Internos</h2>
    <p>Três tipos de filamentos dão forma, resistência e movimento à célula.</p>
</div>
<div class="resumo-section">
    <h3>🔩 Os Três Filamentos</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">🚄</div><div class="flip-label">Microtúbulos (25nm)</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">Polímeros de α/β-tubulina. Formam o <strong>fuso mitótico</strong>, cílios, flagelos e trilhos para transporte vesicular (motores: <strong>Cinesina</strong> → centro para periferia; <strong>Dineína</strong> → periferia para centro). Alvo da Colchicina e Vinca-alcaloides (quimioterapia).</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">💪</div><div class="flip-label">Microfilamentos (7nm)</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">Polímeros de <strong>Actina</strong>. Trabalham com <strong>Miosina</strong> para contração muscular e movimento celular. Formam as microvilosidades intestinais (bordas em escova) e o anel contrátil da citocinese.</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">🧵</div><div class="flip-label">Filamentos Intermediários (10nm)</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">Resistência mecânica. Variam por tipo celular: <strong>Queratina</strong> (epitélio), <strong>Vimentina</strong> (mesênquima), <strong>Desmina</strong> (músculo), <strong>Neurofilamentos</strong> (neurônios), <strong>GFAP</strong> (astrócitos). Úteis em imunohistoquímica para identificar tumores.</div></div></div>
    </div>
</div>
<div class="resumo-section">
    <h3>🧪 Quiz Clínico</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Um homem infértil apresenta bronquiectasias, sinusite crônica e situs inversus (órgãos espelhados). Qual estrutura celular está defeituosa e qual síndrome ele tem?</div>
        <div class="resumo-quiz-answer"><strong>Síndrome de Kartagener</strong> (Discinesia Ciliar Primária). Defeito na <strong>Dineína</strong> dos cílios (braços de dineína ausentes ou disfuncionais nos microtúbulos). Cílios imóveis → acúmulo de muco (bronquiectasia, sinusite) e espermatozoides imóveis (infertilidade). O situs inversus ocorre porque cílios no nó embrionário são necessários para determinar a assimetria esquerda-direita.</div>
    </div>
</div>`
    },

    804: {
        title: "DNA, RNA e Replicação",
        content: `
<div class="resumo-header-main">
    <h2>📜 O Dogma Central da Biologia Molecular</h2>
    <p>DNA → RNA → Proteína. Cada passo tem sua maquinaria e seus pontos de falha clínica.</p>
</div>
<div class="resumo-section">
    <h3>🔄 As Três Etapas do Dogma Central</h3>
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>1. Replicação (DNA→DNA):</strong> Semiconservativa. A DNA Polimerase III sintetiza no sentido 5'→3'. A Helicase abre a dupla fita. O primer de RNA (Primase) inicia. Fita líder: contínua. Fita retardada: fragmentos de Okazaki.</div>
        <div class="resumo-timeline-item"><strong>2. Transcrição (DNA→RNAm):</strong> No núcleo. A RNA Polimerase II lê o DNA molde e cria o RNAm. Inclui processamento: Cap 5', Cauda poli-A 3' e splicing dos íntrons (saem) → éxons (ficam).</div>
        <div class="resumo-timeline-item"><strong>3. Tradução (RNAm→Proteína):</strong> No ribossomo. tRNA carrega aminoácidos. Cada códon (3 bases) do RNAm é lido → aminoácido adicionado. Começa em AUG (Met). Termina em UAA, UAG ou UGA.</div>
    </div>
</div>
<div class="resumo-section">
    <h3>💊 Antibióticos que Bloqueiam a Tradução Bacteriana</h3>
    <div class="resumo-accordion open">
        <div class="resumo-accordion-header">
            <h4>Por que antibióticos matam a bactéria mas não a célula humana? (Clique)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>Bactérias têm ribossomos 70S (subunidades 30S + 50S). Humanos têm ribossomos 80S. Isso permite alvos seletivos:</p>
            <ul>
                <li><strong>30S:</strong> Aminoglicosídeos (Gentamicina), Tetraciclinas — bloqueiam entrada do tRNA.</li>
                <li><strong>50S:</strong> Macrolídeos (Azitromicina), Cloranfenicol, Linezolida — bloqueiam translocação ou peptidil transferase.</li>
                <li><strong>DNA Girase/Topoisomerase IV:</strong> Fluoroquinolonas (Ciprofloxacino) — bloqueiam replicação bacteriana.</li>
            </ul>
        </div>
    </div>
</div>
<div class="resumo-section">
    <h3>🧪 Quiz Clínico</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ A Anemia Falciforme é causada por uma mutação pontual no gene da beta-globina (GAG→GTG), substituindo Glutamato por Valina na posição 6. Qual tipo de mutação é essa e por que ela causa falcização?</div>
        <div class="resumo-quiz-answer"><strong>Mutação de ponto missense.</strong> A Valina (hidrofóbica) em lugar do Glutamato (carregado) faz a hemoglobina HbS polimerizar quando desoxigenada, formando fibras rígidas que deformam a hemácia em foice. As hemácias falcizadas obstruem capilares (crises vaso-oclusivas) e são destruídas rapidamente (anemia hemolítica crônica).</div>
    </div>
</div>`
    },

    805: {
        title: "Ciclo Celular e Divisão Celular",
        content: `
<div class="resumo-header-main">
    <h2>🔄 O Ciclo da Vida Celular</h2>
    <p>Mitose e Meiose: produzir cópias iguais ou gametas únicos. O controle falho = câncer.</p>
</div>
<div class="resumo-section">
    <h3>⏱️ Fases do Ciclo Celular</h3>
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>G1 (Gap 1):</strong> Crescimento celular. Síntese de proteínas. Ponto de checagem (Checkpoint G1/S): a célula decide se vai dividir ou parar.</div>
        <div class="resumo-timeline-item"><strong>S (Síntese):</strong> Replicação do DNA. Ao final, a célula tem 4N de DNA.</div>
        <div class="resumo-timeline-item"><strong>G2 (Gap 2):</strong> Síntese de proteínas do fuso. Checkpoint G2/M: DNA foi replicado corretamente?</div>
        <div class="resumo-timeline-item"><strong>M (Mitose):</strong> Divisão nuclear (PMAT: Prófase, Metáfase, Anáfase, Telófase) + Citocinese.</div>
        <div class="resumo-timeline-item"><strong>G0:</strong> Saída do ciclo. Células terminalmente diferenciadas (neurônios, cardiomiócitos adultos) ficam em G0 permanentemente.</div>
    </div>
</div>
<div class="resumo-section">
    <h3>🆚 Mitose vs Meiose</h3>
    <div class="resumo-compare">
        <div class="resumo-compare-item" style="--compare-color: #3b82f6">
            <h5>Mitose</h5>
            <p>1 divisão → 2 células filhas <strong>idênticas</strong> (diploides, 2N). Serve para crescimento e reparo. Ocorre em todas as células somáticas.</p>
        </div>
        <div class="resumo-compare-item" style="--compare-color: #ec4899">
            <h5>Meiose</h5>
            <p>2 divisões → 4 células filhas <strong>diferentes</strong> (haploides, N). Serve para gametas. Crossing-over na Meiose I gera variabilidade genética. Não-disjunção causa aneuploidias (Trissomia 21).</p>
        </div>
    </div>
</div>
<div class="resumo-section">
    <h3>🧪 Quiz Clínico</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ O Taxol (Paclitaxel), quimioterápico usado no câncer de mama, estabiliza os microtúbulos do fuso mitótico impedindo sua desmontagem. Em qual fase do ciclo celular as células tumorais ficam presas e por quê isso mata a célula?</div>
        <div class="resumo-quiz-answer">As células ficam presas na <strong>Metáfase</strong>. O fuso mitótico hiperpolicondensado não consegue separar os cromossomos para os polos — a <strong>Anáfase não ocorre</strong>. O checkpoint do fuso (Spindle Assembly Checkpoint) é ativado permanentemente, bloqueando a progressão. A célula entra em apoptose por permanecer por tempo demasiado nesse bloqueio mitótico.</div>
    </div>
</div>`
    },

    806: {
        title: "Revisão Integrada de Biologia Celular",
        content: `
<div class="resumo-header-main">
    <h2>🎯 Consolidação: Biologia Celular Aplicada à Medicina</h2>
    <p>Os conceitos que mais caem em provas e que têm correlação clínica direta.</p>
</div>
<div class="resumo-section">
    <h3>🏆 Top Correlações Clínicas</h3>
    <div class="resumo-accordion open">
        <div class="resumo-accordion-header">
            <h4>Doenças por Defeito de Organela (Clique)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <ul>
                <li><strong>Lisossomo:</strong> Gaucher, Tay-Sachs, Niemann-Pick → Doenças de depósito.</li>
                <li><strong>Mitocôndria:</strong> MELAS, MERRF → Doenças mitocondriais, herança materna.</li>
                <li><strong>Peroxissomo:</strong> Zellweger → Acúmulo de ácidos graxos de cadeia muito longa.</li>
                <li><strong>Microtúbulos/Cílios:</strong> Kartagener → Infertilidade + bronquiectasia + situs inversus.</li>
                <li><strong>Receptor de Membrana:</strong> Hipercolesterolemia Familiar → LDL não é internalizado.</li>
            </ul>
        </div>
    </div>
</div>
<div class="resumo-section">
    <h3>💊 Fármacos que Atuam em Alvos Celulares</h3>
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>Colchicina:</strong> Inibe polimerização de microtúbulos → Gota (inibe migração de neutrófilos).</div>
        <div class="resumo-timeline-item"><strong>Vinca-alcaloides:</strong> Inibem microtúbulos → Quimioterapia.</div>
        <div class="resumo-timeline-item"><strong>Taxol:</strong> Estabiliza microtúbulos → Quimioterapia (câncer de mama/ovário).</div>
        <div class="resumo-timeline-item"><strong>Digoxina:</strong> Inibe Na⁺/K⁺-ATPase → ICC e arritmias.</div>
        <div class="resumo-timeline-item"><strong>Omeprazol:</strong> Inibe a bomba H⁺/K⁺-ATPase do estômago → Úlcera péptica.</div>
    </div>
</div>
<div class="resumo-section">
    <h3>🧪 Quiz Final</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Uma célula em cultura tem sua bomba Na⁺/K⁺-ATPase inibida. Descreva 3 consequências imediatas para a homeostase celular.</div>
        <div class="resumo-quiz-answer">1) <strong>Acúmulo de Na⁺ intracelular</strong> → entrada de água por osmose → inchaço celular (edema citotóxico). 2) <strong>Perda de K⁺ intracelular</strong> → despolarização da membrana → incapacidade de gerar potencial de ação normalmente. 3) <strong>Acúmulo de Ca²⁺ intracelular</strong> (via trocador Na⁺/Ca²⁺ disfuncional) → ativação de proteases → apoptose/necrose celular.</div>
    </div>
</div>`
    }
};
