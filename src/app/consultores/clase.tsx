
export async function cargarAvistamientos(id_grupo: number): Promise<any[]> {
  try {
    const response = await fetch(`https://cafecitobackend-6v2teu43ta-tl.a.run.app/get-clase-por-grupo?id_grupo=${id_grupo}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar las clase del grupo '+id_grupo+':', error);
    throw error; 
  }
}

