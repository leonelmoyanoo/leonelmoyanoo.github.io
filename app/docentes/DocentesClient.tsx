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
