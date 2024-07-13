export async function obtenerLasCarreras(): Promise<any[]> {
    try {
      const response = await fetch(`https://cafecitobackend-6v2teu43ta-tl.a.run.app/get-carreras`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al conseguir todas las carreras', error);
      throw error;
    }
  }