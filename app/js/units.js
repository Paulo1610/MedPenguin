// Metadados das 15 Unidades do Guyton y Hall - Repaso de Fisiología

const UNITS = [

    // --- SEMESTER 3: BIOQUÍMICA I ---

    {

        id: 901,

        title: { pt: "Aminoácidos e Proteínas", es: "Aminoácidos y Proteínas" },

        subtitle: { pt: "Estrutura, função e interações proteicas", es: "Estructura, función e interacciones proteicas" },

        icon: "🧬",

        questionCount: 30,

        color: "#db2777",

        subjectId: "biochemistry1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 902,

        title: { pt: "Enzimas e Cinética", es: "Enzimas y Cinética" },

        subtitle: { pt: "Mecanismos catalíticos e inibição", es: "Mecanismos catalíticos e inhibición" },

        icon: "⚙️",

        questionCount: 0,

        color: "#e11d48",

        subjectId: "biochemistry1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 903,

        title: { pt: "Bioenergética e Fosforilação Oxidativa", es: "Bioenergética y Fosforilación Oxidativa" },

        subtitle: { pt: "Cadeia transportadora de elétrons e ATP", es: "Cadena transportadora de electrones y ATP" },

        icon: "⚡",

        questionCount: 0,

        color: "#be185d",

        subjectId: "biochemistry1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 904,

        title: { pt: "Metabolismo de Carboidratos", es: "Metabolismo de Carbohidratos" },

        subtitle: { pt: "Glicólise, glicogenólise e gliconeogênese", es: "Glucólisis, glucogenólisis y gluconeogénesis" },

        icon: "🍞",

        questionCount: 0,

        color: "#9f1239",

        subjectId: "biochemistry1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 905,

        title: { pt: "Metabolismo Energético e ATP", es: "Metabolismo Energético y ATP" },

        subtitle: { pt: "Moeda energética, glicólise e cadeia respiratória", es: "Moneda energética, glucólisis y cadena respiratoria" },

        icon: "⚡",

        questionCount: 30,

        color: "#881337",

        subjectId: "biochemistry1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 906,

        title: { pt: "Simulado Final", es: "Simulado Final" },

        subtitle: { pt: "Revisão Geral de Bioquímica", es: "Revisión General de Bioquímica" },

        icon: "⏱️",

        questionCount: 30,

        color: "#f43f5e",

        subjectId: "biochemistry1",

        type: "simulation",

        category: "simulation",

        categoryTitle: { pt: "Simulado", es: "Simulacro" }

    },



    // --- SEMESTER 3: BIOFÍSICA ---

    {

        id: 907,

        title: { pt: "Biofísica das Soluções", es: "Biofísica de las Soluciones" },

        subtitle: { pt: "Osmose, difusão e água corporal", es: "Ósmosis, difusión y agua corporal" },

        icon: "💧",

        questionCount: 30,

        color: "#0284c7",

        subjectId: "biophysics",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 908,

        title: { pt: "Bioeletrogênese", es: "Bioelectrogénesis" },

        subtitle: { pt: "Potenciais de repouso e ação", es: "Potenciales de reposo y acción" },

        icon: "⚡",

        questionCount: 30,

        color: "#0369a1",

        subjectId: "biophysics",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 909,

        title: { pt: "Hemodinâmica", es: "Hemodinámica" },

        subtitle: { pt: "Biofísica da circulação sanguínea", es: "Biofísica de la circulación sanguínea" },

        icon: "🩸",

        questionCount: 30,

        color: "#075985",

        subjectId: "biophysics",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

        {

        id: 910,

        title: { pt: "Biofísica da Respiração", es: "Biofísica de la Respiración" },

        subtitle: { pt: "Mecânica pulmonar e trocas gasosas", es: "Mecánica pulmonar e intercambio gaseoso" },

        icon: "🫁",

        questionCount: 30,

        color: "#0c4a6e",

        subjectId: "biophysics",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 911,

        title: { pt: "Radiações em Medicina", es: "Radiaciones en Medicina" },

        subtitle: { pt: "Radiobiologia e diagnóstico por imagem", es: "Radiobiología y diagnóstico por imagen" },

        icon: "📻",

        questionCount: 30,

        color: "#082f49",

        subjectId: "biophysics",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 912,

        title: { pt: "Simulado Final - Biofísica", es: "Simulacro Final - Biofísica" },

        subtitle: { pt: "Revisão Geral de Biofísica", es: "Revisión General de Biofísica" },

        icon: "⏱️",

        questionCount: 50,

        color: "#0ea5e9",

        subjectId: "biophysics",

        type: "simulation",

        category: "simulation",

        categoryTitle: { pt: "Simulado", es: "Simulacro" }

    },



    // --- SEMESTER 3: FISIOLOGIA I ---

    {

        id: 913,

        title: { pt: "Fisiologia Celular", es: "Fisiología Celular" },

        subtitle: { pt: "Transporte de membrana e homeostasia", es: "Transporte de membrana y homeostasis" },

        icon: "🔬",

        questionCount: 30,

        color: "#ef4444",

        subjectId: "physio_med",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 914,

        title: { pt: "Fisiologia Cardiovascular", es: "Fisiología Cardiovascular" },

        subtitle: { pt: "Ciclo cardíaco, pressão arterial e controle", es: "Ciclo cardíaco, presión arterial y control" },

        icon: "🫀",

        questionCount: 30,

        color: "#dc2626",

        subjectId: "physio_med",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 915,

        title: { pt: "Fisiologia Respiratória", es: "Fisiología Respiratoria" },

        subtitle: { pt: "Ventilação, perfusão e regulação", es: "Ventilación, perfusión y regulación" },

        icon: "🫁",

        questionCount: 0,

        color: "#b91c1c",

        subjectId: "physio_med",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 916,

        title: { pt: "Fisiologia Renal", es: "Fisiología Renal" },

        subtitle: { pt: "Filtração, reabsorção e balanço eletrolítico", es: "Filtración, reabsorción y balance electrolítico" },

        icon: "💧",

        questionCount: 0,

        color: "#991b1b",

        subjectId: "physio_med",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 917,

        title: { pt: "Fisiologia Gastrointestinal", es: "Fisiología Gastrointestinal" },

        subtitle: { pt: "Motilidade, secreções e absorção", es: "Motilidad, secreción y absorción" },

        icon: "🍽️",

        questionCount: 30,

        color: "#7f1d1d",

        subjectId: "physio_med",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 918,

        title: { pt: "Simulado Final - Fisiologia I", es: "Simulacro Final - Fisiología I" },

        subtitle: { pt: "Revisão Geral de Fisiologia", es: "Revisión General de Fisiología" },

        icon: "⏱️",

        questionCount: 40,

        color: "#f87171",

        subjectId: "physio_med",

        type: "simulation",

        category: "simulation",

        categoryTitle: { pt: "Simulado", es: "Simulacro" }

    },



    // --- SEMESTER 3: IMUNOLOGIA ---

    {

        id: 919,

        title: { pt: "Imunidade Inata", es: "Inmunidad Innata" },

        subtitle: { pt: "Barreiras, fagocitose e inflamação", es: "Barreras, fagocitosis e inflamación" },

        icon: "🛡️",

        questionCount: 30,

        color: "#65a30d",

        subjectId: "immunology",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 920,

        title: { pt: "Imunidade Adaptativa", es: "Inmunidad Adaptativa" },

        subtitle: { pt: "Linfócitos T e B, e respostas específicas", es: "Linfocitos T y B, y respuestas específicas" },

        icon: "⚔️",

        questionCount: 30,

        color: "#4d7c0f",

        subjectId: "immunology",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 921,

        title: { pt: "Órgãos Linfocitários", es: "Órganos Linfoides" },

        subtitle: { pt: "Medula, timo, baço e linfonodos", es: "Médula, timo, bazo y ganglios linfáticos" },

        icon: "🩸",

        questionCount: 30,

        color: "#3f6212",

        subjectId: "immunology",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 922,

        title: { pt: "Anticorpos e Antígenos", es: "Anticuerpos y Antígenos" },

        subtitle: { pt: "Imunoglobulinas e mecanismo antígeno-anticorpo", es: "Inmunoglobulinas y mecanismo antígeno-anticuerpo" },

        icon: "🧲",

        questionCount: 30,

        color: "#365314",

        subjectId: "immunology",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 923,

        title: { pt: "Hipersensibilidade e Autoimunidade", es: "Hipersensibilidad y Autoinmunidad" },

        subtitle: { pt: "Doenças imunes e falhas de tolerância", es: "Enfermedades inmunitarias y fallas de tolerancia" },

        icon: "⚠️",

        questionCount: 30,

        color: "#1a2e05",

        subjectId: "immunology",

        category: "complementary",

        categoryTitle: { pt: "Patologia Imune", es: "Patología Inmune" }

    },

    {

        id: 924,

        title: { pt: "Simulado Final - Imunologia", es: "Simulacro Final - Inmunología" },

        subtitle: { pt: "Revisão Geral de Imunologia", es: "Revisión General de Inmunología" },

        icon: "⏱️",

        questionCount:   40,

        color: "#84cc16",

        subjectId: "immunology",

        type: "simulation",

        category: "simulation",

        categoryTitle: { pt: "Simulado", es: "Simulacro" }

    },



    // --- SEMESTER 3: GENÉTICA HUMANA ---

    {

        id: 925,

        title: { pt: "Bases Celulares da Hereditariedade", es: "Bases Celulares de la Herencia" },

        subtitle: { pt: "DNA, cromossomos, mitose e meiose", es: "ADN, cromosomas, mitosis y meiosis" },

        icon: "🧬",

        questionCount: 30,

        color: "#8b5cf6",

        subjectId: "genetics",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 926,

        title: { pt: "Herança Monogênica", es: "Herencia Monogénica" },

        subtitle: { pt: "Padrões mendelianos clássicos", es: "Patrones mendelianos clásicos" },

        icon: "👪",

        questionCount: 30,

        color: "#7c3aed",

        subjectId: "genetics",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 927,

        title: { pt: "Genética de Populações", es: "Genética de Poblaciones" },

        subtitle: { pt: "Princípio de Hardy-Weinberg", es: "Principio de Hardy-Weinberg" },

        icon: "📊",

        questionCount: 30,

        color: "#6d28d9",

        subjectId: "genetics",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 928,

        title: { pt: "Anomalias Cromossômicas", es: "Anomalías Cromosómicas" },

        subtitle: { pt: "Aneuploidias e mutações estruturais", es: "Aneuploidías y mutaciones estructurales" },

        icon: "⚠️",

        questionCount:  30,

        color: "#5b21b6",

        subjectId: "genetics",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 929,

        title: { pt: "Aconselhamento Genético", es: "Asesoramiento Genético" },

        subtitle: { pt: "História familiar e risco genético", es: "Historia familiar y riesgo genético" },

        icon: "🗣️",

        questionCount:   30,

        color: "#4c1d95",

        subjectId: "genetics",

        category: "complementary",

        categoryTitle: { pt: "Genética Clínica", es: "Genética Clínica" }

    },

    {

        id: 930,

        title: { pt: "Simulado Final - Genética", es: "Simulacro Final - Genética" },

        subtitle: { pt: "Revisão Geral de Genética Humana", es: "Revisión General de Genética Humana" },

        icon: "⏱️",

        questionCount: 0,

        color: "#a78bfa",

        subjectId: "genetics",

        type: "simulation",

        category: "simulation",

        categoryTitle: { pt: "Simulado", es: "Simulacro" }

    },



    // --- SEMESTER 3: MICROBIOLOGIA I ---

    {

        id: 931,

        title: { pt: "Estrutura Bacteriana", es: "Estructura Bacteriana" },

        subtitle: { pt: "Parede celular, cápsula e flagelos", es: "Pared celular, cápsula y flagelos" },

        icon: "🦠",

        questionCount:  30,

        color: "#d97706",

        subjectId: "microbiology",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 932,

        title: { pt: "Genética Bacteriana", es: "Genética Bacteriana" },

        subtitle: { pt: "Transferência de DNA e reprodução", es: "Transferencia de ADN y reproducción" },

        icon: "🧬",

        questionCount: 30,

        color: "#b45309",

        subjectId: "microbiology",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 933,

        title: { pt: "Virologia Básica", es: "Virología Básica" },

        subtitle: { pt: "Estrutura e replicação viral", es: "Estructura y replicación viral" },

        icon: "👾",

        questionCount: 30,

        color: "#92400e",

        subjectId: "microbiology",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 934,

        title: { pt: "Relação Patógeno-Hospedeiro", es: "Relación Patógeno-Huésped" },

        subtitle: { pt: "Mecanismos de virulência e patogênese", es: "Mecanismos de virulencia y patogénesis" },

        icon: "🧫",

        questionCount: 30,

        color: "#78350f",

        subjectId: "microbiology",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 935,

        title: { pt: "Antimicrobianos", es: "Antimicrobianos" },

        subtitle: { pt: "Mecanismos de ação e resistência", es: "Mecanismos de acción y resistencia" },

        icon: "💊",

        questionCount: 30,

        color: "#451a03",

        subjectId: "microbiology",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 936,

        title: { pt: "Simulado Final - Microbiologia I", es: "Simulacro Final - Microbiología I" },

        subtitle: { pt: "Revisão Geral de Microbiologia Básica", es: "Revisión General de Microbiología Básica" },

        icon: "⏱️",

        questionCount: 40,

        color: "#fbbf24",

        subjectId: "microbiology",

        type: "simulation",

        category: "simulation",

        categoryTitle: { pt: "Simulado", es: "Simulacro" }

    },



    // --- SEMESTER 1: BIOLOGIA ---

    {

        id: 801,

        title: {

            es: "Estructura Celular",

            pt: "Estrutura Celular"

        },

        subtitle: {

            es: "Membrana plasmática, citoplasma, núcleo, organelas y diferencias entre células procarióticas y eucarióticas",

            pt: "Membrana plasmática, citoplasma, núcleo, organelas e diferenças entre células procarióticas e eucarióticas"

        },

        icon: "🔬",

        questionCount: 0,

        color: "#22c55e",

        subjectId: "biology"

    },

    {

        id: 802,

        title: {

            es: "Transporte por la Membrana",

            pt: "Transporte pela Membrana"

        },

        subtitle: {

            es: "Difusión simple, difusión facilitada, ósmosis, transporte activo, endocitosis y exocitosis",

            pt: "Difusão simples, difusão facilitada, osmose, transporte ativo, endocitose e exocitose"

        },

        icon: "🔄",

        questionCount: 0,

        color: "#0ea5e9",

        subjectId: "biology"

    },

    {

        id: 803,

        title: {

            es: "Organelas Celulares",

            pt: "Organelas Celulares"

        },

        subtitle: {

            es: "Mitocondria, retículo endoplasmático, complejo de Golgi, lisosomas y peroxisomas",

            pt: "Mitocôndria, retículo endoplasmático, complexo de Golgi, lisossomos e peroxissomos"

        },

        icon: "🧫",

        questionCount: 0,

        color: "#8b5cf6",

        subjectId: "biology"

    },

    {

        id: 804,

        title: {

            es: "ADN, ARN y Replicación",

            pt: "DNA, RNA e Replicação"

        },

        subtitle: {

            es: "Estructura del ADN, ARN, replicación, transcripción y principios básicos de la expresión génica",

            pt: "Estrutura do DNA, RNA, replicação, transcrição e princípios básicos da expressão gênica"

        },

        icon: "🧬",

        questionCount: 0,

        color: "#db2777",

        subjectId: "biology"

    },

    {

        id: 805,

        title: {

            es: "Ciclo Celular y División Celular",

            pt: "Ciclo Celular e Divisão Celular"

        },

        subtitle: {

            es: "Interfase, mitosis, meiosis, checkpoints e importancia biológica de la división celular",

            pt: "Intérfase, mitose, meiose, checkpoints e importância biológica da divisão celular"

        },

        icon: "🔄",

        questionCount: 0,

        color: "#f59e0b",

        subjectId: "biology"

    },

    {

        id: 806,

        title: {

            es: "Revisión Integrada de Biología",

            pt: "Revisão Integrada de Biologia"

        },

        subtitle: {

            es: "Integración de contenidos celulares, moleculares y genéticos con correlación básica aplicada a la salud",

            pt: "Integração dos conteúdos celulares, moleculares e genéticos com correlação básica aplicada à saúde"

        },

        icon: "📋",

        questionCount: 0,

        color: "#14b8a6",

        subjectId: "biology"

    },



    // --- SEMESTER 1: ANATOMY ---

    {

        id: 50,

        title: {

            es: "Introducción a la Anatomía",

            pt: "Introdução à Anatomia"

        },

        subtitle: {

            es: "Definición, ramas, y terminología anatómica fundamental",

            pt: "Definição, ramos e terminologia anatômica fundamental"

        },

        icon: "🔬",

        questionCount: 0,

        color: "#0ea5e9",

        subjectId: "anatomy1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 51,

        title: {

            es: "Posición Anatómica y Planos",

            pt: "Posição Anatômica e Planos"

        },

        subtitle: {

            es: "Planos sagital, frontal, transversal y posición de referencia",

            pt: "Planos sagital, frontal, transversal e posição de referência"

        },

        icon: "🧭",

        questionCount: 30,

        color: "#10b981",

        subjectId: "anatomy1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 52,

        title: {

            es: "Términos de Relación y Movimiento",

            pt: "Termos de Relação e Movimento"

        },

        subtitle: {

            es: "Términos direccionales, de localización y tipos de movimientos articulares",

            pt: "Termos direcionais, de localização e tipos de movimentos articulares"

        },

        icon: "↔️",

        questionCount: 30,

        color: "#8b5cf6",

        subjectId: "anatomy1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 53,

        title: {

            es: "Osteología – Conceptos Básicos",

            pt: "Osteologia – Conceitos Básicos"

        },

        subtitle: {

            es: "Estructura ósea, clasificación de huesos y componentes celulares",

            pt: "Estrutura óssea, classificação de ossos e componentes celulares"

        },

        icon: "🦴",

        questionCount: 30,

        color: "#f59e0b",

        subjectId: "anatomy1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 54,

        title: {

            es: "Osteología – Esqueleto Axial",

            pt: "Osteologia – Esqueleto Axial"

        },

        subtitle: {

            es: "Columna vertebral, tórax y cráneo: estructura y características",

            pt: "Coluna vertebral, tórax e crânio: estrutura e características"

        },

        icon: "🫀",

        questionCount: 30,

        color: "#ef4444",

        subjectId: "anatomy1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 55,

        title: {

            es: "Osteología – Esqueleto Apendicular",

            pt: "Osteologia – Esqueleto Apendicular"

        },

        subtitle: {

            es: "Cintura escapular, miembros superiores, pelvis y miembros inferiores",

            pt: "Cintura escapular, membros superiores, pelve e membros inferiores"

        },

        icon: "🦵",

        questionCount: 30,

        color: "#dc2626",

        subjectId: "anatomy1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 56,

        title: {

            es: "Artrología (Articulaciones)",

            pt: "Artrologia (Articulações)"

        },

        subtitle: {

            es: "Clasificación articular, movimientos y principales articulaciones",

            pt: "Classificação articular, movimentos e principais articulações"

        },

        icon: "🔗",

        questionCount: 30,

        color: "#ec4899",

        subjectId: "anatomy1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 57,

        title: {

            es: "Introducción a la Miología",

            pt: "Introdução à Miologia"

        },

        subtitle: {

            es: "Estructura muscular, clasificación y propiedades contráctiles básicas",

            pt: "Estrutura muscular, classificação e propriedades contráteis básicas"

        },

        icon: "💪",

        questionCount: 30,

        color: "#22c55e",

        subjectId: "anatomy1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 58,

        title: {

            es: "Nociones Básicas de Anatomía Clínica",

            pt: "Noções Básicas de Anatomia Clínica"

        },

        subtitle: {

            es: "Correlaciones clínicas e importancia médica de estructuras anatómicas",

            pt: "Correlações clínicas e importância médica de estruturas anatômicas"

        },

        icon: "🩺",

        questionCount: 30,

        color: "#06b6d4",

        subjectId: "anatomy1",

        category: "complementary",

        categoryTitle: { pt: "Revisão e Aprofundamento", es: "Revisión y Profundización" }

    },



    // --- SEMESTER 1: HISTOLOGIA I ---

    {

        id: 300,

        title: {

            es: "Introducción a la Histología",

            pt: "Introdução à Histologia"

        },

        subtitle: {

            es: "Concepto de histología, microscopía óptica y electrónica, preparación de láminas y colorantes básicos (H&E)",

            pt: "Conceito de histologia, microscopia óptica e eletrônica, preparação de lâminas e corantes básicos (H&E)"

        },

        icon: "🔬",

        questionCount: 30,

        color: "#0ea5e9",

        subjectId: "histology1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 301,

        title: {

            es: "Tejidos Epiteliales",

            pt: "Tecidos Epiteliais"

        },

        subtitle: {

            es: "Epitelio de revestimiento, glandular, clasificación de epitelios y uniones celulares",

            pt: "Epitélio de revestimento, glandular, classificação dos epitélios e junções celulares"

        },

        icon: "🧫",

        questionCount: 30,

        color: "#10b981",

        subjectId: "histology1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 302,

        title: {

            es: "Tejidos Conjuntivos",

            pt: "Tecidos Conjuntivos"

        },

        subtitle: {

            es: "Matriz extracelular, fibras conjuntivas, células del tejido conjuntivo, conjuntivo laxo y denso",

            pt: "Matriz extracelular, fibras conjuntivas, células do tecido conjuntivo, conjuntivo frouxo e denso"

        },

        icon: "🧶",

        questionCount: 30,

        color: "#8b5cf6",

        subjectId: "histology1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 303,

        title: {

            es: "Tejidos Conjuntivos Especializados",

            pt: "Tecidos Conjuntivos Especializados"

        },

        subtitle: {

            es: "Cartílago, hueso (visión histológica) y sangre",

            pt: "Cartilagem, osso (visão histológica) e sangue"

        },

        icon: "🦴",

        questionCount: 30,

        color: "#f59e0b",

        subjectId: "histology1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 304,

        title: {

            es: "Tejido Muscular (Histología)",

            pt: "Tecido Muscular (Histologia)"

        },

        subtitle: {

            es: "Músculo estriado esquelético, cardíaco y músculo liso",

            pt: "Músculo estriado esquelético, cardíaco e músculo liso"

        },

        icon: "💪",

        questionCount: 30,

        color: "#ef4444",

        subjectId: "histology1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 305,

        title: {

            es: "Tejido Nervioso",

            pt: "Tecido Nervoso"

        },

        subtitle: {

            es: "Neuronas, células de la glía, sustancia blanca y gris",

            pt: "Neurônios, células da glia, substância branca e cinzenta"

        },

        icon: "🧠",

        questionCount: 30,

        color: "#ec4899",

        subjectId: "histology1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 306,

        title: {

            es: "Revisión y Correlación Histológica",

            pt: "Revisão e Correlação Histológica"

        },

        subtitle: {

            es: "Identificación de láminas, comparaciones histológicas clásicas y revisión general",

            pt: "Identificação de lâminas, comparações histológicas clássicas e revisão geral"

        },

        icon: "📋",

        questionCount: 30,

        color: "#06b6d4",

        subjectId: "histology1",

        category: "complementary",

        categoryTitle: { pt: "Revisão e Aprofundamento", es: "Revisión y Profundización" }

    },



    // --- SEMESTER 1: EMBRIOLOGIA I ---

    {

        id: 70,

        title: {

            es: "Introducción a la Embriología y Gametogénesis",

            pt: "Introdução à Embriologia e Gametogênese"

        },

        subtitle: {

            es: "Concepto de embriología, espermatogénesis, ovogénesis, ciclo ovárico y comparación",

            pt: "Conceito de embriologia, espermatogênese, ovogênese, ciclo ovariano e comparação"

        },

        icon: "🧬",

        questionCount: 60,

        color: "#db2777",

        subjectId: "embryology1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 71,

        title: {

            es: "Fecundación y Primera Semana del Desarrollo",

            pt: "Fecundação e Primeira Semana do Desenvolvimento"

        },

        subtitle: {

            es: "Fecundación, capacitación espermática, cigoto, segmentación, mórula, blastocisto e implantación",

            pt: "Fecundação, capacitação espermática, zigoto, segmentação, mórula, blastocisto e implantação"

        },

        icon: "🔬",

        questionCount: 60,

        color: "#e11d48",

        subjectId: "embryology1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 72,

        title: {

            es: "Segunda Semana del Desarrollo",

            pt: "Segunda Semana do Desenvolvimento"

        },

        subtitle: {

            es: "Disco bilaminar, epiblasto, hipoblasto, cavidad amniótica, saco vitelino, mesodermo extraembrionario y corion",

            pt: "Disco bilaminar, epiblasto, hipoblasto, cavidade amniótica, saco vitelino, mesoderma extraembrionário e cório"

        },

        icon: "🫧",

        questionCount: 60,

        color: "#be185d",

        subjectId: "embryology1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 73,

        title: {

            es: "Tercera Semana del Desarrollo (Gastrulación)",

            pt: "Terceira Semana do Desenvolvimento (Gastrulação)"

        },

        subtitle: {

            es: "Gastrulación, línea primitiva, disco trilaminar, ectodermo, mesodermo, endodermo, notocorda y defectos",

            pt: "Gastrulação, linha primitiva, disco trilaminar, ectoderma, mesoderma, endoderma, notocorda e defeitos"

        },

        icon: "🔄",

        questionCount: 60,

        color: "#9f1239",

        subjectId: "embryology1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 74,

        title: {

            es: "Neurulación y Plegamientos del Embrión",

            pt: "Neurulação e Dobramentos do Embrião"

        },

        subtitle: {

            es: "Placa neural, tubo neural, cresta neural, plegamientos cefalocaudal y laterales, defectos del tubo neural",

            pt: "Placa neural, tubo neural, crista neural, dobramentos cefalocaudal e laterais, defeitos do tubo neural"

        },

        icon: "🧠",

        questionCount: 60,

        color: "#881337",

        subjectId: "embryology1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 75,

        title: {

            es: "Revisión y Correlación Clínica en Embriología",

            pt: "Revisão e Correlação Clínica em Embriologia"

        },

        subtitle: {

            es: "Revisión integrada, línea temporal del desarrollo, correlaciones clínicas y malformaciones congénitas",

            pt: "Revisão integrada, linha do tempo do desenvolvimento, correlações clínicas e malformações congênitas"

        },

        icon: "📋",

        questionCount: 60,

        color: "#f472b6",

        subjectId: "embryology1",

        category: "complementary",

        categoryTitle: { pt: "Revisão e Aprofundamento", es: "Revisión y Profundización" }

    },



    // --- SEMESTER 2: ANATOMY ---

    {

        id: 100,

        title: {

            es: "Anatomía II",

            pt: "Anatomia II"

        },

        subtitle: {

            es: "Tórax, Abdomen y Sistemas",

            pt: "Tórax, Abdome e Sistemas"

        },

        icon: "💀",

        questionCount: 30,

        color: "#6366f1",

        subjectId: "anatomy",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 101,

        title: {

            es: "Anatomía Práctica",

            pt: "Anatomia Prática"

        },

        subtitle: {

            es: "Identificación de piezas anatómicas",

            pt: "Identificação de peças anatômicas"

        },

        icon: "🔬",

        questionCount: 30,

        color: "#10b981",

        subjectId: "anatomy",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 102,

        title: {

            es: "Anatomía Topográfica",

            pt: "Anatomia Topográfica"

        },

        subtitle: {

            es: "Relaciones espaciales entre estructuras",

            pt: "Relações espaciais entre estruturas"

        },

        icon: "🗺️",

        questionCount: 30,

        color: "#f59e0b",

        subjectId: "anatomy",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 103,

        title: {

            es: "Anatomía Clínica Básica",

            pt: "Anatomia Clínica Básica"

        },

        subtitle: {

            es: "Correlación clínica de la Anatomía",

            pt: "Correlação clínica da Anatomia"

        },

        icon: "🩺",

        questionCount: 30,

        color: "#10b981",

        subjectId: "anatomy",

        category: "complementary",

        categoryTitle: { pt: "Revisão e Aprofundamento", es: "Revisión y Profundización" }

    },

    {

        id: 104,

        title: {

            es: "Trampas Clásicas de Anatomía II",

            pt: "Pegadinhas Clássicas de Anatomia II"

        },

        subtitle: {

            es: "Errores comunes de examen",

            pt: "Erros comuns de prova"

        },

        icon: "🤡",

        questionCount: 30,

        color: "#f59e0b",

        subjectId: "anatomy",

        category: "complementary",

        categoryTitle: { pt: "Revisão e Aprofundamento", es: "Revisión y Profundización" }

    },

    {

        id: 105,

        title: {

            es: "Anatomía Radiológica – Fundamentos",

            pt: "Anatomia Radiológica – Fundamentos"

        },

        subtitle: {

            es: "Identificación básica en Rayos X y TC",

            pt: "Identificação básica em Raio-X e TC"

        },

        icon: "🦴",

        questionCount: 30,

        color: "#0ea5e9",

        subjectId: "anatomy",

        category: "complementary",

        categoryTitle: { pt: "Revisão e Aprofundamento", es: "Revisión y Profundización" }

    },

    {

        id: 106,

        title: {

            es: "Vascularización e Inervación",

            pt: "Vascularização e Inervação"

        },

        subtitle: {

            es: "Arterias, venas y nervios principales",

            pt: "Artérias, veias e nervos principais"

        },

        icon: "🫀",

        questionCount: 30,

        color: "#ef4444",

        subjectId: "anatomy",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 107,

        title: {

            es: "Simulacro Final - Anatomía II",

            pt: "Simulado Final - Anatomia II"

        },

        subtitle: {

            es: "Simulación de Examen - 40 minutos",

            pt: "Simulação de Exame - 40 minutos"

        },

        icon: "⏱️",

        questionCount: 30,

        color: "#f43f5e",

        subjectId: "anatomy",

        type: "simulation",

        category: "simulation",

        categoryTitle: { pt: "Simulado", es: "Simulacro" }

    },

    {

        id: 108,

        title: {

            es: "Anatomía de la Pelvis y Perineo",

            pt: "Anatomia da Pelve e Períneo"

        },

        subtitle: {

            es: "Estructuras óseas, diafragma pélvico y genitales",

            pt: "Estruturas ósseas, diafragma pélvico e genitais"

        },

        icon: "🦴",

        questionCount: 30,

        color: "#6366f1",

        subjectId: "anatomy",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 109,

        title: {

            es: "Anatomía de Cabeza y Cuello",

            pt: "Anatomia da Cabeça e Pescoço"

        },

        subtitle: {

            es: "Huesos del cráneo, cara y compartimentos cervicales",

            pt: "Ossos do crânio, face e compartimentos cervicais"

        },

        icon: "💀",

        questionCount: 30,

        color: "#8b5cf6",

        subjectId: "anatomy",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 110,

        title: {

            es: "Neuroanatomía Funcional Básica",

            pt: "Neuroanatomia Funcional Básica"

        },

        subtitle: {

            es: "Tronco encefálico, cerebelo, telencéfalo y vías",

            pt: "Tronco encefálico, cerebelo, telencéfalo e vias"

        },

        icon: "🧠",

        questionCount: 30,

        color: "#ec4899",

        subjectId: "anatomy",

        category: "complementary",

        categoryTitle: { pt: "Revisão e Aprofundamento", es: "Revisión y Profundización" }

    },

    // --- SEMESTER 2: HISTOLOGIA 2 ---

    // Teórica

    {

        id: 200,

        title: {

            es: "Quiz Geral - Histología II",

            pt: "Quiz Geral - Histologia II"

        },

        subtitle: {

            es: "Reconocimiento histológico básico",

            pt: "Reconhecimento histológico básico"

        },

        icon: "🔬",

        questionCount: 0,

        color: "#ec4899",

        subjectId: "histology2",

        category: "theoretical",

        categoryTitle: { pt: "Teórica", es: "Teórica" }

    },

    // Prática

    {

        id: 201,

        title: {

            es: "Quiz Prático - Lâminas",

            pt: "Quiz Prático - Lâminas"

        },

        subtitle: {

            es: "Identificación de láminas histológicas",

            pt: "Identificação de lâminas histológicas"

        },

        icon: "🧫",

        questionCount: 0,

        color: "#8b5cf6",

        subjectId: "histology2",

        category: "practical",

        categoryTitle: { pt: "Prática", es: "Práctica" }

    },

    // Simulado

    {

        id: 202,

        title: {

            es: "Simulacro - Histología II",

            pt: "Simulado - Histologia II"

        },

        subtitle: {

            es: "Simulación de Examen - 40 minutos",

            pt: "Simulação de Exame - 40 minutos"

        },

        icon: "⏱️",

        questionCount: 0,

        color: "#f43f5e",

        subjectId: "histology2",

        category: "simulation",

        categoryTitle: { pt: "Simulado", es: "Simulacro" },

        type: "simulation" // Special flag

    },

    {

        id: 203,

        title: {

            es: "Histología: Digestivo y Respiratorio",

            pt: "Histologia: Digestório e Respiratório"

        },

        subtitle: {

            es: "Tracto gastrointestinal, glándulas y vías aéreas",

            pt: "Trato gastrointestinal, glândulas e vias aéreas"

        },

        icon: "🍽️",

        questionCount: 0,

        color: "#10b981",

        subjectId: "histology2"

    },

    {

        id: 204,

        title: {

            es: "Histología: Urinario y Endocrino",

            pt: "Histologia: Urinário e Endócrino"

        },

        subtitle: {

            es: "Riñón, tiroides, adrenal y hipófisis",

            pt: "Rim, tireoide, adrenal e hipófise"

        },

        icon: "💧",

        questionCount: 0,

        color: "#06b6d4",

        subjectId: "histology2"

    },

    {

        id: 205,

        title: {

            es: "Histología: Reproductor y Tegumentario",

            pt: "Histologia: Reprodutor e Tegumentar"

        },

        subtitle: {

            es: "Gónadas, genitales y piel",

            pt: "Gônadas, genitália e pele"

        },

        icon: "🧬",

        questionCount: 0,

        color: "#f472b6",

        subjectId: "histology2"

    },

    // --- SEMESTER 2: EMBRIOLOGIA ---

    {

        id: 401,

        title: {

            es: "Embriología General – Fundamentos",

            pt: "Embriologia Geral – Fundamentos"

        },

        subtitle: {

            es: "Fecundación, desarrollo inicial y capas germinales",

            pt: "Fecundação, desenvolvimento inicial e folhetos"

        },

        icon: "🧬",

        questionCount: 60,

        color: "#db2777", // Pink/Rose

        subjectId: "embryology"

    },

    {

        id: 402,

        title: {

            es: "Plegamientos Embrionarios",

            pt: "Dobramentos Embrionários"

        },

        subtitle: {

            es: "Cefálico, Caudal y Lateral",

            pt: "Cefálico, Caudal e Lateral"

        },

        icon: "🔄",

        questionCount: 60,

        color: "#db2777",

        subjectId: "embryology"

    },

    {

        id: 403,

        title: {

            es: "Organogénesis: Sistemas Viscerales",

            pt: "Organogênese: Sistemas Viscerais"

        },

        subtitle: {

            es: "Desarrollo cardíaco, pulmonar y digestivo",

            pt: "Desenvolvimento cardíaco, pulmonar e digestório"

        },

        icon: "🫀",

        questionCount: 60,

        color: "#be185d",

        subjectId: "embryology"

    },

    {

        id: 404,

        title: {

            es: "Desarrollo del Sistema Nervioso",

            pt: "Desenvolvimento do Sistema Nervoso"

        },

        subtitle: {

            es: "Neurulación y Vesículas Encefálicas",

            pt: "Neurulação e Vesículas Encefálicas"

        },

        icon: "🧠",

        questionCount: 60,

        color: "#8b5cf6",

        subjectId: "embryology"

    },





    // --- SEMESTER 2: METHODOLOGY ---

    {

        id: 601,

        title: {

            es: "Diseños de Investigación en Salud",

            pt: "Delineamentos de Pesquisa em Saúde"

        },

        subtitle: {

            es: "Estudios observacionales y experimentales",

            pt: "Estudos observacionais e experimentais"

        },

        icon: "📋",

        questionCount: 30,

        color: "#14b8a6",

        subjectId: "methodology"

    },

    {

        id: 602,

        title: {

            es: "Medicina Basada en Evidencia",

            pt: "Medicina Baseada em Evidências"

        },

        subtitle: {

            es: "Niveles de evidencia, revisión sistemática y metaanálisis",

            pt: "Níveis de evidência, revisão sistemática e metanálise"

        },

        icon: "🔍",

        questionCount: 30,

        color: "#0d9488",

        subjectId: "methodology"

    },

    {

        id: 603,

        title: {

            es: "Ética y Redacción Científica",

            pt: "Ética e Redação Científica"

        },

        subtitle: {

            es: "Comités de ética, estructura de artículos y normas",

            pt: "Comitês de ética, estrutura de artigos e normas"

        },

        icon: "✍️",

        questionCount: 10,

        color: "#0f766e",

        subjectId: "methodology"

    },

    {

        id: 405,

        title: {

            es: "Desarrollo de la Cara y Cuello",

            pt: "Desenvolvimento da Face e Pescoço"

        },

        subtitle: {

            es: "Arcos faríngeos, bolsas y formación facial",

            pt: "Arcos faríngeos, bolsas e formação facial"

        },

        icon: "👤",

        questionCount: 60,

        color: "#db2777",

        subjectId: "embryology"

    },

    // --- SEMESTER 2: BIOSTATISTICS ---

    {

        id: 501,

        title: {

            es: "Fundamentos y Estadística Descriptiva",

            pt: "Fundamentos e Estatística Descritiva"

        },

        subtitle: {

            es: "Conceptos básicos, tipos de variables y medidas",

            pt: "Conceitos básicos, tipos de variáveis e medidas"

        },

        icon: "📊",

        questionCount: 30,

        color: "#f59e0b",

        subjectId: "biostatistics"

    },

    {

        id: 502,

        title: {

            es: "Probabilidad y Distribuciones",

            pt: "Probabilidade e Distribuições"

        },

        subtitle: {

            es: "Curva Normal, Probabilidad y Muestreo",

            pt: "Curva Normal, Probabilidade e Amostragem"

        },

        icon: "🎲",

        questionCount: 30,

        color: "#8b5cf6",

        subjectId: "biostatistics"

    },

    {

        id: 503,

        title: {

            es: "Inferencia Estadística y Pruebas",

            pt: "Inferência Estatística e Testes"

        },

        subtitle: {

            es: "IC, p-valor, Hipótesis, Errores tipo I y II, Pruebas estadísticas",

            pt: "IC, p-valor, Hipóteses, Erros tipo I e II, Testes estatísticos"

        },

        icon: "📈",

        questionCount: 30,

        color: "#10b981",

        subjectId: "biostatistics"

    }

    ,

    {

        id: 504,

        title: {

            es: "Interpretación de Artículos, Tablas y Gráficos",

            pt: "Interpretação de Artigos, Tabelas e Gráficos"

        },

        subtitle: {

            es: "Lectura crítica de figuras, tablas y resultados",

            pt: "Leitura crítica de figuras, tabelas e resultados"

        },

        icon: "📊",

        questionCount: 30,

        color: "#06b6d4",

        subjectId: "biostatistics"

    }

    ,

    {

        id: 507,

        title: {

            es: "Simulación Final - Bioestadística",

            pt: "Simulado Final - Bioestatística"

        },

        subtitle: {

            es: "Simulado de prova: avaliação integradora de Bioestatística",

            pt: "Simulado de prova: avaliação integradora de Bioestatística"

        },

        icon: "🧪",

        questionCount: 30,

        color: "#f97316",

        subjectId: "biostatistics",

        type: "simulation",

        category: "simulation",

        categoryTitle: { pt: "Simulado", es: "Simulacro" }

    },



    // --- SEMESTER 1: BIOQUÍMICA ---

    {

        id: 902,

        title: {

            es: "Enzimas y Cinética",

            pt: "Enzimas e Cinética"

        },

        subtitle: {

            es: "Mecanismos catalíticos e inhibición",

            pt: "Mecanismos catalíticos e inibição"

        },

        icon: "🧪",

        questionCount: 30,

        color: "#14b8a6",

        subjectId: "biochemistry1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 903,

        title: {

            es: "Carbohidratos y Metabolismo Inicial",

            pt: "Carboidratos e Metabolismo Inicial"

        },

        subtitle: {

            es: "Monosacáridos, disacáridos y vías iniciales",

            pt: "Monossacarídeos, dissacarídeos e vias iniciais"

        },

        icon: "🍞",

        questionCount: 30,

        color: "#14b8a6",

        subjectId: "biochemistry1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    },

    {

        id: 904,

        title: {

            es: "Lípidos y Membranas Biológicas",

            pt: "Lipídios e Membranas Biológicas"

        },

        subtitle: {

            es: "Estructura, función y metabolismo lipídico inicial",

            pt: "Estrutura, função e metabolismo lipídico inicial"

        },

        icon: "🧈",

        questionCount: 30,

        color: "#14b8a6",

        subjectId: "biochemistry1",

        category: "main",

        categoryTitle: { pt: "Conteúdo Principal", es: "Contenido Principal" }

    }

];



// Função helper para obter dados de uma unidade

function getUnitById(unitId) {

    return UNITS.find(u => u.id === unitId);

}



// Função para atualizar contagem de questões

function updateQuestionCounts(questionsData) {

    UNITS.forEach(unit => {

        unit.questionCount = questionsData.filter(q => q.unitId === unit.id).length;

    });

}



// Export para uso em módulos

if (typeof module !== 'undefined' && module.exports) {

    module.exports = { UNITS, getUnitById, updateQuestionCounts };

}

