/* ==========================================================================
   LÓGICA E INTERACTIVIDAD DE AEROSTUDY (FASE 2)
   ========================================================================== */

// --- BASE DE DATOS DE CONTENIDO TÉCNICO COMPLETO (Módulos 1-4) ---
const moduleDatabase = {
    1: {
        title: "Principios de Vuelo: Aerodinámica y Control Técnico",
        subtitle: "CONCEPTOS INICIALES",
        indicator: "Módulo 1: Principios de Vuelo",
        instructorText: `
    <h3>1. Fundamentos Físicos del Vuelo</h3>
    <ul>
        <li><strong>Introducción:</strong> Este curso examina las leyes físicas fundamentales que rigen las fuerzas que actúan sobre una aeronave en vuelo y cómo estas afectan su performance.</li>
        <li><strong>Energía:</strong> Se define como la capacidad para realizar un trabajo. Existe como <strong>energía potencial</strong> (de posición, como una bola en la cima de un tobogán) y <strong>energía cinética</strong> (de movimiento, cuando la bola rueda hacia abajo).</li>
        <li><strong>Presión:</strong> Es la relación entre la fuerza aplicada y un área (<em>P = F/A</em>); a mayor área, menor es la presión y viceversa.</li>
        <li><strong>Gravedad:</strong> Es la fuerza de atracción que la Tierra ejerce sobre todo objeto con masa, tirando siempre hacia el centro del planeta con un valor promedio de 9.81 m/s².</li>
        <li><strong>Peso (Weight):</strong> Es la fuerza de gravedad actuando sobre la masa de un cuerpo, dirigida verticalmente hacia el centro de la Tierra a través del centro del avión.</li>
        <li><strong>Densidad (ρ):</strong> Es la cantidad de materia por unidad de volumen. El aire tiene masa y, por tanto, peso y fuerza, ejerciendo lo que conocemos como presión atmosférica.</li>
    </ul>

    <h3>2. La Atmósfera y Dinámica de Presiones</h3>
    <ul>
        <li><strong>Atmósfera Estándar (ISA):</strong> A nivel del mar tiene una temperatura de 15°C y una presión de 29.92 "Hg (1013.2 mb). La temperatura disminuye aproximadamente 2°C por cada 1,000 pies de ascenso.</li>
        <li><strong>Presión Estática:</strong> Se debe al peso de la atmósfera que presiona hacia abajo y se experimenta por igual en todas las direcciones.</li>
        <li><strong>Presión Dinámica:</strong> Es la presión causada por el movimiento del aire contra un cuerpo o del cuerpo a través del aire.</li>
        <li><strong>Presión Total:</strong> Es la suma de la estática y la dinámica. Al moverse el avión, la presión dinámica aumenta y la estática disminuye para que la total permanezca constante.</li>
        <li><strong>Propiedades del Aire:</strong> El aire es un fluido compresible con viscosidad (resistencia al flujo) y genera fricción cuando hay movimiento relativo entre superficies.</li>
    </ul>

    <h3>3. Aerodinámica y Teoría de la Sustentación</h3>
    <ul>
        <li><strong>Efecto Magnus:</strong> Explica cómo un cilindro o esfera giratoria en un fluido genera una fuerza ascendente debido a diferencias de presión creadas por la circulación del aire.</li>
        <li><strong>Flujo sobre Perfiles:</strong> El aire impacta el perfil en el punto de estancamiento frontal (punto A), se divide y vuelve a unirse en el borde de salida (punto B). La velocidad es máxima en la parte superior, lo que reduce la presión en esa zona.</li>
        <li><strong>Leyes de Fluidos:</strong> La Ley de Continuidad indica que al reducirse el área de un conducto (como un Tubo Venturi), la velocidad aumenta. El Principio de Bernoulli establece que al aumentar la velocidad de un fluido, su presión disminuye.</li>
        <li><strong>Generación de Sustentación:</strong> Se produce por dos acciones ligadas: el diferencial de presiones (Bernoulli) y el <em>downwash</em> o deflexión del aire hacia abajo que genera una reacción hacia arriba (3ª Ley de Newton).</li>
    </ul>

    <h3>4. Estructura de la Aeronave</h3>
    <ul>
        <li><strong>Fuselaje:</strong> Cuerpo central que aloja tripulación, carga y conecta alas y cola. Tipos: reticular (tubular antiguo), monocasco y semimonocasco (modernos).</li>
        <li><strong>Alas:</strong> Perfiles aerodinámicos y principales superficies sustentadoras. Configuraciones: ala alta, media o baja; monoplanos (un par) o biplanos (dos pares).</li>
        <li><strong>Empenaje (Cola):</strong> Incluye superficies fijas (estabilizador vertical/deriva y horizontal) y móviles (timón de dirección, elevador y compensadores).</li>
        <li><strong>Tren de Aterrizaje:</strong> Apoyo para rodaje y aterrizaje. Configuraciones: triciclo (rueda delantera) o convencional (rueda trasera). Puede ser fijo o retráctil.</li>
        <li><strong>Grupo Motopropulsor:</strong> Incluye el motor (genera energía y vacío) y la hélice, que convierte la rotación en empuje (thrust). El carenado (cowling) mejora el flujo de aire y enfría los cilindros.</li>
    </ul>

    <h3>5. Conceptos Avanzados de Vuelo</h3>
    <ul>
        <li><strong>Leyes de Newton:</strong>
            <ul>
                <li><strong>1ª Ley (Inercia):</strong> Un cuerpo sigue en su estado actual a menos que actúe una fuerza.</li>
                <li><strong>2ª Ley (F=ma):</strong> La aceleración es proporcional a la fuerza e inversa a la masa.</li>
                <li><strong>3ª Ley:</strong> Para cada acción hay una reacción igual y opuesta.</li>
            </ul>
        </li>
        <li><strong>Cuatro Fuerzas:</strong> Sustentación, Peso, Empuje y Resistencia. En vuelo recto y nivelado, estas fuerzas se cancelan entre sí y el avión está en equilibrio.</li>
        <li><strong>Geometría del Perfil:</strong> Partes: borde de ataque (redondeado) y borde de salida (punta). Cuerda: línea recta que une ambos bordes. Línea de curvatura media: equidistante entre extradós e intradós.</li>
        <li><strong>Ángulo de Ataque (AOA):</strong> Ángulo entre la cuerda y el viento relativo (dirección opuesta a la trayectoria de vuelo).</li>
        <li><strong>Centro de Presión (CP):</strong> Punto donde se concentra la sustentación efectiva; se mueve hacia adelante al aumentar el AOA.</li>
    </ul>

    <div class="technical-formula">
        <div class="formula-title">Ecuación Fundamental de la Sustentación</div>
        <div class="formula-content">
            Lift = ½ · ρ · V² · S · C<sub>L</sub>
        </div>
    </div>
    <p>La sustentación depende de la densidad del aire, la velocidad, la superficie alar y el coeficiente de sustentación.</p>

    <h3>6. Resistencia y Rendimiento</h3>
    <ul>
        <li><strong>Resistencia (Drag):</strong> Fuerza paralela al viento relativo que se opone al movimiento.
            <ul>
                <li><strong>Parásita:</strong> No ayuda al vuelo. Incluye fricción (rugosidad), forma (separación del flujo) e interferencia (unión de partes).</li>
                <li><strong>Inducida:</strong> Resultado de generar sustentación y la formación de vórtices de punta de ala.</li>
            </ul>
        </li>
        <li><strong>Vórtices:</strong> Flujos espirales que salen de las puntas de las alas; su intensidad aumenta si el avión es más pesado y lento.</li>
        <li><strong>Estela Turbulenta:</strong> Comienza al rotar en despegue y termina al tocar tierra; se clasifica por el MTOW en Ligero, Medio, Pesado y Súper Pesado.</li>
        <li><strong>Efecto Suelo:</strong> Reducción de la resistencia inducida por la cercanía de la superficie terrestre.</li>
        <li><strong>L/D Max:</strong> Punto de máxima eficiencia donde la relación sustentación/resistencia es mayor; corresponde al ángulo de ataque óptimo y a la velocidad de planeo (V<sub>g</sub>).</li>
    </ul>

    <h3>7. Control, Estabilidad y Maniobras</h3>
    <ul>
        <li><strong>Tendencias de Giro a la Izquierda:</strong> Causadas por la reacción del torque, el efecto tirabuzón, la precesión giroscópica y el Factor P (carga asimétrica de la hélice).</li>
        <li><strong>Ejes del Avión:</strong> Longitudinal (alabeo/alerones), Lateral (cabeceo/elevador) y Vertical (guiñada/timón de dirección). El ángulo de incidencia es el ángulo fijo de montaje del ala respecto al eje longitudinal.</li>
        <li><strong>Controles:</strong> Primarios (alerones, elevador, timón) y secundarios (flaps hipersustentadores, slats, slots, y compensadores para reducir presión en mandos).</li>
        <li><strong>Instrumentos:</strong> Velocímetro, horizonte artificial (actitud), altímetro (presión), indicador de rumbo, variómetro (VSI) y tacómetro (RPM del motor).</li>
        <li><strong>Principio de Pitch and Power:</strong> La actitud controla la velocidad y la potencia controla la altitud.</li>
        <li><strong>Pérdida (Stall):</strong> Ocurre al exceder el ángulo de ataque crítico, causando separación del flujo de aire; se recupera bajando la nariz.</li>
        <li><strong>Barrena (Spin):</strong> Pérdida agravada con autorrotación; se recupera con la técnica PARE (Potencia, Alerones, Rudder, Elevador).</li>
        <li><strong>Estabilidad:</strong> Cualidad para corregir perturbaciones. Puede ser estática (tendencia inicial) o dinámica (respuesta en el tiempo), y ambas pueden ser positivas, neutras o negativas.</li>
        <li><strong>Hidroplaneo Viscoso:</strong> Deslizamiento sobre una película de agua o aceite en la pista.</li>
    </ul>
`,
        
        doctrinalManual: "FAA-H-8083-25B – Pilot's Handbook of Aeronautical Knowledge",
        doctrinalText: `"La sustentación es el resultado de la aplicación combinada del Principio de Bernoulli y la Tercera Ley de Newton. El aire fluye más rápido sobre la superficie superior del ala, creando una presión menor, mientras que el ala deflexiona el aire hacia abajo, produciendo una reacción igual y opuesta hacia arriba."`,
        
        // --- Notas Doctrinales Complementarias (2 a 4 notas clave) ---
        doctrinalNotes: [
            {
                title: "Las Cuatro Fuerzas en Vuelo Recto y Nivelado",
                text: "En vuelo recto y nivelado a velocidad constante, las cuatro fuerzas (sustentación, peso, empuje y resistencia) están en equilibrio. La sustentación es igual al peso y el empuje es igual a la resistencia. (Capítulo 4 - PHAK)"
            },
            {
                title: "Importancia del Ángulo de Ataque",
                text: "El ángulo de ataque es el factor más importante en la generación de sustentación. La velocidad de pérdida (stall) está determinada por el ángulo de ataque crítico, no por la velocidad del aire. (Capítulo 5 - PHAK)"
            },
            {
                title: "Centro de Presión y Estabilidad",
                text: "A medida que aumenta el ángulo de ataque, el centro de presión se mueve hacia adelante. Esto afecta directamente la estabilidad longitudinal del avión. El piloto debe estar consciente de este comportamiento durante maniobras lentas."
            },
            {
                title: "Efecto Suelo y Rendimiento",
                text: "Cerca de la superficie, se reduce la resistencia inducida (efecto suelo), permitiendo al avión volar con menor ángulo de ataque y mayor eficiencia. Esto explica por qué el avión parece \"flotar\" durante el aterrizaje."
            }
        ],

        warningText: "Nunca intentes mantener la altitud o el rumbo a costa de aumentar el ángulo de ataque cerca de la velocidad de pérdida. Un stall inadvertido a baja altura es una de las principales causas de accidentes fatales en aviación general.",
                

        // --- BANCO DE 20 FLASHCARDS (Módulo 1) ---
        flashcards: [
            // Fáciles (1-5)
            { q: "¿Qué es la energía cinética en vuelo?", a: "Es la capacidad de realizar un trabajo debido al movimiento de una masa, expresada como la velocidad relativa del aire." },
            { q: "¿Qué es el ángulo de ataque (AOA)?", a: "El ángulo agudo formado de manera exacta entre la línea de cuerda del perfil aerodinámico y la dirección del viento relativo." },
            { q: "¿Cuáles son los tres ejes de rotación que pasan por el centro de gravedad (CG)?", a: "El eje longitudinal (alabeo/alerones), el eje lateral (cabeceo/elevador) y el eje vertical (guiñada/timón de dirección)." },
            { q: "¿Cómo se recupera una aeronave de una pérdida de sustentación (stall)?", a: "Liberando presión sobre el bastón o timón de mando (bajar nariz) para disminuir el ángulo de ataque por debajo del ángulo crítico." },
            { q: "¿Cuáles son los tres principales diseños estructurales de fuselaje?", a: "Estructura reticular o tubular (antigua), monocasco (soporte externo puro) y semimonocasco (esqueleto interno con recubrimiento)." },
            // Medias (6-15)
            { q: "¿Qué ocurre con las presiones estática y dinámica al acelerar en vuelo recto y nivelado?", a: "La presión dinámica incrementa y la presión estática disminuye en igual proporción, de modo que la presión total permanece constante." },
            { q: "¿Cómo explica la tercera ley de Newton la sustentación?", a: "El ala desvía el aire hacia abajo (deflexión o 'downwash'); por reacción igual y opuesta, el aire empuja el ala hacia arriba." },
            { q: "¿Por qué el Centro de Presión (CP) se desplaza hacia adelante al aumentar el ángulo de ataque?", a: "Porque la mayor inclinación del perfil alar concentra la distribución de bajas presiones más cerca del borde de ataque." },
            { q: "¿Qué mide el Coeficiente de Sustentación (CL) y cuándo alcanza su máximo valor?", a: "Indica la eficiencia del perfil aerodinámico; alcanza su valor máximo (CLMAX) en el ángulo de ataque crítico justo antes del stall." },
            { q: "¿Por qué la resistencia inducida disminuye a altas velocidades de vuelo?", a: "A altas velocidades se requiere un menor ángulo de ataque para generar sustentación, lo que debilita los vórtices de punta de ala." },
            { q: "¿Cuándo se inicia y cuándo termina la estela turbulenta de un avión pesado?", a: "Comienza exactamente al levantar la rueda de nariz en el despegue (rotación) y termina cuando el tren principal toca pista en el aterrizaje." },
            { q: "¿Por qué el efecto suelo reduce drásticamente la resistencia inducida?", a: "La cercanía a la superficie física terrestre interrumpe la formación normal de los vórtices de punta de ala y aminora el downwash." },
            { q: "¿Qué es la velocidad de planeo óptimo (Vg) y con qué se relaciona?", a: "Es la velocidad que ofrece la máxima relación sustentación/resistencia (L/D Max), permitiendo planear la mayor distancia con menor pérdida de altitud." },
            { q: "¿Cómo influye el Factor-P a altos ángulos de ataque con una hélice de giro horario?", a: "La pala derecha descendente genera más empuje que la izquierda ascendente por tener mayor AOA relativo, guiñando la nariz hacia la izquierda." },
            { q: "¿Qué componente de sustentación genera el viraje de un avión?", a: "La componente horizontal de la sustentación, la cual actúa directamente como fuerza centrípeta tirando de la aeronave hacia el centro del viraje." },
            // Difíciles (16-20)
            { q: "En una barrena (spin), ¿qué ala está en pérdida y cuál genera sustentación?", a: "Ambas alas están en pérdida (stall). Sin embargo, el ala interna está más profundamente bloqueada y genera menos sustentación y más resistencia." },
            { q: "Detalle la secuencia exacta de recuperación de una barrena (spin) bajo el acrónimo PARE.", a: "P: Potencia a ralentí (Idle). A: Alerones neutros. R: Timón de dirección (Rudder) al lado opuesto del giro. E: Elevador adelante para romper el stall." },
            { q: "Si realiza un viraje nivelado con 60° de banqueo, ¿cuál es el factor de carga en Gs y cómo afecta al stall?", a: "El factor de carga es de 2.0 Gs (1/cos(60°)), lo cual incrementa la velocidad de pérdida o stall en un 41% aproximadamente." },
            { q: "Compare la estabilidad estática positiva con la estabilidad dinámica positiva.", a: "La estática positiva es la tendencia inicial a regresar al equilibrio; la dinámica positiva es la respuesta en el tiempo que amortigua las oscilaciones." },
            { q: "Diferencie el hidroplaneo viscoso del dinámico y su dependencia de los neumáticos.", a: "El viscoso ocurre a baja velocidad sobre agua/aceite por neumático desgastado sin dibujo. El dinámico es a alta velocidad por cuña de agua; depende del inflado." }
        ]
    },
    2: {
        title: "Conocimientos generales del avíon",
        subtitle: "AVIÓNICA Y SISTEMAS",
        indicator: "Módulo 2: Conocimientos generales del avíon",
        instructorText: `
            <p>En este módulo estudiaremos los componentes principales de la aeronave, sus sistemas y cómo interactúan para permitir un vuelo seguro y eficiente. El conocimiento detallado de la estructura, controles, motor y sistemas auxiliares es fundamental para cualquier piloto.</p>
            
            <h3>I. ESTRUCTURA Y COMPONENTES EXTERNOS DEL AVIÓN</h3>
            
            <h4>Fuselaje</h4>
            <p>Es el cuerpo central de la aeronave. Su diseño tiene el propósito de albergar a la tripulación, los pasajeros y la carga, funcionando además como el punto de unión estructural para las alas y el empenaje de cola.</p>
            <ul>
                <li><strong>Tipos de estructura:</strong> Antiguamente se usaban estructuras reticulares o tubulares hechas de madera o acero. En la aviación moderna predominan las estructuras <strong>monocasco</strong> (donde el revestimiento soporta la mayor parte de la carga) y <strong>semimonocasco</strong> (donde el revestimiento está reforzado por larguerillos y cuadernas).</li>
            </ul>
            
            <h4>Alas</h4>
            <p>Son perfiles aerodinámicos diseñados para generar la fuerza de sustentación y soportar la resistencia al avance durante el vuelo.</p>
            <ul>
                <li><strong>Estructura interna:</strong> Poseen uno o más largueros que son las vigas principales encargadas de soportar las cargas de vuelo.</li>
                <li><strong>Configuraciones:</strong> Según su posición respecto al fuselaje, se clasifican en ala alta, ala media o ala baja. Además de generar sustentación, pueden alojar motores, tanques de combustible y superficies de control como los flaps.</li>
            </ul>
            
            <h4>Empenaje</h4>
            <p>Es la sección de cola del avión. Proporciona estabilidad y control. Está compuesto por partes fijas (estabilizador vertical y horizontal) y partes móviles (timón de dirección y timón de profundidad).</p>
            
            <h4>Tren de Aterrizaje</h4>
            <p>Es el soporte principal de la aeronave en tierra.</p>
            <ul>
                <li><strong>Configuraciones de ruedas:</strong> El tren triciclo posee una rueda de nariz, mientras que el tren convencional tiene una rueda en la cola.</li>
                <li><strong>Tipo de operación:</strong> Puede ser fijo (permanece extendido siempre) o retráctil (se guarda dentro del fuselaje o alas para reducir la resistencia aerodinámica).</li>
            </ul>
            
            <h4>Hélice</h4>
            <p>Es un perfil aerodinámico rotatorio montado en el motor. Su función es convertir la fuerza de rotación del motor en empuje, que es la fuerza de avance del avión.</p>
            <ul>
                <li><strong>Principio aerodinámico:</strong> Al girar, crea una zona de baja presión en su parte posterior y alta presión en su cara delantera, lo que genera un diferencial de presión que "tira" del avión hacia adelante.</li>
                <li><strong>Tipos de paso:</strong>
                    <ul>
                        <li><strong>Paso fijo:</strong> El ángulo de las palas se configura en la instalación y no cambia en vuelo; sacrifica eficiencia para poder operar en todas las fases (despegue, ascenso, crucero).</li>
                        <li><strong>Paso variable:</strong> Permite ajustar automáticamente el ángulo de las palas para mantener una velocidad de rotación constante, optimizando el uso de la potencia en cada situación.</li>
                    </ul>
                </li>
            </ul>
            
            <h3>II. CONTROLES DE VUELO</h3>
            <p>Los sistemas de control están diseñados para que el piloto tenga una sensación natural. A bajas velocidades los mandos se sienten suaves y la respuesta es lenta; a altas velocidades se vuelven firmes y la respuesta es rápida.</p>
            
            <h4>Controles Primarios</h4>
            <ol>
                <li><strong>Alerones:</strong> Ubicados en las alas, controlan el alabeo (inclinación lateral) sobre el eje longitudinal. Funcionan en oposición: si uno sube, el otro baja.</li>
                <li><strong>Timón de Profundidad (Elevador):</strong> Ubicado en la cola, controla el cabeceo (nariz arriba/abajo) sobre el eje lateral.</li>
                <li><strong>Timón de Dirección (Rudder):</strong> Ubicado en la cola, controla la guiñada (movimiento izquierda/derecha de la nariz) sobre el eje vertical.</li>
            </ol>
            
            <h4>Controles Secundarios</h4>
            <ol>
                <li><strong>Flaps:</strong> Son dispositivos hipersustentadores en el borde de salida del ala. Aumentan la curvatura del perfil alar para incrementar la sustentación y la resistencia inducida, permitiendo volar a velocidades más bajas. Pueden ser de tipo simple, partido, ranurado o Fowler.</li>
                <li><strong>Slats (móviles) y Slots (fijos):</strong> Dispositivos en el borde de ataque que dirigen el aire a la superficie superior para retrasar la separación del flujo en ángulos de ataque altos.</li>
                <li><strong>Compensador (Trim Tab):</strong> Pequeña aleta móvil en el elevador que ayuda a aliviar la presión que el piloto debe ejercer sobre los mandos.</li>
            </ol>
            
            <h3>III. GRUPO MOTOPROPULSOR Y MOTOR RECÍPROCO</h3>
            <p>El grupo motopropulsor incluye el motor y la hélice. Su tarea es generar empuje, energía eléctrica, vacío para instrumentos y calor para la cabina.</p>
            
            <h4>Motor Alternativo o Recíproco</h4>
            <p>Funciona convirtiendo energía química (combustible) en calorífica (combustión) y luego en mecánica.</p>
            <ul>
                <li><strong>Componentes:</strong> Cilindros, pistones, bielas, cigüeñal, válvulas (admisión y escape) y bujías.</li>
                <li><strong>Mecanismo de válvulas:</strong> El árbol de levas recibe movimiento del cigüeñal y acciona un botador que empuja una varilla y esta a un balancín, el cual abre la válvula venciendo la presión de sus resortes.</li>
            </ul>
            
            <h4>Ciclo Otto (Cuatro Tiempos)</h4>
            <ol>
                <li><strong>Admisión:</strong> El pistón baja, la válvula de admisión se abre y entra la mezcla de aire/combustible.</li>
                <li><strong>Compresión:</strong> Las válvulas se cierran, el pistón sube y aprieta la mezcla para aumentar la potencia de la explosión.</li>
                <li><strong>Explosión (Potencia):</strong> La chispa de la bujía enciende la mezcla; el aumento de presión empuja el pistón hacia abajo, haciendo girar el cigüeñal.</li>
                <li><strong>Escape:</strong> La válvula de escape abre y el pistón sube para purgar los gases quemados.</li>
            </ol>
            
            <h4>Combustión Anormal</h4>
            <ul>
                <li><strong>Detonación:</strong> Ignición explosiva descontrolada. Causada por combustible de bajo octanaje, mezclas muy pobres con alta potencia o sobrecalentamiento del cilindro.</li>
                <li><strong>Pre-ignición:</strong> La mezcla se enciende antes de la chispa normal debido a un "punto caliente" (carbón o metal incandescente) en la cámara de combustión.</li>
            </ul>
            
            <h3>IV. SISTEMAS DE INDUCCIÓN, ACEITE Y REFRIGERACIÓN</h3>
            
            <h4>Sistema de Inducción</h4>
            <p>Introduce aire exterior, lo mezcla con combustible y lo lleva a los cilindros.</p>
            <ol>
                <li><strong>Carburador:</strong> Usa un tubo Venturi para crear baja presión y succionar combustible hacia la corriente de aire.
                    <ul>
                        <li><strong>Sistema de ralentí:</strong> Proporciona combustible cuando la mariposa está cerrada mediante un pulverizador auxiliar.</li>
                        <li><strong>Bomba aceleradora:</strong> Envía combustible extra durante aceleraciones bruscas para evitar que la mezcla se debilite.</li>
                        <li><strong>Calefacción (Carb Heat):</strong> Usa el calor de los gases de escape en el silenciador (muffler) para calentar aire libre que entra al carburador para derretir o prevenir hielo.</li>
                    </ul>
                </li>
                <li><strong>Inyección de Combustible:</strong> El combustible se inyecta directamente antes de la válvula de admisión o en el cilindro, ofreciendo mayor precisión que el carburador.</li>
            </ol>
            
            <h4>Sistema de Aceite</h4>
            <p><strong>Funciones críticas:</strong> lubricación, enfriamiento por reducción de fricción, extracción de calor de los cilindros, sello hermético entre pistón y pared, y limpieza de contaminantes.</p>
            <ul>
                <li><strong>Cárter Húmedo:</strong> El aceite está en un depósito integral al motor.</li>
                <li><strong>Cárter Seco:</strong> El aceite está en un tanque separado y circula mediante bombas.</li>
                <li><strong>Viscosidad:</strong> El aceite grueso (más viscoso) fluye lento; el delgado fluye rápido. Debe ser la adecuada para el rango de temperatura del motor.</li>
            </ul>
            
            <h4>Sistema de Refrigeración</h4>
            <p>Evita el sobrecalentamiento que causaría pérdida de potencia y daños graves. La mayoría de aviones se enfrían por aire: este entra tras la hélice y es guiado por tabiques (baffles) hacia las aletas de los cilindros para disipar el calor.</p>
            
            <h3>V. SISTEMAS ELÉCTRICOS, COMBUSTIBLE Y AUXILIARES</h3>
            
            <h4>Sistema Eléctrico</h4>
            <p>Compuesto por un alternador (produce energía en marcha) y una batería (para el arranque y emergencia).</p>
            <ul>
                <li><strong>Distribución:</strong> La barra de bus actúa como terminal común para distribuir energía a todos los equipos de forma simplificada.</li>
                <li><strong>Protección:</strong> Se usan fusibles e interruptores térmicos (circuit breakers) para evitar daños por sobrecargas.</li>
                <li><strong>Amperímetro:</strong> Supervisa si el alternador produce energía y si la batería se está cargando.</li>
            </ul>
            
            <h4>Sistema de Combustible</h4>
            <p>Suministra flujo ininterrumpido desde los depósitos.</p>
            <ul>
                <li><strong>Componentes:</strong> Tanques (con tabiques/baffles para evitar movimiento brusco del líquido), venteo (para mantener presión), drenajes (para sacar agua/sedimentos), filtro y válvula selectora.</li>
                <li><strong>Primer (Cebador):</strong> Bomba manual que inyecta combustible vaporizado directamente en los cilindros para facilitar el arranque en frío.</li>
            </ul>
            
            <h4>Sistemas de Soporte</h4>
            <ul>
                <li><strong>Sistema Hidráulico:</strong> Se usa principalmente para los frenos, donde pastillas aprietan un disco giratorio mediante presión de fluido.</li>
                <li><strong>Sistema de Vacío:</strong> Una bomba aspira aire, lo filtra y lo hace pasar por los álabes de los giróscopos de actitud y rumbo para hacerlos girar a alta velocidad.</li>
            </ul>
            
            <h3>VI. INSTRUMENTOS DE VUELO</h3>
            
            <h4>Sistema Pitot-Estática</h4>
            <p>Utiliza presiones de aire captadas externamente.</p>
            <ol>
                <li><strong>Tubo Pitot:</strong> Capta la presión de impacto. Alimenta únicamente al Velocímetro (ASI).</li>
                <li><strong>Toma Estática:</strong> Abertura en el fuselaje que mide la presión ambiental. Es vital para el ASI, el Altímetro y el VSI.
                    <ul>
                        <li><strong>Altímetro:</strong> Indica altitud mediante presión estática atrapada.</li>
                        <li><strong>VSI (Indicador de Velocidad Vertical):</strong> Indica ascenso/descenso comparando la presión estática directa en un diafragma contra la presión retardada por un orificio calibrado en su caja.</li>
                        <li><strong>ASI:</strong> Muestra velocidad midiendo la diferencia entre presión pitot y estática. Tiene arcos de color: blanco (flaps), verde (normal), amarillo (precaución) y línea roja (Vne - nunca exceder).</li>
                    </ul>
                </li>
            </ol>
            
            <h4>Instrumentos Giroscópicos</h4>
            <p>Operan bajo los principios de <strong>rigidez en el espacio</strong> (mantener posición fija) y <strong>precesión</strong> (reacción a una fuerza 90° después del punto de impacto).</p>
            <ul>
                <li><strong>Indicador de Rumbo:</strong> Facilita la navegación al mostrar rumbos en 360° sin los errores de oscilación de la brújula.</li>
                <li><strong>Indicador de Actitud (Horizonte Artificial):</strong> Muestra la relación del avión con el horizonte verdadero.</li>
                <li><strong>Coordinador de Giro e Inclinómetro:</strong> La bola del inclinómetro muestra la guiñada; para un viraje coordinado, el piloto debe "pisar la bola" con el pedal del timón.</li>
            </ul>
            
            <h4>Instrumentos Magnéticos</h4>
            <ul>
                <li><strong>Compás Magnético:</strong> Imanes alineados con el campo magnético de la Tierra.</li>
                <li><strong>Errores:</strong> Sufre de variación (diferencia entre norte verdadero y magnético) y de oscilación (movimiento de la tarjeta por turbulencia o maniobras).</li>
            </ul>
        `,

        doctrinalManual: "FAA Instrument Flying Handbook",
        doctrinalText: `"Es imperativo comprobar la operación del indicador de actitud (horizonte artificial) durante el rodaje previo al despegue. No debe inclinarse más de 5 grados durante los virajes rápidos en el suelo. Una falla de la bomba de vacío puede desactivar los instrumentos giroscópicos principales de forma gradual y silenciosa, induciendo desorientación espacial si no se detecta a tiempo."`,
        warningText: "Un pitot obstruido invalidará por completo las lecturas del velocímetro. Si la entrada de aire dinámico está bloqueada pero el drenaje está abierto, el velocímetro marcará cero. Si ambos están obstruidos, actuará como un altímetro erróneo.",
        


        // --- BANCO DE 20 FLASHCARDS (Módulo 2) ---
        flashcards: [
            { q: "¿Qué instrumentos usan presión estática?", a: "El Altímetro, el velocímetro y el VSI (indicador de velocidad vertical)." },
            { q: "¿Qué instrumento usa presión del pitot?", a: "Únicamente el Velocímetro requiere presión del pitot (dinámica) para marcar velocidad." },
            { q: "¿Cómo mide la altura el altímetro?", a: "Compara la presión estática atmosférica ambiental en el exterior con una presión sellada de referencia." },
            { q: "¿Qué mide el indicador de velocidad vertical?", a: "La tasa de cambio (ascenso o descenso) de la presión estática en pies por minuto." },
            { q: "¿Qué es la velocidad indicada (IAS)?", a: "La lectura de velocidad leída cruda en la carátula, sin corregir errores instrumentales." },
            { q: "¿Qué es la velocidad calibrada (CAS)?", a: "La velocidad indicada corregida por errores de posición o distorsión del tubo de pitot." },
            { q: "¿Qué es la velocidad verdadera (TAS)?", a: "Velocidad física de la aeronave con respecto a la masa de aire; corrige temperatura y altitud." },
            { q: "¿Qué es la velocidad respecto al suelo (GS)?", a: "Velocidad de avance real del avión sobre el terreno (TAS sumada/restada al viento)." },
            { q: "¿Qué delimita el arco blanco del velocímetro?", a: "Rango de velocidades seguras de operación del avión con los flaps completamente extendidos." },
            { q: "¿Qué delimita el arco verde del velocímetro?", a: "El rango de velocidades estándar y seguras para la operación de vuelo normal." },
            { q: "¿Qué indica la línea roja en el velocímetro?", a: "Velocidad de nunca exceder (Vne). Si se cruza, peligra la integridad estructural." },
            { q: "¿Qué principio rige al horizonte artificial?", a: "Rigidez en el espacio: un giroscopio giratorio libre tiende a retener su posición fija." },
            { q: "¿Qué principio rige al giroscopio direccional?", a: "Rigidez en el espacio: mantiene una referencia de rumbo constante y evita oscilaciones magnéticas." },
            { q: "¿Cómo opera el coordinador de giros?", a: "Emplea el principio de precesión giroscópica para indicar inclinación lateral y tasa de viraje." },
            { q: "¿Qué es un viraje estándar estándar?", a: "Un viraje donde la aeronave cambia de rumbo a razón de 3 grados por segundo (360° en 2 min)." },
            { q: "¿Qué indica la bola descentrada a la izquierda?", a: "Indica un derrape (skid): la fuerza centrífuga empuja el avión fuera del viraje." },
            { q: "¿Qué indica la bola descentrada a la derecha?", a: "Indica un deslizamiento (slip): el avión se cae al interior del viraje por falta de guiñada." },
            { q: "¿Cómo afecta un bloqueo del puerto estático?", a: "El altímetro se bloquea permanentemente y el VSI indicará cero permanentemente." },
            { q: "¿Cómo se alimentan típicamente los giroscopios?", a: "Horizonte e indicador de rumbo por bomba de vacío mecánica; coordinador de giros es eléctrico." },
            { q: "¿Qué es el error de desviación magnética?", a: "Error de brújula causado por campos magnéticos locales del metal del motor y la aviónica." }
        ]
    },
    3: {
        title: "Meteorología Aeronáutica: Atmósfera y Fenómenos Peligrosos",
        subtitle: "CIENCIA DEL CLIMA",
        indicator: "Módulo 3: Meteorología Aeronáutica",
        instructorText: `
            <p>La atmósfera es el medio fluido en el que opera la aeronave. Comprender sus propiedades dinámicas es crítico para planificar vuelos seguros y predecir condiciones meteorológicas adversas.</p>
            <p>La aviación utiliza la <strong>Atmósfera Estándar Internacional (ISA)</strong> como modelo de calibración. A nivel del mar, la ISA establece una temperatura estándar de 15°C (59°F) y una presión barométrica de 29.92 pulgadas de mercurio (inHg) o 1013.25 hectopascales (hPa). Con la altitud, la presión y la temperatura decrecen a ritmos conocidos (el gradiente térmico promedio es de 2°C o 3.5°F por cada 1,000 pies de ascenso).</p>
            <div class="technical-formula">
                <div class="formula-title">Gradiente Presión / Altitud ISA Estándar</div>
                <div class="formula-content">
                    ΔP ≈ -1 inHg por cada 1,000 pies de altitud ganada
                </div>
            </div>
            <p>Los fenómenos de mayor riesgo operacional incluyen la <strong>cizalladura del viento (windshear)</strong>, que consiste en variaciones repentinas en dirección o velocidad del viento en distancias cortas, y las formaciones de nubes convectivas como los <strong>Cumulonimbus</strong>. Estas últimas albergan corrientes de aire verticales extremas, granizo de gran tamaño, descargas eléctricas y turbulencia severa capaz de comprometer la integridad estructural de la aeronave.</p>
        `,

        doctrinalManual: "FAA Advisory Circular AC 00-6B",
        doctrinalText: `"El hielo estructural en vuelo (icing) es uno de los mayores peligros para aeronaves de aviación general sin sistemas de deshielo aprobados. La acumulación ocurre al volar en humedad visible (nubes o lluvia) con temperaturas cercanas o por debajo de los 0°C. La formación altera drásticamente la aerodinámica al reducir la sustentación y triplicar la resistencia."`,
        warningText: "Nunca vuele bajo sospecha de tormentas convectivas activas o cumulonimbus. Mantenga una distancia prudente de al menos 20 millas náuticas, ya que las corrientes descendentes destructivas pueden presentarse en aire completamente despejado.",
        
        // --- MICRO MAPA CONCEPTUAL (Módulo 3) ---
        conceptMap: {
            title: "Desarrollo de Tormentas (Cumulonimbus)",
            nodes: [
                { header: "1. Aire Inestable y Humedad", body: "Suelo caliente calienta el aire, forzándolo a ascender cargado de humedad." },
                { header: "2. Fase Cumulonimbus", body: "Condensación violenta crea nubes con enormes corrientes ascendentes." },
                { header: "3. Peligros de Aviación", body: "Turbulencia severa, cizalladura súbita (windshear) e icing estructural." }
            ]
        },

        // --- BANCO DE 20 FLASHCARDS (Módulo 3) ---
        flashcards: [
            { q: "¿Qué es la tropósfera?", a: "La capa inferior de la atmósfera donde ocurre todo el clima y la temperatura disminuye con la altitud." },
            { q: "¿Cuáles son las condiciones estándar ISA?", a: "A nivel del mar: Temperatura de 15°C (59°F) y presión de 29.92 inHg (1013.25 hPa)." },
            { q: "¿Cuál es el gradiente térmico ISA estándar?", a: "Un decrecimiento de 2°C (3.5°F) por cada 1,000 pies de incremento de altitud." },
            { q: "¿Cuál es el gradiente de presión ISA estándar?", a: "La presión decae a razón de aproximadamente 1 inHg por cada 1,000 pies de ascenso." },
            { q: "¿Qué es el punto de rocío (Dew Point)?", a: "La temperatura a la cual el aire se enfría hasta saturarse y comenzar la condensación del vapor." },
            { q: "¿Qué pasa si se igualan la temperatura y rocío?", a: "Se llega a una humedad relativa del 100%, formando neblina, niebla o nubes bajas." },
            { q: "¿Cómo se forma la niebla de radiación?", a: "El suelo se enfría rápidamente por radiación térmica en noches despejadas, enfriando el aire contiguo." },
            { q: "¿Cómo se forma la niebla de advección?", a: "Una masa de aire cálido y con alta humedad se desliza sobre un terreno o mar más frío." },
            { q: "¿Qué indica un viento racheado (Gusts)?", a: "Fluctuaciones súbitas y rápidas en la velocidad del viento, indicando turbulencia local." },
            { q: "¿Qué define a la cizalladura (Windshear)?", a: "Cambio drástico e imprevisto en dirección y/o velocidad del viento en una distancia corta." },
            { q: "¿Qué es un microburst (micro ráfaga)?", a: "Una corriente descendente de viento de alta intensidad, que dura poco y es muy destructiva." },
            { q: "¿Qué elementos requiere una tormenta?", a: "Humedad abundante, aire altamente inestable y un mecanismo impulsor (elevador de aire)." },
            { q: "¿Cuáles son las fases de una tormenta?", a: "Cúmulo (desarrollo inicial), Madurez (lluvia y corrientes mixtas) y Disipación (aire frío descendente)." },
            { q: "¿Qué causa la turbulencia mecánica?", a: "El flujo de aire choca físicamente contra cerros, cerros, bosques u obstáculos artificiales." },
            { q: "¿Qué causa la turbulencia térmica?", a: "Corrientes convectivas verticales causadas por el calentamiento solar desigual del terreno." },
            { q: "¿Qué es el hielo claro (Clear Ice)?", a: "Hielo translúcido pesado que se forma cuando gotas superenfriadas grandes corren lentamente antes de congelarse." },
            { q: "¿Qué es la escarcha de impacto (Rime Ice)?", a: "Hielo blanquecino rugoso formado por gotas pequeñas superenfriadas que se congelan instantáneamente." },
            { q: "¿Qué es una inversión térmica?", a: "Fenómeno meteorológico donde el aire superior está más caliente que el inferior, causando alta estabilidad." },
            { q: "¿Qué nubes denotan alta inestabilidad?", a: "Nubes de desarrollo vertical notable como los Cúmulos (Cumulus) y Cúmulonimbos." },
            { q: "¿Qué nubes denotan alta estabilidad?", a: "Nubes de extensión horizontal estratiformes con lluvias débiles pero continuas." }
        ]
    },
    4: {
        title: "Navegación Aérea: Cartografía, VOR y Cálculos de Vuelo",
        subtitle: "PLANIFICACIÓN VFR",
        indicator: "Módulo 4: Navegación Aérea",
        instructorText: `
            <p>La navegación aérea consiste en guiar una aeronave desde un punto de origen hacia un destino de forma precisa, segura y oportuna. Se fundamenta en tres metodologías complementarias: el pilotaje (referencias terrestres), la navegación estimada (cálculo de tiempos, velocidades y consumo) y la radio-navegación (uso de VOR, GPS y NDB).</p>
            <p>Un pilar fundamental de la navegación es la corrección del efecto del viento. El viento empuja a la aeronave lateralmente, por lo que el piloto debe calcular un <strong>Ángulo de Corrección de Deriva (WCA)</strong> para mantener el rumbo de la ruta trazada sobre el suelo (Track). Asimismo, se debe dominar la conversión entre rumbos verdaderos y magnéticos.</p>
            <div class="technical-formula">
                <div class="formula-title">Ecuación de Rumbos (Variación Magnética)</div>
                <div class="formula-content">
                    Rumbo Magnético (MH) = Rumbo Verdadero (TH) ± Variación Magnética (VAR)
                </div>
            </div>
            <p>La radio-navegación clásica emplea el sistema <strong>VOR (VHF Omnidirectional Range)</strong>. La estación emite señales en 360 grados (radiales). El piloto sintoniza la frecuencia del VOR en su receptor, selecciona la radial deseada en el CDI (indicador de desviación de curso) y vuela guiándose por el centrado de la aguja con indicaciones claras de procedencia 'TO' (Hacia) o 'FROM' (Desde).</p>
        `,

        doctrinalManual: "Aeronautical Information Manual (AIM)",
        doctrinalText: `"Al realizar navegación de estima, calcule siempre puntos de chequeo visuales a intervalos de 10 a 15 millas. Mantenga al día sus registros de combustible en vuelo y compare el consumo real con el estimado. La variación magnética (declinación) se actualiza periódicamente en las cartas seccionales VFR mediante líneas isogónicas."`,
        warningText: "La precisión del GPS es asombrosa, pero jamás dependa de un solo dispositivo electrónico de consumo comercial. Mantenga siempre a mano cartas seccionales impresas de navegación visual VFR del área y trace la ruta física por seguridad.",
        


        // --- BANCO DE 20 FLASHCARDS (Módulo 4) ---
        flashcards: [
            { q: "¿Qué es una línea isogónica?", a: "Línea trazada en cartas aeronáuticas que une puntos con idéntica variación o declinación magnética." },
            { q: "¿Qué es una línea agónica?", a: "Una línea isogónica de valor cero, donde el norte verdadero coincide exactamente con el magnético." },
            { q: "¿Qué es la variación magnética?", a: "La diferencia de grados entre la dirección del norte geográfico verdadero y el norte magnético terrestre." },
            { q: "¿Qué define al Pilotaje?", a: "Navegación visual que compara accidentes geográficos terrestres (ej. carreteras, ríos) con la carta seccional." },
            { q: "¿Qué define a la Navegación Estimada?", a: "Navegación basada en cálculos matemáticos de velocidad, tiempo de vuelo y rumbo sobre el mapa." },
            { q: "¿Qué es el Rumbo Verdadero (TH)?", a: "La dirección geográfica verdadera hacia donde apunta la nariz del avión en vuelo." },
            { q: "¿Qué es la Ruta Verdadera (TC)?", a: "Trayecto o curso teórico que se marca directamente sobre la carta seccional con una regla." },
            { q: "¿Qué es el viento relativo?", a: "Flujo de aire generado por el movimiento del avión, con dirección paralela y sentido opuesto al vuelo." },
            { q: "¿Cómo corrige el piloto el viento lateral?", a: "Calcula el ángulo de deriva (WCA) y ajusta la dirección de la nariz del avión contra el viento." },
            { q: "¿Qué es el sistema VOR?", a: "Estación de radio en tierra que emite 360 radiales en frecuencias VHF, permitiendo guiar rumbos." },
            { q: "¿Qué frecuencia utiliza el VOR?", a: "Opera en la banda de ondas métricas (VHF), en el rango de frecuencias de 108.00 a 117.95 MHz." },
            { q: "¿Qué significan las siglas CDI?", a: "Course Deviation Indicator, la aguja vertical que indica si la aeronave está centrada en la radial seleccionada." },
            { q: "¿Qué muestra la indicación 'TO'?", a: "Indica que volar la radial del instrumento te llevará de frente hacia la estación VOR." },
            { q: "¿Qué muestra la indicación 'FROM'?", a: "Indica que el avión está volando en curso de alejamiento respecto de la estación en tierra." },
            { q: "¿Qué es el 'Cono de Confusión'?", a: "Área sin señal o inestable directamente arriba de la estación VOR donde el instrumento fluctúa." },
            { q: "¿Qué es el Ángulo de Corrección de Deriva (WCA)?", a: "El ángulo necesario a corregir respecto al viento para que la ruta terrestre sea recta." },
            { q: "¿Qué mide un equipo DME?", a: "Distance Measuring Equipment, mide la distancia oblicua en línea recta de la antena al receptor del avión." },
            { q: "¿Cómo funciona la navegación GPS?", a: "Calcula la posición exacta mediante triangulación de tiempos de señal emitidos por múltiples satélites." },
            { q: "¿Cuántos satélites se ocupan para posición 2D?", a: "Mínimo 3 satélites activos visibles para trazar coordenadas en latitud y longitud." },
            { q: "¿Cuántos satélites se ocupan para posición 3D?", a: "Mínimo 4 satélites visibles para computar de forma exacta latitud, longitud y altitud." }
        ]
    }
};

// --- VARIABLES GLOBALES DE PAGINACIÓN ---
let currentModule = 1;
let currentPage = 1;
const cardsPerPage = 4; // 4 Flashcards por página para la cuadrícula 1/2/4 responsiva

// --- ELEMENTOS DEL DOM ---
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const modulesList = document.getElementById('modules-list');

// Elementos de Contenido General
const currentModIndicator = document.getElementById('current-mod-indicator');
const instructorSubtitle = document.getElementById('instructor-subtitle');
const instructorTitle = document.getElementById('instructor-module-title');
const instructorTextBody = document.getElementById('instructor-text-body');
const illustrationContainer = document.getElementById('illustration-container');
const doctrinalTitleText = document.getElementById('doctrinal-title-text');
const doctrinalQuoteBody = document.getElementById('doctrinal-quote-body');
const warningTextBody = document.getElementById('warning-text-body');

// Elemento para Micro Mapa Conceptual (Contenedor creado dinámicamente)
let conceptMapContainer = null;

// Elementos de la Autoevaluación en Flashcards
const quizContainer = document.getElementById('quiz-container');

// --- EVENTO: DESLIZAR SIDEBAR (HAMBURGUESA EN MÓVIL) ---
function toggleSidebar() {
    const isOpen = sidebar.classList.contains('open');
    if (isOpen) {
        sidebar.classList.remove('open');
        menuToggle.classList.remove('open');
        sidebarOverlay.classList.remove('visible');
        menuToggle.setAttribute('aria-expanded', 'false');
    } else {
        sidebar.classList.add('open');
        menuToggle.classList.add('open');
        sidebarOverlay.classList.add('visible');
        menuToggle.setAttribute('aria-expanded', 'true');
    }
}

if (menuToggle && sidebarOverlay) {
    menuToggle.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);
}

// --- CREAR CONTENEDOR DE MAPA CONCEPTUAL EN LA COLUMNA PRINCIPAL ---
function ensureConceptMapElement() {
    const instructorColumn = document.querySelector('.instructor-column');
    if (!instructorColumn) return;

    // Buscar si ya existe el contenedor
    let mapDiv = document.getElementById('concept-map-block');
    if (!mapDiv) {
        mapDiv = document.createElement('div');
        mapDiv.id = 'concept-map-block';
        mapDiv.className = 'concept-map-container animate-fade';
        // Insertarlo antes de la ilustración o al final de la columna
        instructorColumn.appendChild(mapDiv);
    }
    conceptMapContainer = mapDiv;
}

// --- RENDERIZAR MAPA CONCEPTUAL ---
function renderConceptMap(mapData) {
    ensureConceptMapElement();
    if (!conceptMapContainer || !mapData) return;

    let nodesHtml = '';
    mapData.nodes.forEach((node, idx) => {
        nodesHtml += `
            <div class="map-node">
                <div class="node-header">${node.header}</div>
                <div class="node-body">${node.body}</div>
            </div>
        `;
        
        // Añadir conector entre nodos (no después del último)
        if (idx < mapData.nodes.length - 1) {
            nodesHtml += `
                <div class="map-connector">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            `;
        }
    });

    conceptMapContainer.innerHTML = `
        <h4 class="concept-map-title">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
            </svg>
            Mapa Conceptual: ${mapData.title}
        </h4>
        <div class="concept-map">
            ${nodesHtml}
        </div>
    `;
}

// --- RENDERIZAR CUADRÍCULA DE FLASHCARDS CON PAGINACIÓN ---
function renderFlashcardsGrid() {
    if (!quizContainer) return;

    const data = moduleDatabase[currentModule];
    if (!data) return;

    // Calcular límites de paginación
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = Math.min(startIndex + cardsPerPage, data.flashcards.length);
    const paginatedCards = data.flashcards.slice(startIndex, endIndex);

    // Crear grilla responsiva HTML
    let cardsHtml = `<div class="flashcard-grid animate-fade">`;

    paginatedCards.forEach((card, idx) => {
        const cardGlobalIndex = startIndex + idx + 1;
        cardsHtml += `
            <div class="flashcard-container" onclick="toggleCardFlip(this)" aria-label="Flashcard técnica ${cardGlobalIndex}">
                <div class="flashcard-inner">
                    <!-- Frente de la Tarjeta -->
                    <div class="flashcard-front">
                        <span class="flashcard-badge">PREGUNTA ${cardGlobalIndex}</span>
                        <h4 class="flashcard-question">${card.q}</h4>
                        <div class="flashcard-hint">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.656 48.656 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                            </svg>
                            Toca para revelar respuesta
                        </div>
                    </div>
                    <!-- Reverso de la Tarjeta -->
                    <div class="flashcard-back">
                        <span class="flashcard-answer-title">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            Resp. Técnica
                        </span>
                        <p class="flashcard-answer">${card.a}</p>
                    </div>
                </div>
            </div>
        `;
    });

    cardsHtml += `</div>`;

    // Barra de navegación de paginación
    const totalPages = Math.ceil(data.flashcards.length / cardsPerPage);
    const paginationControlsHtml = `
        <div class="pagination-controls">
            <button class="pagination-button" id="prev-page-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(-1)" aria-label="Página anterior">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                Anterior
            </button>
            <span class="pagination-info">Página ${currentPage} de ${totalPages}</span>
            <button class="pagination-button" id="next-page-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(1)" aria-label="Página siguiente">
                Siguiente
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    `;

    // Asignar el contenido completo
    quizContainer.innerHTML = cardsHtml + paginationControlsHtml;
}

// --- FUNCIÓN DE VOLTEO 3D DE LA FLASHCARD ---
window.toggleCardFlip = function(cardContainer) {
    cardContainer.classList.toggle('flipped');
};

// --- ACCIÓN DE CAMBIAR DE PÁGINA (PAGINACIÓN) ---
window.changePage = function(direction) {
    const data = moduleDatabase[currentModule];
    if (!data) return;

    const totalPages = Math.ceil(data.flashcards.length / cardsPerPage);
    const targetPage = currentPage + direction;

    if (targetPage >= 1 && targetPage <= totalPages) {
        // Añadir efecto visual sutil antes de repintar
        const grid = quizContainer.querySelector('.flashcard-grid');
        if (grid) {
            grid.style.opacity = 0;
            grid.style.transform = 'translateY(4px)';
        }

        setTimeout(() => {
            currentPage = targetPage;
            renderFlashcardsGrid();
        }, 150);
    }
};

// --- RENDERIZACIÓN DE CONTENIDO COMPLETO DEL MÓDULO ---
function loadModuleContent(moduleId) {
    const data = moduleDatabase[moduleId];
    if (!data) return;

    currentModule = parseInt(moduleId);
    currentPage = 1; // Reiniciar siempre a página 1 al cambiar de tema

    // Actualizar indicador general
    currentModIndicator.innerText = `Módulo ${moduleId}`;

    // Efecto de transición (fade out)
    const animatedCards = document.querySelectorAll('.animate-fade');
    animatedCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(6px)';
    });

    setTimeout(() => {
        // 1. Actualizar Columna Principal (Instructor)
        instructorSubtitle.innerText = data.subtitle;
        instructorTitle.innerText = data.title;
        instructorTextBody.innerHTML = data.instructorText;
        
        // 2. Actualizar Ilustración (Desactivada temporalmente)
        illustrationContainer.innerHTML = '';
        illustrationContainer.style.display = 'none';

        // 3. Actualizar Columna Lateral (Notas Doctrinales + Notas Adicionales)
        doctrinalTitleText.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
            ${data.doctrinalManual || "FAA-H-8083-25B (PHAK)"}
        `;

        // Contenido principal + notas adicionales
        let quoteContent = data.doctrinalText ? `<p>${data.doctrinalText}</p>` : '';
        
        if (data.doctrinalNotes && data.doctrinalNotes.length > 0) {
            quoteContent += `<div class="doctrinal-notes">`;
            data.doctrinalNotes.forEach(note => {
                quoteContent += `
                    <div class="doctrinal-note-item">
                        <strong>${note.title}</strong>
                        <p>${note.text}</p>
                    </div>
                `;
            });
            quoteContent += `</div>`;
        }
        
        doctrinalQuoteBody.innerHTML = quoteContent;
        warningTextBody.innerText = data.warningText || '';

        // 4. Renderizar Mapa Conceptual Responsivo
        renderConceptMap(data.conceptMap);

        // 5. Renderizar Grid de Flashcards 3D Paginado (Fase 2)
        renderFlashcardsGrid();

        // Reactivar transiciones fade in
        const refreshedAnimatedCards = document.querySelectorAll('.animate-fade');
        refreshedAnimatedCards.forEach(card => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        });

    }, 250);
}

// --- GESTIÓN DE SELECCIÓN DE MÓDULO ACTIVO EN EL SIDEBAR ---
if (modulesList) {
    modulesList.addEventListener('click', (event) => {
        const targetModuleItem = event.target.closest('.module-item');
        
        if (!targetModuleItem) return;

        // Ignorar módulos bloqueados deshabilitados
        if (targetModuleItem.classList.contains('disabled-module')) {
            return;
        }

        // Resaltar visualmente la selección en el sidebar
        const allModuleItems = document.querySelectorAll('.module-item');
        allModuleItems.forEach(item => {
            item.classList.remove('current-selection');
        });
        targetModuleItem.classList.add('current-selection');

        // Cargar contenidos del nuevo módulo
        const moduleId = targetModuleItem.dataset.module;
        loadModuleContent(moduleId);

        // Cerrar el drawer lateral si está en móvil
        if (window.innerWidth < 1024) {
            toggleSidebar();
        }
    });
}

// --- INICIALIZACIÓN DE LA APLICACIÓN AL CARGAR LA PÁGINA ---
window.addEventListener('DOMContentLoaded', () => {
    loadModuleContent(1);
});
