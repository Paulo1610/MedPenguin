/**
 * Resumo Data (Audio & Text)
 * This file is used to load data without using fetch(), which can fail on local file:// protocol.
 */
window.RESUMO_DATA = {
    "semesters": {
        "s1": {
            "name": "1º Semestre",
            "subjects": {
                "anatomy1": {
                    "title": "Anatomia I",
                    "color": "#FF6B6B",
                    "audio_units": [],
                    "text_units": [
                        { "title": "Bloco 50 – Introdução à Anatomia", "blockId": 50, "type": "inline", "premium": false },
                        { "title": "Bloco 51 – Posição Anatômica e Planos", "blockId": 51, "type": "inline", "premium": true },
                        { "title": "Bloco 52 – Termos de Relação e Movimento", "blockId": 52, "type": "inline", "premium": true },
                        { "title": "Bloco 53 – Osteologia: Conceitos Básicos", "blockId": 53, "type": "inline", "premium": true },
                        { "title": "Bloco 54 – Osteologia: Esqueleto Axial", "blockId": 54, "type": "inline", "premium": true },
                        { "title": "Bloco 55 – Osteologia: Esqueleto Apendicular", "blockId": 55, "type": "inline", "premium": true },
                        { "title": "Bloco 56 – Artrologia (Articulações)", "blockId": 56, "type": "inline", "premium": true },
                        { "title": "Bloco 57 – Introdução à Miologia", "blockId": 57, "type": "inline", "premium": true },
                        { "title": "Bloco 58 – Noções de Anatomia Clínica", "blockId": 58, "type": "inline", "premium": true }
                    ]
                },
                "histology1": {
                    "title": "Histologia I",
                    "color": "#0ea5e9",
                    "audio_units": [],
                    "text_units": [
                        { "title": "Bloco 300 – Introdução à Histologia", "blockId": 300, "type": "inline", "premium": true },
                        { "title": "Bloco 301 – Tecidos Epiteliais", "blockId": 301, "type": "inline", "premium": true },
                        { "title": "Bloco 302 – Tecidos Conjuntivos", "blockId": 302, "type": "inline", "premium": true },
                        { "title": "Bloco 303 – Tecidos Conjuntivos Especializados", "blockId": 303, "type": "inline", "premium": true },
                        { "title": "Bloco 304 – Tecido Muscular", "blockId": 304, "type": "inline", "premium": true },
                        { "title": "Bloco 305 – Tecido Nervoso", "blockId": 305, "type": "inline", "premium": true },
                        { "title": "Bloco 306 – Revisão e Correlação Histológica", "blockId": 306, "type": "inline", "premium": true }
                    ]
                },
                "embryology1": {
                    "title": "Embriologia I",
                    "color": "#db2777",
                    "audio_units": [],
                    "text_units": [
                        { "title": "Bloco 70 – Introdução e Gametogênese", "blockId": 70, "type": "inline", "premium": true },
                        { "title": "Bloco 71 – Fecundação e 1ª Semana", "blockId": 71, "type": "inline", "premium": true },
                        { "title": "Bloco 72 – Segunda Semana do Desenvolvimento", "blockId": 72, "type": "inline", "premium": true },
                        { "title": "Bloco 73 – Terceira Semana (Gastrulação)", "blockId": 73, "type": "inline", "premium": true },
                        { "title": "Bloco 74 – Neurulação e Dobramentos", "blockId": 74, "type": "inline", "premium": true },
                        { "title": "Bloco 75 – Revisão e Correlação Clínica", "blockId": 75, "type": "inline", "premium": true }
                    ]
                },
                "biology": {
                    "title": "Biologia",
                    "color": "#22c55e",
                    "audio_units": [],
                    "text_units": [
                        { "title": "Bloco 801 – Estrutura Celular", "blockId": 801, "type": "inline", "premium": true },
                        { "title": "Bloco 802 – Transporte pela Membrana", "blockId": 802, "type": "inline", "premium": true },
                        { "title": "Bloco 803 – Organelas Celulares", "blockId": 803, "type": "inline", "premium": true },
                        { "title": "Bloco 804 – DNA, RNA e Replicação", "blockId": 804, "type": "inline", "premium": true },
                        { "title": "Bloco 805 – Ciclo Celular e Divisão Celular", "blockId": 805, "type": "inline", "premium": true },
                        { "title": "Bloco 806 – Revisão Integrada de Biologia", "blockId": 806, "type": "inline", "premium": true }
                    ]
                }
            }
        },
        "s2": {
            "name": "2º Semestre",
            "subjects": {
                "anatomy": {
                    "title": "Anatomia II",
                    "color": "#45B7D1",
                    "audio_units": [],
                    "text_units": [
                        { "title": "Bloco 100 – Tórax, Abdome e Sistemas", "blockId": 100, "type": "inline", "premium": true },
                        { "title": "Bloco 101 – Anatomia Prática", "blockId": 101, "type": "inline", "premium": true },
                        { "title": "Bloco 102 – Anatomia Topográfica", "blockId": 102, "type": "inline", "premium": true },
                        { "title": "Bloco 103 – Anatomia Clínica Básica", "blockId": 103, "type": "inline", "premium": true },
                        { "title": "Bloco 106 – Vascularização e Inervação", "blockId": 106, "type": "inline", "premium": true },
                        { "title": "Bloco 108 – Pelve e Períneo", "blockId": 108, "type": "inline", "premium": true },
                        { "title": "Bloco 109 – Cabeça e Pescoço", "blockId": 109, "type": "inline", "premium": true },
                        { "title": "Bloco 110 – Neuroanatomia Funcional", "blockId": 110, "type": "inline", "premium": true }
                    ]
                },
                "histology2": {
                    "title": "Histologia II",
                    "color": "#4ECDC4",
                    "audio_units": [
                        {
                            "title": "Unidade I - Sistema Cardiovascular II",
                            "file": "../audio/s2/sistema-cardiovascular-2/s2-unidade-1-sistema-cardiovascular-2.m4a",
                            "duration": "14:20",
                            "premium": true
                        }
                    ],
                    "text_units": [
                        { "title": "Bloco 200 – Quiz Geral: Histologia II", "blockId": 200, "type": "inline", "premium": false },
                        { "title": "Bloco 203 – Digestório e Respiratório", "blockId": 203, "type": "inline", "premium": true },
                        { "title": "Bloco 204 – Urinário e Endócrino", "blockId": 204, "type": "inline", "premium": true },
                        { "title": "Bloco 205 – Reprodutor e Tegumentar", "blockId": 205, "type": "inline", "premium": true }
                    ]
                },
                "embryology": {
                    "title": "Embriologia II",
                    "color": "#db2777",
                    "audio_units": [],
                    "text_units": [
                        { "title": "Bloco 401 – Fundamentos", "blockId": 401, "type": "inline", "premium": true },
                        { "title": "Bloco 402 – Dobramentos Embrionários", "blockId": 402, "type": "inline", "premium": true },
                        { "title": "Bloco 403 – Organogênese Visceral", "blockId": 403, "type": "inline", "premium": true },
                        { "title": "Bloco 404 – Sistema Nervoso", "blockId": 404, "type": "inline", "premium": true },
                        { "title": "Bloco 405 – Face e Pescoço", "blockId": 405, "type": "inline", "premium": true }
                    ]
                },
                "methodology": {
                    "title": "Metodologia",
                    "color": "#14b8a6",
                    "audio_units": [],
                    "text_units": [
                        { "title": "Bloco 601 – Delineamentos de Pesquisa", "blockId": 601, "type": "inline", "premium": true },
                        { "title": "Bloco 602 – Medicina Baseada em Evidências", "blockId": 602, "type": "inline", "premium": true },
                        { "title": "Bloco 603 – Ética e Redação Científica", "blockId": 603, "type": "inline", "premium": true }
                    ]
                },
                "biostatistics": {
                    "title": "Bioestatística",
                    "color": "#f59e0b",
                    "audio_units": [],
                    "text_units": [
                        { "title": "Bloco 501 – Estatística Descritiva", "blockId": 501, "type": "inline", "premium": true },
                        { "title": "Bloco 502 – Probabilidade e Distribuições", "blockId": 502, "type": "inline", "premium": true },
                        { "title": "Bloco 503 – Inferência e Testes", "blockId": 503, "type": "inline", "premium": true },
                        { "title": "Bloco 504 – Interpretação de Artigos", "blockId": 504, "type": "inline", "premium": true }
                    ]
                }
            }
        },
        "s3": {
            "name": "3º Semestre",
            "subjects": {
                "biochemistry1": {
                    "title": "Bioquímica I",
                    "color": "#f59e0b",
                    "audio_units": [],
                    "text_units": [
                        { "title": "Bloco 901 – Aminoácidos e Proteínas", "blockId": 901, "type": "inline", "premium": true },
                        { "title": "Bloco 902 – Enzimas e Cinética", "blockId": 902, "type": "inline", "premium": true },
                        { "title": "Bloco 903 – Bioenergética e Fosforilação Oxidativa", "blockId": 903, "type": "inline", "premium": true },
                        { "title": "Bloco 904 – Metabolismo de Carboidratos", "blockId": 904, "type": "inline", "premium": true },
                        { "title": "Bloco 905 – Metabolismo Energético e ATP", "blockId": 905, "type": "inline", "premium": true },
                        { "title": "Bloco 906 – Simulado Final — Revisão Bioquímica", "blockId": 906, "type": "inline", "premium": true }
                    ]
                },
                "biophysics": {
                    "title": "Biofísica",
                    "color": "#06b6d4",
                    "audio_units": [],
                    "text_units": [
                        { "title": "Bloco 907 – Biofísica das Soluções", "blockId": 907, "type": "inline", "premium": true },
                        { "title": "Bloco 908 – Bioeletrogênese", "blockId": 908, "type": "inline", "premium": true },
                        { "title": "Bloco 909 – Hemodinâmica", "blockId": 909, "type": "inline", "premium": true },
                        { "title": "Bloco 910 – Biofísica da Respiração", "blockId": 910, "type": "inline", "premium": true },
                        { "title": "Bloco 911 – Radiações em Medicina", "blockId": 911, "type": "inline", "premium": true },
                        { "title": "Bloco 912 – Simulado Final — Revisão Biofísica", "blockId": 912, "type": "inline", "premium": true }
                    ]
                },
                "physio_med": {
                    "title": "Fisiologia I",
                    "color": "#96CEB4",
                    "audio_units": [],
                    "text_units": [
                        { "title": "Bloco 913 – Fisiologia Celular", "blockId": 913, "type": "inline", "premium": false },
                        { "title": "Bloco 914 – Fisiologia Cardiovascular", "blockId": 914, "type": "inline", "premium": true },
                        { "title": "Bloco 915 – Fisiologia Respiratória", "blockId": 915, "type": "inline", "premium": true },
                        { "title": "Bloco 916 – Fisiologia Renal", "blockId": 916, "type": "inline", "premium": true },
                        { "title": "Bloco 917 – Fisiologia Gastrointestinal", "blockId": 917, "type": "inline", "premium": true },
                        { "title": "Bloco 918 – Simulado Final — Revisão Fisiologia I", "blockId": 918, "type": "inline", "premium": true }
                    ]
                },
                "immunology": {
                    "title": "Imunologia",
                    "color": "#ec4899",
                    "audio_units": [],
                    "text_units": [
                        { "title": "Bloco 919 – Imunidade Inata", "blockId": 919, "type": "inline", "premium": true },
                        { "title": "Bloco 920 – Imunidade Adaptativa", "blockId": 920, "type": "inline", "premium": true },
                        { "title": "Bloco 921 – Órgãos Linfocitários", "blockId": 921, "type": "inline", "premium": true },
                        { "title": "Bloco 922 – Anticorpos e Antígenos", "blockId": 922, "type": "inline", "premium": true },
                        { "title": "Bloco 923 – Hipersensibilidade e Autoimunidade", "blockId": 923, "type": "inline", "premium": true },
                        { "title": "Bloco 924 – Simulado Final — Revisão Imunologia", "blockId": 924, "type": "inline", "premium": true }
                    ]
                },
                "genetics": {
                    "title": "Genética Humana",
                    "color": "#8b5cf6",
                    "audio_units": [],
                    "text_units": [
                        { "title": "Bloco 925 – Bases Celulares da Hereditariedade", "blockId": 925, "type": "inline", "premium": true },
                        { "title": "Bloco 926 – Herança Monogênica", "blockId": 926, "type": "inline", "premium": true },
                        { "title": "Bloco 927 – Genética de Populações", "blockId": 927, "type": "inline", "premium": true },
                        { "title": "Bloco 928 – Anomalias Cromossômicas", "blockId": 928, "type": "inline", "premium": true },
                        { "title": "Bloco 929 – Aconselhamento Genético", "blockId": 929, "type": "inline", "premium": true },
                        { "title": "Bloco 930 – Simulado Final — Revisão Genética", "blockId": 930, "type": "inline", "premium": true }
                    ]
                },
                "microbiology": {
                    "title": "Microbiologia I",
                    "color": "#ef4444",
                    "audio_units": [],
                    "text_units": [
                        { "title": "Bloco 931 – Estrutura Bacteriana", "blockId": 931, "type": "inline", "premium": true },
                        { "title": "Bloco 932 – Genética Bacteriana", "blockId": 932, "type": "inline", "premium": true },
                        { "title": "Bloco 933 – Virologia Básica", "blockId": 933, "type": "inline", "premium": true },
                        { "title": "Bloco 934 – Relação Patógeno-Hospedeiro", "blockId": 934, "type": "inline", "premium": true },
                        { "title": "Bloco 935 – Antimicrobianos", "blockId": 935, "type": "inline", "premium": true },
                        { "title": "Bloco 936 – Simulado Final — Revisão Microbiologia I", "blockId": 936, "type": "inline", "premium": true }
                    ]
                }
            }
        },
        "s4": { "name": "4º Semestre", "subjects": {} },
        "s5": { "name": "5º Semestre", "subjects": {} },
        "s6": { "name": "6º Semestre", "subjects": {} },
        "s7": { "name": "7º Semestre", "subjects": {} },
        "s8": { "name": "8º Semestre", "subjects": {} }
    }
};
