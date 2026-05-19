// Extra flashcards — Fisiologia I — expand each block to ~40
const FC_FISIO_B913_X = [
    { id: 16, question: { pt: "O que é potencial de membrana?", es: "¿Potencial de membrana?" }, answer: { pt: "Diferença de voltagem entre os meios intra e extracelular (~-70mV em células excitáveis).", es: "Diferencia de voltaje intra/extracelular." } },
    { id: 17, question: { pt: "Qual o papel do Ca²⁺ como segundo mensageiro?", es: "¿Papel del Ca²⁺?" }, answer: { pt: "Ativa calmodulina, participa da contração muscular, exocitose e ativação enzimática.", es: "Activa calmodulina, contracción, exocitosis." } },
    { id: 18, question: { pt: "O que é receptor metabotrópico?", es: "¿Receptor metabotrópico?" }, answer: { pt: "Receptor acoplado à proteína G — ativa cascatas intracelulares de segundo mensageiro.", es: "Receptor acoplado a proteína G." } },
    { id: 19, question: { pt: "O que é receptor ionotrópico?", es: "¿Receptor ionotrópico?" }, answer: { pt: "Receptor que é ele próprio um canal iônico — ligação do ligante abre o canal diretamente.", es: "Receptor que es canal iónico — apertura directa." } },
    { id: 20, question: { pt: "O que acontece na despolarização da fibra muscular?", es: "¿Qué pasa en la despolarización muscular?" }, answer: { pt: "Liberação de Ca²⁺ do retículo sarcoplasmático → Ca²⁺ se liga à troponina → contração.", es: "Ca²⁺ del retículo → troponina → contracción." } },
    { id: 21, question: { pt: "O que é acetilcolinesterase?", es: "¿Qué es la acetilcolinesterasa?" }, answer: { pt: "Enzima que degrada acetilcolina na fenda sináptica, encerrando o sinal.", es: "Degrada acetilcolina en la hendidura sináptica." } },
    { id: 22, question: { pt: "O curare atua como?", es: "¿El curare actúa como?" }, answer: { pt: "Bloqueador competitivo de receptores nicotínicos → paralisia muscular.", es: "Bloqueador de receptores nicotínicos → parálisis." } },
    { id: 23, question: { pt: "O que é tétano muscular?", es: "¿Qué es el tétanos muscular?" }, answer: { pt: "Contração contínua por estímulos de alta frequência que não permitem relaxamento.", es: "Contracción continua por alta frecuencia de estímulos." } },
    { id: 24, question: { pt: "Qual o principal neurotransmissor excitatório do SNC?", es: "¿Principal neurotransmisor excitatorio del SNC?" }, answer: { pt: "Glutamato.", es: "Glutamato." } },
    { id: 25, question: { pt: "Qual o principal neurotransmissor inibitório do SNC?", es: "¿Principal inhibitorio del SNC?" }, answer: { pt: "GABA (ácido gama-aminobutírico).", es: "GABA." } }
];
const FC_FISIO_B914_X = [
    { id: 16, question: { pt: "O que é inotropismo?", es: "¿Qué es el inotropismo?" }, answer: { pt: "Força de contração do coração. Inotrópico (+): aumenta força; (-): diminui.", es: "Fuerza de contracción. Positivo: aumenta; negativo: disminuye." } },
    { id: 17, question: { pt: "O que é cronotropismo?", es: "¿Cronotropismo?" }, answer: { pt: "Frequência cardíaca. Cronotrópico (+): acelera; (-): desacelera.", es: "Frecuencia cardíaca. Positivo: acelera." } },
    { id: 18, question: { pt: "O que é dromotropismo?", es: "¿Dromotropismo?" }, answer: { pt: "Velocidade de condução elétrica no coração.", es: "Velocidad de conducción eléctrica." } },
    { id: 19, question: { pt: "A noradrenalina tem efeito _________ sobre o coração.", es: "La noradrenalina tiene efecto ___ sobre el corazón." }, answer: { pt: "Inotrópico e cronotrópico positivo (estimula via receptores β1).", es: "Inotrópico y cronotrópico positivo (β1)." } },
    { id: 20, question: { pt: "A acetilcolina tem efeito _________ sobre o coração.", es: "La acetilcolina tiene efecto ___." }, answer: { pt: "Cronotrópico e dromotrópico negativo (desacelera via receptores M2).", es: "Cronotrópico negativo (M2)." } },
    { id: 21, question: { pt: "O que é volume sistólico?", es: "¿Volumen sistólico?" }, answer: { pt: "Volume ejetado por ventrículo a cada batimento = VDF - VSF. Normal: ~70 mL.", es: "Volumen eyectado por latido = VDF - VSF (~70 mL)." } },
    { id: 22, question: { pt: "O que é retorno venoso?", es: "¿Retorno venoso?" }, answer: { pt: "Volume de sangue que retorna ao coração por minuto. Normal = débito cardíaco (~5 L/min).", es: "Volumen que retorna al corazón por minuto." } },
    { id: 23, question: { pt: "O intervalo PR no ECG corresponde a?", es: "¿El intervalo PR corresponde a?" }, answer: { pt: "Tempo de condução do NSA ao NAV (despolarização atrial + atraso no NAV). Normal: 0,12-0,20s.", es: "Conducción NSA al NAV. Normal: 0,12-0,20s." } },
    { id: 24, question: { pt: "O que é taquicardia?", es: "¿Qué es taquicardia?" }, answer: { pt: "FC > 100 bpm.", es: "FC > 100 lpm." } },
    { id: 25, question: { pt: "O que é bradicardia?", es: "¿Qué es bradicardia?" }, answer: { pt: "FC < 60 bpm.", es: "FC < 60 lpm." } }
];
const FC_FISIO_B915_X = [
    { id: 16, question: { pt: "A inspiração é ativa ou passiva?", es: "¿La inspiración es activa o pasiva?" }, answer: { pt: "Ativa — contração do diafragma e intercostais externos.", es: "Activa — contracción del diafragma." } },
    { id: 17, question: { pt: "Os músculos acessórios da inspiração são?", es: "¿Músculos accesorios inspiratorios?" }, answer: { pt: "Esternocleidomastóideo, escalenos, serrátil anterior.", es: "Esternocleidomastoideo, escalenos." } },
    { id: 18, question: { pt: "O que é ventilação-minuto?", es: "¿Ventilación-minuto?" }, answer: { pt: "Volume total de ar ventilado por minuto = VC × FR. Normal: 500mL × 12 = 6L/min.", es: "VC × FR. Normal: ~6L/min." } },
    { id: 19, question: { pt: "O que é ventilação alveolar?", es: "¿Ventilación alveolar?" }, answer: { pt: "Volume de ar que efetivamente chega aos alvéolos = (VC - espaço morto) × FR.", es: "(VC - espacio muerto) × FR." } },
    { id: 20, question: { pt: "O 2,3-DPG faz o que com a curva de dissociação?", es: "¿El 2,3-DPG qué hace a la curva?" }, answer: { pt: "Desloca para a direita → libera mais O₂ nos tecidos. Aumenta em anemia e altitude.", es: "Desplaza a la derecha → más O₂ liberado." } },
    { id: 21, question: { pt: "O monóxido de carbono (CO) é perigoso por quê?", es: "¿Por qué el CO es peligroso?" }, answer: { pt: "Liga-se à hemoglobina com afinidade 200x maior que O₂ → forma carboxihemoglobina → impede transporte de O₂.", es: "Se une a Hb con afinidad 200x mayor → impide O₂." } },
    { id: 22, question: { pt: "O que é o efeito Haldane?", es: "¿Efecto Haldane?" }, answer: { pt: "A desoxigenação da hemoglobina facilita o transporte de CO₂ (nos tecidos).", es: "La desoxigenación facilita transporte de CO₂." } },
    { id: 23, question: { pt: "Em qual direção vai o gradiente de O₂ no alvéolo?", es: "¿Dirección del gradiente de O₂?" }, answer: { pt: "Alvéolo → sangue capilar (PAO₂ 100mmHg > PvO₂ 40mmHg).", es: "Alvéolo → sangre capilar." } },
    { id: 24, question: { pt: "A equação do ar alveolar calcula?", es: "¿La ecuación alveolar calcula?" }, answer: { pt: "A PAO₂ ideal: PAO₂ = FiO₂(Patm-47) - PaCO₂/R.", es: "La PAO₂: PAO₂ = FiO₂(Patm-47) - PaCO₂/R." } },
    { id: 25, question: { pt: "O reflexo de Hering-Breuer serve para?", es: "¿Reflejo de Hering-Breuer?" }, answer: { pt: "Impedir hiperinsuflação — receptores de estiramento no pulmão inibem inspiração.", es: "Impedir hiperinsuflación — receptores limitan inspiración." } }
];
const FC_FISIO_B916_X = [
    { id: 16, question: { pt: "O que é a mácula densa?", es: "¿Qué es la mácula densa?" }, answer: { pt: "Grupo de células no túbulo distal que detecta [NaCl] e regula a liberação de renina.", es: "Células que detectan NaCl y regulan renina." } },
    { id: 17, question: { pt: "O peptídeo natriurético atrial (ANP) faz o quê?", es: "¿Qué hace el ANP?" }, answer: { pt: "Promove natriurese (excreção de Na⁺) e diurese → diminui volume e PA.", es: "Promueve natriuresis y diuresis → disminuye PA." } },
    { id: 18, question: { pt: "Os IECA (inibidores da ECA) atuam como?", es: "¿Cómo actúan los IECA?" }, answer: { pt: "Bloqueiam a conversão de angiotensina I → II → vasodilatação + ↓aldosterona → ↓PA.", es: "Bloquean conversión → vasodilatación + ↓aldosterona." } },
    { id: 19, question: { pt: "O que é glicosúria?", es: "¿Qué es la glucosuria?" }, answer: { pt: "Presença de glicose na urina — ocorre quando glicemia ultrapassa o limiar renal (~180mg/dL).", es: "Glucosa en la orina — cuando supera ~180mg/dL." } },
    { id: 20, question: { pt: "Hipercalemia pode causar o quê no coração?", es: "¿La hipercalemia causa qué?" }, answer: { pt: "Arritmias, fibrilação ventricular — altera potencial de repouso das células cardíacas.", es: "Arritmias — altera potencial de reposo cardíaco." } },
    { id: 21, question: { pt: "O que é acidose metabólica?", es: "¿Acidosis metabólica?" }, answer: { pt: "↓pH por acúmulo de ácidos (↓HCO₃⁻). Compensação: hiperventilação (↓CO₂).", es: "↓pH por ↓HCO₃⁻. Compensación: hiperventilación." } },
    { id: 22, question: { pt: "O que é alcalose respiratória?", es: "¿Alcalosis respiratoria?" }, answer: { pt: "↑pH por hiperventilação (↓CO₂). Ex.: ansiedade, dor.", es: "↑pH por hiperventilación." } },
    { id: 23, question: { pt: "A creatinina é usada para estimar?", es: "¿La creatinina estima qué?" }, answer: { pt: "A taxa de filtração glomerular (TFG) — produção constante pelo músculo.", es: "La TFG — producción muscular constante." } },
    { id: 24, question: { pt: "A ureia é filtrada e _________ nos túbulos.", es: "¿La urea es filtrada y ___?" }, answer: { pt: "Parcialmente reabsorvida (~50%) — concentra na medula renal.", es: "Parcialmente reabsorbida (~50%)." } },
    { id: 25, question: { pt: "O PAH (ácido para-aminohipúrico) mede?", es: "¿El PAH mide?" }, answer: { pt: "O fluxo plasmático renal (FPR) — é filtrado e secretado completamente.", es: "El flujo plasmático renal." } }
];
const FC_FISIO_B917_X = [
    { id: 16, question: { pt: "O que são as células de Cajal?", es: "¿Células de Cajal?" }, answer: { pt: "Células marcapasso do TGI — geram ondas lentas que regulam a motilidade.", es: "Marcapasos del TGI — generan ondas lentas." } },
    { id: 17, question: { pt: "O que é o reflexo da deglutição?", es: "¿Reflejo de deglución?" }, answer: { pt: "Reflexo que transporta o bolo alimentar da faringe ao esôfago — coordenado pelo centro bulbar.", es: "Transporte del bolo de faringe a esófago." } },
    { id: 18, question: { pt: "O esfíncter esofágico inferior previne?", es: "¿El esfínter esofágico inferior previene?" }, answer: { pt: "Refluxo gastroesofágico — relaxa para permitir passagem do alimento.", es: "Reflujo gastroesofágico." } },
    { id: 19, question: { pt: "O que é o reflexo gastrocólico?", es: "¿Reflejo gastrocólico?" }, answer: { pt: "Distensão gástrica estimula motilidade do cólon → urgência de defecar após refeição.", es: "Distensión gástrica estimula motilidad del colon." } },
    { id: 20, question: { pt: "Onde a água é mais absorvida no TGI?", es: "¿Dónde se absorbe más agua?" }, answer: { pt: "Intestino delgado (~80%) e cólon (~15-20%).", es: "Intestino delgado (~80%) y colon (~15-20%)." } },
    { id: 21, question: { pt: "A lipase pancreática digere o quê?", es: "¿La lipasa pancreática digiere qué?" }, answer: { pt: "Triglicerídeos em ácidos graxos e monoglicerídeos.", es: "Triglicéridos en ácidos grasos y monoglicéridos." } },
    { id: 22, question: { pt: "A amilase salivar digere?", es: "¿La amilasa salival digiere?" }, answer: { pt: "Amido em maltose — começa a digestão de carboidratos na boca.", es: "Almidón en maltosa — inicia digestión en la boca." } },
    { id: 23, question: { pt: "O que é a circulação êntero-hepática?", es: "¿Circulación enterohepática?" }, answer: { pt: "Reciclagem dos sais biliares: intestino → veia porta → fígado → bile. ~95% são reabsorvidos.", es: "Reciclaje de sales biliares. ~95% se reabsorben." } },
    { id: 24, question: { pt: "O GIP (peptídeo inibitório gástrico) faz?", es: "¿El GIP qué hace?" }, answer: { pt: "Estimula liberação de insulina e inibe secreção gástrica.", es: "Estimula insulina e inhibe secreción gástrica." } },
    { id: 25, question: { pt: "A motilina estimula?", es: "¿La motilina estimula?" }, answer: { pt: "O complexo motor migratório (CMM) durante o jejum.", es: "El complejo motor migratorio en ayunas." } }
];

if (typeof window !== 'undefined') {
    if (window.FC_FISIO_B913) window.FC_FISIO_B913.push(...FC_FISIO_B913_X);
    if (window.FC_FISIO_B914) window.FC_FISIO_B914.push(...FC_FISIO_B914_X);
    if (window.FC_FISIO_B915) window.FC_FISIO_B915.push(...FC_FISIO_B915_X);
    if (window.FC_FISIO_B916) window.FC_FISIO_B916.push(...FC_FISIO_B916_X);
    if (window.FC_FISIO_B917) window.FC_FISIO_B917.push(...FC_FISIO_B917_X);
}
