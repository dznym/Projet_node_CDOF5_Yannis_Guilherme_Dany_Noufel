import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'ToDo API Documentation',
      version: '1.0.0',
      description: 'API documentation for the ToDo application',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development Server',
      },
    ],
  },
  apis: ['./routes/*.ts'], 
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export { swaggerUi, swaggerSpec };
