
export async function cargarAvistamientos(id_grupo: number): Promise<any[]> {
  try {
    const response = await fetch(`http://localhost:5000/get-clase-por-grupo?id_grupo=${id_grupo}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar las clase del grupo '+id_grupo+':', error);
    throw error; 
  }
}

