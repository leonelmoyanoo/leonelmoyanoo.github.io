"use client";

import { useState, useEffect } from 'react';

interface ActivityCardProps {
  materia: string;
  keywords: string;
  title: string;
  description: string;
  steps: string[];
  tagColor: string;
  tagTextColor: string;
}
const activitiesData: ActivityCardProps[] = [
    // --- Ejemplos Originales ---
    {
        materia: "Lengua y Literatura",
        keywords: "lengua literatura libro podcast protagonista audio resumen",
        title: "Podcast del Protagonista",
        description: "Genera un resumen en audio desde la perspectiva del personaje principal de un libro que estén leyendo.",
        steps: [
            "Cargar Fuente: Sube el PDF del libro.",
            "Definir Perspectiva: Pídele: 'Actúa como [Nombre del Personaje], el protagonista'.",
            "Generar Guion: Pídele: 'Escribe un monólogo de 5 minutos resumiendo tus conflictos y motivaciones, citando el texto'.",
            "Crear Audio: Usa la función 'Generar resumen en audio' sobre el monólogo que acabas de crear.",
        ],
        tagColor: "bg-blue-100",
        tagTextColor: "text-blue-800",
    },
    {
        materia: "Historia",
        keywords: "historia debate simulado guion audio fuentes",
        title: "Debate Histórico Simulado",
        description: "Crea un guion de debate entre dos figuras históricas o posturas opuestas usando sus propios escritos como fuente.",
        steps: [
            "Cargar Fuentes: Sube 2+ documentos con visiones opuestas (ej. cartas de San Martín y Alvear).",
            "Generar Debate: Pídele: \"Genera un debate simulado entre [Postura A] y [Postura B] sobre [tema], extrayendo 5 argumentos clave de cada fuente\".",
            "Analizar: Pídele: \"¿Cuál es el argumento más fuerte de cada uno y por qué?\".",
            "Crear Podcast: Usa la función \"Generar resumen en audio\" sobre el debate para escucharlo en clase.",
        ],
        tagColor: "bg-green-100",
        tagTextColor: "text-green-800",
    },
    {
        materia: "Inglés",
        keywords: "ingles audio listening comprensión glosario phrasal verbs",
        title: "Comprensión Auditiva (Listening)",
        description: "Sube un audio en inglés y genera automáticamente un glosario, resumen y preguntas de comprensión.",
        steps: [
            "Cargar Fuente: Sube un archivo de audio (MP3, WAV, etc.) de una noticia o un diálogo en inglés.",
            "Generar Glosario: Pídele: \"Genera un glosario con los 10 'phrasal verbs' o 'idioms' más importantes de este audio\".",
            "Generar Comprensión: Pídele: \"Crea 5 preguntas de 'listening comprehension' (en inglés) sobre este audio, con sus respuestas\".",
            "Crear Resumen: Pídele: \"Escribe un resumen en inglés de los puntos clave del audio\".",
        ],
        tagColor: "bg-red-100",
        tagTextColor: "text-red-800",
    },
    {
        materia: "Biología / Química",
        keywords: "biologia quimica mapa conceptual procesos fotosintesis ciclo krebs",
        title: "Mapa Conceptual de Procesos",
        description: "Visualiza un proceso biológico o químico complejo (como la fotosíntesis o el ciclo de Krebs) de forma automática.",
        steps: [
            "Cargar Fuentes: Sube los PDFs y artículos sobre [tu proceso, ej: \"fotosíntesis\"].",
            "Generar Mapa: Pídele: \"Genera un mapa conceptual (o un esquema) detallado que muestre todos los pasos y componentes del [proceso]\".",
            "Generar Resumen: Pídele: \"Explica este proceso paso a paso en un lenguaje simple, como para un alumno de 15 años\".",
            "Crear Audio: Usa \"Generar resumen en audio\" sobre la explicación simple para repasar.",
        ],
        tagColor: "bg-purple-100",
        tagTextColor: "text-purple-800",
    },
    {
        materia: "Matemáticas / Física",
        keywords: "matematicas fisica formulas glosario faq cheat sheet",
        title: "Glosario de Fórmulas y Conceptos",
        description: "Crea una 'hoja de trucos' (cheat sheet) con todas las fórmulas y definiciones clave de un tema específico.",
        steps: [
            "Cargar Fuentes: Sube el capítulo del manual (PDF) y tus apuntes de clase sobre [ej: \"MRU\"].",
            "Extraer Fórmulas: Pídele: \"Extrae todas las fórmulas clave para [Movimiento Rectilíneo Uniforme]\".",
            "Crear Glosario: Pídele: \"Crea un glosario que defina 'velocidad', 'aceleración' y 'desplazamiento' basándote en las fuentes\".",
            "Crear FAQ: Pídele: \"Crea una lista de Preguntas Frecuentes (FAQ) explicando las 3 dudas más comunes sobre este tema\".",
        ],
        tagColor: "bg-yellow-100",
        tagTextColor: "text-yellow-800",
    },
    {
        materia: "Geografía",
        keywords: "geografia comparativa regiones ecosistemas guia estudio",
        title: "Guía de Estudio de Ecosistemas",
        description: "Compara diferentes regiones, climas o civilizaciones usando los materiales de clase para generar una guía completa.",
        steps: [
            "Cargar Fuentes: Sube PDFs sobre dos ecosistemas (ej. \"Puna\" y \"Selva Misionera\").",
            "Generar Comparativa: Pídele: \"Crea una tabla comparativa de flora, fauna y clima entre la Puna y la Selva Misionera\".",
            "Crear Guía: Pídele: \"Genera una guía de estudio con 10 preguntas y respuestas sobre estas dos regiones, basándote en las fuentes\".",
        ],
        tagColor: "bg-pink-100",
        tagTextColor: "text-pink-800",
    },
    {
        materia: "Arte y Teatro",
        keywords: "arte teatro analisis personaje guion obra hamlet",
        title: "Análisis de Personaje",
        description: "Analiza la psicología, motivaciones y evolución de un personaje de una obra de teatro o un movimiento artístico.",
        steps: [
            "Cargar Fuente: Sube el guion o la obra (PDF) (ej. \"Hamlet\").",
            "Analizar Personaje: Pídele: \"Analiza la evolución psicológica de Ofelia a lo largo de la obra, citando 3 momentos clave\".",
            "Generar Monólogo: Pídele: \"Escribe un monólogo desde la perspectiva de Ofelia explicando sus sentimientos en el Acto 3\".",
        ],
        tagColor: "bg-indigo-100",
        tagTextColor: "text-indigo-800",
    },
    {
        materia: "Economía y Cívica",
        keywords: "economia civica constitucion leyes modelos keynes",
        title: "Comparador de Modelos o Leyes",
        description: "Analiza y compara diferentes teorías económicas o artículos de la Constitución de forma objetiva.",
        steps: [
            "Cargar Fuentes: Sube textos sobre \"Keynesianismo\" y \"Monetarismo\" (o artículos de una ley).",
            "Generar Comparativa: Pídele: \"Crea una tabla que compare las principales ideas de ambos modelos sobre la inflación\".",
            "Generar Debate: Pídele: \"Genera un debate simulado entre Keynes y Friedman sobre el rol del estado en la economía\".",
        ],
        tagColor: "bg-gray-100",
        tagTextColor: "text-gray-800",
    },

    // --- NUEVOS EJEMPLOS (Docente) ---

    {
        materia: "Lengua y Literatura",
        keywords: "lengua literatura poesia metrica rima figuras retoricas poema",
        title: "Análisis Métrico de Poemas",
        description: "Desglosa automáticamente la estructura, rima y figuras retóricas de un poema clásico.",
        steps: [
            "Cargar Fuente: Sube un PDF con el poema (ej. un soneto de Quevedo).",
            "Analizar Métrica: Pídele: \"Analiza la métrica y el esquema de rima de este poema\".",
            "Identificar Figuras: Pídele: \"Identifica 5 figuras retóricas (metáforas, hipérboles, etc.) en el texto y explica su significado\".",
        ],
        tagColor: "bg-blue-100",
        tagTextColor: "text-blue-800",
    },
    {
        materia: "Lengua y Literatura",
        keywords: "lengua literatura epilogo final alternativo escritura creativa",
        title: "Escritor de Epílogos",
        description: "Imagina y redacta un final alternativo o un epílogo para una novela, basado en el estilo del autor.",
        steps: [
            "Cargar Fuente: Sube la novela completa (PDF).",
            "Definir Tono: Pídele: \"Actúa como un experto en el estilo de [Autor del libro]\".",
            "Generar Epílogo: Pídele: \"Escribe un epílogo de 500 palabras que ocurra 10 años después del final del libro, enfocado en el destino de [personaje]\".",
        ],
        tagColor: "bg-blue-100",
        tagTextColor: "text-blue-800",
    },
    {
        materia: "Historia",
        keywords: "historia diario intimo batalla perspectiva soldado",
        title: "Diario de Guerra",
        description: "Genera una entrada de diario íntimo desde la perspectiva de un participante en un evento histórico.",
        steps: [
            "Cargar Fuentes: Sube PDFs con testimonios y datos sobre una batalla (ej. \"Cruce de los Andes\").",
            "Definir Perspectiva: Pídele: \"Actúa como un soldado del Ejército de los Andes\".",
            "Generar Entrada: Pídele: \"Escribe una entrada de diario fechada en [fecha del evento], describiendo tus miedos, esperanzas y el entorno, basándote en las fuentes\".",
        ],
        tagColor: "bg-green-100",
        tagTextColor: "text-green-800",
    },
    {
        materia: "Historia",
        keywords: "historia linea de tiempo cronologia eventos clave",
        title: "Línea de Tiempo Anotada",
        description: "Crea una cronología detallada de un período histórico complejo (ej. Segunda Guerra Mundial) con descripciones.",
        steps: [
            "Cargar Fuentes: Sube varios capítulos o artículos sobre el período.",
            "Extraer Eventos: Pídele: \"Genera una línea de tiempo con los 15 eventos más importantes de la Segunda Guerra Mundial, ordenados cronológicamente\".",
            "Añadir Detalle: Pídele: \"Para cada evento, añade una descripción de 2 líneas sobre su importancia, según las fuentes\".",
        ],
        tagColor: "bg-green-100",
        tagTextColor: "text-green-800",
    },
    {
        materia: "Inglés",
        keywords: "ingles simplificar texto nivel b1 a2 adaptar articulos",
        title: "Simplificador de Textos",
        description: "Adapta artículos de noticias complejos (ej. de 'The Guardian') a un nivel de inglés más simple (B1/A2) para los alumnos.",
        steps: [
            "Cargar Fuente: Pega el texto de un artículo de noticias en una Nota.",
            "Definir Nivel: Pídele: \"Actúa como un profesor de inglés para nivel B1\".",
            "Simplificar: Pídele: \"Reescribe este artículo simplificando el vocabulario y las estructuras gramaticales, sin perder la idea principal\".",
            "Crear Audio: Usa \"Generar resumen en audio\" sobre el texto simplificado para practicar listening.",
        ],
        tagColor: "bg-red-100",
        tagTextColor: "text-red-800",
    },
    {
        materia: "Inglés",
        keywords: "ingles role-play guion dialogo restaurante aeropuerto",
        title: "Generador de Guiones (Role-Play)",
        description: "Crea guiones de diálogo para situaciones de la vida real (ej. en un aeropuerto, en un restaurante) para practicar.",
        steps: [
            "Cargar Fuente: Sube un audio de una situación real (opcional) o simplemente usa el prompt.",
            "Definir Situación: Pídele: \"Crea un guion de diálogo ('role-play') para dos personas en un restaurante\".",
            "Establecer Roles: Pídele: \"Un rol es el 'Cliente' y el otro es el 'Mesero'. El cliente tiene una alergia alimentaria. Incluye 10 intercambios\".",
        ],
        tagColor: "bg-red-100",
        tagTextColor: "text-red-800",
    },
    {
        materia: "Biología / Química",
        keywords: "biologia quimica guia laboratorio seguridad materiales experimento",
        title: "Asistente de Laboratorio",
        description: "Genera una guía de seguridad, lista de materiales y resumen de hipótesis para un experimento de laboratorio.",
        steps: [
            "Cargar Fuente: Sube el PDF con el protocolo del experimento.",
            "Generar Seguridad: Pídele: \"Extrae una lista de 5 reglas de seguridad clave para este experimento\".",
            "Generar Materiales: Pídele: \"Genera una 'check-list' de todos los materiales y reactivos necesarios\".",
            "Resumir: Pídele: \"Resume la hipótesis y el objetivo del experimento en 3 líneas\".",
        ],
        tagColor: "bg-purple-100",
        tagTextColor: "text-purple-800",
    },
    {
        materia: "Biología / Química",
        keywords: "biologia quimica moleculas tabla comparativa glucosa fructosa atp",
        title: "Comparador de Moléculas",
        description: "Genera tablas comparativas de moléculas orgánicas o compuestos químicos.",
        steps: [
            "Cargar Fuentes: Sube PDFs sobre 'Glucosa' y 'Fructosa'.",
            "Generar Tabla: Pídele: \"Crea una tabla comparativa entre la glucosa y la fructosa, incluyendo: Fórmula Química, Tipo de Azúcar, Fuente Principal y Función en el cuerpo\".",
        ],
        tagColor: "bg-purple-100",
        tagTextColor: "text-purple-800",
    },
    {
        materia: "Matemáticas / Física",
        keywords: "matematicas fisica teorema pitagoras explicacion ejemplo practico",
        title: "Explicador de Teoremas",
        description: "Desglosa un teorema complejo en una explicación simple y un ejemplo práctico.",
        steps: [
            "Cargar Fuente: Sube el capítulo del libro sobre el 'Teorema de Pitágoras'.",
            "Explicar Simple: Pídele: \"Explica el Teorema de Pitágoras como si tuviera 12 años\".",
            "Dar Ejemplo: Pídele: \"Dame 3 ejemplos prácticos donde se usaría este teorema en la vida real (ej. una escalera, un televisor)\".",
        ],
        tagColor: "bg-yellow-100",
        tagTextColor: "text-yellow-800",
    },
    {
        materia: "Matemáticas / Física",
        keywords: "matematicas fisica generador problemas ejercicios resueltos",
        title: "Generador de Problemas",
        description: "Crea nuevos problemas y ejercicios basados en los ejemplos ya resueltos en el material de clase.",
        steps: [
            "Cargar Fuente: Sube un PDF con 10 problemas resueltos de [ej. 'ecuaciones de segundo grado'].",
            "Definir Tono: Pídele: \"Actúa como un profesor de matemáticas\".",
            "Generar Problemas: Pídele: \"Genera 5 problemas nuevos similares a los de la fuente, pero con diferentes números y contextos. Incluye las soluciones al final\".",
        ],
        tagColor: "bg-yellow-100",
        tagTextColor: "text-yellow-800",
    },
    {
        materia: "Geografía",
        keywords: "geografia piramide poblacional demografia analisis datos",
        title: "Análisis Demográfico",
        description: "Interpreta datos de una pirámide poblacional y extrae conclusiones económicas y sociales.",
        steps: [
            "Cargar Fuente: Sube un PDF o una nota con los datos de una pirámide poblacional (ej. de Japón vs. Nigeria).",
            "Analizar Forma: Pídele: \"Analiza la forma de la pirámide de [País]. ¿Es expansiva, estacionaria o regresiva?\"",
            "Extraer Conclusiones: Pídele: \"Basado en esa forma, ¿cuáles son 3 posibles consecuencias económicas y sociales para el país en 20 años?\"",
        ],
        tagColor: "bg-pink-100",
        tagTextColor: "text-pink-800",
    },
    {
        materia: "Geografía",
        keywords: "geografia itinerario viaje cultural historia turismo",
        title: "Itinerario de Viaje Cultural",
        description: "Diseña un itinerario de viaje detallado para una región, enfocado en sus aspectos históricos y geográficos.",
        steps: [
            "Cargar Fuentes: Sube PDFs y sitios web sobre [ej. \"el Camino del Inca\"].",
            "Generar Itinerario: Pídele: \"Crea un itinerario de 5 días para un viaje cultural por [región], describiendo qué ver cada día\".",
            "Añadir Datos: Pídele: \"Para cada parada, añade un 'dato curioso' histórico o geográfico extraído de las fuentes\".",
        ],
        tagColor: "bg-pink-100",
        tagTextColor: "text-pink-800",
    },
    {
        materia: "Arte y Teatro",
        keywords: "arte teatro escenografia utileria props guion",
        title: "Diseñador de Escenografía",
        description: "Lee una escena de una obra de teatro y genera una lista detallada de utilería (props) y descripción del escenario.",
        steps: [
            "Cargar Fuente: Sube el PDF de una obra de teatro (ej. \"La Casa de Bernarda Alba\").",
            "Seleccionar Escena: Pídele: \"Enfócate en el Acto 1\".",
            "Generar Listas: Pídele: \"Genera una lista de toda la utilería (props) mencionada o implícita en esta escena. Luego, describe cómo debería ser la escenografía (muebles, puertas, iluminación)\".",
        ],
        tagColor: "bg-indigo-100",
        tagTextColor: "text-indigo-800",
    },
    {
        materia: "Arte y Teatro",
        keywords: "arte pintura analisis composicion simbolismo meninas",
        title: "Análisis de Obra de Arte",
        description: "Resume los análisis de expertos sobre una obra de arte famosa, enfocándose en la composición y el simbolismo.",
        steps: [
            "Cargar Fuente: Sube 3 artículos o ensayos que analicen [ej. \"Las Meninas\" de Velázquez].",
            "Resumir Composición: Pídele: \"Resume el consenso de los autores sobre la composición y el uso de la perspectiva en la pintura\".",
            "Resumir Simbolismo: Pídele: \"¿Qué dicen las fuentes sobre el simbolismo de los personajes y los espejos?\"",
        ],
        tagColor: "bg-indigo-100",
        tagTextColor: "text-indigo-800",
    },
    {
        materia: "Economía y Cívica",
        keywords: "economia civica foda analisis caso empresa fortalezas debilidades",
        title: "Análisis FODA de un Caso",
        description: "Realiza un análisis FODA (Fortalezas, Oportunidades, Debilidades, Amenazas) de un caso de estudio empresarial.",
        steps: [
            "Cargar Fuente: Sube un caso de estudio de 10 páginas sobre una empresa (ej. \"El caso Blockbuster vs. Netflix\").",
            "Generar FODA: Pídele: \"Genera un análisis FODA (SWOT) para [Empresa], extrayendo 3 puntos para cada categoría de las fuentes\".",
        ],
        tagColor: "bg-gray-100",
        tagTextColor: "text-gray-800",
    },
    {
        materia: "Economía y Cívica",
        keywords: "economia civica constitucion derechos articulo explicacion",
        title: "Explicador de Artículos (Constitución)",
        description: "Toma un artículo complejo de la Constitución o una ley y lo 'traduce' a un lenguaje simple y con ejemplos.",
        steps: [
            "Cargar Fuente: Sube el PDF de la Constitución Nacional.",
            "Seleccionar Artículo: Pídele: \"Toma el Artículo 14 bis\".",
            "Traducir: Pídele: \"Explica este artículo en lenguaje simple, como para alguien que no es abogado\".",
            "Ejemplificar: Pídele: \"Dame 3 ejemplos de cómo este artículo se aplica en la vida diaria\".",
        ],
        tagColor: "bg-gray-100",
        tagTextColor: "text-gray-800",
    },

    // --- NUEVOS EJEMPLOS (ALUMNO) ---

    {
        materia: "Lengua y Literatura",
        keywords: "lengua literatura escritura creativa ensayo alumno feedback retroalimentacion",
        title: "Mi Entrenador de Escritura",
        description: "Sube tus propios ensayos o cuentos para que NotebookLM te ayude a identificar temas recurrentes o mejorar tu vocabulario.",
        steps: [
            "Cargar Fuente: Sube el PDF o pega el texto de tu último ensayo.",
            "Pedir Feedback: Pídele: \"Identifica 3 áreas donde puedo mejorar mi escritura en este texto (ej. repetición de palabras, frases complejas)\".",
            "Analizar Vocabulario: Pídele: \"Extrae 5 palabras que uso demasiado y sugiere 5 sinónimos más fuertes\".",
        ],
        tagColor: "bg-blue-100",
        tagTextColor: "text-blue-800",
    },
    {
        materia: "Historia",
        keywords: "historia alumno estudiar examen guia de estudio apuntes autoevaluacion",
        title: "Mi Guía de Examen Personalizada",
        description: "Sube todos los apuntes de clase y lecturas del profesor para crear una guía de estudio única para tu próximo examen.",
        steps: [
            "Cargar Fuentes: Sube todos los PDFs y notas de clase sobre [ej. 'Revolución de Mayo'].",
            "Generar Guía: Pídele: \"Crea una guía de estudio completa con los personajes, fechas y causas más importantes de todas mis fuentes\".",
            "Autoevaluación: Pídele: \"Genera 10 preguntas de examen basadas en mis apuntes y dame las respuestas según las fuentes\".",
        ],
        tagColor: "bg-green-100",
        tagTextColor: "text-green-800",
    },
    {
        materia: "Inglés",
        keywords: "ingles alumno oral presentation pronunciacion audio guion",
        title: "Asistente de Oratoria (Inglés)",
        description: "Sube el guion de tu presentación oral en inglés para practicar la pronunciación y obtener un resumen en audio.",
        steps: [
            "Cargar Fuente: Pega el guion de tu 'oral presentation' en una Nota.",
            "Generar Audio: Usa la función 'Generar resumen en audio' para escuchar cómo suena tu guion con una pronunciación clara.",
            "Pedir Correcciones: Pídele: \"Identifica 3 frases en este texto que suenen poco naturales en inglés y sugiere una mejor alternativa\".",
        ],
        tagColor: "bg-red-100",
        tagTextColor: "text-red-800",
    },
    {
        materia: "Biología / Química",
        keywords: "biologia quimica alumno paper cientifico articulo entender resumen",
        title: "Traductor de 'Paper' Científico",
        description: "Sube un 'paper' o artículo científico complejo y pídele a NotebookLM que te lo explique en lenguaje simple.",
        steps: [
            "Cargar Fuente: Sube el PDF de un 'paper' científico que te asignaron.",
            "Explicar Resumen: Pídele: \"Explica el 'Abstract' (resumen) de este paper como si tuviera 15 años\".",
            "Definir Conceptos: Pídele: \"Define estos 5 términos técnicos [copia y pega los términos] que aparecen en la Metodología\".",
        ],
        tagColor: "bg-purple-100",
        tagTextColor: "text-purple-800",
    },
    {
        materia: "Matemáticas / Física",
        keywords: "matematicas fisica alumno tarea deberes tutor pistas",
        title: "Tutor de Tareas 24/7",
        description: "Sube los problemas resueltos por tu profesor y luego pide pistas para resolver tu propia tarea, sin que te dé la respuesta.",
        steps: [
            "Cargar Fuentes: Sube los PDFs con los ejercicios resueltos de clase.",
            "Pedir Pista: Pídele: \"Estoy atascado en el problema [describe tu problema]. Sin darme la respuesta, ¿cuál es el primer paso o qué fórmula de mis fuentes debería usar?\".",
            "Verificar Concepto: Pídele: \"Explica la diferencia entre [concepto A] y [concepto B] usando los ejemplos de mis fuentes\".",
        ],
        tagColor: "bg-yellow-100",
        tagTextColor: "text-yellow-800",
    },
    {
        materia: "Geografía",
        keywords: "geografia alumno investigar pais caso de estudio perfil",
        title: "Mi Propio Caso de Estudio",
        description: "Elige un país o región que te interese, sube artículos sobre él y crea un perfil completo.",
        steps: [
            "Cargar Fuentes: Sube 5 artículos (PDFs o sitios web) sobre [ej. 'Islandia'].",
            "Generar Perfil: Pídele: \"Crea un perfil del país sobre Islandia, incluyendo: geografía principal, economía, cultura y un dato curioso de mis fuentes\".",
            "Crear Audio: Usa 'Generar resumen en audio' sobre el perfil para crear un mini-documental.",
        ],
        tagColor: "bg-pink-100",
        tagTextColor: "text-pink-800",
    },
    {
        materia: "Arte y Teatro",
        keywords: "arte teatro alumno memorizar guion lineas audio",
        title: "Asistente de Memorización",
        description: "Sube tu guion de teatro y crea un audio solo con las líneas de los otros personajes para poder practicar las tuyas.",
        steps: [
            "Cargar Fuente: Sube el PDF completo del guion de la obra.",
            "Extraer Líneas: Pídele: \"Extrae todas las líneas de [Personaje A] y [Personaje B], pero omite las de [Tu Personaje]\".",
            "Generar Audio de Práctica: Usa 'Generar resumen en audio' sobre el texto resultante. Ahora puedes escuchar el audio y decir tus líneas en los huecos.",
        ],
        tagColor: "bg-indigo-100",
        tagTextColor: "text-indigo-800",
    },
    {
        materia: "Economía y Cívica",
        keywords: "economia civica alumno noticias actualidad inflacion posturas",
        title: "Analista de Noticias",
        description: "Sube 3 artículos de noticias sobre un mismo tema económico (ej. inflación) y pídele que te resuma las diferentes posturas.",
        steps: [
            "Cargar Fuentes: Sube 3 artículos de diferentes diarios sobre [ej. 'la inflación en Argentina'].",
            "Resumir Posturas: Pídele: \"Resume la postura o causa principal de la inflación según cada uno de los 3 artículos\".",
            "Definir Términos: Pídele: \"Genera un glosario con los términos económicos (ej. 'tasa de interés', 'emisión') que se mencionan en las fuentes\".",
        ],
        tagColor: "bg-gray-100",
        tagTextColor: "text-gray-800",
    },
];

const DocentesClient = () => {
  const [selectedMateria, setSelectedMateria] = useState('todas');
  const [searchText, setSearchText] = useState('');
  const [filteredActivities, setFilteredActivities] = useState<ActivityCardProps[]>(activitiesData);

  useEffect(() => {
    const filterActivities = () => {
      const lowerCaseSelectedMateria = selectedMateria.toLowerCase();
      const lowerCaseSearchText = searchText.toLowerCase().trim();

      const newFilteredActivities = activitiesData.filter(card => {
        const cardMateria = card.materia.toLowerCase();
        const cardKeywords = card.keywords.toLowerCase();

        const materiaMatch = (lowerCaseSelectedMateria === 'todas' || cardMateria.includes(lowerCaseSelectedMateria));
        const textMatch = (lowerCaseSearchText === '' || cardKeywords.includes(lowerCaseSearchText));

        return materiaMatch && textMatch;
      });
      setFilteredActivities(newFilteredActivities);
    };

    filterActivities();
  }, [selectedMateria, searchText]);

  const handleClearFilters = () => {
    setSelectedMateria('todas');
    setSearchText('');
  };

  return (
    <div id="docentes-client">
      <main className="container mx-auto p-6 md:p-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">Actividades con IA para Docentes</h1>
          <p className="text-lg md:text-xl text-blue-600 mt-2 font-medium">Encuentra ideas prácticas para tu materia usando NotebookLM como centro de control</p>
        </header>

        <div className="flex flex-col md:flex-row gap-4 mb-8 p-6 bg-white rounded-lg shadow-md sticky top-0 z-10">
          <div className="flex-1">
            <label htmlFor="materia-select" className="block text-sm font-medium text-gray-700 mb-1">Filtrar por Materia</label>
            <select
              id="materia-select"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
              value={selectedMateria}
              onChange={(e) => setSelectedMateria(e.target.value)}
            >
              <option value="todas">Todas las Materias</option>
              <option value="Lengua y Literatura">Lengua y Literatura</option>
              <option value="Historia">Historia</option>
              <option value="Geografía">Geografía</option>
              <option value="Inglés">Inglés</option>
              <option value="Matemáticas">Matemáticas</option>
              <option value="Física">Física</option>
              <option value="Biología">Biología</option>
              <option value="Química">Química</option>
              <option value="Arte y Teatro">Arte y Teatro</option>
              <option value="Economía y Cívica">Economía y Cívica</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="search-input" className="block text-sm font-medium text-gray-700 mb-1">Buscar por Palabra Clave</label>
            <input
              type="text"
              id="search-input"
              placeholder="Ej: 'podcast', 'debate', 'guía'..."
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  text-gray-900"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div className="flex-none self-end">
            <button
              id="clear-filters"
              className="w-full md:w-auto bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              onClick={handleClearFilters}
            >
              Limpiar Filtros
            </button>
          </div>
        </div>

        <div id="activity-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity, index) => (
            <div key={index} className="activity-card bg-white rounded-lg shadow-lg p-6 flex flex-col">
              <span className={`${activity.tagColor} ${activity.tagTextColor} text-xs font-semibold px-2.5 py-0.5 rounded-full self-start mb-3`}>
                {activity.materia}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{activity.description}</p>
              <div className="paso-a-paso border-t pt-4">
                <h4 className="font-bold text-gray-700 mb-2">Paso a Paso (Todo en NotebookLM)</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                  {activity.steps.map((step, stepIndex) => (
                    <li key={stepIndex} dangerouslySetInnerHTML={{ __html: step }} />
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </main>


      <style jsx global>{`
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc; /* Un gris muy claro */
        }
      `}</style>

    </div>
  );
};

export default DocentesClient;
