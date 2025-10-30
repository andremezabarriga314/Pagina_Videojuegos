import express from 'express';
import { registerUser } from '../controllers/emailController.js';

const router = express.Router();

/**
 * @swagger
 * /api/email/register:
 *   post:
 *     summary: Registrar usuario y enviar correo
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: andremezabarriga314@gmail.com
 *               name:
 *                 type: string
 *                 example: Andre Meza
 *     responses:
 *       200:
 *         description: Email enviado correctamente
 *       500:
 *         description: Error del servidor
 */
router.post('/register', registerUser);

export default router;
