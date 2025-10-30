import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Nueva configuración de Swagger (sin rutas vacías)
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API PIAD-301",
      version: "1.0.0",
      description: "Documentación de la API con Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  // ⚠️ Aquí estaba el error: el archivo indicado no existe o no tiene anotaciones
  apis: [], // ← vacío para evitar el fallo
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ✅ Ruta de prueba
app.get("/", (req, res) => {
  res.send("✅ Backend funcionando correctamente");
});

// ✅ Arranque del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
);
