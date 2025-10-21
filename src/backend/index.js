// 🔹 1. Importaciones
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

console.log("✅ userRoutes importado correctamente:", userRoutes);

// 🔹 2. Configuración de entorno
dotenv.config();

// 🔹 3. Crear app y puerto
const app = express();
const PORT = process.env.PORT || 3000;

// 🔹 4. Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔹 5. Rutas
app.get('/', (req, res) => {
  res.json({ message: 'API corriendo correctamente' });
});

app.use('/api/users', userRoutes);

// 🔹 6. Escuchar servidor (AQUÍ VA tu bloque)
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT} 🚀`);

  // 🔍 Mostrar rutas registradas (Express 5 compatible)
  const routes = [];
  app._router?.stack?.forEach((middleware) => {
    if (middleware.route) {
      const methods = Object.keys(middleware.route.methods).join(', ').toUpperCase();
      routes.push({ path: middleware.route.path, methods });
    } else if (middleware.name === 'router' && middleware.handle.stack) {
      middleware.handle.stack.forEach((handler) => {
        const route = handler.route;
        if (route) {
          const methods = Object.keys(route.methods).join(', ').toUpperCase();
          routes.push({ path: route.path, methods });
        }
      });
    }
  });

  console.log("🔍 Rutas registradas:", routes);
});
