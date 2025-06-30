import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 3000;

// Configuración de CORS
app.use(cors());

// Middleware para JSON
app.use(express.json());

// Ruta proxy para redirigir solicitudes
app.use('/api', async (req: Request, res: Response) => {
  const apiUrl = 'https://www.creadors.tv' + req.originalUrl;
  console.log(`Redirigiendo a: ${apiUrl}`); // Verifica la URL en la consola

  try {
    const response = await axios({
      method: req.method,
      url: apiUrl,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Referer': 'https://www.creadors.tv',
      },
      data: req.body,
      maxRedirects: 5, // Permitir hasta 5 redirecciones automáticas
    });

    // Enviar la respuesta recibida desde el servidor remoto
    res.status(response.status).send(response.data);
  } catch (error: any) {
    console.error('Error en el servidor proxy:', error.message);
    res.status(error.response?.status || 500).json({ error: 'Error en el servidor proxy' });
  }
});

// Iniciar el servidor en el puerto 3000
app.listen(PORT, () => {
  console.log(`Servidor proxy ejecutándose en http://localhost:${PORT}`);
});
