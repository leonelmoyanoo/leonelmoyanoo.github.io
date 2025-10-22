import DocentesClient from './DocentesClient';

export const metadata = {
  title: 'Actividades con IA para Docentes',
  description: 'Encuentra ideas prácticas para tu materia usando NotebookLM como centro de control',
};

const DocentesPage = () => {
  return <DocentesClient />;
};

export default DocentesPage;
