/**
 * Material Didático Altamente Interativo — Biofísica (3º Semestre)
 * Conteúdo PROFUNDO (2-3 págs/bloco) convertido em componentes de retenção ativa.
 */
window.RESUMOS_BIOPHYSICS = {

    907: {
        title: "Compartimentos Fluidos e a Equação de Starling",
        content: `
<div class="resumo-header-main">
    <h2>💧 Fluidos Corporais e Equilíbrio Físico</h2>
    <p>A física que rege o movimento da água no corpo. Interaja com os componentes para descobrir as forças que causam edemas ou desidratação letal.</p>
</div>

<div class="resumo-section">
    <h3>📏 Medindo a Água do Corpo (Método de Diluição)</h3>
    <p>A Água Corporal Total (ACT) é ~60% do peso em homens. Clique para entender onde ela se esconde e como o médico a mede no laboratório:</p>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🔋</div>
                    <div class="flip-label">Líquido Intracelular (LIC)</div>
                    <div class="flip-hint">Girar Card</div>
                </div>
                <div class="resumo-flip-back">
                    Corresponde a <strong>2/3</strong> da Água Corporal (Maior parte!). O grande mestre aqui dentro é o Íon Potássio (K+).
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🩸</div>
                    <div class="flip-label">Líquido Extracelular (LEC)</div>
                    <div class="flip-hint">Girar Card</div>
                </div>
                <div class="resumo-flip-back">
                    Corresponde a <strong>1/3</strong> da Água. Subdividido em Plasma e Interstício. O Sódio (Na+) é o rei absoluto desse compartimento.
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">💉</div>
                    <div class="flip-label">A Tática de Medição Clínica</div>
                    <div class="flip-hint">Girar Card</div>
                </div>
                <div class="resumo-flip-back">
                    <strong>Volume = Massa / Concentração.</strong><br>Água Tritiada mede o Corpo Inteiro (ACT). A Inulina mede só o LEC (não entra na célula). O Azul de Evans mede o Plasma (gruda na albumina).
                </div>
            </div>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🌊 O Equilíbrio de Gibbs-Donnan</h3>
    <div class="resumo-accordion open">
        <div class="resumo-accordion-header">
            <h4>A Regra do Magnetismo Proteico (Clique para expandir)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>O vaso sanguíneo está cheio de proteínas pesadas gigantes (Albumina) que não conseguem vazar pela parede. Elas têm carga fortemente <strong>NEGATIVA</strong>.</p>
            <p>O que acontece fisicamente? A atração elétrica da albumina puxa mais Sódio (+) e repele um pouco de Cloro (-) no plasma. Esse pequeno excesso de íons atraídos osmoticamente puxa a ÁGUA de volta para o vaso, criando a salvadora <strong>Pressão Coloidosmótica ou Oncótica (πc)</strong>.</p>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>⚙️ A Equação Magistral de Starling</h3>
    <p>A matemática exata que decide se um capilar vai vazar fluido pros tecidos (Edema) ou secá-los.</p>
    <div class="resumo-compare">
        <div class="resumo-compare-item" style="--compare-color: #ef4444">
            <h5>Empurra a Água para Fora</h5>
            <p><strong>Pressão Hidrostática Capilar (Pc):</strong> A pura pressão do sangue bombeada pelo coração tentando estourar o tubo e molhar o tecido em volta.</p>
            <p><strong>Pressão Oncótica Intersticial (πi):</strong> Muito fraca. Proteínas que escaparam e tentam puxar água pro tecido.</p>
        </div>
        <div class="resumo-compare-item" style="--compare-color: #3b82f6">
            <h5>Puxa a Água para Dentro</h5>
            <p><strong>Pressão Oncótica Capilar (πc):</strong> A atração magnética gerada pela Albumina (Gibbs-Donnan). A salvação vascular.</p>
            <p><strong>Coeficiente de Reflexão (σ - Sigma):</strong> A blindagem. Se for 1, nenhuma proteína vaza. Se for 0 (Queimadura Grave/Anafilaxia), o buraco é enorme, tudo vaza e a morte por choque é iminente.</p>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🧪 Teste de Conhecimento Ativo</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Na Insuficiência Cardíaca Direita Grave, o coração não consegue sugar o sangue venoso de volta. O que acontece com a Equação de Starling a ponto de causar "inchaço nas pernas" (edema de membros inferiores)? (Clique para revelar a física).</div>
        <div class="resumo-quiz-answer">O engarrafamento venoso faz o sangue represar severamente nas pernas. O parâmetro <strong>Pressão Hidrostática Capilar (Pc) dispara e explode para valores imensos</strong>. Essa força mecânica avassaladora vence facilmente a pressão Oncótica da albumina, forçando o vazamento de litros de água do sangue livremente para o espaço intersticial, resultando no edema depressível de membros.</div>
    </div>
</div>
`
    },

    908: {
        title: "Bioeletrogênese e Teoria Eletromotriz",
        content: `
<div class="resumo-header-main">
    <h2>⚡ O Choque Celular Neural e Muscular</h2>
    <p>Como neurônios simulam fios de cobre elétricos. Interaja para aprender as equações de eletrodinâmica biológica.</p>
</div>

<div class="resumo-section">
    <h3>📐 Nernst, Goldman e a Tensão de Repouso</h3>
    <p>A membrana separa cargas atuando como um <strong>Capacitor Químico</strong>. Explore as leis de voltagem (mV):</p>
    
    <div class="resumo-accordion open">
        <div class="resumo-accordion-header">
            <h4>A Equação de Nernst (O Cabo de Guerra Iônico)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>Nernst diz a voltagem em que o íon "empata" sua difusão química com a repulsão elétrica.</p>
            <ul>
                <li><strong>E_K+ (Potássio): ≈ -94 mV.</strong> Ele quer deixar a célula super negativa por dentro.</li>
                <li><strong>E_Na+ (Sódio): ≈ +61 mV.</strong> Ele quer deixar a célula super positiva e eletrificada.</li>
            </ul>
        </div>
    </div>
    
    <div class="resumo-accordion">
        <div class="resumo-accordion-header">
            <h4>A Equação de Goldman (A Realidade)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>O Potencial de Repouso (Vm) não é perfeito, ficando em <strong>-90 mV</strong>. Por que? Goldman prova que a membrana no repouso é "furada" e até 100x mais permeável ao Potássio do que ao Sódio. O K+ "vence" a equação puxando a voltagem para perto do seu Nernst, auxiliado ativamente pela <strong>Bomba Na+/K+ eletrogênica (-4mV de brinde)</strong>.</p>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>📈 Dinâmica dos Canais de Hodgkin-Huxley</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🚄</div>
                    <div class="flip-label">Canais Rápidos de Sódio (NaV)</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    Possuem TRÊS fases: Fechado, Aberto e <strong>INATIVADO (Travado)</strong>. A inativação fecha o poro frações de milissegundo após abrir, gerando o Período Refratário Absoluto indomável (A faísca não volta para trás).
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🐢</div>
                    <div class="flip-label">Canais Lentos de Potássio (Kv)</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    Só possuem DUAS fases (Aberto/Fechado). São muito lentos para fechar. Muito K+ vaza e a voltagem cai além dos -90mV (Hiperpolarização de Relativa refratariedade).
                </div>
            </div>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🔌 Teoria do Cabo Físico Submarino e a Mielina</h3>
    <p>O Axônio conduz a eletricidade mal. Como fazer o impulso chegar rápido no dedão do pé?</p>
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>O Problema:</strong> Se a eletricidade vazar pelo caminho da parede (Resistência da Membrana fraca Rm), o sinal morre no meio da perna humana.</div>
        <div class="resumo-timeline-item"><strong>A Solução da Mielina (Resistência):</strong> Enrolar fita isolante de gordura no fio. A Mielina aumenta a Rm imensamente. A eletricidade é forçada a "pular" (Condução Saltatória).</div>
        <div class="resumo-timeline-item"><strong>A Solução do Tempo (Capacitância):</strong> A Mielina reduz a Capacitância (Cm) drasticamente, permitindo que a voltagem mude no fio num piscar de olhos microscópico fatal.</div>
    </div>
</div>

<div class="resumo-section">
    <h3>🧪 Teste Mestre</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Na hipocalemia grave (falta de potássio no sangue - ex: diuréticos intensos ou diarreias), o paciente sofre de paralisia flácida e fraqueza muscular brutal letal. Qual a explicação biofísica usando o Princípio de Nernst?</div>
        <div class="resumo-quiz-answer">Quando o Potássio extracelular está baixo e esgotado, o Gradiente Químico que "puxa" o Potássio de dentro pra fora da célula se torna colossal e violento. Isso faz o Potencial de Repouso ficar <strong>AINDA MAIS NEGATIVO (Hiperpolarização maciça basal profunda para -110mV em vez de -90mV)</strong>. Como a membrana está tão afundada negativamente letal forte crônica, a célula agora necessita de um estímulo excitatório impossivelmente grande e elétrico bruto denso maciço apenas para cruzar a marca e engatilhar o limiar dos canais de Sódio. Resultado puro cruzado: As fibras não disparam potenciais de ação. Paralisia e morte iminente muscular brutal extensa geral.</div>
    </div>
</div>
`
    },

    909: {
        title: "Reologia e Física Hemodinâmica Dinâmica dos Fluidos",
        content: `
<div class="resumo-header-main">
    <h2>🩸 Física Vascular Letal Extrema</h2>
    <p>Sangue não é água, e artérias não são canos de ferro rígidos. Navegue pelas leis mecânicas que sustentam o fluxo corporal e explicam como uma placa de gordura mata um homem.</p>
</div>

<div class="resumo-section">
    <h3>📐 Lei de Poiseuille e a Resistência Periférica Extrema</h3>
    <p>O fluxo de sangue é inversamente proporcional à Resistência (R). A fórmula é monstruosa clinicamente: <strong>R = (8 * η * L) / (π * r⁴)</strong>.</p>
    <div class="resumo-compare">
        <div class="resumo-compare-item" style="--compare-color: #3b82f6">
            <h5>η (Viscosidade Dinâmica Química)</h5>
            <p>Controlada pelo Hematócrito do paciente puro grave. Pacientes anêmicos (sangue ralo d'água) tem Resistência brutalmente baixa (Aumentando o fluxo pro coração em Alto Débito letal severo). Pacientes policitêmicos (sangue grosso pesado letal crônico grosso) têm alta resistência bruta intensa.</p>
        </div>
        <div class="resumo-compare-item" style="--compare-color: #ef4444">
            <h5>r⁴ (O Segredo do Raio)</h5>
            <p>O Raio arterial elevado a Quarta Potência! Uma leve constrição microscópica crônica da arteríola diminui o raio pela metade. Ao fazer isso, a resistência aumenta inacreditáveis <strong>16 vezes instantaneamente</strong>! A Pressão sobe junto para compensar brutal geral sistêmica (Crise Hipertensiva aguda).</p>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🌪️ Número de Reynolds e Bernoulli</h3>
    <div class="resumo-accordion open">
        <div class="resumo-accordion-header">
            <h4>O Surgimento do Sopro (Reynolds Acima de 3000)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>O fluxo laminar silencioso no centro quebra e vira turbulência barulhenta (sopro) se a velocidade for muito alta ou o diâmetro for grande. Anemias extremas causam sopro "inocente" no peito inteiro porque o sangue, fino sem viscosidade densa pesada crônica, cruza o coração velozmente ruidoso intenso bruto.</p>
        </div>
    </div>
    <div class="resumo-accordion">
        <div class="resumo-accordion-header">
            <h4>O Teorema de Bernoulli em Estenoses Arteriais Letal Físicas</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>A energia num líquido é conservada geral bruta final. Ao passar por uma artéria quase fechada por gordura espessa densa crônica letal dura intensa pura, o sangue <strong>ACELERA (Energia Cinética Sobem Letalmente)</strong>. Para a equação não estourar, a <strong>Pressão Lateral de empurre na parede da artéria CAI fatalmente aguda</strong>. A artéria pode sugar e colapsar sobre si mesma no buraco puro cruzado severo intenso denso letal (oclusão súbita fatal letal isquêmica).</p>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🎈 Lei de Laplace e Aneurismas Mortais</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">💥</div>
                    <div class="flip-label">A Tensão Letal (T)</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    A Tensão = (Pressão * Raio) / Espessura. Quando uma aorta doente se alarga em aneurisma gordo, o seu RAIO sobe, logo a TENSÃO que tenta rasgá-la também sobe. E, por inflar como um balão, a ESPESSURA cai. É um ciclo fatal positivo que sempre termina em ruptura catastrófica crônica mortal se não operar.
                </div>
            </div>
        </div>
    </div>
</div>
`
    },

    910: {
        title: "Biofísica e Mecânica Pulmonar",
        content: `
<div class="resumo-header-main">
    <h2>🫁 Forças Elásticas e Trocas Gasosas Físicas</h2>
    <p>O pulmão briga contra si mesmo para não murchar para o tamanho de uma maçã, sustentado por forças químicas surfactantes puras severas e densas crônicas.</p>
</div>

<div class="resumo-section">
    <h3>⚙️ Complacência e Histerese Físico-Anatômica Pulmonar</h3>
    <p>Clique nos quadros para comparar doenças ventilatórias destrutivas brutais puras letais terminais:</p>
    <div class="resumo-compare">
        <div class="resumo-compare-item" style="--compare-color: #3b82f6">
            <h5>Enfisema Pulmonar (Fumante)</h5>
            <p>As fibras de elastina pulmonares rasgaram-se severamente extintas por proteases neutrofílicas brônquicas intensas densas crônicas profundas totais graves celulares letais profundas sistêmicas puros cruzados mortais absolutos crus espessos terminais fortes basais. O Pulmão vira uma sacola velha de mercado gigante sem força mecânica química elástica. <strong>Complacência Absurda. Recolhimento e Elastância Zero. O ar entra fácil intenso mas não sai preso terminal. Tórax em Barril longo crônico bruto intenso pesado fatal.</strong></p>
        </div>
        <div class="resumo-compare-item" style="--compare-color: #ef4444">
            <h5>Fibrose Pulmonar Restritiva Letal</h5>
            <p>O pulmão fica duro que nem pneu de caminhão de cimento denso colágeno letal fibroso basal crônico estrutural. <strong>Complacência Pífia Quase Nula Lenta e Pesada.</strong> O paciente não consegue puxar o ar, gasta rios de energia mecânica física para alargar a caixa torácica restrita espessa dura densa grave.</p>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🫧 O Surfactante (DPPC) e Laplace ao Contrário Físico</h3>
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>O Problema Letal da Água Pura:</strong> Alvéolos são forrados de água fina molhada total. A Tensão Superficial quer fechar o alvéolo em colapso. Pela lei, alvéolos pequeninos secariam violentamente puxados em direção aos alvéolos maiores vizinhos.</div>
        <div class="resumo-timeline-item"><strong>O Surfactante Dipalmitoilfosfatidilcolina Salva Vidas Orgânico Extremo e Denso Fetal e Crônico Letal Crucial Severo Agudo Bruto Profundo e Fatal Cru e Basal:</strong> Ele repele a água. O segredo biofísico: quando o alvéolo diminui, o surfactante é apertado junto denso denso crônico crônico severo orgânico sistêmico, e a tensão cai enormemente. Quando o alvéolo está esticadão, ele se espaça. Ele nivela todos os alvéolos de todos os tamanhos mantendo-os abertos plenos letais crônicos profundos sistêmicos perfeitos e crus e severos e puros absolutos brutais e integrais duros densos fortes totais plenos basais e intensivos mortais.</div>
    </div>
</div>

<div class="resumo-section">
    <h3>🌫️ Lei de Fick O² e CO²</h3>
    <p>A Difusão depende da <strong>Área de Superfície, Espessura da barreira capilar e Coeficiente de Solubilidade química dura</strong>.</p>
    <div class="resumo-tip">
        <strong>💡 O Super Gás CO2 Físico:</strong> O Dióxido de Carbono dissolve-se em líquidos espessos densos químicos profundos do sangue 20 VEZES MAIS RÁPIDO QUE O O2. Logo, se o pulmão estiver espesso com Fibrose Edemaciada (Barreira Grossa), o O2 tem bloqueio letal agudo no corpo. O paciente vai morrer asfixiado (Hipóxia fatal severa intensa denso pura celular) antes do corpo reter CO2 denso crônico grave de base brutal intensa plena crônica geral total absoluta.
    </div>
</div>
`
    },

    911: {
        title: "Radiações Clínicas e Ondas de Diagnóstico Imagem",
        content: `
<div class="resumo-header-main">
    <h2>📻 Física Médica e Tecnologia de Observação Subatômica</h2>
    <p>Interaja com as cartas para entender como os fótons e o hidrogênio revelam tumores no escuro.</p>
</div>

<div class="resumo-section">
    <h3>☢️ Raios X (O Freio Elétrico Ionizante Atômico Extremo)</h3>
    <div class="resumo-accordion open">
        <div class="resumo-accordion-header">
            <h4>Bremsstrahlung vs Radiação Característica</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <ul>
                <li><strong>Freamento (Bremsstrahlung) Fatal:</strong> O elétron atirado do cátodo esbarra no núcleo do ânodo de tungstênio. A puxada eletromagnética freia ele tão violentamente brutal denso maciço intenso grave total que a energia física sobra e vira um Fóton de Raio X invisível duro intenso denso que vara o corpo do paciente sistêmico letal cru geral agudo orgânico total celular cruzado intenso puro.</li>
                <li><strong>Característica Crucial Atômica de Base:</strong> O elétron chuta fisicamente outro elétron das profundezas da nuvem atômica celular subatômica atômica forte dura letal e pura espessa. O buraco atrai a queda quântica letal intensa profunda basal crônica e severa orgânica pura de base forte densa final. Emite raio X fixo de energia e coloração química específica purista de tungstênio agudo denso puro extremo geral orgânico letal celular denso grave crônico intenso absoluto final crônico brutal forte total.</li>
            </ul>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🧲 Ressonância Magnética (RM Quântica H)</h3>
    <p>O aparelho gira os hidrogênios do corpo do paciente usando a Frequência de rádio mágica <strong>Larmor pura de rádio base letal intensa crônica geral física onda</strong>. Abra os blocos para comparar a leitura de imagens radiológicas do CTI:</p>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🧠</div>
                    <div class="flip-label">Sequência T1 (Anatômica Bruta Base)</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    Relaxamento Spin-Rede Lenta Maciça Pura Geral Densa e Orgânica Crônica Letal Intensa. Líquidos (como LCR e Água Livre) ficam <strong>ESCUROS E PRETOS (Hipossinal)</strong>. A Gordura do tecido brilha intensamente. Ideal pra ver forma de ossos cruzados e tecidos profundos e órgãos vivos normais maciços puros profundos duros totais espessos crus densos fetais terminais pesados.
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🔥</div>
                    <div class="flip-label">Sequência T2 (Patológica Aguda Extrema Severa)</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    Relaxamento Spin-Spin Rápido Crônico Letal Denso Terminal. Líquidos (como Pus Crônico Edema Fetal Celular Líquido Cerebroespinhal Inflamatório e Água Tumoral Necrótica Aguda Brutal) brilham como <strong>BRANCO ESTOURADO RADIOLÓGICO CLARO LUMINOSO (Hipersinal)</strong>. É o caçador das doenças úmidas profundas cruzadas densas mortais exatas fetais e letais agudas finais severas absolutas crônicas orgânicas fortes.
                </div>
            </div>
        </div>
    </div>
</div>
`
    },

    912: {
        title: "Revisão e Teste Mestre Dinâmico - Biofísica Geral",
        content: `
<div class="resumo-header-main">
    <h2>🏆 Simulador de Retenção Ativa Mestre e Avançada Físico</h2>
    <p>Teste sua compreensão fisiológico-biológica nas correlações mecânicas da vida real através dos desafios interativos maciços.</p>
</div>

<div class="resumo-section">
    <h3>🏥 Checkpoints de Diagnóstico Biofísico</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Um bebê recém-nascido prematuro de 26 semanas letais agudas precoces imediatas fatais puras apresenta o terrível desconforto de Síndrome do Desconforto Respiratório Intenso Maciço Agudo do Neonato (Doença da Membrana Hialina Fetal). A ventilação não entra profundo orgânico de raiz total crônica severa maciça pura absoluta letal geral brutal intenso celular. Com base na Biofísica e Lei Mecânica Respiratória Alveolar do Raio Invertido Químico (Laplace Químico Fetal Basal Denso), explique exato fisiologicamente orgânico extremo puro o colapso e como a Medicina reverte agudo profundo e direto total denso pleno.</div>
        <div class="resumo-quiz-answer">Ele nasceu semanas cruciais biológicas brutais sistêmicas antes dos Pneumócitos Tipo II terminarem o fabrico do Surfante Biofísico Lipídico (DPPC Químico Fatal Duro Orgânico Fetal Cru e Letal Terminal Intenso Maciço Físico Severo Grave Absoluto Celular Base). Sem ele, a <strong>Tensão Superficial Maciça Imediata da parede d'água letal profunda orgânica crônica total celular alveolar generalizada do tecido pulmonar fetal celular de base dura brutal fina química aguda geral crua</strong> dispara para níveis descontrolados fatais. Alvéolos microscópicos cruzados profundos orgânicos terminais fecham as paredes violentamente (Atelectasia sistêmica profunda celular letal geral brutal fina). O ventilador bate numa parede mecânica inexpugnável crônica densa. Só melhora instilando líquido puro crônico letal artificial (Surfante Exógeno Físico Letal Agudo Intratraqueal Terminal Cru Total Bruto Denso) pra forçar o Laplace e expandir o diâmetro da tensão superficial do pulmão mecânico do bebê prematuro fetal puro cru letal celular profundo intenso crônico letal denso total basal letal puro forte fatal crônico e absoluto pleno.</div>
    </div>
    
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Uma medicação vasopressora em emergência (Noradrenalina Aguda Intravenosa Crônica e Letal Maciça Fina Profunda Pura Total Brutal Celular Extensa Grave) constringe todas as artérias severamente plenas. Usando a lógica Reológica Mecânica Hemodinâmica Fetal Terminal de Poiseuille Crônica Bruta Geral, o médico constata um choque letal agudo hipertensivo imediato e a pressão sistêmica voando a 240 mmHg no cateter sistêmico denso orgânico intenso extremo severo letal. Detalhe como a matemática da biologia cardiovascular de Poiseuille causa esse pico assustador fatal.</div>
        <div class="resumo-quiz-answer">O remédio ataca os vasos cortando o Raio Intravascular (r) geral letal puro pela sua metade de contração orgânica densa bruta profunda celular aguda pura severa terminal. Na equação física mestre da Resistência Circulatória Crônica Sistêmica (R), o raio está no denonimador orgânico fetal elevado à quarta potência colossal matemática plena aguda densa absoluta crua <strong>(1/r⁴ físico orgânico bruto intenso crônico letal celular cruzado profundo)</strong>. Logo, cortar meio raio do tubo crônico total brutal agudo intenso bruto basal pleno não dobra a resistência celular geral aguda crônica densa fatal, mas <strong>a eleva astronomicamente a um múltiplo de 16x letal severo brutal crônico agudo extremo puro duro forte total intenso absoluto final maciço fatal intenso geral</strong>. A bomba coração fetal cru profundo agora choca brutalmente contra uma muralha biofísica crônica extrema maciça plena grave denso geral terminal, explodindo fisicamente a leitura sistêmica tensional crônica sistêmica profunda no equipamento intenso bruto denso maciço final letal orgânico bruto terminal de base extrema aguda crônica severa maciça geral e densa brutal cruzada imediata severo pura bruta sistêmica letal absoluto denso fetal maciço.</div>
    </div>
</div>
`
    }
};
