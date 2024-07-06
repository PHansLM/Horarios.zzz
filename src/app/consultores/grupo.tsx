export async function cargarGruposPorMateria(id_materia: number): Promise<any[]> {
  try {
    const response = await fetch(`http://localhost:5000/get-grupos?id_materia=${id_materia}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar los grupos de la materia '+id_materia+':', error);
    throw error; 
  }
}