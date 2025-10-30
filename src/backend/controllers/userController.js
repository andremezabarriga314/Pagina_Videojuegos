import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const userController = {
  // 🟢 Obtener todos los usuarios
  getUsers: async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json({
        success: true,
        message: 'Lista de usuarios obtenida correctamente.',
        data: users,
      });
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({
        success: false,
        message: 'Error interno del servidor.',
      });
    }
  },

  // 🟢 Crear nuevo usuario
  createUser: async (req, res) => {
    try {
      const { email, name } = req.body;

      if (!email || !name) {
        return res.status(400).json({
          success: false,
          message: 'El email y el nombre son obligatorios.',
        });
      }

      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: 'El correo electrónico ya está registrado.',
        });
      }

      const newUser = await prisma.user.create({ data: { email, name } });

      res.status(201).json({
        success: true,
        message: 'Usuario creado correctamente.',
        data: newUser,
      });
    } catch (error) {
      console.error('Error al crear usuario:', error);
      if (error.code === 'P2002') {
        return res.status(400).json({
          success: false,
          message: 'El correo ya está registrado.',
        });
      }
      res.status(500).json({
        success: false,
        message: 'Error interno del servidor.',
      });
    }
  },

  // 🟢 Actualizar usuario existente
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { email, name } = req.body;

      const userId = parseInt(id);
      if (isNaN(userId)) {
        return res.status(400).json({
          success: false,
          message: 'El ID del usuario no es válido.',
        });
      }

      const existingUser = await prisma.user.findUnique({ where: { id: userId } });
      if (!existingUser) {
        return res.status(404).json({
          success: false,
          message: 'Usuario no encontrado.',
        });
      }

      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { email, name },
      });

      res.status(200).json({
        success: true,
        message: 'Usuario actualizado correctamente.',
        data: updatedUser,
      });
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      if (error.code === 'P2002') {
        return res.status(400).json({
          success: false,
          message: 'El correo ya está en uso por otro usuario.',
        });
      }
      res.status(500).json({
        success: false,
        message: 'Error interno del servidor.',
      });
    }
  },

  // 🟢 Eliminar usuario
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const userId = parseInt(id);

      if (isNaN(userId)) {
        return res.status(400).json({
          success: false,
          message: 'El ID del usuario no es válido.',
        });
      }

      const existingUser = await prisma.user.findUnique({ where: { id: userId } });
      if (!existingUser) {
        return res.status(404).json({
          success: false,
          message: 'Usuario no encontrado.',
        });
      }

      await prisma.user.delete({ where: { id: userId } });

      res.status(200).json({
        success: true,
        message: 'Usuario eliminado correctamente.',
      });
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      res.status(500).json({
        success: false,
        message: 'Error interno del servidor.',
      });
    }
  },
};
