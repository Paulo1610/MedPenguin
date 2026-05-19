// Flashcards Database
// Structure: Semester -> Subject -> Unit -> Flashcards

const FLASHCARDS_DB = {
    "s1": { "name": "1º Semestre", "subjects": {} },
    "s2": {
        "name": "2º Semestre",
        "subjects": {
            "anatomy2": {
                "title": { "pt": "Anatomia II", "es": "Anatomía II" },
                "icon": "💀",
                "audio_units": [],
                "text_units": [],
                "units": [
                    {
                        "id": "u_anatomy2_general",
                        "title": "Geral / Revisão",
                        "flashcards": [
                            { id: 1, question: { pt: "Qual é a principal função do átrio esquerdo?", es: "¿Cuál es la función principal de la aurícula izquierda?" }, answer: { pt: "Receber sangue oxigenado vindo dos pulmões pelas veias pulmonares e bombear para o ventrículo esquerdo.", es: "Recibir sangre oxigenada procedente de los pulmones por las venas pulmonares y bombearla al ventrículo izquierdo." } },
                            { id: 2, question: { pt: "Onde fica o nó sinoatrial no coração?", es: "¿Dónde se ubica el nódulo sinoauricular en el corazón?" }, answer: { pt: "Na parede do átrio direito, próximo à desembocadura da veia cava superior.", es: "En la pared de la aurícula derecha, cerca de la desembocadura de la vena cava superior." } },
                            { id: 3, question: { pt: "O que é o seio coronário?", es: "¿Qué es el seno coronario?" }, answer: { pt: "Uma veia que coleta sangue desoxigenado do miocárdio e desemboca no átrio direito.", es: "Una vena que recoge la sangre desoxigenada del miocardio y desemboca en la aurícula derecha." } },
                            { id: 4, question: { pt: "Qual vaso sai do ventrículo esquerdo?", es: "¿Qué vaso sale del ventrículo izquierdo?" }, answer: { pt: "A aorta ascendente.", es: "La aorta ascendente." } },
                            { id: 5, question: { pt: "Qual artéria irriga a parede anterior do ventrículo esquerdo?", es: "¿Qué arteria irriga la pared anterior del ventrículo izquierdo?" }, answer: { pt: "A artéria interventricular anterior (descendente anterior).", es: "La arteria interventricular anterior (descendente anterior)." } },
                            { id: 6, question: { pt: "Qual é a função da valva mitral?", es: "¿Cuál es la función de la válvula mitral?" }, answer: { pt: "Impedir o refluxo de sangue do ventrículo esquerdo para o átrio esquerdo durante a contração ventricular.", es: "Impedir el reflujo de sangre del ventrículo izquierdo a la aurícula izquierda durante la contracción ventricular." } },
                            { id: 7, question: { pt: "Onde se localiza o septo interventricular?", es: "¿Dónde se localiza el tabique interventricular?" }, answer: { pt: "Entre os ventrículos direito e esquerdo, dividindo os dois câmaras.", es: "Entre los ventrículos derecho e izquierdo, separando ambas cavidades." } },
                            { id: 8, question: { pt: "Que estrutura separa o pericárdio do miocárdio?", es: "¿Qué estructura separa el pericardio del miocardio?" }, answer: { pt: "O epicárdio (visceral) ou camada serosa interna do pericárdio.", es: "El epicardio (visceral) o la capa serosa interna del pericardio." } },
                            { id: 9, question: { pt: "Qual veia traz sangue venoso do miocárdio para o átrio direito?", es: "¿Qué vena lleva sangre venosa del miocardio a la aurícula derecha?" }, answer: { pt: "O seio coronário desemboca diretamente no átrio direito.", es: "El seno coronario desemboca directamente en la aurícula derecha." } },
                            { id: 10, question: { pt: "O que é a circulação pulmonar básica?", es: "¿Cuál es la circulación pulmonar básica?" }, answer: { pt: "Ventrículo direito → artéria pulmonar → pulmões → veias pulmonares → átrio esquerdo.", es: "Ventrículo derecho → arteria pulmonar → pulmones → venas pulmonares → aurícula izquierda." } },
                            { id: 11, question: { pt: "Qual é a principal função da traqueia?", es: "¿Cuál es la función principal de la tráquea?" }, answer: { pt: "Conduzir ar inspirado dos brônquios principais até os pulmões e expirado de volta.", es: "Conducir el aire inspirado desde los bronquios principales hasta los pulmones y permitir su expulsión." } },
                            { id: 12, question: { pt: "Onde ocorre a troca gasosa nos pulmões?", es: "¿Dónde ocurre el intercambio gaseoso en los pulmones?" }, answer: { pt: "Nos alvéolos pulmonares, através da parede alveolar.", es: "En los alvéolos pulmonares, a través de la pared alveolar." } },
                            { id: 13, question: { pt: "Qual é a divisão principal entre os lobos pulmonares?", es: "¿Cuál es la división principal entre los lóbulos pulmonares?" }, answer: { pt: "Pulmão direito tem 3 lobos (superior, médio e inferior); pulmão esquerdo tem 2 lobos (superior e inferior).", es: "El pulmón derecho tiene 3 lóbulos (superior, medio e inferior); el izquierdo tiene 2 (superior e inferior)." } },
                            { id: 14, question: { pt: "O que é o bronquíolo terminal?", es: "¿Qué es el bronquiolo terminal?" }, answer: { pt: "A menor subdivisão do brônquio que ainda não possui alvéolos.", es: "La subdivisión más pequeña del bronquio que aún no contiene alvéolos." } },
                            { id: 15, question: { pt: "Qual músculo é principal na inspiração normal?", es: "¿Qué músculo es principal en la inspiración normal?" }, answer: { pt: "O diafragma.", es: "El diafragma." } },
                            { id: 16, question: { pt: "Onde fica a pleura visceral em relação ao pulmão?", es: "¿Dónde está la pleura visceral respecto al pulmón?" }, answer: { pt: "Aderida diretamente à superfície do pulmão.", es: "Adherida directamente a la superficie pulmonar." } },
                            { id: 17, question: { pt: "Qual é a função do diafragma na respiração?", es: "¿Cuál es la función del diafragma en la respiración?" }, answer: { pt: "Aumentar o volume da cavidade torácica durante a inspiração, permitindo a entrada de ar.", es: "Aumentar el volumen de la cavidad torácica durante la inspiración, permitiendo la entrada de aire." } },
                            { id: 18, question: { pt: "O que é a margem costal do pulmão?", es: "¿Qué es el borde costal del pulmón?" }, answer: { pt: "A borda inferior/lateral do pulmão que fica em contato com a parede torácica.", es: "El borde inferior/lateral del pulmón que contacta la pared torácica." } },
                            { id: 19, question: { pt: "Onde se localiza a árvore traqueobrônquica?", es: "¿Dónde se localiza el árbol traqueobronquial?" }, answer: { pt: "A traqueia se divide em dois brônquios principais dentro do tórax, formando a árvore respiratória.", es: "La tráquea se divide en dos bronquios principales dentro del tórax, formando el árbol respiratorio." } },
                            { id: 20, question: { pt: "Qual é a diferença entre ventilação e perfusão?", es: "¿Cuál es la diferencia entre ventilación y perfusión?" }, answer: { pt: "Ventilação é o movimento de ar nos pulmões; perfusão é o fluxo de sangue nos capilares alveolares.", es: "La ventilación es el movimiento de aire en los pulmones; la perfusión es el flujo sanguíneo en los capilares alveolares." } },
                            { id: 21, question: { pt: "Qual é a função do esôfago?", es: "¿Cuál es la función del esófago?" }, answer: { pt: "Conduzir alimentos deglutidos da faringe até o estômago através de movimentos peristálticos.", es: "Transportar los alimentos de la faringe al estómago por movimientos peristálticos." } },
                            { id: 22, question: { pt: "Qual camada do estômago contém as glândulas produtoras de ácido?", es: "¿Qué capa del estómago contiene las glándulas productoras de ácido?" }, answer: { pt: "A mucosa (camada interna) contém as glândulas gástricas.", es: "La mucosa (capa interna) contiene las glándulas gástricas." } },
                            { id: 23, question: { pt: "Onde ocorre a maior parte da absorção de nutrientes?", es: "¿Dónde ocurre la mayor parte de la absorción de nutrientes?" }, answer: { pt: "No intestino delgado, principalmente no jejuno e íleo.", es: "En el intestino delgado, principalmente en el yeyuno e íleon." } },
                            { id: 24, question: { pt: "Qual órgão produz bile e qual sua função básica?", es: "¿Qué órgano produce bilis y cuál es su función básica?" }, answer: { pt: "O fígado produz bile, que emulsifica gorduras para melhor absorção no intestino delgado.", es: "El hígado produce bilis, que emulsiona las grasas para una mejor absorción en el intestino delgado." } },
                            { id: 25, question: { pt: "Qual é a função exócrina do pâncreas?", es: "¿Cuál es la función exocrina del páncreas?" }, answer: { pt: "Produzir enzimas digestivas (amilase, lipase, proteases) que são lançadas no duodeno.", es: "Producir enzimas digestivas (amilasa, lipasa, proteasas) que se liberan en el duodeno." } },
                            { id: 26, question: { pt: "Onde termina o esôfago no aparelho digestório?", es: "¿Dónde termina el esófago en el aparato digestivo?" }, answer: { pt: "No estômago, ao atravessar o diafragma pelo hiato esofágico.", es: "En el estómago, al atravesar el diafragma por el hiato esofágico." } },
                            { id: 27, question: { pt: "Qual é a principal artéria que irriga o intestino delgado?", es: "¿Cuál es la arteria principal que irriga el intestino delgado?" }, answer: { pt: "A artéria mesentérica superior.", es: "La arteria mesentérica superior." } },
                            { id: 28, question: { pt: "O que é o piloro e onde está localizado?", es: "¿Qué es el píloro y dónde está ubicado?" }, answer: { pt: "A válvula entre o estômago e o duodeno (primeira porção do intestino delgado).", es: "La válvula entre el estómago y el duodeno (primera porción del intestino delgado)." } },
                            { id: 29, question: { pt: "Qual é a função do íleo distal?", es: "¿Cuál es la función del íleon distal?" }, answer: { pt: "Absorver nutrientes, água e eletrólitos restantes, e preparar o bolo fecal para o intestino grosso.", es: "Absorber nutrientes, agua y electrolitos restantes, preparando el bolo fecal para el intestino grueso." } },
                            { id: 30, question: { pt: "Qual estrutura separa o intestino delgado do grosso?", es: "¿Qué estructura separa el intestino delgado del grueso?" }, answer: { pt: "A válvula ileocecal, localizada entre o íleo e o ceco.", es: "La válvula ileocecal, ubicada entre el íleon y el ciego." } },
                            { id: 31, question: { pt: "Onde se localiza o ceco?", es: "¿Dónde se localiza el ciego?" }, answer: { pt: "Na região inferior direita do abdome, continuação do intestino grosso.", es: "En la región inferior derecha del abdomen, continuación del intestino grueso." } },
                            { id: 32, question: { pt: "Qual é a unidade funcional do rim?", es: "¿Cuál es la unidad funcional del riñón?" }, answer: { pt: "O néfron, composto por glomérulo, túbulo proximal, alça de Henle, túbulo distal e ducto coletor.", es: "La nefrona, compuesta por glomérulo, túbulo proximal, asa de Henle, túbulo distal y conducto colector." } },
                            { id: 33, question: { pt: "Onde ocorre a filtração glomerular?", es: "¿Dónde ocurre la filtración glomerular?" }, answer: { pt: "No glomérulo, dentro da cápsula de Bowman no néfron.", es: "En el glomérulo, dentro de la cápsula de Bowman en la nefrona." } },
                            { id: 34, question: { pt: "Qual é a função principal do néfron proximal?", es: "¿Cuál es la función principal del túbulo proximal?" }, answer: { pt: "Reabsorver água, glicose, aminoácidos e íons essenciais do filtrado glomerular.", es: "Reabsorber agua, glucosa, aminoácidos e iones esenciales del filtrado glomerular." } },
                            { id: 35, question: { pt: "Qual vaso leva sangue para o glomérulo renal?", es: "¿Qué vaso lleva sangre al glomérulo renal?" }, answer: { pt: "A arteríola aferente.", es: "La arteriola aferente." } },
                            { id: 36, question: { pt: "Onde desemboca o ureter na bexiga?", es: "¿Dónde desemboca el uréter en la vejiga?" }, answer: { pt: "Na parede posterior inferior da bexiga, obliquamente.", es: "En la pared posteroinferior de la vejiga, en sentido oblicuo." } },
                            { id: 37, question: { pt: "Qual é a função da bexiga urinária?", es: "¿Cuál es la función de la vejiga urinaria?" }, answer: { pt: "Armazenar urina e expeli-la através da micção quando está cheia.", es: "Almacenar orina y expulsarla mediante la micción cuando está llena." } },
                            { id: 38, question: { pt: "Que músculo forma o esfíncter externo da uretra masculina?", es: "¿Qué músculo forma el esfínter externo de la uretra masculina?" }, answer: { pt: "O músculo esfíncter externo da uretra (voluntário).", es: "El músculo esfínter externo de la uretra (voluntario)." } },
                            { id: 39, question: { pt: "Onde estão localizados os glomérulos nos rins?", es: "¿Dónde se localizan los glomérulos en los riñones?" }, answer: { pt: "No córtex renal.", es: "En la corteza renal." } },
                            { id: 40, question: { pt: "Qual é a diferença entre uretra masculina e feminina em termos anatômicos?", es: "¿Cuál es la diferencia anatómica entre la uretra masculina y femenina?" }, answer: { pt: "Uretra masculina é mais longa (~20 cm) e passa pela próstata; uretra feminina é curta (~4 cm) e termina na vulva.", es: "La uretra masculina es más larga (~20 cm) y atraviesa la próstata; la femenina es corta (~4 cm) y termina en la vulva." } },
                            { id: 41, question: { pt: "Qual órgão produz espermatozoides?", es: "¿Qué órgano produce espermatozoides?" }, answer: { pt: "Os testículos.", es: "Los testículos." } },
                            { id: 42, question: { pt: "Onde se localiza a próstata em relação à bexiga?", es: "¿Dónde se localiza la próstata con respecto a la vejiga?" }, answer: { pt: "Abaixo e ao redor da bexiga, envolvendo a uretra.", es: "Debajo y alrededor de la vejiga, rodeando la uretra." } },
                            { id: 43, question: { pt: "Qual é a função das trompas uterinas?", es: "¿Cuál es la función de las trompas uterinas?" }, answer: { pt: "Conduzir o óvulo do ovário até o útero e permitir o encontro com espermatozoides para fecundação.", es: "Conducir el óvulo desde el ovario hasta el útero y permitir el encuentro con los espermatozoides para la fecundación." } },
                            { id: 44, question: { pt: "Onde ocorre a implantação do embrião no útero?", es: "¿Dónde se implanta el embrión en el útero?" }, answer: { pt: "No endométrio (camada interna do útero), geralmente na parede anterior ou posterior.", es: "En el endometrio (capa interna del útero), generalmente en la pared anterior o posterior." } },
                            { id: 45, question: { pt: "Qual é a função ovariana básica?", es: "¿Cuál es la función básica del ovario?" }, answer: { pt: "Produzir e liberar óvulos (ovulação) e secretar hormônios sexuais femininos.", es: "Producir y liberar óvulos (ovulación) y secretar hormonas sexuales femeninas." } },
                            { id: 46, question: { pt: "O que é o canal inguinal e por que é clinicamente importante?", es: "¿Qué es el canal inguinal y por qué es clínicamente importante?" }, answer: { pt: "Um canal oblíquo na parede abdominal inferior onde passa o cordão espermático nos homens. É importante porque podem ocorrer hérnias inguinais.", es: "Un conducto oblicuo en la pared abdominal inferior por donde pasa el cordón espermático en los hombres. Es importante porque pueden producirse hernias inguinales." } },
                            { id: 47, question: { pt: "Quais são os principais componentes do sistema linfático?", es: "¿Cuáles son los principales componentes del sistema linfático?" }, answer: { pt: "Linfa, vasos linfáticos, linfonodos, baço, timo, tonsilas e medula óssea.", es: "Linf a, vasos linfáticos, ganglios linfáticos, bazo, timo, tonsilas y médula ósea." } },
                            { id: 48, question: { pt: "Onde se localiza o timo e qual sua função geral?", es: "¿Dónde se localiza el timo y cuál es su función general?" }, answer: { pt: "No mediastino anterior, acima do coração. Sua função é produzir e amadurecer linfócitos T.", es: "En el mediastino anterior, sobre el corazón. Su función es producir y madurar linfocitos T." } },
                            { id: 49, question: { pt: "Qual é o papel dos linfonodos na resposta imune?", es: "¿Cuál es el papel de los ganglios linfáticos en la respuesta inmune?" }, answer: { pt: "Filtrar a linfa, remover patógenos e produzir linfócitos e células imunológicas.", es: "Filtrar la linfa, eliminar patógenos y producir linfocitos y células inmunitarias." } },
                            { id: 50, question: { pt: "Que vaso linfático principal drena a maior parte do corpo?", es: "¿Qué vaso linfático principal drena la mayor parte del cuerpo?" }, answer: { pt: "O ducto linfático direito drena lado direito superior; o ducto torácico drena o resto do corpo.", es: "El conducto linfático derecho drena la parte superior derecha; el conducto torácico drena el resto del cuerpo." } },
                            { id: 51, question: { pt: "O que é o baço e qual sua função resumida?", es: "¿Qué es el bazo y cuál es su função resumida?" }, answer: { pt: "Um órgão linfático localizado no lado esquerdo do abdome que filtra sangue e participa da resposta imune.", es: "Un órgano linfoide en el lado izquierdo del abdomen que filtra sangre y participa en la respuesta inmune." } },
                            { id: 52, question: { pt: "Onde se localizam as tonsilas palatinas?", es: "¿Dónde se localizan las amígdalas palatinas?" }, answer: { pt: "Entre os pilares anteriores e posteriores da faringe, na orofaringe.", es: "Entre los pilares anterior y posterior de la faringe, en la orofaringe." } },
                            { id: 53, question: { pt: "O que define a anatomia topográfica do quadrante superior direito do abdome?", es: "¿Qué define la anatomía topográfica del cuadrante superior derecho del abdomen?" }, answer: { pt: "Contém fígado, vesícula biliar, rim direito, parte do intestino delgado e flexura hepática do cólon.", es: "Contiene hígado, vesícula biliar, riñón derecho, parte del intestino delgado y la flexura hepática del colon." } },
                            { id: 54, question: { pt: "Qual plano anatômico separa anterior de posterior?", es: "¿Qué plano anatómico separa anterior de posterior?" }, answer: { pt: "O plano frontal (coronal).", es: "El plano frontal (coronal)." } },
                            { id: 55, question: { pt: "Onde passa a linha média anterior do corpo?", es: "¿Dónde pasa la línea media anterior del cuerpo?" }, answer: { pt: "Pelo esterno e pela linha alba abdominal, separando lado direito e esquerdo.", es: "Por el esternón y la línea alba abdominal, separando el lado derecho e izquierdo." } },
                            { id: 56, question: { pt: "O que é a fáscia e qual sua relevância na anatomia topográfica?", es: "¿Qué es la fascia y cuál es su relevancia en la anatomía topográfica?" }, answer: { pt: "Tecido conjuntivo que recobre músculos e órgãos, criando planos de dissecção clinicamente importantes.", es: "Tejido conectivo que recubre músculos y órganos, creando planos de disección clínicamente importantes." } },
                            { id: 57, question: { pt: "Qual a posição relacionando estômago e fígado no hipocôndrio esquerdo?", es: "¿Cuál es la posición relativa del estómago y el hígado en el hipocondrio izquierdo?" }, answer: { pt: "O estômago fica medial e inferiormente; o fígado é maiormente direito mas sua extremidade esquerda fica acima do estômago.", es: "El estómago está medial y por debajo; el hígado es mayormente derecho pero su extremo izquierdo está por encima del estómago." } },
                            { id: 58, question: { pt: "Como localizar o espaço subcostal em relação ao diafragma?", es: "¿Cómo localizar el espacio subcostal respecto al diafragma?" }, answer: { pt: "É o espaço entre as costelas onde passa o diafragma; clinicamente importante para toracocentese e paracentese.", es: "Es el espacio entre las costillas por donde pasa el diafragma; clínicamente importante para toracocentesis y paracentesis." } },
                            { id: 59, question: { pt: "Quais estruturas formam a parede posterior do mediastino?", es: "¿Qué estructuras forman la pared posterior del mediastino?" }, answer: { pt: "Corpos vertebrais, músculos paravertebrais, pleura mediastinal e esôfago.", es: "Cuerpos vertebrales, músculos paravertebrales, pleura mediastínica y esófago." } },
                            { id: 60, question: { pt: "Como identificar o limite superior do abdome em relação ao tórax?", es: "¿Cómo identificar el límite superior del abdomen con respecto al tórax?" }, answer: { pt: "Limite superior é inferior ao 4º espaço intercostal (nível do diafragma); limite anterior é a sínfise púbica.", es: "El límite superior está por debajo del 4.º espacio intercostal (nivel del diafragma); el límite anterior es la sínfisis púbica." } }
                        ]
                    }
                ]
            },
            "histology2": {
                "title": { "pt": "Histologia II", "es": "Histología II" },
                "icon": "🔬",
                "audio_units": [],
                "text_units": [],
                "units": [
                    {
                        "id": "u_histology2_general",
                        "title": "Geral / Revisão",
                        "flashcards": [
                            {
                                "id": 1,
                                "question": {
                                    "pt": "Quais são os dois componentes principais do sistema cardiovascular?",
                                    "es": "Quais são os dois componentes principais do sistema cardiovascular?"
                                },
                                "answer": {
                                    "pt": "O coração (bomba) e os vasos sanguíneos.",
                                    "es": "O coração (bomba) e os vasos sanguíneos."
                                }
                            },
                            {
                                "id": 2,
                                "question": {
                                    "pt": "Qual é a função básica do sistema cardiovascular?",
                                    "es": "Qual é a função básica do sistema cardiovascular?"
                                },
                                "answer": {
                                    "pt": "Transportar o sangue e a linfa de e para os tecidos do corpo.",
                                    "es": "Transportar o sangue e a linfa de e para os tecidos do corpo."
                                }
                            },
                            {
                                "id": 3,
                                "question": {
                                    "pt": "Como é definido o coração em termos funcionais?",
                                    "es": "Como é definido o coração em termos funcionais?"
                                },
                                "answer": {
                                    "pt": "Uma bomba muscular que mantém o fluxo unidirecional do sangue.",
                                    "es": "Uma bomba muscular que mantém o fluxo unidirecional do sangue."
                                }
                            },
                            {
                                "id": 4,
                                "question": {
                                    "pt": "Quantas cavidades possui o coração humano?",
                                    "es": "Quantas cavidades possui o coração humano?"
                                },
                                "answer": {
                                    "pt": "Quatro cavidades.",
                                    "es": "Quatro cavidades."
                                }
                            },
                            {
                                "id": 5,
                                "question": {
                                    "pt": "Onde o coração está localizado na cavidade torácica?",
                                    "es": "Onde o coração está localizado na cavidade torácica?"
                                },
                                "answer": {
                                    "pt": "No mediastino, situado de forma oblíqua e deslocado para a esquerda.",
                                    "es": "No mediastino, situado de forma oblíqua e deslocado para a esquerda."
                                }
                            },
                            {
                                "id": 6,
                                "question": {
                                    "pt": "Qual estrutura envolve o coração externamente?",
                                    "es": "Qual estrutura envolve o coração externamente?"
                                },
                                "answer": {
                                    "pt": "O pericárdio (um saco fibroso resistente).",
                                    "es": "O pericárdio (um saco fibroso resistente)."
                                }
                            },
                            {
                                "id": 7,
                                "question": {
                                    "pt": "Quais são as três camadas que compõem a parede do coração?",
                                    "es": "Quais são as três camadas que compõem a parede do coração?"
                                },
                                "answer": {
                                    "pt": "Epicárdio, miocárdio e endocárdio.",
                                    "es": "Epicárdio, miocárdio e endocárdio."
                                }
                            },
                            {
                                "id": 8,
                                "question": {
                                    "pt": "O epicárdio também é conhecido como a camada _____ do pericárdio.",
                                    "es": "O epicárdio também é conhecido como a camada _____ do pericárdio."
                                },
                                "answer": {
                                    "pt": "Visceral",
                                    "es": "Visceral"
                                }
                            },
                            {
                                "id": 9,
                                "question": {
                                    "pt": "Quais são os três componentes histológicos do epicárdio?",
                                    "es": "Quais são os três componentes histológicos do epicárdio?"
                                },
                                "answer": {
                                    "pt": "Mesotélio, camada submesotelial e camada subepicárdica.",
                                    "es": "Mesotélio, camada submesotelial e camada subepicárdica."
                                }
                            },
                            {
                                "id": 10,
                                "question": {
                                    "pt": "Qual é o tipo de epitélio que forma o mesotélio do epicárdio?",
                                    "es": "Qual é o tipo de epitélio que forma o mesotélio do epicárdio?"
                                },
                                "answer": {
                                    "pt": "Epitélio pavimentoso simples.",
                                    "es": "Epitélio pavimentoso simples."
                                }
                            },
                            {
                                "id": 11,
                                "question": {
                                    "pt": "Qual tecido compõe a camada submesotelial?",
                                    "es": "Qual tecido compõe a camada submesotelial?"
                                },
                                "answer": {
                                    "pt": "Tecido conjuntivo frouxo.",
                                    "es": "Tecido conjuntivo frouxo."
                                }
                            },
                            {
                                "id": 12,
                                "question": {
                                    "pt": "O que é encontrado na camada subepicárdica que irriga e inerva o coração?",
                                    "es": "O que é encontrado na camada subepicárdica que irriga e inerva o coração?"
                                },
                                "answer": {
                                    "pt": "Vasos sanguíneos, nervos e tecido adiposo branco.",
                                    "es": "Vasos sanguíneos, nervos e tecido adiposo branco."
                                }
                            },
                            {
                                "id": 13,
                                "question": {
                                    "pt": "Qual é a camada mais robusta da parede cardíaca?",
                                    "es": "Qual é a camada mais robusta da parede cardíaca?"
                                },
                                "answer": {
                                    "pt": "Miocárdio",
                                    "es": "Miocárdio"
                                }
                            },
                            {
                                "id": 14,
                                "question": {
                                    "pt": "O miocárdio é composto principalmente por qual tipo de tecido?",
                                    "es": "O miocárdio é composto principalmente por qual tipo de tecido?"
                                },
                                "answer": {
                                    "pt": "Musculatura estriada cardíaca.",
                                    "es": "Musculatura estriada cardíaca."
                                }
                            },
                            {
                                "id": 15,
                                "question": {
                                    "pt": "Como o tecido muscular cardíaco se organiza em relação ao esqueleto fibroso?",
                                    "es": "Como o tecido muscular cardíaco se organiza em relação ao esqueleto fibroso?"
                                },
                                "answer": {
                                    "pt": "Ele faz várias voltas em forma de espiral em torno do esqueleto.",
                                    "es": "Ele faz várias voltas em forma de espiral em torno do esqueleto."
                                }
                            },
                            {
                                "id": 16,
                                "question": {
                                    "pt": "Por que o miocárdio do ventrículo é mais espesso que o do átrio?",
                                    "es": "Por que o miocárdio do ventrículo é mais espesso que o do átrio?"
                                },
                                "answer": {
                                    "pt": "Para gerar maior força de contração necessária para bombear sangue para o corpo.",
                                    "es": "Para gerar maior força de contração necessária para bombear sangue para o corpo."
                                }
                            },
                            {
                                "id": 17,
                                "question": {
                                    "pt": "Quais são as quatro subcamadas do endocárdio?",
                                    "es": "Quais são as quatro subcamadas do endocárdio?"
                                },
                                "answer": {
                                    "pt": "Endotélio, camada subendotelial, camada mioelástica e camada subendocárdica.",
                                    "es": "Endotélio, camada subendotelial, camada mioelástica e camada subendocárdica."
                                }
                            },
                            {
                                "id": 18,
                                "question": {
                                    "pt": "Qual é o tipo de epitélio do endotélio cardíaco?",
                                    "es": "Qual é o tipo de epitélio do endotélio cardíaco?"
                                },
                                "answer": {
                                    "pt": "Epitélio pavimentoso simples.",
                                    "es": "Epitélio pavimentoso simples."
                                }
                            },
                            {
                                "id": 19,
                                "question": {
                                    "pt": "O que compõe a camada mioelástica do endocárdio?",
                                    "es": "O que compõe a camada mioelástica do endocárdio?"
                                },
                                "answer": {
                                    "pt": "Tecido conjuntivo e fibras musculares lisas.",
                                    "es": "Tecido conjuntivo e fibras musculares lisas."
                                }
                            },
                            {
                                "id": 20,
                                "question": {
                                    "pt": "Qual tecido compõe a camada subendotelial do endocárdio?",
                                    "es": "Qual tecido compõe a camada subendotelial do endocárdio?"
                                },
                                "answer": {
                                    "pt": "Tecido conjuntivo frouxo.",
                                    "es": "Tecido conjuntivo frouxo."
                                }
                            },
                            {
                                "id": 21,
                                "question": {
                                    "pt": "Onde se localizam as fibras de Purkinje no endocárdio?",
                                    "es": "Onde se localizam as fibras de Purkinje no endocárdio?"
                                },
                                "answer": {
                                    "pt": "Na camada subendocárdica.",
                                    "es": "Na camada subendocárdica."
                                }
                            },
                            {
                                "id": 22,
                                "question": {
                                    "pt": "Qual é o tipo de tecido conjuntivo da camada subendocárdica?",
                                    "es": "Qual é o tipo de tecido conjuntivo da camada subendocárdica?"
                                },
                                "answer": {
                                    "pt": "Tecido conjuntivo denso não modelado.",
                                    "es": "Tecido conjuntivo denso não modelado."
                                }
                            },
                            {
                                "id": 23,
                                "question": {
                                    "pt": "Quais são os cinco elementos que constituem o esqueleto fibroso do coração?",
                                    "es": "Quais são os cinco elementos que constituem o esqueleto fibroso do coração?"
                                },
                                "answer": {
                                    "pt": "Válvulas, anéis fibrosos, trígono fibroso, tabique membranoso interventricular e cordas tendíneas.",
                                    "es": "Válvulas, anéis fibrosos, trígono fibroso, tabique membranoso interventricular e cordas tendíneas."
                                }
                            },
                            {
                                "id": 24,
                                "question": {
                                    "pt": "Qual a função do esqueleto fibroso em relação ao miocárdio?",
                                    "es": "Qual a função do esqueleto fibroso em relação ao miocárdio?"
                                },
                                "answer": {
                                    "pt": "Serve como ponto de inserção para os feixes do miocárdio.",
                                    "es": "Serve como ponto de inserção para os feixes do miocárdio."
                                }
                            },
                            {
                                "id": 25,
                                "question": {
                                    "pt": "Como o esqueleto fibroso atua no sistema elétrico do coração?",
                                    "es": "Como o esqueleto fibroso atua no sistema elétrico do coração?"
                                },
                                "answer": {
                                    "pt": "Como um isolante elétrico que impede a disseminação direta de potenciais das aurículas aos ventrículos.",
                                    "es": "Como um isolante elétrico que impede a disseminação direta de potenciais das aurículas aos ventrículos."
                                }
                            },
                            {
                                "id": 26,
                                "question": {
                                    "pt": "Qual é o tecido predominante no esqueleto fibroso cardíaco?",
                                    "es": "Qual é o tecido predominante no esqueleto fibroso cardíaco?"
                                },
                                "answer": {
                                    "pt": "Tecido conjuntivo denso não modelado.",
                                    "es": "Tecido conjuntivo denso não modelado."
                                }
                            },
                            {
                                "id": 27,
                                "question": {
                                    "pt": "De que são compostas as válvulas cardíacas?",
                                    "es": "De que são compostas as válvulas cardíacas?"
                                },
                                "answer": {
                                    "pt": "Tecido conjuntivo revestido por endocárdio.",
                                    "es": "Tecido conjuntivo revestido por endocárdio."
                                }
                            },
                            {
                                "id": 28,
                                "question": {
                                    "pt": "A que estrutura as válvulas cardíacas estão fixadas?",
                                    "es": "A que estrutura as válvulas cardíacas estão fixadas?"
                                },
                                "answer": {
                                    "pt": "Ao anel fibroso.",
                                    "es": "Ao anel fibroso."
                                }
                            },
                            {
                                "id": 29,
                                "question": {
                                    "pt": "Quais são as três camadas histológicas de uma valva cardíaca?",
                                    "es": "Quais são as três camadas histológicas de uma valva cardíaca?"
                                },
                                "answer": {
                                    "pt": "Esponjosa, fibrosa e ventricular.",
                                    "es": "Esponjosa, fibrosa e ventricular."
                                }
                            },
                            {
                                "id": 30,
                                "question": {
                                    "pt": "Descreva a localização e composição da camada esponjosa da valva.",
                                    "es": "Descreva a localização e composição da camada esponjosa da valva."
                                },
                                "answer": {
                                    "pt": "Situada no lado atrial ou arterial, composta por tecido conjuntivo frouxo com fibras elásticas e colágeno.",
                                    "es": "Situada no lado atrial ou arterial, composta por tecido conjuntivo frouxo com fibras elásticas e colágeno."
                                }
                            },
                            {
                                "id": 31,
                                "question": {
                                    "pt": "Qual é a função da camada esponjosa nas válvulas cardíacas?",
                                    "es": "Qual é a função da camada esponjosa nas válvulas cardíacas?"
                                },
                                "answer": {
                                    "pt": "Atuar como amortecedor, proporcionando flexibilidade e plasticidade.",
                                    "es": "Atuar como amortecedor, proporcionando flexibilidade e plasticidade."
                                }
                            },
                            {
                                "id": 32,
                                "question": {
                                    "pt": "Como se chama a camada esponjosa especificamente nas válvulas aórtica e pulmonar?",
                                    "es": "Como se chama a camada esponjosa especificamente nas válvulas aórtica e pulmonar?"
                                },
                                "answer": {
                                    "pt": "Camada arterial.",
                                    "es": "Camada arterial."
                                }
                            },
                            {
                                "id": 33,
                                "question": {
                                    "pt": "O que forma a camada fibrosa (core) de uma valva cardíaca?",
                                    "es": "O que forma a camada fibrosa (core) de uma valva cardíaca?"
                                },
                                "answer": {
                                    "pt": "Extensões fibrosas de tecido conjuntivo denso não modelado dos anéis fibrosos.",
                                    "es": "Extensões fibrosas de tecido conjuntivo denso não modelado dos anéis fibrosos."
                                }
                            },
                            {
                                "id": 34,
                                "question": {
                                    "pt": "Quais componentes formam a camada ventricular da valva?",
                                    "es": "Quais componentes formam a camada ventricular da valva?"
                                },
                                "answer": {
                                    "pt": "Revestimento endotelial, tecido conjuntivo denso e fibras elásticas.",
                                    "es": "Revestimento endotelial, tecido conjuntivo denso e fibras elásticas."
                                }
                            },
                            {
                                "id": 35,
                                "question": {
                                    "pt": "Com o que a camada ventricular se continua nas válvulas atrioventriculares?",
                                    "es": "Com o que a camada ventricular se continua nas válvulas atrioventriculares?"
                                },
                                "answer": {
                                    "pt": "Com as cordas tendíneas.",
                                    "es": "Com as cordas tendíneas."
                                }
                            },
                            {
                                "id": 36,
                                "question": {
                                    "pt": "Onde terminam as cordas tendíneas no coração?",
                                    "es": "Onde terminam as cordas tendíneas no coração?"
                                },
                                "answer": {
                                    "pt": "Nos músculos papilares.",
                                    "es": "Nos músculos papilares."
                                }
                            },
                            {
                                "id": 37,
                                "question": {
                                    "pt": "As valvas cardíacas são vascularizadas?",
                                    "es": "As valvas cardíacas são vascularizadas?"
                                },
                                "answer": {
                                    "pt": "Não, elas são avasculares; os vasos sanguíneos encontram-se apenas na base.",
                                    "es": "Não, elas são avasculares; os vasos sanguíneos encontram-se apenas na base."
                                }
                            },
                            {
                                "id": 38,
                                "question": {
                                    "pt": "Quais estruturas compõem o sistema de condução do coração?",
                                    "es": "Quais estruturas compõem o sistema de condução do coração?"
                                },
                                "answer": {
                                    "pt": "Nódulos sinoatrial e atrioventricular, fascículo atrioventricular e fibras de Purkinje.",
                                    "es": "Nódulos sinoatrial e atrioventricular, fascículo atrioventricular e fibras de Purkinje."
                                }
                            },
                            {
                                "id": 39,
                                "question": {
                                    "pt": "Em qual camada da parede cardíaca se localiza o sistema de condução?",
                                    "es": "Em qual camada da parede cardíaca se localiza o sistema de condução?"
                                },
                                "answer": {
                                    "pt": "Camada subendocárdica.",
                                    "es": "Camada subendocárdica."
                                }
                            },
                            {
                                "id": 40,
                                "question": {
                                    "pt": "Onde se localizam especificamente as fibras de Purkinje?",
                                    "es": "Onde se localizam especificamente as fibras de Purkinje?"
                                },
                                "answer": {
                                    "pt": "Por cima do endocárdio, revestindo os dois lados do tabique interventricular.",
                                    "es": "Por cima do endocárdio, revestindo os dois lados do tabique interventricular."
                                }
                            },
                            {
                                "id": 41,
                                "question": {
                                    "pt": "Qual a diferença de diâmetro entre as fibras de Purkinje e as fibras musculares cardíacas comuns?",
                                    "es": "Qual a diferença de diâmetro entre as fibras de Purkinje e as fibras musculares cardíacas comuns?"
                                },
                                "answer": {
                                    "pt": "As fibras de Purkinje possuem um diâmetro maior.",
                                    "es": "As fibras de Purkinje possuem um diâmetro maior."
                                }
                            },
                            {
                                "id": 42,
                                "question": {
                                    "pt": "Como é a densidade de miofibrilas nas fibras de Purkinje em comparação às células contráteis?",
                                    "es": "Como é a densidade de miofibrilas nas fibras de Purkinje em comparação às células contráteis?"
                                },
                                "answer": {
                                    "pt": "As fibras de Purkinje contêm uma menor quantidade de miofibrilas.",
                                    "es": "As fibras de Purkinje contêm uma menor quantidade de miofibrilas."
                                }
                            },
                            {
                                "id": 43,
                                "question": {
                                    "pt": "Qual reserva energética é abundante nas fibras de Purkinje?",
                                    "es": "Qual reserva energética é abundante nas fibras de Purkinje?"
                                },
                                "answer": {
                                    "pt": "Glicogênio.",
                                    "es": "Glicogênio."
                                }
                            },
                            {
                                "id": 44,
                                "question": {
                                    "pt": "O que é a febre reumática no contexto cardiovascular?",
                                    "es": "O que é a febre reumática no contexto cardiovascular?"
                                },
                                "answer": {
                                    "pt": "Uma patologia sistêmica imunológica decorrente de uma infecção bacteriana por estreptococo.",
                                    "es": "Uma patologia sistêmica imunológica decorrente de uma infecção bacteriana por estreptococo."
                                }
                            },
                            {
                                "id": 45,
                                "question": {
                                    "pt": "Qual é a complicação mais séria da febre reumática no coração?",
                                    "es": "Qual é a complicação mais séria da febre reumática no coração?"
                                },
                                "answer": {
                                    "pt": "O efeito sobre o endocárdio das valvas, que podem sofrer ulceração, deformação e cicatrização.",
                                    "es": "O efeito sobre o endocárdio das valvas, que podem sofrer ulceração, deformação e cicatrização."
                                }
                            },
                            {
                                "id": 46,
                                "question": {
                                    "pt": "Cite duas consequências valvulares graves da febre reumática.",
                                    "es": "Cite duas consequências valvulares graves da febre reumática."
                                },
                                "answer": {
                                    "pt": "Insuficiência mitral e estenose aórtica.",
                                    "es": "Insuficiência mitral e estenose aórtica."
                                }
                            },
                            {
                                "id": 47,
                                "question": {
                                    "pt": "Quais sistemas/órgãos, além do coração, são afetados pela febre reumática?",
                                    "es": "Quais sistemas/órgãos, além do coração, são afetados pela febre reumática?"
                                },
                                "answer": {
                                    "pt": "Articulações, derme e encéfalo.",
                                    "es": "Articulações, derme e encéfalo."
                                }
                            },
                            {
                                "id": 48,
                                "question": {
                                    "pt": "Qual tratamento é essencial para reduzir a incidência de febre reumática?",
                                    "es": "Qual tratamento é essencial para reduzir a incidência de febre reumática?"
                                },
                                "answer": {
                                    "pt": "Antibióticos.",
                                    "es": "Antibióticos."
                                }
                            },
                            {
                                "id": 49,
                                "question": {
                                    "pt": "Qual o papel das fibras elásticas na camada ventricular da valva?",
                                    "es": "Qual o papel das fibras elásticas na camada ventricular da valva?"
                                },
                                "answer": {
                                    "pt": "Permitir a retração da valva após a deformação mecânica.",
                                    "es": "Permitir a retração da valva após a deformação mecânica."
                                }
                            },
                            {
                                "id": 50,
                                "question": {
                                    "pt": "O nódulo sinoatrial é também conhecido como o _____ do coração.",
                                    "es": "O nódulo sinoatrial é também conhecido como o _____ do coração."
                                },
                                "answer": {
                                    "pt": "Marcapasso natural",
                                    "es": "Marcapasso natural"
                                }
                            },
                            {
                                "id": 51,
                                "question": {
                                    "pt": "O tabique auriculoventricular é composto histologicamente por: endotélio + _____ + endotélio.",
                                    "es": "O tabique auriculoventricular é composto histologicamente por: endotélio + _____ + endotélio."
                                },
                                "answer": {
                                    "pt": "Músculo",
                                    "es": "Músculo"
                                }
                            },
                            {
                                "id": 52,
                                "question": {
                                    "pt": "Qual componente do esqueleto fibroso previne o estiramento excessivo das válvulas?",
                                    "es": "Qual componente do esqueleto fibroso previne o estiramento excessivo das válvulas?"
                                },
                                "answer": {
                                    "pt": "Os anéis fibrosos.",
                                    "es": "Os anéis fibrosos."
                                }
                            },
                            {
                                "id": 53,
                                "question": {
                                    "pt": "As fibras de Purkinje são células especializadas que permitem a condução de _____.",
                                    "es": "As fibras de Purkinje são células especializadas que permitem a condução de _____."
                                },
                                "answer": {
                                    "pt": "Estímulos elétricos",
                                    "es": "Estímulos elétricos"
                                }
                            },
                            {
                                "id": 54,
                                "question": {
                                    "pt": "Qual é o tecido que constitui as cordas tendíneas?",
                                    "es": "Qual é o tecido que constitui as cordas tendíneas?"
                                },
                                "answer": {
                                    "pt": "Tecido conjuntivo denso revestido por endotélio.",
                                    "es": "Tecido conjuntivo denso revestido por endotélio."
                                }
                            },
                            {
                                "id": 55,
                                "question": {
                                    "pt": "O miocárdio cardíaco é um tipo de músculo _____.",
                                    "es": "O miocárdio cardíaco é um tipo de músculo _____."
                                },
                                "answer": {
                                    "pt": "Estriado",
                                    "es": "Estriado"
                                }
                            },
                            {
                                "id": 56,
                                "question": {
                                    "pt": "Na camada subendotelial do endocárdio, qual é o tipo predominante de célula conjuntiva?",
                                    "es": "Na camada subendotelial do endocárdio, qual é o tipo predominante de célula conjuntiva?"
                                },
                                "answer": {
                                    "pt": "Fibroblastos.",
                                    "es": "Fibroblastos."
                                }
                            },
                            {
                                "id": 57,
                                "question": {
                                    "pt": "O esqueleto fibroso atua como barreira para potenciais de ação entre quais cavidades?",
                                    "es": "O esqueleto fibroso atua como barreira para potenciais de ação entre quais cavidades?"
                                },
                                "answer": {
                                    "pt": "Entre os átrios (aurículas) e os ventrículos.",
                                    "es": "Entre os átrios (aurículas) e os ventrículos."
                                }
                            },
                            {
                                "id": 58,
                                "question": {
                                    "pt": "Qual o nome da estrutura que fixa as cúspides das valvas atrioventriculares para evitar o prolapso?",
                                    "es": "Qual o nome da estrutura que fixa as cúspides das valvas atrioventriculares para evitar o prolapso?"
                                },
                                "answer": {
                                    "pt": "Cordas tendíneas.",
                                    "es": "Cordas tendíneas."
                                }
                            },
                            {
                                "id": 59,
                                "question": {
                                    "pt": "Onde especificamente se localizam os vasos coronários na parede cardíaca?",
                                    "es": "Onde especificamente se localizam os vasos coronários na parede cardíaca?"
                                },
                                "answer": {
                                    "pt": "No epicárdio (especificamente na camada subepicárdica).",
                                    "es": "No epicárdio (especificamente na camada subepicárdica)."
                                }
                            },
                            {
                                "id": 60,
                                "question": {
                                    "pt": "Qual técnica de coloração histológica é citada para diferenciar as camadas da parede cardíaca nas lâminas?",
                                    "es": "Qual técnica de coloração histológica é citada para diferenciar as camadas da parede cardíaca nas lâminas?"
                                },
                                "answer": {
                                    "pt": "Tinção tricrômica.",
                                    "es": "Tinção tricrômica."
                                }
                            },
                            {
                                "id": 61,
                                "question": {
                                    "pt": "A porção membranosa do septo interventricular pertence a qual sistema estrutural?",
                                    "es": "A porção membranosa do septo interventricular pertence a qual sistema estrutural?"
                                },
                                "answer": {
                                    "pt": "Esqueleto fibroso.",
                                    "es": "Esqueleto fibroso."
                                }
                            },
                            {
                                "id": 62,
                                "question": {
                                    "pt": "Qual camada valvular é rica em proteoglicanos?",
                                    "es": "Qual camada valvular é rica em proteoglicanos?"
                                },
                                "answer": {
                                    "pt": "Camada esponjosa.",
                                    "es": "Camada esponjosa."
                                }
                            },
                            {
                                "id": 63,
                                "question": {
                                    "pt": "A camada subendocárdica é contínua com qual estrutura muscular?",
                                    "es": "A camada subendocárdica é contínua com qual estrutura muscular?"
                                },
                                "answer": {
                                    "pt": "O miocárdio.",
                                    "es": "O miocárdio."
                                }
                            },
                            {
                                "id": 64,
                                "question": {
                                    "pt": "Quais são os principais constituintes da camada submesotelial?",
                                    "es": "Quais são os principais constituintes da camada submesotelial?"
                                },
                                "answer": {
                                    "pt": "Fibras de colágeno, fibras elásticas e fibroblastos.",
                                    "es": "Fibras de colágeno, fibras elásticas e fibroblastos."
                                }
                            },
                            {
                                "id": 65,
                                "question": {
                                    "pt": "O nódulo atrioventricular (AV) transmite o impulso para qual estrutura subsequente?",
                                    "es": "O nódulo atrioventricular (AV) transmite o impulso para qual estrutura subsequente?"
                                },
                                "answer": {
                                    "pt": "Fascículo atrioventricular (ou Feixe de His).",
                                    "es": "Fascículo atrioventricular (ou Feixe de His)."
                                }
                            },
                            {
                                "id": 66,
                                "question": {
                                    "pt": "O fluxo sanguíneo no sistema cardiovascular é mantido em uma direção _____.",
                                    "es": "O fluxo sanguíneo no sistema cardiovascular é mantido em uma direção _____."
                                },
                                "answer": {
                                    "pt": "Unidirecional",
                                    "es": "Unidirecional"
                                }
                            },
                            {
                                "id": 67,
                                "question": {
                                    "pt": "Qual o nome do espaço localizado entre as camadas serosas do pericárdio?",
                                    "es": "Qual o nome do espaço localizado entre as camadas serosas do pericárdio?"
                                },
                                "answer": {
                                    "pt": "Cavidade pericárdica.",
                                    "es": "Cavidade pericárdica."
                                }
                            },
                            {
                                "id": 68,
                                "question": {
                                    "pt": "Em lâminas histológicas com escala de $600 \\mu m$, qual camada cardíaca costuma ocupar a maior parte do campo?",
                                    "es": "Em lâminas histológicas com escala de $600 \\mu m$, qual camada cardíaca costuma ocupar a maior parte do campo?"
                                },
                                "answer": {
                                    "pt": "O miocárdio.",
                                    "es": "O miocárdio."
                                }
                            },
                            {
                                "id": 69,
                                "question": {
                                    "pt": "O tecido adiposo branco é uma característica marcante de qual camada da parede do coração?",
                                    "es": "O tecido adiposo branco é uma característica marcante de qual camada da parede do coração?"
                                },
                                "answer": {
                                    "pt": "Epicárdio (camada subepicárdica).",
                                    "es": "Epicárdio (camada subepicárdica)."
                                }
                            },
                            {
                                "id": 70,
                                "question": {
                                    "pt": "Qual a importância clínica da avascularidade das valvas cardíacas?",
                                    "es": "Qual a importância clínica da avascularidade das valvas cardíacas?"
                                },
                                "answer": {
                                    "pt": "Dificulta a resposta imunológica e a entrega de antibióticos em caso de infecção (endocardite).",
                                    "es": "Dificulta a resposta imunológica e a entrega de antibióticos em caso de infecção (endocardite)."
                                }
                            },
                            {
                                "id": 71,
                                "question": {
                                    "pt": "O trígono fibroso liga quais estruturas do esqueleto cardíaco?",
                                    "es": "O trígono fibroso liga quais estruturas do esqueleto cardíaco?"
                                },
                                "answer": {
                                    "pt": "Os anéis fibrosos das válvulas.",
                                    "es": "Os anéis fibrosos das válvulas."
                                }
                            },
                            {
                                "id": 72,
                                "question": {
                                    "pt": "O endocárdio é histologicamente homólogo a qual estrutura dos vasos sanguíneos?",
                                    "es": "O endocárdio é histologicamente homólogo a qual estrutura dos vasos sanguíneos?"
                                },
                                "answer": {
                                    "pt": "À túnica íntima.",
                                    "es": "À túnica íntima."
                                }
                            },
                            {
                                "id": 73,
                                "question": {
                                    "pt": "A camada ventricular da valva atrioventricular é voltada para qual cavidade?",
                                    "es": "A camada ventricular da valva atrioventricular é voltada para qual cavidade?"
                                },
                                "answer": {
                                    "pt": "Para o ventrículo.",
                                    "es": "Para o ventrículo."
                                }
                            },
                            {
                                "id": 74,
                                "question": {
                                    "pt": "Quais células musculares especializadas são responsáveis pela condução rápida do estímulo nos ventrículos?",
                                    "es": "Quais células musculares especializadas são responsáveis pela condução rápida do estímulo nos ventrículos?"
                                },
                                "answer": {
                                    "pt": "Fibras de Purkinje.",
                                    "es": "Fibras de Purkinje."
                                }
                            },
                            {
                                "id": 75,
                                "question": {
                                    "pt": "A febre reumática é frequentemente precedida por uma infecção em qual trato anatômico?",
                                    "es": "A febre reumática é frequentemente precedida por uma infecção em qual trato anatômico?"
                                },
                                "answer": {
                                    "pt": "Trato respiratório (faringe).",
                                    "es": "Trato respiratório (faringe)."
                                }
                            },
                            {
                                "id": 76,
                                "question": {
                                    "pt": "Qual a principal função mecânica dos anéis fibrosos nas válvulas?",
                                    "es": "Qual a principal função mecânica dos anéis fibrosos nas válvulas?"
                                },
                                "answer": {
                                    "pt": "Manter a patência do orifício valvar e evitar o colapso.",
                                    "es": "Manter a patência do orifício valvar e evitar o colapso."
                                }
                            },
                            {
                                "id": 77,
                                "question": {
                                    "pt": "O mesotélio epicárdico repousa sobre qual tipo de tecido?",
                                    "es": "O mesotélio epicárdico repousa sobre qual tipo de tecido?"
                                },
                                "answer": {
                                    "pt": "Cama submesotelial (tecido conjuntivo frouxo).",
                                    "es": "Cama submesotelial (tecido conjuntivo frouxo)."
                                }
                            },
                            {
                                "id": 78,
                                "question": {
                                    "pt": "As fibras de Purkinje são encontradas na porção mais interna do miocárdio ou no endocárdio?",
                                    "es": "As fibras de Purkinje são encontradas na porção mais interna do miocárdio ou no endocárdio?"
                                },
                                "answer": {
                                    "pt": "No endocárdio (camada subendocárdica).",
                                    "es": "No endocárdio (camada subendocárdica)."
                                }
                            },
                            {
                                "id": 79,
                                "question": {
                                    "pt": "Qual o principal componente da camada fibrosa valvular que confere resistência mecânica?",
                                    "es": "Qual o principal componente da camada fibrosa valvular que confere resistência mecânica?"
                                },
                                "answer": {
                                    "pt": "Fibras de colágeno densas.",
                                    "es": "Fibras de colágeno densas."
                                }
                            },
                            {
                                "id": 80,
                                "question": {
                                    "pt": "O coração é um órgão localizado no compartimento central do tórax chamado _____.",
                                    "es": "O coração é um órgão localizado no compartimento central do tórax chamado _____."
                                },
                                "answer": {
                                    "pt": "Mediastino",
                                    "es": "Mediastino"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    },
    // Placeholder for other semesters
    "s1": {
        "name": "1º Semestre",
        "subjects": {
            "anatomy1": {
                "title": { "pt": "Anatomia I", "es": "Anatomía I" },
                "icon": "💀",
                "units": [
                    {
                        "id": "u_anatomy1_posicion",
                        "title": "Posição Anatômica e Planos",
                        "flashcards": [
                            { id: 1, question: { pt: "O que caracteriza a posição anatômica padrão?", es: "¿Qué caracteriza la posición anatómica estándar?" }, answer: { pt: "Corpo em pé, ereto, com membros superiores ao lado do corpo e palmas das mãos voltadas para frente.", es: "Cuerpo de pie, erguido, con los miembros superiores a los lados del cuerpo y las palmas de las manos hacia adelante." } },
                            { id: 2, question: { pt: "Como ficam as palmas das mãos na posição anatômica?", es: "¿Cómo se orientan las palmas de las manos en la posición anatómica?" }, answer: { pt: "Voltadas anteriormente.", es: "Orientadas anteriormente." } },
                            { id: 3, question: { pt: "Para que serve a posição anatômica?", es: "¿Para qué sirve la posición anatómica?" }, answer: { pt: "Padronizar a descrição das estruturas do corpo humano.", es: "Normalizar la descripción de las estructuras del cuerpo humano." } },
                            { id: 4, question: { pt: "A posição anatômica considera o corpo em movimento?", es: "¿La posición anatómica considera el cuerpo en movimiento?" }, answer: { pt: "Não, considera o corpo em posição fixa e padronizada.", es: "No, considera el cuerpo en una posición fija y estandarizada." } },
                            { id: 5, question: { pt: "Como a cabeça se encontra na posição anatômica?", es: "¿Cómo se encuentra la cabeza en la posición anatómica?" }, answer: { pt: "Erguida, com o olhar direcionado para frente.", es: "Erguida, con la mirada dirigida hacia adelante." } },
                            { id: 6, question: { pt: "Como ficam os membros inferiores na posição anatômica?", es: "¿Cómo están los miembros inferiores en la posición anatómica?" }, answer: { pt: "Estendidos, com os pés paralelos e voltados para frente.", es: "Extendidos, con los pies paralelos y orientados hacia adelante." } },
                            { id: 7, question: { pt: "A posição anatômica varia entre indivíduos?", es: "¿La posición anatómica varía entre individuos?" }, answer: { pt: "Não, é a mesma para todos.", es: "No, es la misma para todos." } },
                            { id: 8, question: { pt: "Qual a importância clínica da posição anatômica?", es: "¿Cuál es la importancia clínica de la posición anatómica?" }, answer: { pt: "Evitar erros na localização e descrição das estruturas corporais.", es: "Evitar errores en la localización y descripción de las estructuras corporales." } },
                            { id: 9, question: { pt: "A posição anatômica é usada em quais áreas?", es: "¿En qué áreas se utiliza la posición anatómica?" }, answer: { pt: "Em todas as áreas da saúde.", es: "En todas las áreas de la salud." } },
                            { id: 10, question: { pt: "A posição anatômica muda conforme o exame físico?", es: "¿La posición anatómica cambia según el examen físico?" }, answer: { pt: "Não, ela é sempre a referência padrão.", es: "No, siempre es la referencia estándar." } },
                            { id: 11, question: { pt: "Qual plano divide o corpo em direita e esquerda?", es: "¿Qué plano divide el cuerpo en derecha e izquierda?" }, answer: { pt: "Plano sagital.", es: "Plano sagital." } },
                            { id: 12, question: { pt: "Qual plano divide o corpo em anterior e posterior?", es: "¿Qué plano divide el cuerpo en anterior y posterior?" }, answer: { pt: "Plano frontal (coronal).", es: "Plano frontal (coronal)." } },
                            { id: 13, question: { pt: "Qual plano divide o corpo em superior e inferior?", es: "¿Qué plano divide el cuerpo en superior e inferior?" }, answer: { pt: "Plano transversal (horizontal).", es: "Plano transversal (horizontal)." } },
                            { id: 14, question: { pt: "Qual plano é mais utilizado na tomografia axial?", es: "¿Qué plano es el más utilizado en la tomografía axial?" }, answer: { pt: "Plano transversal.", es: "Plano transversal." } },
                            { id: 15, question: { pt: "O que é o plano sagital mediano?", es: "¿Qué es el plano sagital medio?" }, answer: { pt: "Plano que divide o corpo em duas metades iguais, direita e esquerda.", es: "Plano que divide el cuerpo en dos mitades iguales, derecha e izquierda." } },
                            { id: 16, question: { pt: "Qual plano não é considerado anatômico clássico?", es: "¿Qué plano no se considera anatómico clásico?" }, answer: { pt: "Plano oblíquo.", es: "Plano oblicuo." } },
                            { id: 17, question: { pt: "O plano frontal também é chamado de quê?", es: "¿Cómo se llama también el plano frontal?" }, answer: { pt: "Plano coronal.", es: "Plano coronal." } },
                            { id: 18, question: { pt: "O plano transversal também pode ser chamado de quê?", es: "¿Cómo se llama también el plano transversal?" }, answer: { pt: "Plano horizontal.", es: "Plano horizontal." } },
                            { id: 19, question: { pt: "O que caracteriza o plano oblíquo?", es: "¿Qué caracteriza al plano oblicuo?" }, answer: { pt: "Corte inclinado em relação aos planos anatômicos clássicos.", es: "Corte inclinado en relación con los planos anatómicos clásicos." } },
                            { id: 20, question: { pt: "Qual plano é mais usado para cortes laterais do encéfalo?", es: "¿Qué plano se usa más para los cortes laterales del encéfalo?" }, answer: { pt: "Plano sagital.", es: "Plano sagital." } },
                            { id: 21, question: { pt: "Qual plano separa frente e costas do corpo?", es: "¿Qué plano separa el frente y la espalda del cuerpo?" }, answer: { pt: "Plano frontal.", es: "Plano frontal." } },
                            { id: 22, question: { pt: "O plano sagital pode ser classificado de que forma?", es: "¿De qué forma se puede clasificar el plano sagital?" }, answer: { pt: "Mediano ou parasagital.", es: "Medial o parasagital." } },
                            { id: 23, question: { pt: "Qual plano é perpendicular ao plano sagital?", es: "¿Qué plano es perpendicular ao plano sagital?" }, answer: { pt: "Plano frontal.", es: "Plano frontal." } },
                            { id: 24, question: { pt: "Qual plano é perpendicular ao plano frontal?", es: "¿Qué plano es perpendicular al plano frontal?" }, answer: { pt: "Plano sagital.", es: "Plano sagital." } },
                            { id: 25, question: { pt: "Qual plano é mais utilizado em ressonância magnética axial?", es: "¿Qué plano se usa más en la resonancia magnética axial?" }, answer: { pt: "Plano transversal.", es: "Plano transversal." } },
                            { id: 26, question: { pt: "O que significa anterior?", es: "¿Qué significa anterior?" }, answer: { pt: "Estrutura localizada à frente.", es: "Estructura localizada al frente." } },
                            { id: 27, question: { pt: "O que significa posterior?", es: "¿Qué significa posterior?" }, answer: { pt: "Estrutura localizada atrás.", es: "Estructura localizada detrás." } },
                            { id: 28, question: { pt: "O que significa superior?", es: "¿Qué significa superior?" }, answer: { pt: "Estrutura situada acima.", es: "Estructura situada por encima." } },
                            { id: 29, question: { pt: "O que significa inferior?", es: "¿Qué significa inferior?" }, answer: { pt: "Estrutura situada abaixo.", es: "Estructura situada por debajo." } },
                            { id: 30, question: { pt: "O que significa medial?", es: "¿Qué significa medial?" }, answer: { pt: "Estrutura próxima ao plano mediano.", es: "Estructura cercana al plano medial." } },
                            { id: 31, question: { pt: "O que significa lateral?", es: "¿Qué significa lateral?" }, answer: { pt: "Estrutura afastada do plano mediano.", es: "Estructura alejada del plano medial." } },
                            { id: 32, question: { pt: "O que significa proximal?", es: "¿Qué significa proximal?" }, answer: { pt: "Estrutura mais próxima da origem do membro.", es: "Estructura más cercana al origen del miembro." } },
                            { id: 33, question: { pt: "O que significa distal?", es: "¿Qué significa distal?" }, answer: { pt: "Estrutura mais distante da origem do membro.", es: "Estructura más alejada del origen del miembro." } },
                            { id: 34, question: { pt: "O que significa superficial?", es: "¿Qué significa superficial?" }, answer: { pt: "Estrutura próxima à superfície do corpo.", es: "Estructura cercana a la superficie del cuerpo." } },
                            { id: 35, question: { pt: "O que significa profundo?", es: "¿Qué significa profundo?" }, answer: { pt: "Estrutura distante da superfície corporal.", es: "Estructura alejada de la superficie corporal." } },
                            { id: 36, question: { pt: "Qual termo indica proximidade do plano mediano?", es: "¿Qué término indica proximidad al plano medio?" }, answer: { pt: "Medial.", es: "Medial." } },
                            { id: 37, question: { pt: "Qual termo indica afastamento do plano mediano?", es: "¿Qué término indica alejamiento del plano medio?" }, answer: { pt: "Lateral.", es: "Lateral." } },
                            { id: 38, question: { pt: "Qual termo indica proximidade da raiz do membro?", es: "¿Qué término indica proximidad a la raíz del miembro?" }, answer: { pt: "Proximal.", es: "Proximal." } },
                            { id: 39, question: { pt: "Qual termo indica maior profundidade no corpo?", es: "¿Qué término indica mayor profundidad en el cuerpo?" }, answer: { pt: "Profundo.", es: "Profundo." } },
                            { id: 40, question: { pt: "Qual termo indica proximidade da pele?", es: "¿Qué término indica proximidad a la piel?" }, answer: { pt: "Superficial.", es: "Superficial." } },
                            { id: 41, question: { pt: "Qual termo indica posição acima de outra?", es: "¿Qué término indica una posición por encima de otra?" }, answer: { pt: "Superior.", es: "Superior." } },
                            { id: 42, question: { pt: "Qual termo indica posição abaixo de outra?", es: "¿Qué término indica una posición por debajo de otra?" }, answer: { pt: "Inferior.", es: "Inferior." } },
                            { id: 43, question: { pt: "O coração é medial ou lateral aos pulmões?", es: "¿El corazón es medial o lateral a los pulmones?" }, answer: { pt: "Medial.", es: "Medial." } },
                            { id: 44, question: { pt: "A pele é superficial ou profunda em relação aos músculos?", es: "¿La piel es superficial o profunda en relación con los músculos?" }, answer: { pt: "Superficial.", es: "Superficial." } },
                            { id: 45, question: { pt: "O cotovelo é proximal ou distal em relação ao ombro?", es: "¿El codo es proximal o distal en relación con el hombro?" }, answer: { pt: "Distal.", es: "Distal." } },
                            { id: 46, question: { pt: "O que é anatomia?", es: "¿Qué es la anatomía?" }, answer: { pt: "Ciência que estuda a forma e a estrutura do corpo humano.", es: "Ciencia que estudia la forma y la estructura del cuerpo humano." } },
                            { id: 47, question: { pt: "O que estuda a anatomia macroscópica?", es: "¿Qué estudia la anatomía macroscópica?" }, answer: { pt: "Estruturas visíveis a olho nu.", es: "Estructuras visibles a simple vista." } },
                            { id: 48, question: { pt: "O que estuda a anatomia microscópica?", es: "¿Qué estudia la anatomía microscópica?" }, answer: { pt: "Estruturas observadas ao microscópio.", es: "Estructuras observadas al microscopio." } },
                            { id: 49, question: { pt: "O que é anatomia sistêmica?", es: "¿Qué es la anatomía sistémica?" }, answer: { pt: "Estudo do corpo por sistemas.", es: "Estudio del cuerpo por sistemas." } },
                            { id: 50, question: { pt: "O que é anatomia regional?", es: "¿Qué es la anatomía regional?" }, answer: { pt: "Estudo das estruturas por regiões do corpo.", es: "Estudio de las estructuras por regiones del cuerpo." } },
                            { id: 51, question: { pt: "O que é anatomia clínica?", es: "¿Qué es la anatomía clínica?" }, answer: { pt: "Aplicação do conhecimento anatômico na prática médica.", es: "Aplicación del conocimiento anatómico en la práctica médica." } },
                            { id: 52, question: { pt: "Qual a importância da anatomia para a medicina?", es: "¿Cuál es la importancia de la anatomía para la medicina?" }, answer: { pt: "Fundamentar o diagnóstico, tratamento e procedimentos clínicos.", es: "Fundamentar el diagnóstico, tratamiento y procedimientos clínicos." } },
                            { id: 53, question: { pt: "Qual método clássico de estudo da anatomia?", es: "¿Cuál es el método clásico de estudio de la anatomía?" }, answer: { pt: "Dissecção de cadáveres.", es: "Disección de cadáveres." } },
                            { id: 54, question: { pt: "O que é dissecação?", es: "¿Qué es la disección?" }, answer: { pt: "Separação cuidadosa das estruturas anatômicas para estudo.", es: "Separación cuidadosa de las estructuras anatómicas para su estudio." } },
                            { id: 55, question: { pt: "O que é inspeção no exame físico?", es: "¿Qué es la inspección en el examen físico?" }, answer: { pt: "Observação visual do corpo.", es: "Observación visual del cuerpo." } },
                            { id: 56, question: { pt: "O que é palpação no exame físico?", es: "¿Qué é a palpação no exame físico?" }, answer: { pt: "Avaliação das estruturas por meio do tato.", es: "Evaluación de las estructuras mediante el tacto." } },
                            { id: 57, question: { pt: "A anatomia estuda estrutura, função ou ambas?", es: "¿La anatomía estudia la estructura, la función o ambas?" }, answer: { pt: "Principalmente a estrutura.", es: "Principalmente la estructura." } },
                            { id: 58, question: { pt: "Qual a relação entre anatomia e fisiologia?", es: "¿Cuál es la relación entre la anatomía y la fisiología?" }, answer: { pt: "A anatomia estuda a estrutura e a fisiologia estuda a função.", es: "La anatomía estudia la estructura y la fisiología estudia la función." } },
                            { id: 59, question: { pt: "A anatomia utiliza exames de imagem?", es: "¿La anatomía utiliza exámenes de imagen?" }, answer: { pt: "Sim, como TC, RM e radiografias.", es: "Sí, como TC, RM y radiografías." } },
                            { id: 60, question: { pt: "Qual a importância dos planos anatômicos?", es: "¿Cuál es la importancia de los planos anatómicos?" }, answer: { pt: "Permitir a descrição precisa das estruturas e cortes do corpo.", es: "Permitir la descripción precisa de las estructuras y cortes del cuerpo." } }
                        ]
                    }
                ]
            }
        }
    },
    "s3": { "name": "3º Semestre", "subjects": {} },
    "s4": { "name": "4º Semestre", "subjects": {} },
    "s5": { "name": "5º Semestre", "subjects": {} },
    "s6": { "name": "6º Semestre", "subjects": {} },
};

// Make it available globally if needed, or just let it define the const
if (typeof window !== 'undefined') {
    window.FLASHCARDS_DB = FLASHCARDS_DB;
}
