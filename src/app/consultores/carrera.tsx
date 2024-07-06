export async function obtenerLasCarreras(): Promise<any[]> {
    try {
      const response = await fetch(`http://localhost:5000/get-carreras`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al conseguir todas las carreras', error);
      throw error;
    }
  }