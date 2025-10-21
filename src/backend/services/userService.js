import { PrismaClient } from '../generated/prisma/index.js'; // ruta correcta
const prisma = new PrismaClient();

export const userService = {
  async getAllUsers() {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      throw new Error('Error al obtener usuarios: ' + error.message);
    }
  },

  async createUser(data) {
    try {
      const newUser = await prisma.user.create({
        data,
      });
      return newUser;
    } catch (error) {
      throw new Error('Error al crear usuario: ' + error.message);
    }
  },
};
