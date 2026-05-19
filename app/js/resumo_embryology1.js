/**
 * Material Didático — Embriologia I (1º Semestre)
 */
window.RESUMOS_EMBRYOLOGY1 = {

    70: {
        title: "Introdução e Gametogênese",
        content: `
<div class="resumo-header-main">
    <h2>🐣 Antes do Encontro: Formação dos Gametas</h2>
    <p>Espermatogênese e Ovogênese seguem regras completamente diferentes. As diferenças são cobradas em prova.</p>
</div>
<div class="resumo-section">
    <h3>🆚 Espermatogênese vs Ovogênese</h3>
    <div class="resumo-compare">
        <div class="resumo-compare-item" style="--compare-color: #3b82f6">
            <h5>Espermatogênese (♂)</h5>
            <p>Inicia na <strong>puberdade</strong> e é <strong>contínua</strong> até a velhice. Ocorre nos túbulos seminíferos. Produz <strong>4 espermatozoides funcionais</strong> por célula em ~74 dias. Estimulada pelo FSH e Testosterona.</p>
        </div>
        <div class="resumo-compare-item" style="--compare-color: #ec4899">
            <h5>Ovogênese (♀)</h5>
            <p>Inicia na <strong>vida fetal</strong> (5ª semana). Para em <strong>Prófase I</strong> até a puberdade. A cada ciclo, 1 oócito retoma a meiose. Produz <strong>1 óvulo + 3 corpos polares</strong>. A meiose II só completa após a fecundação!</p>
        </div>
    </div>
</div>
<div class="resumo-section">
    <h3>📊 Linha do Tempo da Ovogênese</h3>
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>Vida Fetal:</strong> Células germinativas primordiais migram para a gônada. Formam ~7 milhões de ovogônias, que entram em Meiose I e param em Prófase I (dicitóteno).</div>
        <div class="resumo-timeline-item"><strong>Nascimento:</strong> ~2 milhões de oócitos primários (muitos sofrem atresia).</div>
        <div class="resumo-timeline-item"><strong>Puberdade:</strong> ~400 mil restantes. A cada ciclo, LH provoca retomada da Meiose I → oócito secundário (N) + 1º corpo polar.</div>
        <div class="resumo-timeline-item"><strong>Ovulação:</strong> Oócito secundário (parado em Metáfase II) é liberado. Meiose II só termina se for fecundado.</div>
        <div class="resumo-timeline-item"><strong>Fecundação:</strong> Meiose II completa → óvulo maduro + 2º corpo polar.</div>
    </div>
</div>
<div class="resumo-section">
    <h3>🧪 Quiz Clínico</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ A Síndrome de Down (Trissomia 21) é mais frequente em filhos de mães com idade avançada. Qual o mecanismo embriológico que explica essa correlação com a idade materna?</div>
        <div class="resumo-quiz-answer"><strong>Não-disjunção meiótica materna.</strong> Os oócitos ficam parados em Prófase I por décadas. Com o envelhecimento, o complexo de coesinas que mantém os cromossomos unidos se deteriora, aumentando o risco de separação incorreta (não-disjunção) na Meiose I. Resultado: óvulo com 2 cromossomos 21 → após fecundação → zigoto com 3 cópias do cromossomo 21 (trissomia 21).</div>
    </div>
</div>`
    },

    71: {
        title: "Fecundação e 1ª Semana",
        content: `
<div class="resumo-header-main">
    <h2>🚀 O Grande Encontro: Da Fecundação ao Blastocisto</h2>
    <p>Em 7 dias, o zigoto passa de 1 célula a uma estrutura de ~100 células pronta para implantar.</p>
</div>
<div class="resumo-section">
    <h3>⚙️ Etapas da Fecundação (Tuba Uterina)</h3>
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>1. Capacitação:</strong> Espermatozoides no trato feminino têm o muco da cabeça removido, ficando hiperativados.</div>
        <div class="resumo-timeline-item"><strong>2. Penetração da Corona Radiata:</strong> Força física + hialuronidase do acrossomo.</div>
        <div class="resumo-timeline-item"><strong>3. Reação Acrossômica:</strong> Enzimas acrossômicas (acrosina) dissolvem a Zona Pelúcida.</div>
        <div class="resumo-timeline-item"><strong>4. Fusão de Membranas:</strong> Um espermatozoide funde com o oócito. Meiose II completa → zigoto (2N).</div>
        <div class="resumo-timeline-item"><strong>5. Reação Cortical:</strong> Grânulos corticais liberam enzimas que endurecem a Zona Pelúcida → bloqueio à poliespermia.</div>
    </div>
</div>
<div class="resumo-section">
    <h3>🧬 Da Clivagem ao Blastocisto</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">⚽</div><div class="flip-label">Mórula (D3-D4)</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">~16 blastômeros. Aspecto de amora. Ainda dentro da Zona Pelúcida. Compactação: células se unem por junções tight. Ainda na tuba uterina, viajando em direção ao útero.</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">🏐</div><div class="flip-label">Blastocisto (D5-D6)</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">Cavidade (blastocele) se forma. Duas populações: <strong>Trofoblasto</strong> (periferia → placenta) e <strong>Embrioblasto/MCI</strong> (massa celular interna → embrião). Zona Pelúcida se dissolve → pronto para implantar.</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">📌</div><div class="flip-label">Implantação (D6-D10)</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">O Sinciciotrofoblasto invasivo penetra o endométrio (fase secretora, sob ação da progesterona). Local ideal: parede posterior do corpo uterino. HCG é produzido → mantém o corpo lúteo → mantém a progesterona → evita menstruação.</div></div></div>
    </div>
</div>
<div class="resumo-section">
    <h3>🧪 Quiz Clínico</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Uma mulher com ciclo de 28 dias tem atraso menstrual de 7 dias. O teste de gravidez (detecção de HCG) é positivo. Qual estrutura embrionária produz o HCG e qual é sua função nesse momento?</div>
        <div class="resumo-quiz-answer">O <strong>Sinciciotrofoblasto</strong> (camada invasiva do trofoblasto já implantado) produz o HCG. Sua função é manter o <strong>Corpo Lúteo Gravídico</strong> ativo, que continua secretando progesterona e estrogênio, impedindo a descida do endométrio (menstruação) e mantendo a gravidez até a placenta assumir essa função (~10ª–12ª semana).</div>
    </div>
</div>`
    },

    72: {
        title: "Segunda Semana do Desenvolvimento",
        content: `
<div class="resumo-header-main">
    <h2>🧱 Semana 2: A Regra dos Dois</h2>
    <p>Tudo se divide em pares: 2 folhetos, 2 cavidades, 2 camadas do trofoblasto. É a "semana dos dois".</p>
</div>
<div class="resumo-section">
    <h3>🔍 Os Eventos da Semana 2</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">🔵</div><div class="flip-label">Embrioblasto → Disco Bilaminar</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back"><strong>Epiblasto</strong> (dorsal, células colunares) → futuro embrião completo. <strong>Hipoblasto</strong> (ventral, células cúbicas) → contribui para saco vitelino e membranas extraembrionárias.</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">⚪</div><div class="flip-label">Trofoblasto → 2 Camadas</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back"><strong>Citotrofoblasto</strong> (interno, mononuclear, proliferativo). <strong>Sinciciotrofoblasto</strong> (externo, multinuclear, invasivo) → invade a decídua materna, erosiona vasos → lacunas de sangue materno surgem → circulação uteroplacentária primitiva.</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">🟡</div><div class="flip-label">2 Cavidades Surgem</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back"><strong>Cavidade Amniótica</strong> (dorsal, acima do Epiblasto) → futuro âmnio. <strong>Saco Vitelino Primitivo</strong> (ventral, abaixo do Hipoblasto) → posteriormente o saco vitelino secundário, nutrição embrionária inicial.</div></div></div>
    </div>
</div>
<div class="resumo-section">
    <h3>🧪 Quiz Clínico</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ O Molar Completo (gravidez molar) ocorre quando um óvulo sem núcleo (anucleado) é fecundado. Qual estrutura embrionária prolifera excessivamente e por que o útero cresce tanto sem embrião visível?</div>
        <div class="resumo-quiz-answer">O <strong>Trofoblasto</strong> prolifera descontroladamente (especialmente o Citotrofoblasto e Sinciciotrofoblasto), sem embrioblasto viável. O Sinciciotrofoblasto produz <strong>quantidades enormes de HCG</strong> (β-HCG muito elevado), causando o crescimento uterino e os vômitos intensos. O útero fica preenchido por vesículas (aspecto de "cacho de uva") sem estrutura embrionária, pois não há MCI funcional.</div>
    </div>
</div>`
    },

    73: {
        title: "Terceira Semana: Gastrulação",
        content: `
<div class="resumo-header-main">
    <h2>🔥 Gastrulação: O Evento Mais Importante da Vida</h2>
    <p>Na 3ª semana, o disco bilaminar se torna trilaminar. Os 3 folhetos germinativos determinam todos os órgãos futuros.</p>
</div>
<div class="resumo-section">
    <h3>🌀 O Processo da Gastrulação</h3>
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>Linha Primitiva:</strong> Espessamento do Epiblasto na linha média caudal. Células do Epiblasto migram para cá e se invaginam — isso é a gastrulação.</div>
        <div class="resumo-timeline-item"><strong>Mesoderma:</strong> Primeira leva de células invaginadas se espalha entre Epiblasto e Hipoblasto → forma o <strong>Mesoderma Intraembrionário</strong>.</div>
        <div class="resumo-timeline-item"><strong>Endoderma:</strong> Segunda leva de células invaginadas desloca o Hipoblasto → forma o <strong>Endoderma Definitivo</strong>.</div>
        <div class="resumo-timeline-item"><strong>Ectoderma:</strong> O Epiblasto restante (que não migrou) se torna o <strong>Ectoderma</strong>.</div>
        <div class="resumo-timeline-item"><strong>Notocorda:</strong> Estrutura cilíndrica de mesoderma axial que induz o ectoderma a formar a placa neural (neurulação). Regride para se tornar o Núcleo Pulposo dos discos intervertebrais.</div>
    </div>
</div>
<div class="resumo-section">
    <h3>🌱 Os 3 Folhetos e o Que Formam</h3>
    <div class="resumo-accordion open">
        <div class="resumo-accordion-header">
            <h4>Derivados dos Folhetos Germinativos (Clique)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <ul>
                <li><strong>Ectoderma:</strong> SNC, SNP, Epiderme, Esmalte, Hipófise anterior, Cristalino, Glândulas sudoríparas/mamárias.</li>
                <li><strong>Mesoderma:</strong> Músculos, Ossos, Coração, Vasos, Rins, Baço, Córtex suprarrenal, Gônadas.</li>
                <li><strong>Endoderma:</strong> Revestimento do TGI, Pulmões (epitélio), Fígado, Pâncreas, Tireoide, Paratireoide, Timo, Bexiga.</li>
            </ul>
        </div>
    </div>
</div>
<div class="resumo-section">
    <h3>🧪 Quiz Clínico</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Um adenocarcinoma pancreático e um carcinoma hepatocelular têm em comum a origem embriológica. Qual o folheto germinativo de origem e como isso é usado na imunohistoquímica diagnóstica?</div>
        <div class="resumo-quiz-answer">Ambos derivam do <strong>Endoderma</strong>. Na imunohistoquímica, células de origem endodérmica expressam marcadores epiteliais como <strong>Citoqueratina 7, 8, 18 e 19</strong>, além de marcadores específicos (AFP para hepatocarcinoma; CA 19-9 para pâncreas). Esses marcadores ajudam a identificar a origem do tumor mesmo em metástases.</div>
    </div>
</div>`
    },

    74: {
        title: "Neurulação e Dobramentos",
        content: `
<div class="resumo-header-main">
    <h2>🧠 Neurulação: O Nascimento do Sistema Nervoso</h2>
    <p>A notocorda induz o ectoderma a formar o tubo neural. Falhas nesse processo = defeitos congênitos graves.</p>
</div>
<div class="resumo-section">
    <h3>🛤️ Passo a Passo da Neurulação (Semana 3–4)</h3>
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>Indução:</strong> Notocorda libera fatores (Sonic Hedgehog, Noggin) → Ectoderma sobre ela espessa → <strong>Placa Neural</strong>.</div>
        <div class="resumo-timeline-item"><strong>Dobramento:</strong> Bordas da placa se elevam formando as <strong>Pregas Neurais</strong>. O centro afunda → <strong>Sulco Neural</strong>.</div>
        <div class="resumo-timeline-item"><strong>Fechamento:</strong> Pregas se fundem na linha média → <strong>Tubo Neural</strong> fechado. Começa no meio e vai para as extremidades. Completa-se no D26-D28.</div>
        <div class="resumo-timeline-item"><strong>Crista Neural:</strong> Células nas bordas das pregas se desprendem → migram pelo corpo → originam gânglios sensitivos, SNS, medula suprarrenal, melanócitos, células de Schwann, ossos da face.</div>
    </div>
</div>
<div class="resumo-section">
    <h3>⚠️ Defeitos do Fechamento do Tubo Neural</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">🧠</div><div class="flip-label">Anencefalia</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">Falha no fechamento do <strong>Neuróporo Rostral (cranial)</strong>. Encéfalo não se desenvolve. Incompatível com a vida extrauterina. Diagnóstico: AFP elevado no líquido amniótico + USG. Prevenção: Ácido Fólico.</div></div></div>
        <div class="resumo-flip-card"><div class="resumo-flip-inner"><div class="resumo-flip-front"><div class="flip-icon">🦴</div><div class="flip-label">Espinha Bífida</div><div class="flip-hint">Girar</div></div><div class="resumo-flip-back">Falha no fechamento do <strong>Neuróporo Caudal</strong>. Formas: <strong>Oculta</strong> (apenas vértebra aberta, assintomática), <strong>Meningocele</strong> (meninges protrusas), <strong>Mielomeningocele</strong> (medula + meninges, forma mais grave, causa paralisia).</div></div></div>
    </div>
</div>
<div class="resumo-section">
    <h3>🧪 Quiz Clínico</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Por que o ácido fólico deve ser suplementado ANTES da gravidez (pré-concepção) e não apenas após o teste positivo?</div>
        <div class="resumo-quiz-answer">O fechamento do tubo neural ocorre entre o <strong>D22 e D28</strong> de desenvolvimento embrionário. Nesse momento, a maioria das mulheres ainda não sabe que está grávida (a menstruação só atrasaria ~2 semanas depois). Se a mulher só iniciar o folato após o teste positivo, o tubo neural já estará fechado (ou com defeito irreversível). Por isso, recomenda-se iniciar o ácido fólico <strong>1 mês antes de tentar engravidar</strong> e manter até o 1º trimestre.</div>
    </div>
</div>`
    },

    75: {
        title: "Revisão e Correlação Clínica — Embriologia I",
        content: `
<div class="resumo-header-main">
    <h2>🎯 Integração Final: Embriologia I</h2>
    <p>Os grandes temas clínicos derivados das primeiras semanas do desenvolvimento humano.</p>
</div>
<div class="resumo-section">
    <h3>🏆 Mapa Clínico Essencial</h3>
    <div class="resumo-accordion open">
        <div class="resumo-accordion-header">
            <h4>Correlações Clínicas por Semana (Clique)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <ul>
                <li><strong>Semana 1 (Clivagem/Blastocisto):</strong> Gemelaridade. Gêmeos Monozigóticos: divisão do blastocisto. Quanto mais tarde a divisão, maior o risco (gêmeos siameses = divisão após D13).</li>
                <li><strong>Semana 2 (Implantação):</strong> Gravidez ectópica — implantação fora do útero, mais comum na Tuba Uterina. Risco de ruptura e hemorragia. Mola Hidatiforme.</li>
                <li><strong>Semana 3 (Gastrulação):</strong> Teratógenos mais devastadores. Defeitos dos folhetos germinativos.</li>
                <li><strong>Semana 4 (Neurulação):</strong> Defeitos do tubo neural (anencefalia, espinha bífida). Ácido fólico é protetor.</li>
                <li><strong>Semanas 4–8 (Organogênese):</strong> Cardiopatias congênitas, fendas palatinas, defeitos de membros. Janela crítica para teratógenos.</li>
            </ul>
        </div>
    </div>
</div>
<div class="resumo-section">
    <h3>🔬 Diagnóstico Pré-Natal</h3>
    <div class="resumo-compare">
        <div class="resumo-compare-item" style="--compare-color: #3b82f6">
            <h5>Marcadores Séricos Maternos</h5>
            <p><strong>AFP elevada:</strong> Defeitos do tubo neural (anencefalia, espinha bífida), gastrosquise. <strong>AFP baixa + HCG alto + estriol baixo:</strong> Trissomia 21 (Teste Triplo). <strong>HCG muito alto:</strong> Mola hidatiforme, Trissomia 21.</p>
        </div>
        <div class="resumo-compare-item" style="--compare-color: #10b981">
            <h5>Procedimentos Invasivos</h5>
            <p><strong>Amniocentese</strong> (15ª–20ª sem): Análise de células fetais no líquido amniótico → Cariótipo. Risco de abortamento ~0,5%. <strong>Biópsia de Vilo Coriônico (CVS)</strong> (10ª–13ª sem): Mais precoce, mesmo risco. Detecta anomalias cromossômicas.</p>
        </div>
    </div>
</div>
<div class="resumo-section">
    <h3>🧪 Quiz Final</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Uma USG obstétrica de 12 semanas mostra dois fetos com uma única placenta e dois sacos amnióticos. Qual o tipo de gemelaridade e quando ocorreu a divisão do zigoto?</div>
        <div class="resumo-quiz-answer"><strong>Gêmeos Monozigóticos Monocoriônicos Diamnióticos.</strong> A divisão ocorreu entre o <strong>4º e o 8º dia</strong> após a fecundação, após a formação do trofoblasto (que já estava comprometido com uma única placenta — monocoriônico) mas antes da formação do âmnio (D8), resultando em dois sacos amnióticos separados. É o tipo mais comum de gemelaridade idêntica.</div>
    </div>
</div>`
    }
};
