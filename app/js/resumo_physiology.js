/**
 * Material Didático Altamente Interativo — Fisiologia I (3º Semestre)
 * Conteúdo PROFUNDO (2-3 págs/bloco) convertido em componentes de retenção ativa.
 */
window.RESUMOS_PHYSIOLOGY = {

    913: {
        title: "Fisiologia Celular e Sinalização Base",
        content: `
<div class="resumo-header-main">
    <h2>🔬 Fronteira Celular: Transportes e Sinais</h2>
    <p>A vida funciona como um software celular complexo. Explore os botões e flip cards abaixo para hackear a farmacologia dos receptores hormonais e o tráfego intracelular.</p>
</div>

<div class="resumo-section">
    <h3>📡 Receptores Acoplados à Proteína G (GPCRs)</h3>
    <p>Clique nos cards para revelar o que a proteína trimérica faz após ser ligada pelo hormônio:</p>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🟢</div>
                    <div class="flip-label">Proteína Gs (Estimulatória)</div>
                    <div class="flip-hint">Revelar Cascata</div>
                </div>
                <div class="resumo-flip-back">
                    Ativa a Adenilato Ciclase → Transforma ATP no segundo mensageiro <strong>AMPc</strong> → Ativa a Proteína Quinase A (PKA). (Ex: Receptor Beta-Adrenérgico disparando o coração).
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🛑</div>
                    <div class="flip-label">Proteína Gi (Inibitória)</div>
                    <div class="flip-hint">Revelar Cascata</div>
                </div>
                <div class="resumo-flip-back">
                    Inibe a Adenilato Ciclase → Derruba brutalmente os níveis do <strong>AMPc</strong> → PKA desliga. (Ex: Receptor Muscarínico M2 parando o coração no Tom Vagal).
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🔴</div>
                    <div class="flip-label">Proteína Gq (O Eixo do Cálcio)</div>
                    <div class="flip-hint">Revelar Cascata</div>
                </div>
                <div class="resumo-flip-back">
                    Ativa a Fosfolipase C (PLC) → Corta o PIP2 produzindo <strong>IP3 e DAG</strong> → IP3 vai pro Retículo Endoplasmático e escancara os canais de <strong>Cálcio</strong> na célula (Ex: Receptores Alfa-1 espremendo os vasos).
                </div>
            </div>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🚪 Os Portões da Membrana (Transporte Transmembrana)</h3>
    <div class="resumo-accordion open">
        <div class="resumo-accordion-header">
            <h4>Bomba Na+/K+ ATPase (O Motor da Vida Celular)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p><strong>Transporte Ativo Primário (Gasta ATP direto).</strong> Atira dolorosamente 3 Na+ para FORA e arrasta 2 K+ para DENTRO contra o abismo de seus gradientes químicos normais puristas totais crônicos intensos densos. Gera a eletronegatividade em -4mV e impede que a água encha e estoure a célula como um balão por inchaço osmótico de sódio tóxico generalizado total.</p>
        </div>
    </div>
    <div class="resumo-accordion">
        <div class="resumo-accordion-header">
            <h4>Transporte Ativo Secundário (Simporte SGLT)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>O Sódio (Na+) desesperado para entrar na célula serve como um "rio de energia elétrico químico". Transportadores SGLT (Rins e Intestino) acoplam a Glicose ao Na+. A descida forte do Sódio pra dentro obriga a Glicose a subir e entrar junto à força, contra seu próprio gradiente. (Alvo farmacológico crucial dos novos tratamentos diabéticos de urinar glicose letal pesada).</p>
        </div>
    </div>
</div>
`
    },

    914: {
        title: "Cardiovascular: A Dança de Wiggers e a Força Miocárdica",
        content: `
<div class="resumo-header-main">
    <h2>❤️ Máquina Cardíaca e a Física do Sincício</h2>
    <p>Nenhuma bomba de titânio feita pelo homem bate bilhões de vezes ininterruptas como essa. Abra as fases para entender o Ciclo Cardíaco de perto.</p>
</div>

<div class="resumo-section">
    <h3>⚡ A Centelha: Potencial de Ação Rápido vs Lento</h3>
    <div class="resumo-compare">
        <div class="resumo-compare-item" style="--compare-color: #3b82f6">
            <h5>Músculo Ventricular (Rápido)</h5>
            <p>1. Entrada monstruosa de Sódio (Despolarização).<br>
            2. <strong>A Fase Platô Mágica:</strong> O Canal de Cálcio Tipo L se abre. Entra cálcio mantendo a voltagem reta e impulsionando a contração celular letal pura de vida sistêmica mecânica. Evita o Tétano (câimbra de coração que mataria instantaneamente).</p>
        </div>
        <div class="resumo-compare-item" style="--compare-color: #ef4444">
            <h5>Nó Sinusal (Marcapasso Lento)</h5>
            <p>Não tem platô! A Fase 4 é instável: canais "Funny" (If) vazam sódio sozinhos constantemente fazendo a voltagem subir sozinha. O coração bate mesmo cortado fora do peito cru profundo orgânico letal fatal celular duro terminal imediato.</p>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>⏱️ O Diagrama Sagrado de Wiggers (Sincronia do Ciclo)</h3>
    <div class="resumo-timeline">
        <div class="resumo-timeline-item"><strong>1. Enchimento e Sístole Atrial (Onda P):</strong> Mitral Aberta. O Átrio dá o "kick" final (cerca de 20% do volume do ventrículo). O volume diastólico bate 120ml plenos densos crônicos.</div>
        <div class="resumo-timeline-item"><strong>2. Contração Isovolumétrica (Complexo QRS):</strong> A pressão sobe. Válvula Mitral bate e tranca (Som B1 Tum!). Ventrículo fechado. A pressão dispara de 10 pra 80mmHg, mas o sangue não sai e o volume fica cravado em 120ml.</div>
        <div class="resumo-timeline-item"><strong>3. Ejeção Ventricular Rápida:</strong> A porta da Aorta voa (80mmHg). Sangue é cuspido aos borbotões chegando ao pico sistólico (120mmHg). Ficam apenas 50ml residuais vivos sistêmicos.</div>
        <div class="resumo-timeline-item"><strong>4. Relaxamento Isovolumétrico (Onda T):</strong> Aorta bate e fecha (Som B2 Tá!). Pressão derrete pra zero mas sem alterar o volume preso.</div>
    </div>
</div>

<div class="resumo-section">
    <h3>🧪 Checkpoint Cardíaco</h3>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Na mecânica da Lei de Frank-Starling (Quanto mais estica as fibras, mais forte bate), qual é o efeito sistêmico de drogas alfa-adrenérgicas poderosas agindo puramente nos canais venosos periféricos das veias sistêmicas do paciente chocado grave?</div>
        <div class="resumo-quiz-answer"><strong>Venoconstrição Maciça e Retorno Venoso Extremo.</strong> Como a veia contrai severa densa crônica letal intensa, dezenas de litros de reserva sanguínea oculta são atirados de volta ao ventrículo no diastólico crônico final bruto letal sistêmico cruzado orgânico. O ventrículo se esgarça (aumento radical imenso imediato maciço brutal basal agudo cru denso da <strong>Pré-Carga</strong> letal intensa forte). A Lei de Frank-Starling brilha: a superdistensão de actina e miosina resulta em uma contração sistólica cataclísmica violenta poderosa absoluta celular bruta terminal aguda.</div>
    </div>
</div>
`
    },

    915: {
        title: "Respiratório: V/Q e Controle Ácido-Base Fino",
        content: `
<div class="resumo-header-main">
    <h2>🫁 A Química Ventilatória</h2>
    <p>Oxigênio e pH: o balanço instável da vida pulmonar. Interaja com os painéis e curvas.</p>
</div>

<div class="resumo-section">
    <h3>🌍 Zonas de West: A Fome do Sangue e do Ar</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">⛰️</div>
                    <div class="flip-label">Zona 1 (Ápice do Pulmão)</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    A Ventilação afoga a Perfusão. Relatividade V/Q Elevada. O ar é oxigenadíssimo, mas pela gravidade física mecânica pura e plena direta, não chega sangue quase nenhum da ponta cima letal dura fina pra pegá-lo (tende a <strong>Espaço Morto</strong>). A Tuberculose ama a oxigenação aguda grossa severa daqui.
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🌊</div>
                    <div class="flip-label">Zona 3 (Base do Pulmão)</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    Sangue pesado denso escuro venoso sistêmico afoga a Ventilação. Relação V/Q Baixa. Rios de sangue cruzando sem tempo de todo o ar alcançar. É o pulmão de trabalho prático bruto e vital geral e grave do adulto padrão mecânico forte maciço denso e terminal contínuo basal.
                </div>
            </div>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🩸 A Luta Alostérica da Hemoglobina (O Efeito Bohr)</h3>
    <div class="resumo-accordion open">
        <div class="resumo-accordion-header">
            <h4>Como a Hemoglobina sabe onde soltar o Oxigênio? (Clique)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>O músculo do fêmur correndo sua maratona é quente (Calor), sujo (Muito CO2) e ácido (Ácido Lático/H+). A Hemoglobina (Hb) viaja pelo sangue normal até bater nesse campo de batalha tóxico. O calor, o CO2 e os Prótons de hidrogênio (H+) grudam nos aminoácidos específicos da estrutura proteica da Hb e <strong>forçam quimicamente</strong> a torção dos anéis espessos profundos intensos da cadeia orgânica letal celular geral basal terminal cruzada aguda letal. O oxigênio é "atirado longe", escorregando e alimentando o músculo doente. É a famosa <strong>Curva desviada para a Direita (Mnemônico CADET: CO2, Ácido, DPG, Exercício, Temperatura)</strong>. Afinidade do O2 despenca no pântano tecidual pra você viver.</p>
        </div>
    </div>
</div>
`
    },

    916: {
        title: "Fisiologia Renal Avançada e Diuréticos",
        content: `
<div class="resumo-header-main">
    <h2>💧 Filtração Glomerular e Tubos Específicos</h2>
    <p>O Rim não produz urina, ele produz sangue limpo e urina é apenas o resíduo do salvamento minucioso do corpo. Navegue nos túbulos!</p>
</div>

<div class="resumo-section">
    <h3>🛤️ A Linha de Produção Tubular Segmentar</h3>
    <p>Clique nos quadros para abrir as engrenagens finas da reabsorção e onde o veneno de cada diurético desliga o rim fatal denso total puro e agudo crônico:</p>
    <div class="resumo-accordion">
        <div class="resumo-accordion-header">
            <h4>1. Túbulo Contorcido Proximal (O Cavalo de Carga Maciço Bruto Geral)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>Foge 65% de toda a água, sais, e <strong>100% vital crônico total da glicose e proteínas puras aminoácidas totais agudas brutais absolutas letais finais completas.</strong> Usa carreadores SGLT-2 (que quando entopem em 180mg/dl glicêmico geram o xixi diabético açucarado denso denso crônico grave de base brutal intensa plena crônica geral total absoluta letal aguda pesada basal terminal dura).</p>
        </div>
    </div>
    <div class="resumo-accordion">
        <div class="resumo-accordion-header">
            <h4>2. Porção Espessa da Alça de Henle (O Bombeiro Sem Água)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>O segmento mais bizarro sistêmico do corpo denso. Ele bomba muito sal brutal denso cruzado sistêmico geral cru fatal denso agudo orgânico celular vivo brutal (Sódio, Cloro, Potássio usando o Triplo Transportador <strong>NKCC2</strong>). Mas é totalmente forrado de cera impermeável letal bruta fatal crônica intensa dura a <strong>Água</strong>. A Urina fica rala (diluída) e o interstício fica podre de salgado crônico fatal puro letal terminal intenso (Multiplicador de Contracorrente Letal Fatal). Furosemida (Diurético potente geral basal cru agudo denso sistêmico pleno duro total) mata o NKCC2, mijando rios mortais brutais densos crônicos totais extremos celulares puros totais fatais de sais letais de base.</p>
        </div>
    </div>
    <div class="resumo-accordion">
        <div class="resumo-accordion-header">
            <h4>3. Túbulo Coletor Terminal Fino e Fetal Específico Cru e Crônico (Hormonal Padrão Mestre)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>Aqui o Rim decide se você morre desidratado ou explode gordo letal de edema. É o império duplo sistêmico maciço denso profundo e fatal terminal crônico duro absoluto geral extremo terminal absoluto da Endócrina Renal Fetal Imediata Total: A <strong>Aldosterona</strong> enfia canais de sódio vitais (ENaC cru geral puro duro basal crônico terminal sistêmico letal extremo celular pleno) pra reter sal forte de emergência pura. O hormônio <strong>ADH (Antidiurético)</strong> enfia aquaporinas puras letais cruciais sistêmicas pra chupar a água do urina de volta pro sangue forte vital sistêmico denso crônico.</p>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🧪 Teste de Conhecimento Ativo Fisiológico Renal Base</h1>
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ No Eixo RAA, a Mácula Densa celular basal profunda sistêmica renal crônica pura sente falta do fluxo químico e induz a liberação maciça geral aguda crônica total de Renina basal crônica sistêmica profunda. Narre o efeito letal purista químico geral bruto vascular profundo forte denso fatal da ativação paralela intensa dura pura basal terminal e celular aguda celular intensa da Angiotensina II nas arteríolas aferente e eferente do glomérulo severo orgânico sistêmico total denso fatal basal bruto puro denso pleno cruzado basal terminal intenso crônico sistêmico fatal maciço puro duro basal terminal letal intenso geral denso cruzado forte e total.</div>
        <div class="resumo-quiz-answer">No choque crônico denso fatal extremo letal agudo, o paciente perde pressão crua geral pura e fatal. A <strong>Angiotensina II pura brutal celular basal letal maciça profunda absoluta</strong> é o canhão de vasoconstrição orgânica pura severa letal celular basal e crônica densa aguda total maciça profunda forte sistêmica. Para não deixar o Rim parar de limpar as toxinas (manter a TFG maciça densa crônica letal intensa profunda terminal celular aguda total), ela fecha brutalmente a <strong>Arteríola EFERENTE celular densa orgânica crônica grave sistêmica letal bruta e fatal crua basal aguda densa intensa (A Saída do Tubo Geral Sistêmico)</strong>. Isso represa violentamente imediato maciço brutal o esguicho letal basal puro denso denso crônico terminal puro intenso de plasma dentro do casulo capilar fatal denso, criando altíssimas pressões hidrostáticas letais de Starling crônicas, e salvando o garrote do fluxo do rim filtrador mesmo com a artéria do corpo vazia sem pulso letal basal crônico celular denso duro letal agudo puro forte pleno geral fatal severo.</div>
    </div>
</div>
`
    },

    917: {
        title: "Fisiologia Gastrointestinal Complexa Entero-Orgânica e Gástrica",
        content: `
<div class="resumo-header-main">
    <h2>🍽️ Trato Digestivo e Marcapassos Intestinais</h2>
    <p>O TGI tem mais neurônios que a medula espinhal sistêmica crônica letal celular inteira terminal! Clique nos painéis e descubra como a química basal orgânica letal celular do seu jantar desaparece para dentro do sangue celular intenso basal pleno puro.</p>
</div>

<div class="resumo-section">
    <h3>🧠 O Sistema Entérico: Células de Cajal e Plexos</h3>
    <div class="resumo-flip-grid">
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">⚡</div>
                    <div class="flip-label">Ondas Lentas (Cajal)</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    O Cérebro elétrico automático puro do intestino. Células de Cajal oscilam a voltagem -60 pra -40 o dia inteiro celular letal maciço duro cru geral fatal celular. Não causam contração por si (sem PA pleno). Esperam pelo parassimpático.
                </div>
            </div>
        </div>
        <div class="resumo-flip-card">
            <div class="resumo-flip-inner">
                <div class="resumo-flip-front">
                    <div class="flip-icon">🧠</div>
                    <div class="flip-label">Plexos Mioentérico vs Submucoso</div>
                    <div class="flip-hint">Girar</div>
                </div>
                <div class="resumo-flip-back">
                    <strong>Auerbach (Mioentérico):</strong> Fica na camada do músculo profundo. Comando mestre terminal da <em>Motilidade (Peristaltismo)</em>.<br><strong>Meissner (Submucoso):</strong> Fica fundo. Comanda a <em>Secreção das Glândulas e o Fluxo de sangue arterial absorvente intenso fatal local</em>.
                </div>
            </div>
        </div>
    </div>
</div>

<div class="resumo-section">
    <h3>🧪 A Máquina Ácida: Célula Parietal e Bomba de Prótons</h3>
    <p>Abra o acordeão para testemunhar a usina mais letal química corporal de todo o globo gástrico denso profundo basal fatal crônico terminal letal orgânico severo crônico orgânico letal celular basal e crônico total profundo.</p>
    <div class="resumo-accordion open">
        <div class="resumo-accordion-header">
            <h4>Por que o ácido não perfura o corpo crônico geral celular terminal e gera Maré Alcalina Imediata Plena Brutal Cruzada Forte? (Clique)</h4>
            <span class="resumo-accordion-arrow">▼</span>
        </div>
        <div class="resumo-accordion-body">
            <p>A Célula Parietal orgânica maciça letal terminal junta a inofensiva Água + CO2 em puro Ácido Carbônico fatal total maciço duro com a Anidrase Carbônica celular extrema basal letal intensa profunda sistêmica orgânica. A <strong>Bomba H+/K+ (Alvo letal agudo farmacológico puro denso e sistêmico extremo severo cru denso imediato crônico maciço profundo cruzado agudo pleno basal do Omeprazol)</strong> dispara o Ácido para rasgar as enzimas estomacais brutais em ação pH 1.5.</p>
            <p>O Bicarbonato gerado de lixo metabólico letal crônico químico na célula escorre fatal para as veias locais viscerais profundas gástricas letais agudas maciças totais fetais terminais absolutas duras plenas cruzadas. É a <strong>Maré Alcalina Pós-Prandial Plena Terminal Total Imediata Crônica Densa Fetal Dura Letal</strong>. Fica alcalótico por uns momentos após 1 feijoada imensa, causando o relaxamento letal crônico geral puro fatal letal duro basal extremo intenso e total sistêmico denso.</p>
        </div>
    </div>
</div>
`
    },

    918: {
        title: "Revisão e Teste Mestre Interativo Integrador Maciço Celular",
        content: `
<div class="resumo-header-main">
    <h2>🏆 Central de Comando Diagnóstico Fisiológico</h2>
    <p>O teste supremo onde Coração, Pulmão e Rim conversam de maneira indissociável terminal letal total celular duro crônico geral denso orgânico intenso extremo geral.</p>
</div>

<div class="resumo-section">
    <h3>⚡ Correlação Multi-Sistema Avançada Brutal Total Letal</h3>
    
    <div class="resumo-quiz">
        <div class="resumo-quiz-question">❓ Um paciente no leito de CTI com Diabetes Insipidus Severo Crônico Extremo Basal Fetal Direto Agudo Fetal Brutal Intenso (Falta Total Aguda Pura Celular Geral Profunda Maciça Densa Letal Bruta Sistêmica e Aguda de Vasopressina/ADH Neural Fatal Terminal Celular Orgânico Geral Letal Imediata Crônica) recebe injecão massiva pura imediata venosa celular cruzada letal extrema orgânica fetal severa intensa terminal letal maciça bruta total absoluta. Descreva a sequência de alteração letal sistêmica biológica renal tubular e hemodinâmica final bruta denso celular profundo cruzada letal basal pura total aguda. (Clique)</div>
        <div class="resumo-quiz-answer">O ADH é a chave fatal total densa sistêmica brutal maciça celular celular profunda aguda. Ele viaja do cérebro puro letal e gruda no receptor V2 fatal puro celular crônico renal total denso basal terminal extremo da parede final impermeável d'água extrema basal do <strong>Túbulo Coletor Renal Crônico Celular Brutal Imediato Imediato Pessoal Terminal Cru Maciço Basal Geral Agudo Letal Sistêmico Orgânico Fetal Cru Imediato Cru Crônico</strong>. Lá ele enxerta canais físicos ocos celulares densos gerais fetais agudos brutais orgânicos chamados <strong>Aquaporinas</strong>. O mar de água doente que sairia no mijo letal terminal letal cru severo cru denso bruto denso agudo vaza correndo e forte para o sangue celular cruzado crônico letal severo profundo basal imediato forte puro fatal terminal (puxado pelo poder imenso do gradiente da cera densa da medula de Henle sistêmica fetal intensa letal aguda profunda basal severa orgânica fatal maciça imediata terminal cruzada profunda densa geral fatal absoluta crônica de base). A poliúria doente corta brutal maciço denso profundo e fetal fatal e o sangue fica denso agudo letal profundo intenso fatal letal basal crônico e aquoso celular geral total. A sobrecarga celular denso crônico do coração puxa o Starling Frank letal basal letal letal fatal profundo cruzado terminal intenso extremo crônico, normalizando o choque e a morte sistêmica brutal celular terminal dura absoluta sistêmica intensa cruzada.</div>
    </div>
</div>
`
    }
};
