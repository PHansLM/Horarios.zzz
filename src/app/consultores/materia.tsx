export async function cargarMateriasPorCarrera(id_carrera: number, nivel: string): Promise<any[]> {
    try {
      const response = await fetch(`http://localhost:5000/get-materias?id_carrera=${id_carrera}&grado=${nivel}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al cargar las materias de la carrera '+id_carrera+':', error);
      throw error; 
    }
  }