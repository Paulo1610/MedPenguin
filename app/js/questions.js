const questionsData = [
  {
    "id": 1,
    "text": "A continuación se indican las presiones hidrostática y oncótica en un lecho microcirculatorio.\nPresión osmótica coloidal del plasma = 25 mmHg\nPresión hidrostática capilar = 25 mmHg\nPresión hidrostática venosa = 5 mmHg\nPresión arterial = 80 mmHg\nPresión hidrostática del líquido intersticial = −5 mmHg\nPresión osmótica coloidal intersticial = 10 mmHg\nCoeficiente de filtración capilar = 10 ml/min/mmHg\n¿Cuál es la velocidad del movimiento neto del líquido a través de la pared capilar?",
    "options": [
      "200 ml/min",
      "50 ml/min",
      "25 ml/min",
      "100 ml/min",
      "150 ml/min"
    ],
    "correctIndex": 4,
    "explanation": "Cálculo: (Pc + πif) - (Pif + πp) = (25 + 10) - (-5 + 25) = 35 - 20 = 15 mmHg. Fluxo = Kf * 15 = 150 ml/min.",
    "tags": [
      "high_yield",
      "math"
    ],
    "tip": "Identifique quais forças favorecem a saída de líquido e quais favorecem a entrada. Monte a equação.",
    "image": "img/microcirculation.svg"
  },
  {
    "id": 2,
    "text": "Una mujer sana de 60 años con antecedentes de 10 años de hipertensión se levanta desde una posición supina. ¿Qué conjunto de cambios cardiovasculares se producirá más probablemente como respuesta a levantarse?",
    "options": [
      "Simpática: ↑, Parasimpática: ↓, FC: ↓",
      "Simpática: ↑, Parasimpática: ↑, FC: ↑",
      "Simpática: ↑, Parasimpática: ↓, FC: ↑",
      "Simpática: ↑, Parasimpática: ↑, FC: ↓",
      "Simpática: ↓, Parasimpática: ↓, FC: ↓"
    ],
    "correctIndex": 2,
    "explanation": "Reflexo barorreceptor postural: Queda do retorno venoso -> Desinibição simpática (↑) e inibição parassimpática (↓) -> Aumento da Frequência Cardíaca.",
    "tags": [],
    "tip": "Pense no que acontece com a distribuição de sangue pela gravidade e qual reflexo é ativado para manter a PA.",
    "image": "img/baroreflex.svg"
  },
  {
    "id": 4,
    "text": "Una mujer de 60 años ha sufrido mareos durante los últimos 6 meses al levantarse de la cama... ¿Qué conjunto de cambios fisiológicos sería de esperar en respuesta al movimiento desde la posición supina a la erguida?",
    "options": [
      "Parasimpática: ↑, Renina: ↓, Simpática: ↑",
      "Parasimpática: ↑, Renina: ↑, Simpática: ↑",
      "Parasimpática: ↓, Renina: ↑, Simpática: ↑",
      "Parasimpática: ↑, Renina: ↓, Simpática: ↓"
    ],
    "correctIndex": 2,
    "explanation": "Hipotensão ortostática ativa o simpático e sistema Renina-Angiotensina. Parassimpático diminui.",
    "tags": [],
    "tip": "Quando a pressão cai ao levantar, quais sistemas compensatórios são ativados e quais são inibidos?",
    "image": "img/baroreflex.svg"
  },
  {
    "id": 20,
    "text": "Un estudiante de Medicina aísla la arteria carótida de un animal y estrecha parcialmente la arteria con un nudo alrededor del vaso. ¿Qué conjunto de cambios sería previsible como respuesta?",
    "options": [
      "Simpática: ↑, Flujo Renal: ↓, RPT: ↑",
      "Simpática: ↓, Flujo Renal: ↓, RPT: ↓",
      "Simpática: ↓, Flujo Renal: ↑, RPT: ↓",
      "Simpática: ↑, Flujo Renal: ↑, RPT: ↑"
    ],
    "correctIndex": 0,
    "explanation": "A constrição da carótida simula hipotensão no barorreceptor. Ocorre aumento maciço do tnus simpático, aumentando a RPT e constringindo a arteríola renal (reduzindo fluxo renal).",
    "tags": [
      "trap"
    ],
    "tip": "Pense em qual pressão o barorreceptor detectaria acima ou abaixo do ponto de constrição.",
    "image": "img/carotid_constriction.svg"
  },
  {
    "id": 24,
    "text": "Un hombre de 50 años... tiene hiperaldosteronismo primario. ¿Qué conjunto de hallazgos sería de esperar en este hombre?",
    "options": [
      "Vol. Extracel: ↑, Renina: ↑, K+: ↑",
      "Vol. Extracel: ↓, Renina: ↓, K+: ↓",
      "Vol. Extracel: ↑, Renina: ↓, K+: ↑",
      "Vol. Extracel: ↑, Renina: ↓, K+: ↓"
    ],
    "correctIndex": 3,
    "explanation": "Aldosterona retém Na+ e água (Aumenta Vol. Extracel) e excreta K+ (Hipocalemia). O aumento de volume e pressão inibe a Renina (feedback negativo).",
    "tags": [
      "high_yield"
    ],
    "tip": "Pense nas ações da aldosterona sobre os eletrólitos e como o volume resultante afeta o eixo RAA.",
    "image": null
  },
  {
    "id": 29,
    "text": "Suponiendo que los vasos A a D tienen la misma longitud, ¿cuál posee el flujo más elevado?",
    "options": [
      "B: ΔP=50, r=2 (V=5)",
      "D: ΔP=10, r=6 (V=1)",
      "A: ΔP=100, r=1 (V=10)",
      "C: ΔP=25, r=4 (V=2)"
    ],
    "correctIndex": 1,
    "explanation": "Lei de Poiseuille: Fluxo ~ ΔP * r^4. \nA: 100*1 = 100. \nB: 50*16 = 800. \nC: 25*256 = 6400. \nD: 10*1296 = 12960. O vaso D tem maior fluxo.",
    "tags": [
      "math",
      "high_yield"
    ],
    "tip": "Na Lei de Poiseuille, qual variável tem o maior impacto exponencial sobre o fluxo?",
    "image": "img/poiseuille.svg"
  },
  {
    "id": 40,
    "text": "Un catéter con balón... eleva la presión auricular en 5 mmHg. ¿En cuál de los siguientes valores sería de esperar un aumento como respuesta?",
    "options": [
      "Aldosterona",
      "Angiotensina II",
      "Actividad nerviosa simpática renal",
      "Péptido natriurético auricular"
    ],
    "correctIndex": 3,
    "explanation": "O estiramento atrial libera ANP (Peptídeo Natriurético Atrial), que promove perda de sódio e água para reduzir o volume.",
    "tags": [],
    "tip": "Quando as câmaras cardíacas são distendidas, qual hormônio é liberado em resposta ao estiramento?",
    "image": null
  },
  {
    "id": 42,
    "text": "¿Cuál de los siguientes resultados se obtiene con un aumento en la presión auricular?",
    "options": [
      "Dismunución ANP",
      "Aumento en la excreción de sodio",
      "Aumento Aldosterona",
      "Aumento Angiotensina II"
    ],
    "correctIndex": 1,
    "explanation": "Pressão atrial alta -> Libera ANP -> Aumenta excreção de sódio e água (Natriurese).",
    "tags": [],
    "tip": "A distensão atrial ativa mecanismos para reduzir o volume. Qual é o efeito renal esperado?",
    "image": null
  },
  {
    "id": 46,
    "text": "¿En cuál de los siguientes valores un aumento tiende a reducir la filtración capilar?",
    "options": [
      "Presión hidrostática venosa",
      "Presión osmótica coloidal intersticial",
      "Presión osmótica coloidal del plasma",
      "Presión hidrostática capilar"
    ],
    "correctIndex": 2,
    "explanation": "Aumentar a pressão oncótica do plasma (πp) puxa água de volta para o capilar, reduzindo a filtração.",
    "tags": [],
    "tip": "Na equação de Starling, qual força se opõe à saída de líquido do capilar?",
    "image": "img/microcirculation.svg"
  },
  {
    "id": 54,
    "text": "¿Qué conjunto de cambios sería previsible como respuesta a un aumento directo en la presión arterial en los riñones sin un sistema de retroalimentación tubuloglomerular intacto?",
    "options": [
      "FG: ↑, Excreción Na: ↓, Agua: ↓",
      "FG: ↓, Excreción Na: ↓, Agua: ↓",
      "FG: ↑, Excreción Na: ↑, Agua: ↑"
    ],
    "correctIndex": 2,
    "explanation": "Sem autorregulação (feedback tubuloglomerular), o aumento da PA transmite-se diretamente ao glomérulo: aumenta Filtração Glomerular (FG) e causa Diurese/Natriurese por Pressão.",
    "tags": [
      "trap"
    ],
    "tip": "Se o mecanismo protetor renal for removido, o que acontece quando a PA aumenta diretamente?",
    "image": null
  },
  {
    "id": 62,
    "text": "¿En cuál de las siguientes entidades es máxima la tendencia al flujo turbulento?",
    "options": [
      "Arteriolas",
      "Capilares",
      "Pequeñas arteriolas",
      "Aorta"
    ],
    "correctIndex": 3,
    "explanation": "Número de Reynolds (Re = v*d*ρ/η). A aorta tem o maior diâmetro e alta velocidade, resultando no maior número de Reynolds e maior propensão a turbulência.",
    "tags": [],
    "tip": "O Número de Reynolds depende de diâmetro e velocidade. Qual vaso combina os maiores valores de ambos?",
    "image": null
  },
  {
    "id": 69,
    "text": "¿Qué hecho se produce a menudo en una insuficiencia cardíaca descompensada?",
    "options": [
      "Pérdida de peso",
      "Aumento de pérdida renal de Na",
      "Disminución de presión de llenado sistémica",
      "Aumento de noradrenalina en nervios simpáticos cardíacos"
    ],
    "correctIndex": 3,
    "explanation": "Na IC descompensada, o débito cardíaco cai, ativando reflexos simpáticos massivos na tentativa de compensar. A noradrenalina cardíaca aumenta (embora os estoques possam se depletar a longo prazo). Também ocorre edema (ganho de peso) e retenção renal.",
    "tags": [],
    "tip": "Quando o débito cardíaco cai drasticamente, qual ramo do sistema nervoso autônomo é mais ativado?",
    "image": null
  },
  {
    "id": 89,
    "text": "¿Qué agente vasoactivo es normalmente el controlador más importante del flujo sanguíneo coronario?",
    "options": [
      "Dióxido de carbono",
      "Adenosina",
      "Bradicinina",
      "Prostaglandinas"
    ],
    "correctIndex": 1,
    "explanation": "Adenosina, formada pela quebra de ATP, é o principal vasodilatador metabólico coronariano.",
    "tags": [
      "high_yield"
    ],
    "tip": "O fluxo coronariano depende do metabolismo local. Qual substância é gerada diretamente pela quebra de ATP?",
    "image": null
  },
  {
    "id": 99,
    "text": "A un hombre de 60 años... tiene una angina causada por una isquemia miocárdica. ¿Qué tratamiento sería beneficioso para este hombre?",
    "options": [
      "Quelación",
      "Ejercicio isométrico",
      "Nitroglicerina",
      "Inhibidor ECA",
      "Estimulación beta"
    ],
    "correctIndex": 2,
    "explanation": "Nitroglicerina causa venodilatação (reduz pré-carga) e vasodilatação coronária, aliviando a angina. Estimulação beta pioraria o consumo de O2.",
    "tags": [
      "high_yield"
    ],
    "tip": "Pense em qual fármaco reduz a pré-carga E melhora a perfusão coronariana simultaneamente.",
    "image": null
  },
  {
    "id": 136,
    "text": "Un hombre... recibe la vacuna contra la gripe. Presenta palidez, taquicardia, presión arterial de 80/50... ¿Qué tratamiento recomienda para prevenir el shock?",
    "options": [
      "Infusión de sangre",
      "Activador del plasminógeno",
      "Fármaco simpaticomimético (Adrenalina)",
      "Solución electrolítica",
      "Antihistamínico"
    ],
    "correctIndex": 2,
    "explanation": "Trata-se de choque anafilático. O tratamento de escolha é Adrenalina (simpaticomimético) para vasoconstrição e broncodilatação imediatas. Anti-histamínicos são secundários.",
    "tags": [
      "high_yield"
    ],
    "tip": "Neste tipo de choque, o tratamento de primeira linha deve reverter vasodilatação e broncoespasmo rapidamente.",
    "image": null
  },
  {
    "id": 140,
    "text": "¿En qué tipo de shock suele aumentar el gasto cardíaco?",
    "options": [
      "Shock hemorrágico",
      "Shock anafiláctico",
      "Shock neurógeno",
      "Shock séptico"
    ],
    "correctIndex": 3,
    "explanation": "No choque séptico (fase hiperdinâmica), a vasodilatação massiva e o aumento do metabolismo aumentam o retorno venoso e o débito cardíaco, apesar da hipotensão.",
    "tags": [
      "high_yield",
      "trap"
    ],
    "tip": "Nem todo choque cursa com baixo débito. Alguns tipos possuem uma fase com DC paradoxalmente alto.",
    "image": null
  },
  {
    "id": 9101,
    "unitId": 504,
    "text": "Um estudo randomizado comparou o uso de corticóide oral versus placebo em pacientes com asma moderada. O resultado mostrou redução no número de hospitalizações com p = 0,003. Um médico interpretou este resultado dizendo: 'Com 99,7% de confiança, o corticóide é efetivo.' Esta interpretação está correta?",
    "options": [
      "Não. O p-valor é uma medida de tamanho de efeito, não de confiança",
      "Não pode ser interpretado sem conhecer o tamanho amostral do estudo",
      "Sim, está correta, pois a redução em hospitalizações é clinicamente relevante",
      "Não. O p-valor é 0,3% de probabilidade de observar esses dados (ou mais extremos) se a hipótese nula fosse verdadeira",
      "Sim, está correta. Um p-valor de 0,003 garante 99,7% de confiança no resultado"
    ],
    "correctIndex": 3,
    "explanation": "A confusão é clássica: p-valor NÃO é 'grau de confiança na conclusão'. Definição correta: p = P(dados tão extremos ou mais | H₀ verdadeira). Se p=0,003, significa que, SE o corticóide não funciona, há apenas 0,3% de chance de observar essa redução (ou maior). Isso TORNA a hipótese de 'não-efeito' improvável, mas não garante 99,7% de efetividade. Alternativa A é a confusão mais frequente em pesquisa clínica.",
    "tags": [
      "p-valor",
      "interpretação",
      "significância"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": null
  },
  {
    "id": 9102,
    "unitId": 504,
    "text": "Um estudo mediu o tempo de cicatrização (em dias) de feridas cirúrgicas em 200 pacientes pós-operatórios. A média foi 14 dias com IC95% [12 a 16 dias]. Um cirurgião afirma: 'Portanto, 95% dos meus pacientes apresentarão cicatrização entre 12 e 16 dias.' Critique esta interpretação.",
    "options": [
      "Incorreta porque o intervalo deveria ser bilateral para ser válido neste contexto",
      "Está correta. O intervalo de confiança descreve a distribuição individual dos dados",
      "Incorreta. O IC95% descreve a variabilidade da MÉDIA amostral, não dos valores individuais dos pacientes",
      "A afirmação está correta apenas para a população, não para a amostra",
      "Está correta se o desvio padrão for menor que 2 dias"
    ],
    "correctIndex": 2,
    "explanation": "Erro comum: IC reflete INCERTEZA SOBRE O PARÂMETRO (μ), não sobre dados individuais. Se 95% dos pacientes tiverem cicatrização entre 12-16 dias, isso seria descrito pelo INTERVALO DE PREDIÇÃO, não IC. O IC [12-16] significa que, em repetidas amostras, ~95% dos ICs construídos conteriam a verdadeira média. Alternativa A e C erram nesta confusão fundamental, confundindo variabilidade amostral com variabilidade individual.",
    "tags": [
      "intervalo-confiança",
      "interpretação",
      "variabilidade"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": null
  },
  {
    "id": 9103,
    "unitId": 504,
    "text": "Um ensaio clínico com 5.000 diabéticos compara dois anti-hipertensivos. O novo medicamento reduziu a pressão arterial sistólica média em 1,5 mmHg comparado ao padrão (p = 0,001). Todos os critérios de significância estatística foram atendidos. Como você avalia este achado clinicamente?",
    "options": [
      "O resultado é inválido porque a diferença é muito pequena para ser real",
      "O grande tamanho amostral (n=5000) garante que a diferença é clinicamente importante",
      "A redução de 1,5 mmHg é estatisticamente significativa mas clinicamente irrelevante para mudança de prática",
      "O novo medicamento é superior e deve ser recomendado amplamente",
      "Com p=0,001, há apenas 0,1% de chance de estar errado sobre a superioridade"
    ],
    "correctIndex": 2,
    "explanation": "Essa questão ilustra um achado moderno frequente: amostras GRANDES podem gerar significância estatística mesmo para diferenças clinicamente IRRELEVANTES. Uma queda de 1,5 mmHg em PA, embora estatisticamente significativa (p=0,001), NÃO justifica troca de tratamento na prática clínica. O tamanho do efeito (effect size) é o que importa clinicamente, não apenas o p-valor. Alternativas A, D, E confundem significância estatística com importância clínica.",
    "tags": [
      "significância",
      "relevância-clínica",
      "effect-size"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": null
  },
  {
    "id": 9104,
    "unitId": 504,
    "text": "Um estudo de desfecho observacional avaliou 400 pacientes hipertensos quanto ao controle de pressão arterial e eventos cardiovasculares. Qual é a probabilidade de um paciente ter sofrido infarto dado que sua pressão foi CONTROLADA? (Observação: PA Controlada + Sem Infarto: 280 pacientes; PA Controlada + Com Infarto: 20; PA Não Controlada + Sem Infarto: 80; PA Não Controlada + Com Infarto: 20)",
    "options": [
      "20/100 = 20%",
      "40/360 = 11,1%",
      "20/300 = 6,7%",
      "20/40 = 50%",
      "40/400 = 10%"
    ],
    "correctIndex": 2,
    "explanation": "Esta é uma PROBABILIDADE CONDICIONAL: 'Dado que PA foi controlada, qual a chance de infarto?' Você restringe o universo aos pacientes com PA controlada (n=280+20=300). Desses, 20 tiveram infarto → 20/300 = 6,7%. Resposta A usa a população total (erro conceitual). B inverte a condição (PA não controlada). D compara infartos entre si. E usa controles totais mas denominador errado.",
    "tags": [
      "tabela",
      "probabilidade-condicional",
      "leitura-dados"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": null
  },
  {
    "id": 9105,
    "unitId": 504,
    "text": "Um estudo transversal com 3.000 adolescentes observou forte associação entre uso de redes sociais (>3 horas/dia) e sintomas de ansiedade/depressão (p<0,001, r=0,42). A mídia reporta: 'Uso excessivo de redes sociais CAUSA transtornos de ansiedade em adolescentes.' Qual é o problema com esta interpretação?",
    "options": [
      "O p-valor é muito significativo para ser uma simples associação",
      "Estudos transversais mostram associação, não causalidade. Não é possível determinar direção de causa-efeito",
      "Não há problema; uma associação significativa é suficiente para afirmar causação",
      "O tamanho amostral é pequeno para fazer conclusões sobre causalidade",
      "A correlação de 0,42 é muito fraca para ter relevância clínica"
    ],
    "correctIndex": 1,
    "explanation": "Erro epidemiológico fundamental: ASSOCIAÇÃO ≠ CAUSAÇÃO. Um estudo transversal não estabelece TEMPORALIDADE (qual vem primeiro?). Possíveis explicações alternativas: adolescentes COM ansiedade já buscam redes sociais para coping; ou ambos são causados por terceira variável (isolamento social, predisposição genética). Alternativa E erra gravemente. D confunde força da correlação com tamanho clinicamente relevante. A ignora que o problema é DESENHO, não n.",
    "tags": [
      "desenho-estudo",
      "causalidade",
      "associação"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": null
  },
  {
    "id": 9106,
    "unitId": 504,
    "text": "Um hospital investigou a taxa de infecção de sítio cirúrgico (ISC) em 800 cirurgias de diferentes protocolos de profilaxia. A imagem mostra os resultados. Qual protocolo é mais efetivo e qual é a MAGNITUDE DE REDUÇÃO em relação ao grupo controle (sem antibiótico)?",
    "options": [
      "Antibiótico + Antisséptico reduz em 24% absoluto; é o protocolo mais efetivo",
      "Antibiótico <1h antes tem a mesma efetividade que Antibiótico 12h antes",
      "Antibiótico 12h antes reduz em 20% absoluto; é o protocolo ideal",
      "Sem Antibiótico tem 28% ISC porque a amostra neste grupo foi maior",
      "A diferença entre os protocolos é desprezível pois todas as barras têm IC que se sobrepõem"
    ],
    "correctIndex": 0,
    "explanation": "Leitura direta de gráfico: Sem Antibiótico = 28% (controle). Antibiótico + Antisséptico = 4%. Redução absoluta = 28% - 4% = 24%. Este é o MAIOR benefício. Resposta A (redução de 20%) confunde com Antibiótico 12h (28-8=20%). C está correta numericamente (ambos ~6-8%), mas não é a MELHOR prática. D ignora que diferenças absolutas podem ser significativas. E não há informação sobre tamanhos de grupos.",
    "tags": [
      "gráfico-barras",
      "comparação-grupos",
      "magnitude-efeito"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": "img/unit_504_q6_bars_comparison.png"
  },
  {
    "id": 9107,
    "unitId": 504,
    "text": "Um estudo acompanhou a taxa de infecção respiratória em dois grupos de crianças vacinadas com diferentes vacinas. A imagem mostra a evolução ao longo de 12 meses. Qual conclusão é mais apropriada sobre a DURABILIDADE DE PROTEÇÃO?",
    "options": [
      "Nenhuma conclusão pode ser feita sem conhecer os p-valores mensais de cada timepoint",
      "Vacina A oferece melhor proteção sustentada; reduz mais a taxa de infecção e mantém níveis menores",
      "Vacina B é superior porque sua linha é mais reta, indicando estabilidade",
      "As vacinas não diferem significativamente porque os intervalos de confiança se sobrepõem em vários meses",
      "Ambas vacinas têm proteção equivalente porque as linhas começam com taxas similares"
    ],
    "correctIndex": 1,
    "explanation": "Leitura de gráfico de LINHA (série temporal): Ambas começam similares (~28-30%), correto. MAS Vacina A cai mais (até ~5%) enquanto Vacina B fica em ~8%. Ao final de 12 meses, Vacina A tem proteção SUPERIOR (menor taxa de infecção). Resposta A ignora a evolução temporal. C confunde estabilidade com efetividade. D e E ignoram que diferenças progressivas podem indicar proteção diferencial mesmo com ICs que se sobrepõem ocasionalmente.",
    "tags": [
      "gráfico-linha",
      "série-temporal",
      "tendência"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": "img/unit_504_q7_line_trend.png"
  },
  {
    "id": 9108,
    "unitId": 504,
    "text": "Um estudo hematológico comparou hemoglobina em 3 grupos de pacientes (A: Normal, B: Anemia Moderada, C: Anemia Grave). A imagem mostra os resultados em boxplot. O que o padrão de outliers no Grupo C sugere?",
    "options": [
      "Os outliers indicam erro de medição no laboratório",
      "O Grupo C tem dados inválidos que deveriam ser removidos antes da análise",
      "Os outliers podem representar casos de anemia mais severa dentro do grupo (variabilidade legítima)",
      "Outliers ocorrem apenas em amostras pequenas; isso sugere n insuficiente no Grupo C",
      "A presença de outliers invalida qualquer conclusão sobre hemoglobina neste grupo"
    ],
    "correctIndex": 2,
    "explanation": "Outliers NÃO são automaticamente 'erros'. No contexto clínico, o Grupo C (Anemia Grave) com hemoglobina muito baixa (3-4 g/dL) representa casos EXTREMAMENTE GRAVES - legítimo biologicamente. Não devem ser removidos sem investigação. Resposta A e B assumem erro sem evidência. D é excessivamente cautelosa. E confunde outliers com tamanho amostral (n). A interpretação correta reconhece que outliers refletem VARIABILIDADE REAL da população.",
    "tags": [
      "boxplot",
      "outliers",
      "distribuição"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": "img/unit_504_q8_boxplot.png"
  },
  {
    "id": 9109,
    "unitId": 504,
    "text": "Um pesquisador apresenta uma tabela resumo de um estudo comparativo. A tabela mostra 3 variáveis com diferença entre grupos, intervalos de confiança e p-valores. Qual variável mostra MELHOR EVIDÊNCIA de diferença real entre os grupos? (Observação: tabela inclui Variável 1: p=0,02; Variável 2: p=0,45; Variável 3: p<0,001)",
    "options": [
      "Variável 1, porque seu IC é o mais estreito",
      "Variável 3, porque p<0,001 é altamente significativo e o IC não inclui zero",
      "Nenhuma, pois os ICs de todas as variáveis se sobrepõem com a região de efeito zero",
      "Variável 1, porque p=0,02 é significativo e a diferença é clinicamente importante",
      "Variável 2, porque p=0,45 indica que não há significância, mas pode haver efeito pequeno"
    ],
    "correctIndex": 1,
    "explanation": "Análise combinada de p-valor e IC: Variável 1 (p=0,02) tem IC [2-14] que NÃO inclui zero, bom sinal. Variável 2 (p=0,45) tem IC [-1-2] que INCLUI zero → falta diferença real. Variável 3 (p<0,001) tem IC [3-9] que NÃO inclui zero E tem p altamente significativo → MELHOR evidência. Resposta E erra ao dizer que overlap com zero invalida; apenas Variável 2 tem IC que toca/inclui zero (sua medida de nulidade).",
    "tags": [
      "tabela",
      "p-valor",
      "intervalo-confiança"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": "img/unit_504_q9_table_results.png"
  },
  {
    "id": 9110,
    "unitId": 504,
    "text": "Um hospital investigou a relação entre dias de internação e custo do tratamento em 50 pacientes. A imagem mostra o gráfico de dispersão com correlação r=0,84 (p<0,001). Um gestor conclui: 'Cada dia a mais de internação custa exatamente $300 ao hospital.' Esta conclusão é apropriada?",
    "options": [
      "Sim, porque r²=0,71 (≈0,84²) indica que 71% do custo é explicado por tempo de internação",
      "Não, porque há demasiada dispersão dos pontos para fazer estimativas",
      "Sim, a forte correlação (r=0,84) permite calcular o custo exato por dia",
      "Não. Correlação mede força de associação, não permite predizer valores exatos. A regressão forneceria a equação específica",
      "A correlação é tão forte que nenhuma variável confundidora interfere no resultado"
    ],
    "correctIndex": 3,
    "explanation": "Confusão clássica: CORRELAÇÃO ≠ REGRESSÃO LINEAR. Correlação r=0,84 diz 'forte relação linear', mas NÃO fornece a equação específica (y = a + bx). Para calcular 'custo exato de $300/dia', precisa-se da ANÁLISE DE REGRESSÃO. Alternativa C está tecnicamente correta (r²=0,71 significa 71% da variância em custo é explicada por internação) mas não responde a pergunta sobre 'custo exato de $300/dia'. D ignora que correlação forte persiste mesmo com dispersão.",
    "tags": [
      "scatter-plot",
      "correlação",
      "regressão"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": "img/unit_504_q10_scatter.png"
  },
  {
    "id": 5001,
    "unitId": 50,
    "text": "A imagem representa qual ramo da Anatomia?",
    "options": [
      "Embriologia",
      "Anatomia patológica",
      "Anatomia topográfica",
      "Anatomia clínica",
      "Anatomia sistêmica"
    ],
    "correctIndex": 4,
    "explanation": "Explicação: A Anatomia Sistêmica estuda o corpo dividido por sistemas funcionais (esquelético, muscular, nervoso, etc.), separando-os para análise.\n\nPor que as outras estão erradas:\n- A (Patológica): Estuda doenças e alterações anormais.\n- B (Clínica): Foca na aplicação prática (exame físico/cirurgia).\n- D (Topográfica): Estuda por regiões (ex: cabeça, pescoço) com todas as estruturas juntas.\n- E (Embriologia): Estuda o desenvolvimento pré-natal.\n\nDistribuição (Simulação):\nA: 5% | B: 10% | C: 75% | D: 8% | E: 2%",
    "tags": [
      "anatomia-sistemica",
      "introducao"
    ],
    "image": "img/anatomy_systems.jpg"
  },
  {
    "id": 5002,
    "unitId": 50,
    "text": "A imagem demonstra o estudo anatômico baseado em:",
    "options": [
      "Função dos órgãos",
      "Alterações patológicas",
      "Anatomia comparada",
      "Desenvolvimento embrionário",
      "Relação entre estruturas em uma região"
    ],
    "correctIndex": 4,
    "explanation": "Explicação: A imagem do pescoço com músculos, vasos e nervos sobrepostos em camadas exemplifica a Anatomia Topográfica (ou Regional), que estuda a organização espacial e relações entre estruturas em uma região específica.\n\nPor que as outras estão erradas:\n- A (Função): Seria Fisiologia.\n- C (Patológicas): Seria Anatomia Patológica.\n- D (Desenvolvimento): Seria Embriologia.\n- E (Comparada): Comparação entre espécies.\n\nDistribuição (Simulação):\nA: 10% | B: 65% | C: 5% | D: 5% | E: 15%",
    "tags": [
      "anatomia-regional",
      "topografia"
    ],
    "image": "img/anatomy_neck.jpg"
  },
  {
    "id": 5003,
    "unitId": 50,
    "text": " O tipo de anatomia ilustrado é mais utilizado para:",
    "options": [
      "Classificação dos tecidos",
      "Análise microscópica",
      "Procedimentos cirúrgicos",
      "Estudo celular",
      "Diagnóstico histológico"
    ],
    "correctIndex": 2,
    "explanation": "Explicação: A Anatomia Clínica e Topográfica são a base dos procedimentos cirúrgicos, permitindo ao cirurgião navegar com segurança pelas estruturas (nervos, vasos) em um campo operatório restrito.\n\nPor que as outras estão erradas:\n- A, C, D, E: Referem-se a estudos microscópicos (Histologia/Citologia), não macroscópicos cirúrgicos.\n\nDistribuição (Simulação):\nA: 5% | B: 80% | C: 5% | D: 5% | E: 5%",
    "tags": [
      "anatomia-clinica",
      "cirurgia"
    ],
    "image": "img/unit50_q3_cirurgia.jpg"
  },
  {
    "id": 5004,
    "unitId": 50,
    "text": " A imagem está relacionada a qual ramo da Anatomia?",
    "options": [
      "Anatomia radiológica",
      "Embriologia",
      "Anatomia patológica",
      "Anatomia sistêmica",
      "Anatomia de superfície"
    ],
    "correctIndex": 0,
    "explanation": "Explicação: A Anatomia Radiológica utiliza técnicas de imagem (Raio-X, TC, RM) para visualizar estruturas internas sem necessidade de dissecção ou cirurgia invasiva.\n\nPor que as outras estão erradas:\n- A (Superfície): Estuda o que é visível/palpável externamente.\n- B (Sistêmica): Focaria em sistemas isolados.\n- D (Patológica): Focaria em doenças.\n- E (Embriologia): Focaria em desenvolvimento.\n\nDistribuição (Simulação):\nA: 5% | B: 10% | C: 80% | D: 3% | E: 2%",
    "tags": [
      "anatomia-radiologica",
      "imagem"
    ],
    "image": "img/unit50_q4_raiox.jpg"
  },
  {
    "id": 5005,
    "unitId": 50,
    "text": " A imagem demonstra um método de estudo anatômico baseado em:",
    "options": [
      "Palpação e inspeção externa",
      "Observação microscópica",
      "Anatomia comparada",
      "Dissecção regional",
      "Estudo funcional"
    ],
    "correctIndex": 0,
    "explanation": "Explicação: A Anatomia de Superfície baseia-se na inspeção visual e palpação de estruturas anatômicas (ossos, tendões, vasos) através da pele intacta, fundamental para o exame físico.\n\nPor que as outras estão erradas:\n- A (Microscópica): Exige microscópio.\n- C (Dissecção): Exige corte/abertura.\n- D (Funcional): Focaria no movimento/fisiologia.\n- E (Comparada): Compararia espécies.\n\nDistribuição (Simulação):\nA: 2% | B: 85% | C: 8% | D: 3% | E: 2%",
    "tags": [
      "anatomia-superficie",
      "semiologia"
    ],
    "image": "img/unit50_q5_superficie.jpg"
  },
  {
    "id": 5006,
    "unitId": 50,
    "text": " O tipo de anatomia representado na imagem tem como principal objetivo:",
    "options": [
      "Compreender o desenvolvimento embrionário",
      "Classificar sistemas orgânicos",
      "Estudar tecidos ao microscópio",
      "Identificar estruturas em exames de imagem",
      "Correlacionar estrutura e função"
    ],
    "correctIndex": 3,
    "explanation": "Explicação: A Anatomia Seccional/Radiológica (como na TC axial) permite identificar a localização precisa, relações e integridade de órgãos internos através de cortes virtuais.\n\nPor que as outras estão erradas:\n- A (Tecidos): Seria Histologia.\n- B (Função): Seria Fisiologia.\n- D (Embriologia): Seria desenvolvimento.\n- E (Sistemas): Seria Sistêmica.\n\nDistribuição (Simulação):\nA: 5% | B: 15% | C: 70% | D: 5% | E: 5%",
    "tags": [
      "anatomia-radiologica",
      "seccional"
    ],
    "image": "img/unit50_q6_tomografia.jpg"
  },
  {
    "id": 5007,
    "unitId": 50,
    "text": " A abordagem anatômica ilustrada é mais adequada para:",
    "options": [
      "Pesquisa histológica",
      "Ensino básico",
      "Estudo comparativo animal",
      "Planejamento clínico",
      "Classificação celular"
    ],
    "correctIndex": 3,
    "explanation": "Explicação: A análise de imagens (RM, TC) é crucial para o planejamento clínico e cirúrgico, permitindo decisões terapêuticas baseadas na anatomia específica do paciente.\n\nPor que as outras estão erradas:\n- B, E: Referem-se a nível celular/tecido.\n- D: Referem-se a animais.\n- A: Embora usada no ensino, seu fim principal é clínico.\n\nDistribuição (Simulação):\nA: 20% | B: 2% | C: 75% | D: 1% | E: 2%",
    "tags": [
      "anatomia-clinica",
      "imagem"
    ],
    "image": "img/unit50_q7_ressonancia.jpg"
  },
  {
    "id": 5008,
    "unitId": 50,
    "text": " A imagem está associada a qual subdivisão da Anatomia?",
    "options": [
      "Anatomia microscópica",
      "Anatomia clínica",
      "Anatomia do desenvolvimento",
      "Anatomia sistêmica",
      "Anatomia patológica"
    ],
    "correctIndex": 2,
    "explanation": "Explicação: A Anatomia do Desenvolvimento (Embriologia) estuda as mudanças estruturais desde a fertilização até a formação completa do organismo (fases embrionária e fetal).\n\nPor que as outras estão erradas:\n- A (Patológica): Estuda doenças.\n- B (Clínica): Aplicação prática.\n- C (Sistêmica): Sistemas adultos.\n- E (Microscópica): Tecidos/células.\n\nDistribuição (Simulação):\nA: 2% | B: 5% | C: 3% | D: 88% | E: 2%",
    "tags": [
      "embriologia",
      "desenvolvimento"
    ],
    "image": "img/unit50_q8_embriao.jpg"
  },
  {
    "id": 5009,
    "unitId": 50,
    "text": "Anatomia é definida como a ciência que estuda:",
    "options": [
      "As alterações patológicas",
      "A estrutura do corpo humano",
      "As funções do organismo",
      "Os processos bioquímicos",
      "A genética humana"
    ],
    "correctIndex": 1,
    "explanation": "Explicação: Anatomia (do grego anatome = cortar em partes) é a ciência que estuda a macro e microestrutura dos seres vivos e a relação entre suas partes.\n\nPor que as outras estão erradas:\n- A (Funções): É Fisiologia.\n- B (Patológicas): É Patologia.\n- D (Bioquímicos): É Bioquímica.\n- E (Genética): É Genética.\n\nDistribuição (Simulação):\nA: 15% | B: 5% | C: 75% | D: 2% | E: 3%",
    "tags": [
      "conceito-anatomia"
    ],
    "image": null
  },
  {
    "id": 5010,
    "unitId": 50,
    "text": "A anatomia sistêmica estuda o corpo humano:",
    "options": [
      "Por tecidos",
      "Por regiões",
      "Por sistemas",
      "Por imagens",
      "Por funções"
    ],
    "correctIndex": 2,
    "explanation": "Explicação: A abordagem Sistêmica agrupa estruturas com função comum (ex: ossos no Esquelético, músculos no Muscular), independentemente de sua localização.\n\nPor que as outras estão erradas:\n- A (Regiões): É Topográfica.\n- C (Funções): É Fisiologia.\n- D (Imagens): É Radiológica.\n- E (Tecidos): É Histologia.\n\nDistribuição (Simulação):\nA: 20% | B: 70% | C: 5% | D: 3% | E: 2%",
    "tags": [
      "anatomia-sistemica"
    ],
    "image": null
  },
  {
    "id": 5011,
    "unitId": 50,
    "text": "Qual alternativa representa corretamente um ramo da Anatomia?",
    "options": [
      "Fisiologia",
      "Bioquímica",
      "Anatomia clínica",
      "Genética",
      "Histologia"
    ],
    "correctIndex": 2,
    "explanation": "Explicação: A Anatomia Clínica é um ramo oficial que aplica o conhecimento estrutural à prática médica. Histologia (C) é frequentemente considerada anatomia microscópica, mas D é a melhor resposta de ramo aplicado.\n\nPor que as outras estão erradas:\n- A, B, E: São ciências independentes (embora relacionadas).\n- C (Histologia): É o estudo microscópico, mas frequentemente separada didaticamente da macroscopia.\n\nDistribuição (Simulação):\nA: 10% | B: 5% | C: 30% | D: 50% | E: 5%",
    "tags": [
      "ramos-anatomia"
    ],
    "image": null
  },
  {
    "id": 5012,
    "unitId": 50,
    "text": "A Anatomia topográfica também é conhecida como:",
    "options": [
      "Sistêmica",
      "Regional",
      "Comparada",
      "Patológica",
      "Funcional"
    ],
    "correctIndex": 1,
    "explanation": "Explicação: Anatomia Topográfica = Regional. Estuda grandes regiões do corpo (cabeça, pescoço, tórax, abdome) e as relações espaciais entre todas as estruturas ali presentes.\n\nPor que as outras estão erradas:\n- A (Sistêmica): Estuda sistemas isolados.\n- B (Funcional): Estuda função.\n- D (Comparada): Estuda espécies.\n- E (Patológica): Estuda doenças.\n\nDistribuição (Simulação):\nA: 10% | B: 5% | C: 80% | D: 3% | E: 2%",
    "tags": [
      "anatomia-regional"
    ],
    "image": null
  },
  {
    "id": 5013,
    "unitId": 50,
    "text": "O estudo das alterações estruturais causadas por doenças pertence à:",
    "options": [
      "Anatomia patológica",
      "Anatomia clínica",
      "Embriologia",
      "Anatomia radiológica",
      "Anatomia de superfície"
    ],
    "correctIndex": 0,
    "explanation": "Explicação: A Anatomia Patológica foca nas mudanças macroscópicas e microscópicas nos órgãos e tecidos que ocorrem como resultado de processos de doença.\n\nPor que as outras estão erradas:\n- A (Clínica): Aplicação prática em pacientes vivos.\n- C (Radiológica): Imagens.\n- D (Embriologia): Desenvolvimento.\n- E (Superfície): Exame físico externo.\n\nDistribuição (Simulação):\nA: 15% | B: 80% | C: 2% | D: 1% | E: 2%",
    "tags": [
      "anatomia-patologica"
    ],
    "image": null
  },
  {
    "id": 5014,
    "unitId": 50,
    "text": "A embriologia estuda:",
    "options": [
      "Funções orgânicas",
      "Sistemas corporais",
      "Estruturas microscópicas",
      "Tecidos",
      "Desenvolvimento do indivíduo"
    ],
    "correctIndex": 4,
    "explanation": "Explicação: A Embriologia (Anatomia do Desenvolvimento) cobre todo o processo de formação de um novo indivíduo, desde a fertilização até o nascimento (ou além).\n\nPor que as outras estão erradas:\n- A (Funções): Fisiologia.\n- B, E (Tecidos/Micro): Histologia.\n- D (Sistemas): Anatomia Sistêmica.\n\nDistribuição (Simulação):\nA: 5% | B: 5% | C: 85% | D: 3% | E: 2%",
    "tags": [
      "embriologia"
    ],
    "image": null
  },
  {
    "id": 5015,
    "unitId": 50,
    "text": "A histologia é considerada parte da Anatomia porque estuda:",
    "options": [
      "Sistemas orgânicos",
      "Regiões corporais",
      "Tecidos ao microscópio",
      "Alterações clínicas",
      "Funções celulares"
    ],
    "correctIndex": 2,
    "explanation": "Explicação: Histologia é a 'Anatomia Microscópica'. Estuda a organização dos tecidos e células que formam as estruturas macroscópicas.\n\nPor que as outras estão erradas:\n- A (Funções): Seria Citofisiologia.\n- C (Sistemas): Sistêmica.\n- D (Regiões): Regional.\n- E (Alterações): Patologia.\n\nDistribuição (Simulação):\nA: 10% | B: 80% | C: 5% | D: 3% | E: 2%",
    "tags": [
      "histologia"
    ],
    "image": null
  },
  {
    "id": 5016,
    "unitId": 50,
    "text": "Qual ramo da Anatomia é mais aplicado diretamente à prática médica?",
    "options": [
      "Sistêmica",
      "Microscópica",
      "Clínica",
      "Descritiva",
      "Comparada"
    ],
    "correctIndex": 2,
    "explanation": "Explicação: A Anatomia Clínica seleciona e enfatiza aspectos da estrutura corporal que são importantes para a prática da medicina, diagnóstico e tratamento.\n\nPor que as outras estão erradas:\n- A (Comparada): Interesse evolutivo/biológico.\n- B (Sistêmica): Base teórica, mas a prática exige a clinica/topográfica.\n- D (Microscópica): Diagnóstico laboratorial.\n- E (Descritiva): Estudo puro da forma.\n\nDistribuição (Simulação):\nA: 2% | B: 15% | C: 75% | D: 5% | E: 3%",
    "tags": [
      "anatomia-clinica"
    ],
    "image": null
  },
  {
    "id": 5017,
    "unitId": 50,
    "text": "O estudo da forma e estrutura visível a olho nu pertence à:",
    "options": [
      "Histologia",
      "Anatomia macroscópica",
      "Embriologia",
      "Anatomia microscópica",
      "Fisiologia"
    ],
    "correctIndex": 1,
    "explanation": "Explicação: Macroscópica (Macro = grande) refere-se ao estudo de estruturas que podem ser vistas sem auxílio de microscópio.\n\nPor que as outras estão erradas:\n- A, C (Micro/Histo): Exigem microscópio.\n- D (Embriologia): Muitas fases são microscópicas.\n- E (Fisiologia): Estuda função.\n\nDistribuição (Simulação):\nA: 5% | B: 85% | C: 5% | D: 2% | E: 3%",
    "tags": [
      "anatomia-macroscopica"
    ],
    "image": null
  },
  {
    "id": 5018,
    "unitId": 50,
    "text": "A anatomia comparada envolve:",
    "options": [
      "Imagens diagnósticas",
      "Estudo clínico",
      "Estudo regional",
      "Comparação entre espécies",
      "Alterações patológicas"
    ],
    "correctIndex": 3,
    "explanation": "Explicação: Anatomia Comparada analisa semelhanças e diferenças estruturais entre diferentes espécies animais, fornecendo insights sobre a evolução e biologia.\n\nPor que as outras estão erradas:\n- A (Clínica): Humanos (geralmente).\n- B (Regional): Topográfica.\n- D (Patológicas): Patologia.\n- E (Imagens): Radiologia.\n\nDistribuição (Simulação):\nA: 2% | B: 3% | C: 90% | D: 3% | E: 2%",
    "tags": [
      "anatomia-comparada"
    ],
    "image": null
  },
  {
    "id": 5019,
    "unitId": 50,
    "text": "A anatomia de superfície é especialmente útil para:",
    "options": [
      "Procedimentos cirúrgicos profundos",
      "Diagnóstico por imagem",
      "Estudo embrionário",
      "Análise celular",
      "Inspeção e palpação"
    ],
    "correctIndex": 4,
    "explanation": "Explicação: A anatomia de superfície permite identificar estruturas internas através de marcos visíveis e palpáveis na pele, sendo a base do Exame Físico (semiologia).\n\nPor que as outras estão erradas:\n- A (Imagem): Exames complementares.\n- B (Profundos): Exige topográfica/cirúrgica.\n- D, E: Não acessíveis por superfície.\n\nDistribuição (Simulação):\nA: 10% | B: 5% | C: 80% | D: 2% | E: 3%",
    "tags": [
      "anatomia-superficie"
    ],
    "image": null
  },
  {
    "id": 5020,
    "unitId": 50,
    "text": "O principal objetivo do estudo da Anatomia no curso de Medicina é:",
    "options": [
      "Compreender a estrutura para aplicação clínica",
      "Analisar funções bioquímicas",
      "Decorar nomes",
      "Estudar doenças",
      "Classificar tecidos"
    ],
    "correctIndex": 0,
    "explanation": "Explicação: O fim último da Anatomia na medicina não é a memorização (A), mas fornecer a base estrutural para compreender o funcionamento (Fisiologia), a doença (Patologia) e permitir a intervenção (Clínica/Cirurgia).\n\nPor que as outras estão erradas:\n- A: Erro comum de estudantes.\n- B: Foco da Patologia.\n- D: Foco da Bioquímica.\n- E: Foco da Histologia.\n\nDistribuição (Simulação):\nA: 25% | B: 5% | C: 65% | D: 2% | E: 3%",
    "tags": [
      "ensino-anatomia"
    ],
    "image": null
  },
  {
    "id": 5201,
    "unitId": 52,
    "text": "O rádio está ___ em relação à ulna, considerando a posição anatômica.",
    "options": [
      "Lateral",
      "Medial",
      "Profundo",
      "Proximal",
      "Distal"
    ],
    "correctIndex": 0,
    "explanation": "Explicação: Na posição anatômica (palmas para frente), o rádio é o osso lateral do antebraço e a ulna é o osso medial. Portanto, o rádio situa-se lateralmente à ulna.\n\nPor que as outras estão erradas:\n- A (Medial): Seria a ulna em relação ao rádio.\n- C/D (Proximal/Distal): Ambos ocupam a mesma extensão longitudinal.\n- E (Profundo): Ambos são ossos profundos, mas a relação lateral é a definidora de posição relativa.",
    "tags": [
      "anatomia-posicao",
      "termos-direcionais"
    ],
    "image": null
  },
  {
    "id": 5202,
    "unitId": 52,
    "text": "O termo anatômico que indica uma estrutura mais próxima da raiz do membro é:",
    "options": [
      "Profundo",
      "Distal",
      "Proximal",
      "Lateral",
      "Superficial"
    ],
    "correctIndex": 2,
    "explanation": "Explicação: Proximal refere-se a estar mais próximo da origem ou raiz de um membro (ou estrutura). Por exemplo, o ombro é proximal ao cotovelo.\n\nPor que as outras estão erradas:\n- A (Distal): Mais afastado da raiz.\n- B/C (Superficial/Profundo): Relação com a profundidade da pele.\n- E (Lateral): Relação com o plano mediano.",
    "tags": [
      "termos-direcionais"
    ],
    "image": null
  },
  {
    "id": 5203,
    "unitId": 52,
    "text": "Na imagem do tórax, o coração encontra-se ___ em relação aos pulmões.",
    "options": [
      "Superior",
      "Distal",
      "Superficial",
      "Medial",
      "Lateral"
    ],
    "correctIndex": 3,
    "explanation": "Explicação: O coração está localizado no mediastino, que é a região central do tórax, entre os dois pulmões. Portanto, é medial aos pulmões.\n\nPor que as outras estão erradas:\n- A (Lateral): Os pulmões são laterais ao coração.\n- B (Superior): Estão no mesmo nível torácico geral.\n- D (Distal): Termo usado para membros.\n- E (Superficial): O coração é profundo à caixa torácica.",
    "tags": [
      "anatomia-regional",
      "termos-direcionais"
    ],
    "image": null
  },
  {
    "id": 5204,
    "unitId": 52,
    "text": "Qual termo indica uma estrutura localizada mais distante da superfície corporal?",
    "options": [
      "Superficial",
      "Proximal",
      "Distal",
      "Medial",
      "Profundo"
    ],
    "correctIndex": 4,
    "explanation": "Explicação: Profundo refere-se a estruturas mais distantes da superfície do corpo (pele). Ex: Os músculos são profundos em relação à pele.\n\nPor que as outras estão erradas:\n- A (Superficial): O oposto, próximo à pele.\n- B/C (Proximal/Distal): Termos de membros (distância da raiz).\n- E (Medial): Relação com a linha média.",
    "tags": [
      "termos-direcionais"
    ],
    "image": null
  },
  {
    "id": 5205,
    "unitId": 52,
    "text": "Na imagem do membro inferior, o joelho é considerado ___ em relação ao quadril.",
    "options": [
      "Superficial",
      "Medial",
      "Distal",
      "Lateral",
      "Proximal"
    ],
    "correctIndex": 2,
    "explanation": "Explicação: Em um membro, distal significa 'mais afastado da raiz do membro'. O joelho está mais longe do tronco (raiz) do que o quadril, logo é distal ao quadril.\n\nPor que as outras estão erradas:\n- A (Proximal): O quadril é proximal ao joelho.\n- B/E: Não descrevem a relação longitudinal principal.\n- D (Superficial): Ambos são articulações profundas.",
    "tags": [
      "anatomia-membros",
      "termos-direcionais"
    ],
    "image": null
  },
  {
    "id": 5206,
    "unitId": 52,
    "text": "O termo “medial” refere-se a uma estrutura:",
    "options": [
      "Próxima ao plano mediano",
      "Distante da raiz do membro",
      "Próxima da pele",
      "Localizada inferiormente",
      "Afastada do plano mediano"
    ],
    "correctIndex": 0,
    "explanation": "Explicação: Medial indica que a estrutura está mais próxima do plano mediano (linha média que divide o corpo em direita e esquerda).\n\nPor que as outras estão erradas:\n- A: Isso seria Lateral.\n- C: Isso seria Superficial.\n- D: Isso seria Distal.\n- E: Isso seria Inferior.",
    "tags": [
      "termos-direcionais",
      "conceitos-basicos"
    ],
    "image": null
  },
  {
    "id": 5207,
    "unitId": 52,
    "text": "A pele é considerada ___ em relação aos músculos.",
    "options": [
      "Profunda",
      "Distal",
      "Superficial",
      "Proximal",
      "Medial"
    ],
    "correctIndex": 2,
    "explanation": "Explicação: A pele é a camada mais externa do corpo, portanto é superficial em relação a qualquer estrutura subjacente, como os músculos.\n\nPor que as outras estão erradas:\n- A (Profundo): Os músculos são profundos à pele.\n- B, C, E: Não descrevem a relação de profundidade.",
    "tags": [
      "termos-gerais"
    ],
    "image": null
  },
  {
    "id": 5208,
    "unitId": 52,
    "text": "A imagem representa um movimento de afastamento do membro em relação ao plano mediano. Esse movimento é denominado:",
    "options": [
      "Extensão",
      "Abdução",
      "Flexão",
      "Adução",
      "Rotação"
    ],
    "correctIndex": 1,
    "explanation": "Explicação: Abdução (abrir) é o movimento de afastar um segmento do corpo do plano mediano. Lembre-se: Abdução = 'Ab'rir.\n\nPor que as outras estão erradas:\n- A (Adução): Aproximar da linha média.\n- B/C (Flexão/Extensão): Movimentos angulares (dobrar/esticar).\n- E (Rotação): Giro em torno de um eixo.",
    "tags": [
      "movimentos",
      "cinesiologia"
    ],
    "image": null
  },
  {
    "id": 5209,
    "unitId": 52,
    "text": "O termo “distal” indica uma estrutura:",
    "options": [
      "Mais próxima do plano mediano",
      "Mais profunda",
      "Mais superficial",
      "Mais distante da raiz do membro",
      "Mais próxima da raiz do membro"
    ],
    "correctIndex": 3,
    "explanation": "Explicação: Distal refere-se a estar mais distante da origem ou raiz de referência (geralmente a raiz do membro).\n\nPor que as outras estão erradas:\n- A: Isso é Proximal.\n- C: Isso é Medial.\n- D: Isso é Profundo.\n- E: Isso é Superficial.",
    "tags": [
      "termos-direcionais"
    ],
    "image": null
  },
  {
    "id": 5210,
    "unitId": 52,
    "text": "Na imagem do encéfalo, o cerebelo está ___ em relação ao cérebro.",
    "options": [
      "Superficial",
      "Superior",
      "Medial",
      "Anterior",
      "Posterior"
    ],
    "correctIndex": 4,
    "explanation": "Explicação: O cerebelo localiza-se na fossa craniana posterior, abaixo dos lobos occipitais do cérebro e dorsalmente (posterior) ao tronco encefálico.\n\nPor que as outras estão erradas:\n- A (Anterior): O tronco encefálico é anterior ao cerebelo.\n- B (Superior): O cérebro é superior ao cerebelo.\n- D/E: Não são as relações principais descritivas aqui.",
    "tags": [
      "neuroanatomia",
      "termos-direcionais"
    ],
    "image": null
  },
  {
    "id": 5211,
    "unitId": 52,
    "text": "O movimento que diminui o ângulo entre dois segmentos corporais é chamado de:",
    "options": [
      "Abdução",
      "Rotação",
      "Extensão",
      "Adução",
      "Flexão"
    ],
    "correctIndex": 4,
    "explanation": "Explicação: Flexão (dobrar) é o movimento que diminui o ângulo entre dois ossos ou partes do corpo.\n\nPor que as outras estão erradas:\n- A (Extensão): Aumenta o ângulo (esticar).\n- B/C (Abdução/Adução): Afastar/Aproximar lateralmente.\n- E (Rotação): Girar.",
    "tags": [
      "movimentos",
      "articulacoes"
    ],
    "image": null
  },
  {
    "id": 5212,
    "unitId": 52,
    "text": "A rotação medial do ombro ocorre quando o membro superior gira:",
    "options": [
      "Em direção à linha média",
      "Para trás",
      "Para fora do corpo",
      "Para cima",
      "Em direção à lateral"
    ],
    "correctIndex": 0,
    "explanation": "Explicação: Rotação medial (ou interna) traz a superfície anterior do membro em direção ao plano mediano do corpo.\n\nPor que as outras estão erradas:\n- A/D: Seria rotação lateral (externa).\n- B: Extensão.\n- E: Flexão ou Abdução.",
    "tags": [
      "movimentos",
      "ombro"
    ],
    "image": null
  },
  {
    "id": 5213,
    "unitId": 52,
    "text": "Na imagem do corpo humano, a cabeça está ___ em relação ao tórax.",
    "options": [
      "Superior",
      "Profunda",
      "Distal",
      "Posterior",
      "Inferior"
    ],
    "correctIndex": 0,
    "explanation": "Explicação: Em posição anatômica ereta, a cabeça está acima do tórax, logo é superior (ou cranial) a ele.\n\nPor que as outras estão erradas:\n- A (Inferior): O tórax é inferior à cabeça.\n- B (Posterior): Dorsal.\n- D (Distal): Termo de membros.\n- E (Profunda): Interna.",
    "tags": [
      "termos-direcionais",
      "anatomia-regional"
    ],
    "image": null
  },
  {
    "id": 5214,
    "unitId": 52,
    "text": "Qual termo indica uma estrutura localizada atrás?",
    "options": [
      "Superior",
      "Medial",
      "Distal",
      "Posterior",
      "Anterior"
    ],
    "correctIndex": 3,
    "explanation": "Explicação: Posterior (ou dorsal) indica localização na parte de trás do corpo ou estrutura.\n\nPor que as outras estão erradas:\n- A (Anterior): Frente (ventral).\n- C (Superior): Acima (cranial).\n- D (Medial): Meio.\n- E (Distal): Longe da raiz.",
    "tags": [
      "termos-direcionais"
    ],
    "image": null
  },
  {
    "id": 5215,
    "unitId": 52,
    "text": "O movimento ilustrado na imagem, no qual o antebraço se aproxima do braço, chama-se:",
    "options": [
      "Adução",
      "Extensão",
      "Flexão",
      "Supinação",
      "Abdução"
    ],
    "correctIndex": 2,
    "explanation": "Explicação: Aproximar o antebraço do braço diminui o ângulo do cotovelo, caracterizando uma flexão.\n\nPor que as outras estão erradas:\n- A (Extensão): Esticar, aumentar o ângulo.\n- B/D: Movimentos laterais (não ocorrem no cotovelo padrão).\n- E (Supinação): Rotação do antebraço (palma para cima).",
    "tags": [
      "movimentos",
      "cotovelo"
    ],
    "image": null
  },
  {
    "id": 5216,
    "unitId": 52,
    "text": "O termo “lateral” indica uma estrutura:",
    "options": [
      "Distante do plano mediano",
      "Próxima ao plano mediano",
      "Superior",
      "Próxima da raiz do membro",
      "Inferior"
    ],
    "correctIndex": 0,
    "explanation": "Explicação: Lateral indica que a estrutura está mais afastada da linha média (plano mediano) do corpo.\n\nPor que as outras estão erradas:\n- A: Seria Medial.\n- C: Seria Proximal.\n- D/E: Seriam Superior/Inferior.",
    "tags": [
      "termos-direcionais"
    ],
    "image": null
  },
  {
    "id": 5217,
    "unitId": 52,
    "text": "A imagem mostra o movimento de retorno do membro superior à posição anatômica após abdução. Esse movimento é:",
    "options": [
      "Adução",
      "Flexão",
      "Rotação",
      "Circundução",
      "Extensão"
    ],
    "correctIndex": 0,
    "explanation": "Explicação: O retorno do membro ao plano mediano (fechar) chama-se Adução (adicionar ao corpo).\n\nPor que as outras estão erradas:\n- A/B (Flexão/Extensão): Movimentos para frente/trás no ombro.\n- D (Rotação): Giro.\n- E (Circundução): Movimento circular cônico.",
    "tags": [
      "movimentos",
      "ombro"
    ],
    "image": null
  },
  {
    "id": 5218,
    "unitId": 52,
    "text": "A circundução é definida como:",
    "options": [
      "Movimento de rotação pura",
      "Movimento em um único plano",
      "Movimento apenas de afastamento",
      "Combinação de flexão, extensão, abdução e adução",
      "Movimento apenas de aproximação"
    ],
    "correctIndex": 3,
    "explanation": "Explicação: A circundução é um movimento complexo circular que combina sequencialmente flexão, abdução, extensão e adução (ou vice-versa), descrevendo um cone.\n\nPor que as outras estão erradas:\n- A/B: Circundução é multiplanar e não é apenas rotação.\n- D/E: São abdução/adução isoladas.",
    "tags": [
      "movimentos",
      "complexos"
    ],
    "image": null
  },
  {
    "id": 5219,
    "unitId": 52,
    "text": "O termo “superficial” refere-se a uma estrutura:",
    "options": [
      "Inferior",
      "Distante da pele",
      "Próxima à pele",
      "Próxima ao plano mediano",
      "Distal"
    ],
    "correctIndex": 2,
    "explanation": "Explicação: Superficial indica proximidade com a superfície externa do corpo (pele).\n\nPor que as outras estão erradas:\n- A (Distante): Seria Profundo.\n- C (Mediano): Medial.\n- D (Inferior): Caudal.\n- E (Distal): Longe da raiz.",
    "tags": [
      "termos-direcionais"
    ],
    "image": null
  },
  {
    "id": 5220,
    "unitId": 52,
    "text": "A imagem mostra a palma da mão voltada posteriormente. Esse movimento é chamado de:",
    "options": [
      "Pronação",
      "Supinação",
      "Flexão",
      "Extensão",
      "Adução"
    ],
    "correctIndex": 0,
    "explanation": "Explicação: Pronação é a rotação do rádio sobre a ulna que vira a palma da mão para trás (posteriormente). Supinação vira para frente (anteriormente - posição de pedir súplica).\n\nPor que as outras estão erradas:\n- A: Palma para frente.\n- C/D: Dobrar/Esticar punho.\n- E: Desvio lateral.",
    "tags": [
      "movimentos",
      "antebraço"
    ],
    "image": null
  },
  {
    "id": 1,
    "text": "A continuación se indican las presiones hidrostática y oncótica en un lecho microcirculatorio.\nPresión osmótica coloidal del plasma = 25 mmHg\nPresión hidrostática capilar = 25 mmHg\nPresión hidrostática venosa = 5 mmHg\nPresión arterial = 80 mmHg\nPresión hidrostática del líquido intersticial = −5 mmHg\nPresión osmótica coloidal intersticial = 10 mmHg\nCoeficiente de filtración capilar = 10 ml/min/mmHg\n¿Cuál es la velocidad del movimiento neto del líquido a través de la pared capilar?",
    "options": [
      "200 ml/min",
      "50 ml/min",
      "25 ml/min",
      "100 ml/min",
      "150 ml/min"
    ],
    "correctIndex": 4,
    "explanation": "Cálculo: (Pc + πif) - (Pif + πp) = (25 + 10) - (-5 + 25) = 35 - 20 = 15 mmHg. Fluxo = Kf * 15 = 150 ml/min.",
    "tags": [
      "high_yield",
      "math"
    ],
    "tip": "Identifique quais forças favorecem a saída de líquido e quais favorecem a entrada. Monte a equação.",
    "image": "img/microcirculation.svg"
  },
  {
    "id": 2,
    "text": "Una mujer sana de 60 años con antecedentes de 10 años de hipertensión se levanta desde una posición supina. ¿Qué conjunto de cambios cardiovasculares se producirá más probablemente como respuesta a levantarse?",
    "options": [
      "Simpática: ↑, Parasimpática: ↓, FC: ↓",
      "Simpática: ↑, Parasimpática: ↑, FC: ↑",
      "Simpática: ↑, Parasimpática: ↓, FC: ↑",
      "Simpática: ↑, Parasimpática: ↑, FC: ↓",
      "Simpática: ↓, Parasimpática: ↓, FC: ↓"
    ],
    "correctIndex": 2,
    "explanation": "Reflexo barorreceptor postural: Queda do retorno venoso -> Desinibição simpática (↑) e inibição parassimpática (↓) -> Aumento da Frequência Cardíaca.",
    "tags": [],
    "tip": "Pense no que acontece com a distribuição de sangue pela gravidade e qual reflexo é ativado para manter a PA.",
    "image": "img/baroreflex.svg"
  },
  {
    "id": 4,
    "text": "Una mujer de 60 años ha sufrido mareos durante los últimos 6 meses al levantarse de la cama... ¿Qué conjunto de cambios fisiológicos sería de esperar en respuesta al movimiento desde la posición supina a la erguida?",
    "options": [
      "Parasimpática: ↑, Renina: ↓, Simpática: ↑",
      "Parasimpática: ↑, Renina: ↑, Simpática: ↑",
      "Parasimpática: ↓, Renina: ↑, Simpática: ↑",
      "Parasimpática: ↑, Renina: ↓, Simpática: ↓"
    ],
    "correctIndex": 2,
    "explanation": "Hipotensão ortostática ativa o simpático e sistema Renina-Angiotensina. Parassimpático diminui.",
    "tags": [],
    "tip": "Quando a pressão cai ao levantar, quais sistemas compensatórios são ativados e quais são inibidos?",
    "image": "img/baroreflex.svg"
  },
  {
    "id": 20,
    "text": "Un estudiante de Medicina aísla la arteria carótida de un animal y estrecha parcialmente la arteria con un nudo alrededor del vaso. ¿Qué conjunto de cambios sería previsible como respuesta?",
    "options": [
      "Simpática: ↑, Flujo Renal: ↓, RPT: ↑",
      "Simpática: ↓, Flujo Renal: ↓, RPT: ↓",
      "Simpática: ↓, Flujo Renal: ↑, RPT: ↓",
      "Simpática: ↑, Flujo Renal: ↑, RPT: ↑"
    ],
    "correctIndex": 0,
    "explanation": "A constrição da carótida simula hipotensão no barorreceptor. Ocorre aumento maciço do tnus simpático, aumentando a RPT e constringindo a arteríola renal (reduzindo fluxo renal).",
    "tags": [
      "trap"
    ],
    "tip": "Pense em qual pressão o barorreceptor detectaria acima ou abaixo do ponto de constrição.",
    "image": "img/carotid_constriction.svg"
  },
  {
    "id": 24,
    "text": "Un hombre de 50 años... tiene hiperaldosteronismo primario. ¿Qué conjunto de hallazgos sería de esperar en este hombre?",
    "options": [
      "Vol. Extracel: ↑, Renina: ↑, K+: ↑",
      "Vol. Extracel: ↓, Renina: ↓, K+: ↓",
      "Vol. Extracel: ↑, Renina: ↓, K+: ↑",
      "Vol. Extracel: ↑, Renina: ↓, K+: ↓"
    ],
    "correctIndex": 3,
    "explanation": "Aldosterona retém Na+ e água (Aumenta Vol. Extracel) e excreta K+ (Hipocalemia). O aumento de volume e pressão inibe a Renina (feedback negativo).",
    "tags": [
      "high_yield"
    ],
    "tip": "Pense nas ações da aldosterona sobre os eletrólitos e como o volume resultante afeta o eixo RAA.",
    "image": null
  },
  {
    "id": 29,
    "text": "Suponiendo que los vasos A a D tienen la misma longitud, ¿cuál posee el flujo más elevado?",
    "options": [
      "B: ΔP=50, r=2 (V=5)",
      "D: ΔP=10, r=6 (V=1)",
      "A: ΔP=100, r=1 (V=10)",
      "C: ΔP=25, r=4 (V=2)"
    ],
    "correctIndex": 1,
    "explanation": "Lei de Poiseuille: Fluxo ~ ΔP * r^4. \nA: 100*1 = 100. \nB: 50*16 = 800. \nC: 25*256 = 6400. \nD: 10*1296 = 12960. O vaso D tem maior fluxo.",
    "tags": [
      "math",
      "high_yield"
    ],
    "tip": "Na Lei de Poiseuille, qual variável tem o maior impacto exponencial sobre o fluxo?",
    "image": "img/poiseuille.svg"
  },
  {
    "id": 40,
    "text": "Un catéter con balón... eleva la presión auricular en 5 mmHg. ¿En cuál de los siguientes valores sería de esperar un aumento como respuesta?",
    "options": [
      "Aldosterona",
      "Angiotensina II",
      "Actividad nerviosa simpática renal",
      "Péptido natriurético auricular"
    ],
    "correctIndex": 3,
    "explanation": "O estiramento atrial libera ANP (Peptídeo Natriurético Atrial), que promove perda de sódio e água para reduzir o volume.",
    "tags": [],
    "tip": "Quando as câmaras cardíacas são distendidas, qual hormônio é liberado em resposta ao estiramento?",
    "image": null
  },
  {
    "id": 42,
    "text": "¿Cuál de los siguientes resultados se obtiene con un aumento en la presión auricular?",
    "options": [
      "Dismunución ANP",
      "Aumento en la excreción de sodio",
      "Aumento Aldosterona",
      "Aumento Angiotensina II"
    ],
    "correctIndex": 1,
    "explanation": "Pressão atrial alta -> Libera ANP -> Aumenta excreção de sódio e água (Natriurese).",
    "tags": [],
    "tip": "A distensão atrial ativa mecanismos para reduzir o volume. Qual é o efeito renal esperado?",
    "image": null
  },
  {
    "id": 46,
    "text": "¿En cuál de los siguientes valores un aumento tiende a reducir la filtración capilar?",
    "options": [
      "Presión hidrostática venosa",
      "Presión osmótica coloidal intersticial",
      "Presión osmótica coloidal del plasma",
      "Presión hidrostática capilar"
    ],
    "correctIndex": 2,
    "explanation": "Aumentar a pressão oncótica do plasma (πp) puxa água de volta para o capilar, reduzindo a filtração.",
    "tags": [],
    "tip": "Na equação de Starling, qual força se opõe à saída de líquido do capilar?",
    "image": "img/microcirculation.svg"
  },
  {
    "id": 54,
    "text": "¿Qué conjunto de cambios sería previsible como respuesta a un aumento directo en la presión arterial en los riñones sin un sistema de retroalimentación tubuloglomerular intacto?",
    "options": [
      "FG: ↑, Excreción Na: ↓, Agua: ↓",
      "FG: ↓, Excreción Na: ↓, Agua: ↓",
      "FG: ↑, Excreción Na: ↑, Agua: ↑"
    ],
    "correctIndex": 2,
    "explanation": "Sem autorregulação (feedback tubuloglomerular), o aumento da PA transmite-se diretamente ao glomérulo: aumenta Filtração Glomerular (FG) e causa Diurese/Natriurese por Pressão.",
    "tags": [
      "trap"
    ],
    "tip": "Se o mecanismo protetor renal for removido, o que acontece quando a PA aumenta diretamente?",
    "image": null
  },
  {
    "id": 62,
    "text": "¿En cuál de las siguientes entidades es máxima la tendencia al flujo turbulento?",
    "options": [
      "Arteriolas",
      "Capilares",
      "Pequeñas arteriolas",
      "Aorta"
    ],
    "correctIndex": 3,
    "explanation": "Número de Reynolds (Re = v*d*ρ/η). A aorta tem o maior diâmetro e alta velocidade, resultando no maior número de Reynolds e maior propensão a turbulência.",
    "tags": [],
    "tip": "O Número de Reynolds depende de diâmetro e velocidade. Qual vaso combina os maiores valores de ambos?",
    "image": null
  },
  {
    "id": 69,
    "text": "¿Qué hecho se produce a menudo en una insuficiencia cardíaca descompensada?",
    "options": [
      "Pérdida de peso",
      "Aumento de pérdida renal de Na",
      "Disminución de presión de llenado sistémica",
      "Aumento de noradrenalina en nervios simpáticos cardíacos"
    ],
    "correctIndex": 3,
    "explanation": "Na IC descompensada, o débito cardíaco cai, ativando reflexos simpáticos massivos na tentativa de compensar. A noradrenalina cardíaca aumenta (embora os estoques possam se depletar a longo prazo). Também ocorre edema (ganho de peso) e retenção renal.",
    "tags": [],
    "tip": "Quando o débito cardíaco cai drasticamente, qual ramo do sistema nervoso autônomo é mais ativado?",
    "image": null
  },
  {
    "id": 89,
    "text": "¿Qué agente vasoactivo es normalmente el controlador más importante del flujo sanguíneo coronario?",
    "options": [
      "Dióxido de carbono",
      "Adenosina",
      "Bradicinina",
      "Prostaglandinas"
    ],
    "correctIndex": 1,
    "explanation": "Adenosina, formada pela quebra de ATP, é o principal vasodilatador metabólico coronariano.",
    "tags": [
      "high_yield"
    ],
    "tip": "O fluxo coronariano depende do metabolismo local. Qual substância é gerada diretamente pela quebra de ATP?",
    "image": null
  },
  {
    "id": 99,
    "text": "A un hombre de 60 años... tiene una angina causada por una isquemia miocárdica. ¿Qué tratamiento sería beneficioso para este hombre?",
    "options": [
      "Quelación",
      "Ejercicio isométrico",
      "Nitroglicerina",
      "Inhibidor ECA",
      "Estimulación beta"
    ],
    "correctIndex": 2,
    "explanation": "Nitroglicerina causa venodilatação (reduz pré-carga) e vasodilatação coronária, aliviando a angina. Estimulação beta pioraria o consumo de O2.",
    "tags": [
      "high_yield"
    ],
    "tip": "Pense em qual fármaco reduz a pré-carga E melhora a perfusão coronariana simultaneamente.",
    "image": null
  },
  {
    "id": 136,
    "text": "Un hombre... recibe la vacuna contra la gripe. Presenta palidez, taquicardia, presión arterial de 80/50... ¿Qué tratamiento recomienda para prevenir el shock?",
    "options": [
      "Infusión de sangre",
      "Activador del plasminógeno",
      "Fármaco simpaticomimético (Adrenalina)",
      "Solución electrolítica",
      "Antihistamínico"
    ],
    "correctIndex": 2,
    "explanation": "Trata-se de choque anafilático. O tratamento de escolha é Adrenalina (simpaticomimético) para vasoconstrição e broncodilatação imediatas. Anti-histamínicos são secundários.",
    "tags": [
      "high_yield"
    ],
    "tip": "Neste tipo de choque, o tratamento de primeira linha deve reverter vasodilatação e broncoespasmo rapidamente.",
    "image": null
  },
  {
    "id": 140,
    "text": "¿En qué tipo de shock suele aumentar el gasto cardíaco?",
    "options": [
      "Shock hemorrágico",
      "Shock anafiláctico",
      "Shock neurógeno",
      "Shock séptico"
    ],
    "correctIndex": 3,
    "explanation": "No choque séptico (fase hiperdinâmica), a vasodilatação massiva e o aumento do metabolismo aumentam o retorno venoso e o débito cardíaco, apesar da hipotensão.",
    "tags": [
      "high_yield",
      "trap"
    ],
    "tip": "Nem todo choque cursa com baixo débito. Alguns tipos possuem uma fase com DC paradoxalmente alto.",
    "image": null
  },
  {
    "id": 9101,
    "unitId": 504,
    "text": "Um estudo randomizado comparou o uso de corticóide oral versus placebo em pacientes com asma moderada. O resultado mostrou redução no número de hospitalizações com p = 0,003. Um médico interpretou este resultado dizendo: 'Com 99,7% de confiança, o corticóide é efetivo.' Esta interpretação está correta?",
    "options": [
      "Não. O p-valor é uma medida de tamanho de efeito, não de confiança",
      "Não pode ser interpretado sem conhecer o tamanho amostral do estudo",
      "Sim, está correta, pois a redução em hospitalizações é clinicamente relevante",
      "Não. O p-valor é 0,3% de probabilidade de observar esses dados (ou mais extremos) se a hipótese nula fosse verdadeira",
      "Sim, está correta. Um p-valor de 0,003 garante 99,7% de confiança no resultado"
    ],
    "correctIndex": 3,
    "explanation": "A confusão é clássica: p-valor NÃO é 'grau de confiança na conclusão'. Definição correta: p = P(dados tão extremos ou mais | H₀ verdadeira). Se p=0,003, significa que, SE o corticóide não funciona, há apenas 0,3% de chance de observar essa redução (ou maior). Isso TORNA a hipótese de 'não-efeito' improvável, mas não garante 99,7% de efetividade. Alternativa A é a confusão mais frequente em pesquisa clínica.",
    "tags": [
      "p-valor",
      "interpretação",
      "significância"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": null
  },
  {
    "id": 9102,
    "unitId": 504,
    "text": "Um estudo mediu o tempo de cicatrização (em dias) de feridas cirúrgicas em 200 pacientes pós-operatórios. A média foi 14 dias com IC95% [12 a 16 dias]. Um cirurgião afirma: 'Portanto, 95% dos meus pacientes apresentarão cicatrização entre 12 e 16 dias.' Critique esta interpretação.",
    "options": [
      "Incorreta porque o intervalo deveria ser bilateral para ser válido neste contexto",
      "Está correta. O intervalo de confiança descreve a distribuição individual dos dados",
      "Incorreta. O IC95% descreve a variabilidade da MÉDIA amostral, não dos valores individuais dos pacientes",
      "A afirmação está correta apenas para a população, não para a amostra",
      "Está correta se o desvio padrão for menor que 2 dias"
    ],
    "correctIndex": 2,
    "explanation": "Erro comum: IC reflete INCERTEZA SOBRE O PARÂMETRO (μ), não sobre dados individuais. Se 95% dos pacientes tiverem cicatrização entre 12-16 dias, isso seria descrito pelo INTERVALO DE PREDIÇÃO, não IC. O IC [12-16] significa que, em repetidas amostras, ~95% dos ICs construídos conteriam a verdadeira média. Alternativa A e C erram nesta confusão fundamental, confundindo variabilidade amostral com variabilidade individual.",
    "tags": [
      "intervalo-confiança",
      "interpretação",
      "variabilidade"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": null
  },
  {
    "id": 9103,
    "unitId": 504,
    "text": "Um ensaio clínico com 5.000 diabéticos compara dois anti-hipertensivos. O novo medicamento reduziu a pressão arterial sistólica média em 1,5 mmHg comparado ao padrão (p = 0,001). Todos os critérios de significância estatística foram atendidos. Como você avalia este achado clinicamente?",
    "options": [
      "O resultado é inválido porque a diferença é muito pequena para ser real",
      "O grande tamanho amostral (n=5000) garante que a diferença é clinicamente importante",
      "A redução de 1,5 mmHg é estatisticamente significativa mas clinicamente irrelevante para mudança de prática",
      "O novo medicamento é superior e deve ser recomendado amplamente",
      "Com p=0,001, há apenas 0,1% de chance de estar errado sobre a superioridade"
    ],
    "correctIndex": 2,
    "explanation": "Essa questão ilustra um achado moderno frequente: amostras GRANDES podem gerar significância estatística mesmo para diferenças clinicamente IRRELEVANTES. Uma queda de 1,5 mmHg em PA, embora estatisticamente significativa (p=0,001), NÃO justifica troca de tratamento na prática clínica. O tamanho do efeito (effect size) é o que importa clinicamente, não apenas o p-valor. Alternativas A, D, E confundem significância estatística com importância clínica.",
    "tags": [
      "significância",
      "relevância-clínica",
      "effect-size"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": null
  },
  {
    "id": 9104,
    "unitId": 504,
    "text": "Um estudo de desfecho observacional avaliou 400 pacientes hipertensos quanto ao controle de pressão arterial e eventos cardiovasculares. Qual é a probabilidade de um paciente ter sofrido infarto dado que sua pressão foi CONTROLADA? (Observação: PA Controlada + Sem Infarto: 280 pacientes; PA Controlada + Com Infarto: 20; PA Não Controlada + Sem Infarto: 80; PA Não Controlada + Com Infarto: 20)",
    "options": [
      "20/100 = 20%",
      "40/360 = 11,1%",
      "20/300 = 6,7%",
      "20/40 = 50%",
      "40/400 = 10%"
    ],
    "correctIndex": 2,
    "explanation": "Esta é uma PROBABILIDADE CONDICIONAL: 'Dado que PA foi controlada, qual a chance de infarto?' Você restringe o universo aos pacientes com PA controlada (n=280+20=300). Desses, 20 tiveram infarto → 20/300 = 6,7%. Resposta A usa a população total (erro conceitual). B inverte a condição (PA não controlada). D compara infartos entre si. E usa controles totais mas denominador errado.",
    "tags": [
      "tabela",
      "probabilidade-condicional",
      "leitura-dados"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": null
  },
  {
    "id": 9105,
    "unitId": 504,
    "text": "Um estudo transversal com 3.000 adolescentes observou forte associação entre uso de redes sociais (>3 horas/dia) e sintomas de ansiedade/depressão (p<0,001, r=0,42). A mídia reporta: 'Uso excessivo de redes sociais CAUSA transtornos de ansiedade em adolescentes.' Qual é o problema com esta interpretação?",
    "options": [
      "O p-valor é muito significativo para ser uma simples associação",
      "Estudos transversais mostram associação, não causalidade. Não é possível determinar direção de causa-efeito",
      "Não há problema; uma associação significativa é suficiente para afirmar causação",
      "O tamanho amostral é pequeno para fazer conclusões sobre causalidade",
      "A correlação de 0,42 é muito fraca para ter relevância clínica"
    ],
    "correctIndex": 1,
    "explanation": "Erro epidemiológico fundamental: ASSOCIAÇÃO ≠ CAUSAÇÃO. Um estudo transversal não estabelece TEMPORALIDADE (qual vem primeiro?). Possíveis explicações alternativas: adolescentes COM ansiedade já buscam redes sociais para coping; ou ambos são causados por terceira variável (isolamento social, predisposição genética). Alternativa E erra gravemente. D confunde força da correlação com tamanho clinicamente relevante. A ignora que o problema é DESENHO, não n.",
    "tags": [
      "desenho-estudo",
      "causalidade",
      "associação"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": null
  },
  {
    "id": 9106,
    "unitId": 504,
    "text": "Um hospital investigou a taxa de infecção de sítio cirúrgico (ISC) em 800 cirurgias de diferentes protocolos de profilaxia. A imagem mostra os resultados. Qual protocolo é mais efetivo e qual é a MAGNITUDE DE REDUÇÃO em relação ao grupo controle (sem antibiótico)?",
    "options": [
      "Antibiótico + Antisséptico reduz em 24% absoluto; é o protocolo mais efetivo",
      "Antibiótico <1h antes tem a mesma efetividade que Antibiótico 12h antes",
      "Antibiótico 12h antes reduz em 20% absoluto; é o protocolo ideal",
      "Sem Antibiótico tem 28% ISC porque a amostra neste grupo foi maior",
      "A diferença entre os protocolos é desprezível pois todas as barras têm IC que se sobrepõem"
    ],
    "correctIndex": 0,
    "explanation": "Leitura direta de gráfico: Sem Antibiótico = 28% (controle). Antibiótico + Antisséptico = 4%. Redução absoluta = 28% - 4% = 24%. Este é o MAIOR benefício. Resposta A (redução de 20%) confunde com Antibiótico 12h (28-8=20%). C está correta numericamente (ambos ~6-8%), mas não é a MELHOR prática. D ignora que diferenças absolutas podem ser significativas. E não há informação sobre tamanhos de grupos.",
    "tags": [
      "gráfico-barras",
      "comparação-grupos",
      "magnitude-efeito"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": "img/unit_504_q6_bars_comparison.png"
  },
  {
    "id": 9107,
    "unitId": 504,
    "text": "Um estudo acompanhou a taxa de infecção respiratória em dois grupos de crianças vacinadas com diferentes vacinas. A imagem mostra a evolução ao longo de 12 meses. Qual conclusão é mais apropriada sobre a DURABILIDADE DE PROTEÇÃO?",
    "options": [
      "Nenhuma conclusão pode ser feita sem conhecer os p-valores mensais de cada timepoint",
      "Vacina A oferece melhor proteção sustentada; reduz mais a taxa de infecção e mantém níveis menores",
      "Vacina B é superior porque sua linha é mais reta, indicando estabilidade",
      "As vacinas não diferem significativamente porque os intervalos de confiança se sobrepõem em vários meses",
      "Ambas vacinas têm proteção equivalente porque as linhas começam com taxas similares"
    ],
    "correctIndex": 1,
    "explanation": "Leitura de gráfico de LINHA (série temporal): Ambas começam similares (~28-30%), correto. MAS Vacina A cai mais (até ~5%) enquanto Vacina B fica em ~8%. Ao final de 12 meses, Vacina A tem proteção SUPERIOR (menor taxa de infecção). Resposta A ignora a evolução temporal. C confunde estabilidade com efetividade. D e E ignoram que diferenças progressivas podem indicar proteção diferencial mesmo com ICs que se sobrepõem ocasionalmente.",
    "tags": [
      "gráfico-linha",
      "série-temporal",
      "tendência"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": "img/unit_504_q7_line_trend.png"
  },
  {
    "id": 9108,
    "unitId": 504,
    "text": "Um estudo hematológico comparou hemoglobina em 3 grupos de pacientes (A: Normal, B: Anemia Moderada, C: Anemia Grave). A imagem mostra os resultados em boxplot. O que o padrão de outliers no Grupo C sugere?",
    "options": [
      "Os outliers indicam erro de medição no laboratório",
      "O Grupo C tem dados inválidos que deveriam ser removidos antes da análise",
      "Os outliers podem representar casos de anemia mais severa dentro do grupo (variabilidade legítima)",
      "Outliers ocorrem apenas em amostras pequenas; isso sugere n insuficiente no Grupo C",
      "A presença de outliers invalida qualquer conclusão sobre hemoglobina neste grupo"
    ],
    "correctIndex": 2,
    "explanation": "Outliers NÃO são automaticamente 'erros'. No contexto clínico, o Grupo C (Anemia Grave) com hemoglobina muito baixa (3-4 g/dL) representa casos EXTREMAMENTE GRAVES - legítimo biologicamente. Não devem ser removidos sem investigação. Resposta A e B assumem erro sem evidência. D é excessivamente cautelosa. E confunde outliers com tamanho amostral (n). A interpretação correta reconhece que outliers refletem VARIABILIDADE REAL da população.",
    "tags": [
      "boxplot",
      "outliers",
      "distribuição"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": "img/unit_504_q8_boxplot.png"
  },
  {
    "id": 9109,
    "unitId": 504,
    "text": "Um pesquisador apresenta uma tabela resumo de um estudo comparativo. A tabela mostra 3 variáveis com diferença entre grupos, intervalos de confiança e p-valores. Qual variável mostra MELHOR EVIDÊNCIA de diferença real entre os grupos? (Observação: tabela inclui Variável 1: p=0,02; Variável 2: p=0,45; Variável 3: p<0,001)",
    "options": [
      "Variável 1, porque seu IC é o mais estreito",
      "Variável 3, porque p<0,001 é altamente significativo e o IC não inclui zero",
      "Nenhuma, pois os ICs de todas as variáveis se sobrepõem com a região de efeito zero",
      "Variável 1, porque p=0,02 é significativo e a diferença é clinicamente importante",
      "Variável 2, porque p=0,45 indica que não há significância, mas pode haver efeito pequeno"
    ],
    "correctIndex": 1,
    "explanation": "Análise combinada de p-valor e IC: Variável 1 (p=0,02) tem IC [2-14] que NÃO inclui zero, bom sinal. Variável 2 (p=0,45) tem IC [-1-2] que INCLUI zero → falta diferença real. Variável 3 (p<0,001) tem IC [3-9] que NÃO inclui zero E tem p altamente significativo → MELHOR evidência. Resposta E erra ao dizer que overlap com zero invalida; apenas Variável 2 tem IC que toca/inclui zero (sua medida de nulidade).",
    "tags": [
      "tabela",
      "p-valor",
      "intervalo-confiança"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": "img/unit_504_q9_table_results.png"
  },
  {
    "id": 9110,
    "unitId": 504,
    "text": "Um hospital investigou a relação entre dias de internação e custo do tratamento em 50 pacientes. A imagem mostra o gráfico de dispersão com correlação r=0,84 (p<0,001). Um gestor conclui: 'Cada dia a mais de internação custa exatamente $300 ao hospital.' Esta conclusão é apropriada?",
    "options": [
      "Sim, porque r²=0,71 (≈0,84²) indica que 71% do custo é explicado por tempo de internação",
      "Não, porque há demasiada dispersão dos pontos para fazer estimativas",
      "Sim, a forte correlação (r=0,84) permite calcular o custo exato por dia",
      "Não. Correlação mede força de associação, não permite predizer valores exatos. A regressão forneceria a equação específica",
      "A correlação é tão forte que nenhuma variável confundidora interfere no resultado"
    ],
    "correctIndex": 3,
    "explanation": "Confusão clássica: CORRELAÇÃO ≠ REGRESSÃO LINEAR. Correlação r=0,84 diz 'forte relação linear', mas NÃO fornece a equação específica (y = a + bx). Para calcular 'custo exato de $300/dia', precisa-se da ANÁLISE DE REGRESSÃO. Alternativa C está tecnicamente correta (r²=0,71 significa 71% da variância em custo é explicada por internação) mas não responde a pergunta sobre 'custo exato de $300/dia'. D ignora que correlação forte persiste mesmo com dispersão.",
    "tags": [
      "scatter-plot",
      "correlação",
      "regressão"
    ],
    "source": "Questão elaborada pelo MedPenguim, com base em padrões avaliativos de grandes faculdades.",
    "image": "img/unit_504_q10_scatter.png"
  },
  {
    "id": 5001,
    "unitId": 50,
    "text": "A imagem representa qual ramo da Anatomia?",
    "options": [
      "Embriologia",
      "Anatomia patológica",
      "Anatomia topográfica",
      "Anatomia clínica",
      "Anatomia sistêmica"
    ],
    "correctIndex": 4,
    "explanation": "Explicação: A Anatomia Sistêmica estuda o corpo dividido por sistemas funcionais (esquelético, muscular, nervoso, etc.), separando-os para análise.\n\nPor que as outras estão erradas:\n- A (Patológica): Estuda doenças e alterações anormais.\n- B (Clínica): Foca na aplicação prática (exame físico/cirurgia).\n- D (Topográfica): Estuda por regiões (ex: cabeça, pescoço) com todas as estruturas juntas.\n- E (Embriologia): Estuda o desenvolvimento pré-natal.\n\nDistribuição (Simulação):\nA: 5% | B: 10% | C: 75% | D: 8% | E: 2%",
    "tags": [
      "anatomia-sistemica",
      "introducao"
    ],
    "image": "img/anatomy_systems.jpg"
  },
  {
    "id": 5002,
    "unitId": 50,
    "text": "A imagem demonstra o estudo anatômico baseado em:",
    "options": [
      "Função dos órgãos",
      "Alterações patológicas",
      "Anatomia comparada",
      "Desenvolvimento embrionário",
      "Relação entre estruturas em uma região"
    ],
    "correctIndex": 4,
    "explanation": "Explicação: A imagem do pescoço com músculos, vasos e nervos sobrepostos em camadas exemplifica a Anatomia Topográfica (ou Regional), que estuda a organização espacial e relações entre estruturas em uma região específica.\n\nPor que as outras estão erradas:\n- A (Função): Seria Fisiologia.\n- C (Patológicas): Seria Anatomia Patológica.\n- D (Desenvolvimento): Seria Embriologia.\n- E (Comparada): Comparação entre espécies.\n\nDistribuição (Simulação):\nA: 10% | B: 65% | C: 5% | D: 5% | E: 15%",
    "tags": [
      "anatomia-regional",
      "topografia"
    ],
    "image": "img/anatomy_neck.jpg"
  },
  {
    "id": 5003,
    "unitId": 50,
    "text": " O tipo de anatomia ilustrado é mais utilizado para:",
    "options": [
      "Classificação dos tecidos",
      "Análise microscópica",
      "Procedimentos cirúrgicos",
      "Estudo celular",
      "Diagnóstico histológico"
    ],
    "correctIndex": 2,
    "explanation": "Explicação: A Anatomia Clínica e Topográfica são a base dos procedimentos cirúrgicos, permitindo ao cirurgião navegar com segurança pelas estruturas (nervos, vasos) em um campo operatório restrito.\n\nPor que as outras estão erradas:\n- A, C, D, E: Referem-se a estudos microscópicos (Histologia/Citologia), não macroscópicos cirúrgicos.\n\nDistribuição (Simulação):\nA: 5% | B: 80% | C: 5% | D: 5% | E: 5%",
    "tags": [
      "anatomia-clinica",
      "cirurgia"
    ],
    "image": "img/unit50_q3_cirurgia.jpg"
  },
  {
    "id": 5004,
    "unitId": 50,
    "text": " A imagem está relacionada a qual ramo da Anatomia?",
    "options": [
      "Anatomia radiológica",
      "Embriologia",
      "Anatomia patológica",
      "Anatomia sistêmica",
      "Anatomia de superfície"
    ],
    "correctIndex": 0,
    "explanation": "Explicação: A Anatomia Radiológica utiliza técnicas de imagem (Raio-X, TC, RM) para visualizar estruturas internas sem necessidade de dissecção ou cirurgia invasiva.\n\nPor que as outras estão erradas:\n- A (Superfície): Estuda o que é visível/palpável externamente.\n- B (Sistêmica): Focaria em sistemas isolados.\n- D (Patológica): Focaria em doenças.\n- E (Embriologia): Focaria em desenvolvimento.\n\nDistribuição (Simulação):\nA: 5% | B: 10% | C: 80% | D: 3% | E: 2%",
    "tags": [
      "anatomia-radiologica",
      "imagem"
    ],
    "image": "img/unit50_q4_raiox.jpg"
  },
  {
    "id": 5005,
    "unitId": 50,
    "text": " A imagem demonstra um método de estudo anatômico baseado em:",
    "options": [
      "Palpação e inspeção externa",
      "Observação microscópica",
      "Anatomia comparada",
      "Dissecção regional",
      "Estudo funcional"
    ],
    "correctIndex": 0,
    "explanation": "Explicação: A Anatomia de Superfície baseia-se na inspeção visual e palpação de estruturas anatômicas (ossos, tendões, vasos) através da pele intacta, fundamental para o exame físico.\n\nPor que as outras estão erradas:\n- A (Microscópica): Exige microscópio.\n- C (Dissecção): Exige corte/abertura.\n- D (Funcional): Focaria no movimento/fisiologia.\n- E (Comparada): Compararia espécies.\n\nDistribuição (Simulação):\nA: 2% | B: 85% | C: 8% | D: 3% | E: 2%",
    "tags": [
      "anatomia-superficie",
      "semiologia"
    ],
    "image": "img/unit50_q5_superficie.jpg"
  },
  {
    "id": 5006,
    "unitId": 50,
    "text": " O tipo de anatomia representado na imagem tem como principal objetivo:",
    "options": [
      "Compreender o desenvolvimento embrionário",
      "Classificar sistemas orgânicos",
      "Estudar tecidos ao microscópio",
      "Identificar estruturas em exames de imagem",
      "Correlacionar estrutura e função"
    ],
    "correctIndex": 3,
    "explanation": "Explicação: A Anatomia Seccional/Radiológica (como na TC axial) permite identificar a localização precisa, relações e integridade de órgãos internos através de cortes virtuais.\n\nPor que as outras estão erradas:\n- A (Tecidos): Seria Histologia.\n- B (Função): Seria Fisiologia.\n- D (Embriologia): Seria desenvolvimento.\n- E (Sistemas): Seria Sistêmica.\n\nDistribuição (Simulação):\nA: 5% | B: 15% | C: 70% | D: 5% | E: 5%",
    "tags": [
      "anatomia-radiologica",
      "seccional"
    ],
    "image": "img/unit50_q6_tomografia.jpg"
  },
  {
    "id": 5007,
    "unitId": 50,
    "text": " A abordagem anatômica ilustrada é mais adequada para:",
    "options": [
      "Pesquisa histológica",
      "Ensino básico",
      "Estudo comparativo animal",
      "Planejamento clínico",
      "Classificação celular"
    ],
    "correctIndex": 3,
    "explanation": "Explicação: A análise de imagens (RM, TC) é crucial para o planejamento clínico e cirúrgico, permitindo decisões terapêuticas baseadas na anatomia específica do paciente.\n\nPor que as outras estão erradas:\n- B, E: Referem-se a nível celular/tecido.\n- D: Referem-se a animais.\n- A: Embora usada no ensino, seu fim principal é clínico.\n\nDistribuição (Simulação):\nA: 20% | B: 2% | C: 75% | D: 1% | E: 2%",
    "tags": [
      "anatomia-clinica",
      "imagem"
    ],
    "image": "img/unit50_q7_ressonancia.jpg"
  },
  {
    "id": 5008,
    "unitId": 50,
    "text": " A imagem está associada a qual subdivisão da Anatomia?",
    "options": [
      "Anatomia microscópica",
      "Anatomia clínica",
      "Anatomia do desenvolvimento",
      "Anatomia sistêmica",
      "Anatomia patológica"
    ],
    "correctIndex": 2,
    "explanation": "Explicação: A Anatomia do Desenvolvimento (Embriologia) estuda as mudanças estruturais desde a fertilização até a formação completa do organismo (fases embrionária e fetal).\n\nPor que as outras estão erradas:\n- A (Patológica): Estuda doenças.\n- B (Clínica): Aplicação prática.\n- C (Sistêmica): Sistemas adultos.\n- E (Microscópica): Tecidos/células.\n\nDistribuição (Simulação):\nA: 2% | B: 5% | C: 3% | D: 88% | E: 2%",
    "tags": [
      "embriologia",
      "desenvolvimento"
    ],
    "image": "img/unit50_q8_embriao.jpg"
  }
];

