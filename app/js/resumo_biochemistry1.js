/**
 * Material Didático Altamente Interativo — Bioquímica I (3º Semestre)
 * Conteúdo PROFUNDO (2-3 págs/bloco) convertido em componentes de retenção ativa.
 */
window.RESUMOS_BIOCHEMISTRY1 = {

    901: {
        title: "Aminoácidos e Arquitetura Proteica",
        content: `
<div class="resumo-header-main">
    <h2>🧬 Aminoácidos e Arquitetura Proteica</h2>
    <p>Interaja com os elementos abaixo para desvendar a estrutura que sustenta a vida. Clique nos cards e abra as seções para revelar a química celular profunda.</p>
</div>

<div class="resumo-section">
    <h3>🧪 O Alfabeto da Vida: Aminoácidos</h3>
    <p>Todo aminoácido possui uma quiralidade L (exceto a glicina) e comportamento anfótero. Clique nos cards para descobrir os grupos:</p>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">⚡</div>
                    <div class="flip-label">Apolares (Alifáticos)</div>
                    <div class="flip-hint">Clique para revelar</div>
                </div>
                <div class="resumo-flip-back">
                    Glicina, Alanina, Valina, Leucina, Isoleucina, Prolina. Fogem da água, formando o "núcleo" duro de proteínas globulares.
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🌲</div>
                    <div class="flip-label">Aromáticos</div>
                    <div class="flip-hint">Clique para revelar</div>
                </div>
                <div class="resumo-flip-back">
                    Fenilalanina, Tirosina, Triptofano. Absorvem luz UV. A Tirosina é a mãe da Adrenalina e da Dopamina!
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">💧</div>
                    <div class="flip-label">Polares Neutros</div>
                    <div class="flip-hint">Clique para revelar</div>
                </div>
                <div class="resumo-flip-back">
                    Serina, Treonina, Cisteína, Asparagina, Glutamina. Formam pontes de hidrogênio. A Cisteína faz fortes Pontes Dissulfeto (-S-S-).
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🔋</div>
                    <div class="flip-label">Carregados (Ácidos/Básicos)</div>
                    <div class="flip-hint">Clique para revelar</div>
                </div>
                <div class="resumo-flip-back">
                    <strong>Ácidos (-):</strong> Aspartato, Glutamato.<br><strong>Básicos (+):</strong> Lisina, Arginina, Histidina. (A Histidina tem pKa~6, excelente tampão sanguíneo).
                </div>
            </div>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>⚖️ Comportamento Ácido-Base e pI</h3>
    <div class="resumo-accordion open">
        <div class="resumo-accordion-header">
            <h4>O que acontece em diferentes níveis de pH? (Clique para expandir)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <div class="resumo-timeline">
                <div class="resumo-timeline-item"><strong>Em pH Ácido (pH 1):</strong> Excesso de H+. O amino fica -NH3+ e a carboxila -COOH. Carga Líquida = <strong>+1</strong>.</div>
                <div class="resumo-timeline-item"><strong>Ponto Isoelétrico (pI):</strong> pH ideal fisiológico. O amino fica -NH3+ e a carboxila -COO-. Carga Líquida = <strong>ZERO (Zwitterion)</strong>. Proteína precipita por não interagir com a água.</div>
                <div class="resumo-timeline-item"><strong>Em pH Básico (pH 11):</strong> Falta de H+. O amino perde o próton (-NH2) e carboxila desprotonada (-COO-). Carga Líquida = <strong>-1</strong>.</div>
            </div>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🏛️ Dobramento: Do Fio de Lã ao Motor Celular</h3>
    <div class="resumo-compare">
        <div class="resumo-compare-item" style="--compare-color: #3b82f6">
            <h5>1ª e 2ª Estrutura</h5>
            <ul>
                <li><strong>Primária:</strong> Sequência linear exata do gene. Ligação covalente (Peptídica). <em>Erro aqui causa Anemia Falciforme.</em></li>
                <li><strong>Secundária:</strong> Alfa-hélice e Folha-beta. Mantidas APENAS por Pontes de Hidrogênio do esqueleto. <em>Erro aqui causa Doença Priônica.</em></li>
            </ul>
        </div>
        <div class="resumo-compare-item" style="--compare-color: #ec4899">
            <h5>3ª e 4ª Estrutura</h5>
            <ul>
                <li><strong>Terciária:</strong> Dobramento 3D final. Ligações dissulfeto, hidrofóbicas e iônicas das cadeias R. <em>Erro causa Osteogênese Imperfeita.</em></li>
                <li><strong>Quaternária:</strong> Encaixe de várias proteínas juntas (Ex: Hemoglobina com 4 cadeias). Causa Efeito Alostérico (Cooperatividade).</li>
            </ul>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🧪 Desafio Interativo (Active Recall)</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Na Doença do Escorbuto (sangramento gengival intenso), há falha na tripla hélice do colágeno. Qual a deficiência vitamínica exata e qual enzima parou de funcionar? (Clique para revelar a resposta)</div>
        <div class="resumo-quiz-answer">Falta de <strong>Vitamina C (Ácido Ascórbico)</strong>. Ela é cofator obrigatório da enzima <strong>Prolil-hidroxilase</strong>, que hidroxila a prolina no colágeno para formar pontes de hidrogênio fortes. Sem isso, o colágeno desmancha à temperatura corporal.</div>
    </div>
</div>
`
    },

    902: {
        title: "Enzimas e Farmacocinética",
        content: `
<div class="resumo-header-main">
    <h2>⚙️ Máquinas Enzimáticas e Inibição Farmacológica</h2>
    <p>Quase todo medicamento prescrito no hospital age paralisando uma enzima. Explore as cartas para entender como burlar as defesas da natureza.</p>
</div>

<div class="resumo-section">
    <h3>📊 Os Pilares de Michaelis-Menten</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🚀</div>
                    <div class="flip-label">Vmax (Velocidade)</div>
                    <div class="flip-hint">Virar Card</div>
                </div>
                <div class="resumo-flip-back">
                    A velocidade máxima ocorre quando TODOS os sítios ativos da enzima estão entupidos de substrato (Saturação Total). Depende unicamente da quantidade de enzima disponível.
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🧲</div>
                    <div class="flip-label">Km (Afinidade)</div>
                    <div class="flip-hint">Virar Card</div>
                </div>
                <div class="resumo-flip-back">
                    Concentração de substrato necessária para atingir 50% da Vmax. <strong>Importante:</strong> Quanto MAIOR o Km, MENOR a afinidade da enzima pelo substrato (ela precisa de muito substrato para "pegar no tranco").
                </div>
            </div>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🚫 Arsenal Farmacológico: Tipos de Inibição</h3>
    <div class="resumo-accordion open">
        <div class="resumo-accordion-header">
            <h4>Inibição Competitiva (A Disputa pela Cadeira)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>O remédio e o substrato natural têm a mesma forma e brigam pelo <strong>MESMO sítio ativo</strong>.</p>
            <ul>
                <li><strong>Efeito Cinético:</strong> Se eu der MUITO substrato, ele vence a briga e a enzima atinge o <strong>Vmax normal</strong>. Mas, como houve briga, a enzima parece ter menos afinidade: <strong>Km aumenta</strong>.</li>
                <li><strong>Uso Clínico:</strong> <em>Estatinas</em> competem com a HMG-CoA para reduzir colesterol. <em>Etanol</em> compete com o letal Metanol pela Álcool Desidrogenase, salvando pacientes de ficarem cegos.</li>
            </ul>
        </div>
    </div>
    
    <div class="resumo-accordion">
        <div class="resumo-accordion-header">
            <h4>Inibição Não-Competitiva (O Sabotador Externo)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>O remédio gruda num <strong>Sítio Alostérico</strong> (nas costas da enzima) e esmaga o sítio ativo. O substrato não consegue entrar.</p>
            <ul>
                <li><strong>Efeito Cinético:</strong> Não adianta dar mais substrato, a enzima está deformada. O <strong>Vmax cai fatalmente</strong>. Como o remédio não liga pro sítio principal, a afinidade aparente de quem sobrou é igual: <strong>Km inalterado</strong>.</li>
                <li><strong>Uso Clínico:</strong> Intoxicação por metais pesados (Chumbo paralisando enzimas do Sangue).</li>
            </ul>
        </div>
    </div>

    <div class="resumo-accordion">
        <div class="resumo-accordion-header">
            <h4>Inibição Irreversível (O Kamikaze)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>O remédio liga <strong>Covalentemente</strong>. Ele literalmente cola e morre junto com a enzima.</p>
            <ul>
                <li><strong>Uso Clínico:</strong> A <em>Aspirina</em> cola no sítio da COX-1 das plaquetas irreversivelmente. Como as plaquetas não têm núcleo para fabricar enzimas novas, elas ficam sem funcionar (efeito afinador do sangue) até morrerem dias depois.</li>
            </ul>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🧪 Desafio Clínico</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Hemoglobina NÃO segue a cinética de Michaelis-Menten (curva de hipérbole). Ela faz uma curva em S (Sigmoide). Clique para descobrir por que isso ocorre biologicamente.</div>
        <div class="resumo-quiz-answer">A Hemoglobina possui 4 subunidades. Ela apresenta <strong>Cooperatividade Positiva (Efeito Alostérico)</strong>. Quando o primeiro oxigênio se liga (com muita dificuldade), ele força a proteína a mudar para o "Estado Relaxado (R)", tornando brutalmente fácil e rápido para o segundo, terceiro e quarto O2 se ligarem. Isso gera a curva rápida em S.</div>
    </div>
</div>
`
    },

    903: {
        title: "Bioenergética e a Usina Mitocondrial",
        content: `
<div class="resumo-header-main">
    <h2>⚡ Fosforilação Oxidativa e Teoria Quimiosmótica</h2>
    <p>O milagre da respiração celular. Como transformamos os elétrons do seu pão no motor rotativo de ATP do seu músculo. Explore a cadeia respiratória passo a passo.</p>
</div>

<div class="resumo-section">
    <h3>🔗 A Cadeia de Transporte de Elétrons (CTE)</h3>
    <p>Clique nos passos para ver como o elétron pula na membrana mitocondrial:</p>
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>1. A Chegada (NADH):</strong> O NADH entrega elétrons no <em>Complexo I</em>. O choque elétrico bombeia 4 H+ da matriz pro espaço intermembranas.</div>
        <div class="resumo-timeline-item"><strong>2. A Via Alternativa (FADH2):</strong> O FADH2 entrega elétrons no <em>Complexo II</em>. Como ele não cruza a membrana inteira, <strong>ZERO H+</strong> são bombeados aqui. (Por isso NADH rende mais ATP).</div>
        <div class="resumo-timeline-item"><strong>3. O Uber de Elétrons:</strong> A <em>Coenzima Q (Ubiquinona)</em>, que é solúvel em gordura, pega os elétrons do I e II e corre pela membrana até o <em>Complexo III</em> (que bombeia mais 4 H+).</div>
        <div class="resumo-timeline-item"><strong>4. O Fim da Linha (Oxigênio):</strong> O Citocromo C leva os elétrons ao <em>Complexo IV</em>. O Complexo IV usa esses elétrons gastos para soldar Hidrogênio no Gás Oxigênio puro, criando <strong>ÁGUA</strong> inofensiva e bombeando os últimos 2 H+.</div>
    </div>
</div>

<div class="resumo-section">
    <h3>⚙️ ATP Sintase (Complexo V) e Venenos Mortais</h3>
    <p>Todo aquele bombeamento gerou um Gradiente de Prótons violento (Força Próton-Motriz). Os H+ querem voltar desesperadamente para dentro da mitocôndria. O único portão aberto é a <strong>ATP Sintase</strong>, uma turbina real que gira e esmaga ADP + Fosfato formando ATP.</p>
    
    <div class="resumo-compare">
        <div class="resumo-compare-item" style="--compare-color: #ef4444">
            <h5>Inibidores da Cadeia (Bloqueio Físico)</h5>
            <p><strong>Cianeto (CN-) e Monóxido de Carbono (CO):</strong> Ligam-se irreversivelmente ao <em>Complexo IV</em>. O oxigênio não pega elétrons. A CTE engarrafa inteira instantaneamente. Morte celular por sufocamento químico puro em minutos.</p>
        </div>
        <div class="resumo-compare-item" style="--compare-color: #f59e0b">
            <h5>Desacopladores (A Fuga do Calor)</h5>
            <p><strong>DNP e Termogenina (UCP-1):</strong> Fazem furos microscópicos na membrana mitocondrial. Os H+ vazam de volta pra dentro <em>sem passar pela ATP Sintase</em>. A CTE acelera loucamente tentando repor o gradiente, consumindo todo o oxigênio e glicose do corpo. O atrito molecular gera extremo <strong>CALOR</strong> (febre letal) sem produzir nenhum ATP.</p>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🧪 Teste de Conhecimento Prático</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Na hipóxia profunda do choque circulatório, o Complexo IV para por falta de O2. Por que a célula começa a acumular perigosos níveis de Ácido Lático no sangue? (Clique para revelar a bioquímica da morte celular).</div>
        <div class="resumo-quiz-answer">Sem o O2, a CTE inteira engarrafa. O NADH não tem onde deixar seus elétrons e a mitocôndria fica sem NAD+ vazio. A Glicólise no citoplasma <strong>exige</strong> NAD+ vazio para funcionar. Para não morrer, a enzima Lactato Desidrogenase (LDH) "joga" os elétrons do NADH no Piruvato, transformando-o em <strong>Lactato</strong>. Isso recicla o NAD+ vazio, permitindo que a glicólise continue fazendo os 2 míseros ATPs de sobrevivência anaeróbica (causando acidose láctica no paciente).</div>
    </div>
</div>
`
    },

    904: {
        title: "Metabolismo de Carboidratos: As 3 Vias Mestras",
        content: `
<div class="resumo-header-main">
    <h2>🍞 Glicólise, Krebs e Pentoses</h2>
    <p>A digestão brutal do açúcar celular. Explore os menus abaixo para dominar os gargalos irreversíveis da glicólise e do Ciclo de Krebs.</p>
</div>

<div class="resumo-section">
    <h3>🔓 Glicólise (A Quebra dos 6 Carbonos)</h3>
    <p>Ocorre no Citosol. Não gasta Oxigênio. Transforma 1 Glicose (6C) em 2 Piruvatos (3C). Das 10 reações, três são as <em>Válvulas Irreversíveis</em> de controle:</p>
    
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🔒</div>
                    <div class="flip-label">1. Hexoquinase vs Glicoquinase</div>
                </div>
                <div class="resumo-flip-back">
                    Fosforila a glicose em G6P aprisionando-a na célula. A Hexoquinase (Todos tecidos) tem alta afinidade. A Glicoquinase (Fígado) tem baixa afinidade, só age no "pós-feijoada" para guardar excessos.
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🛑</div>
                    <div class="flip-label">2. PFK-1 (O Gargalo Mestre)</div>
                </div>
                <div class="resumo-flip-back">
                    A enzima marcapasso absoluta. É INIBIDA por excesso de ATP e Citrato. É ATIVADA massivamente por AMP e pela molécula super-ativadora <strong>Frutose-2,6-Bisfosfato (F-2,6-BP)</strong> produzida sob ordem da Insulina.
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🏁</div>
                    <div class="flip-label">3. Piruvato Quinase</div>
                </div>
                <div class="resumo-flip-back">
                    Gera o 2º ATP da via e finaliza em Piruvato. No fígado, é silenciada (fosforilada) pelo Glucagon em tempos de jejum, para que a glicólise pare.
                </div>
            </div>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🔄 O Ciclo de Krebs (Matriz Mitocondrial)</h3>
    <div class="resumo-accordion open">
        <div class="resumo-accordion-header">
            <h4>A Ponte de Entrada (Complexo PDH) e a Vitamina B1</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>O Piruvato é transformado em Acetil-CoA irreversivelmente. O complexo enzimático exige 5 cofatores: <strong>T</strong>iamina (B1), <strong>L</strong>ipoato, <strong>C</strong>oA, <strong>F</strong>AD e <strong>N</strong>AD+. Em alcoólatras desnutridos crônicos falta vitamina B1, travando a ponte. O piruvato desvia para ácido lático, matando neurônios profundos (Encefalopatia de Wernicke).</p>
        </div>
    </div>
    
    <div class="resumo-accordion">
        <div class="resumo-accordion-header">
            <h4>A Roda Mágica dos Eletrons (Krebs)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>Acetil-CoA (2C) se funde ao Oxaloacetato (4C) formando Citrato (6C). Numa volta completa da roda, ele perde dois CO2 na respiração e jorra energia.</p>
            <p><strong>Rendimento de 1 volta:</strong> 3 NADH, 1 FADH2, 1 GTP (ATP). Como 1 glicose gera 2 piruvatos, a roda gira 2 vezes para cada açúcar que comemos.</p>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🛡️ Via das Pentoses-Fosfato (O Fator de Sobrevivência das Hemácias)</h3>
    <p>Via citoplasmática que quebra a Glicose-6-Fosfato mas NÃO GERA NENHUM ATP. O objetivo dela é outro: <strong>Gerar NADPH e Ribose</strong>.</p>
    <ul>
        <li>O NADPH reduz a <strong>Glutationa</strong> nas hemácias, que por sua vez atua desarmando bombas de Peróxido de Hidrogênio e Estresse Oxidativo. Se a enzima primária da via (G6PD) for mutada, o paciente sofre Lise Brutal das Hemácias (Anemia Hemolítica) ao ingerir feijão-de-fava ou antimaláricos (Favismo).</li>
    </ul>
</div>
`
    },

    905: {
        title: "Glicogênio e Gliconeogênese (Fartura e Jejum)",
        content: `
<div class="resumo-header-main">
    <h2>🍗 A Orquestra Endócrina Energética</h2>
    <p>O corpo deve evitar a morte neuronal por falta de glicose a todo custo. Navegue pelo sistema hormonal para ver como o fígado nos salva de madrugada.</p>
</div>

<div class="resumo-section">
    <h3>📦 O Estoque de Glicogênio</h3>
    <div class="resumo-compare">
        <div class="resumo-compare-item" style="--compare-color: #22c55e">
            <h5>Fartura (Insulina Liga)</h5>
            <p>A Insulina atua via Receptor Tirosina Quinase. Ela ativa <strong>FOSFATASES</strong> que limpam o fosfato das enzimas.<br>
            - A <em>Glicogênio Sintase</em> é limpa e <strong>ATIVA</strong> (guarda o excesso em glicogênio).<br>
            - A <em>Fosforilase</em> é limpa e <strong>INATIVA</strong> (impede queima).</p>
        </div>
        <div class="resumo-compare-item" style="--compare-color: #ef4444">
            <h5>Jejum (Glucagon Liga)</h5>
            <p>O Glucagon (no fígado) age via Gs → AMPc → <strong>PKA (Quinase)</strong>. A PKA sai atirando Fosfato nas enzimas.<br>
            - A <em>Glicogênio Fosforilase</em> é fosforilada e <strong>ATIVA</strong> (quebra o glicogênio pra lançar glicose no sangue).<br>
            - A <em>Sintase</em> fica fosforilada e <strong>INATIVA</strong>.</p>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🏭 Gliconeogênese (Produzindo do Zero)</h3>
    <p>Começa no jejum mais longo (18h-24h), após esgotar o glicogênio hepático. O fígado fabrica glicose usando Lactato, Aminoácidos (Alanina) e Glicerol da gordura. A reação pula 3 etapas irreversíveis da glicólise através de 4 enzimas mágicas:</p>
    
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>1. Piruvato Carboxilase (Mitocôndria):</strong> Converte Piruvato em Oxaloacetato (Exige Vitamina B7 - Biotina e consumo de ATP).</div>
        <div class="resumo-timeline-item"><strong>2. PEPCK (Citosol):</strong> Converte Oxaloacetato em Fosfoenolpiruvato (Gasta GTP).</div>
        <div class="resumo-timeline-item"><strong>3. Frutose-1,6-Bisfosfatase:</strong> A enzima mestre de controle. Bloqueada por Insulina. Ativada por Glucagon. Faz voltar a frutose pra cima.</div>
        <div class="resumo-timeline-item"><strong>4. Glicose-6-Fosfatase:</strong> Enzima <strong>Exclusiva do Fígado e Rins</strong>. Arranca o fosfato final para a Glicose poder fugir da célula e cair no sangue para nutrir o cérebro. Se o bebê nascer sem ela (Doença de Von Gierke), ele morre de hipoglicemia severa em jejuns curtos.</div>
    </div>
</div>

<div class="resumo-section">
    <h3>🧪 O Quiz dos Combustíveis</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Na Inanição extrema (>48h sem comer), por que o Fígado passa a produzir e despejar massivas quantidades de Corpos Cetônicos (Acetoacetato) na corrente sanguínea em vez de apenas queimar a gordura pura no Ciclo de Krebs? (Clique)</div>
        <div class="resumo-quiz-answer">Porque o cérebro NÃO consegue queimar Gordura (ácidos graxos não cruzam a barreira hematoencefálica). Além disso, no fígado do indivíduo esfomeado, todo o <strong>Oxaloacetato</strong> foi desviado para fazer Gliconeogênese. Sem Oxaloacetato, o Acetil-CoA derivado da queima da gordura empaca e não consegue entrar no Ciclo de Krebs! O excesso gigante de Acetil-CoA hepático então se funde formando os <strong>Corpos Cetônicos</strong>, que são pequenos e solúveis o suficiente para chegar ao cérebro e salvá-lo da morte isquêmica energética. O paciente adquire hálito de acetona e acidose metabólica cetônica.</div>
    </div>
</div>
`
    },

    906: {
        title: "Revisão Mestre em Componentes Ativos",
        content: `
<div class="resumo-header-main">
    <h2>🏆 Central de Treinamento Rápido</h2>
    <p>Revise a Bioquímica inteira de forma ativa e relacional através de pílulas clínicas rápidas e cartões de memória.</p>
</div>

<div class="resumo-section">
    <h3>🚑 Casos Clínicos Espelho (Resolva Clicando)</h3>
    <div class="resumo-accordion">
        <div class="resumo-accordion-header">
            <h4>Paciente 1: Letargia e Catarata em Bebê no Aleitamento (Expandir)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p><strong>Diagnóstico: Galactosemia Clássica.</strong> A Falta da enzima Uridiltransferase impede a degradação da Galactose do leite materno. A enzima aldose redutase nos olhos transforma o excesso em <em>Galactitol</em> osmótico, inchando as lentes até formar catarata grave. Solução: Leite de soja estrito para a vida toda.</p>
        </div>
    </div>
    <div class="resumo-accordion">
        <div class="resumo-accordion-header">
            <h4>Paciente 2: Alpinista Toma Remédio pra Malária e Fica Amarelo (Expandir)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p><strong>Diagnóstico: Deficiência de G6PD.</strong> O remédio (Primaquina) ou feijão de fava causam estresse oxidativo bruto. A via das pentoses falha em gerar NADPH, a Glutationa faliu e os radicais livres despedaçam a parede da hemácia causando lise hemolítica aguda e icterícia por bilirrubina indireta no sangue.</p>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>⚡ Flashcards de Vias Metabólicas de Auto-Rendimento</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front"><div class="flip-icon">💉</div><div class="flip-label">Insulina vs PFK-2</div><div class="flip-hint">Girar</div></div>
                <div class="resumo-flip-back">Insulina ATIVA a PFK-2. Ela jorra Frutose-2,6-Bisfosfato que por sua vez liga a Glicólise a níveis máximos no fígado.</div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front"><div class="flip-icon">💀</div><div class="flip-label">A Intoxicação do Arsênico</div><div class="flip-hint">Girar</div></div>
                <div class="resumo-flip-back">O Veneno liga-se no Ácido Lipoico do Complexo PDH, paralisando a transição da Glicólise para Krebs e causando ácido láctico generalizado.</div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front"><div class="flip-icon">🔥</div><div class="flip-label">Termogenina (UCP-1)</div><div class="flip-hint">Girar</div></div>
                <div class="resumo-flip-back">Proteína da Gordura Marrom do recém-nascido. Fura a mitocôndria. O gradiente vaza sem fazer ATP, transformando a energia pura da quebra metabólica em calor basal radiante.</div>
            </div>
        </div>
    </div>
</div>
`
    }
};
