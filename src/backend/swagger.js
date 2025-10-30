import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuarios - PIAD301',
      version: '1.0.0',
      description: 'Documentación de la API usando Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local',
      },
    ],
  },
  // 🔧 Ruta corregida: Swagger buscará los comentarios de tus rutas aquí
  apis: ['./src/backend/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
