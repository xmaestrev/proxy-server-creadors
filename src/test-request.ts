import axios from 'axios';

async function testRequest() {
  try {
    // Realizar una solicitud GET a https://www.creadors.tv/api/categories
    const response = await axios.get('https://www.creadors.tv/api/categories', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Referer': 'https://www.creadors.tv',
      },
    });
    
    // Imprimir la respuesta en caso de éxito
    console.log('Respuesta exitosa:', response.data);

  } catch (error: any) {
    // Si hay un error, imprime el código de estado y el mensaje de error
    console.error('Error en la solicitud:');
    console.error('Código de estado:', error.response ? error.response.status : 'Sin respuesta');
    console.error('Mensaje:', error.message);
  }
}

// Llamar a la función para ejecutar la solicitud
testRequest();
