import { authServices } from "../services/authServices.js";



export const authControllers = {

  //Registro

  async register(req, res) {

    try {

      const { email, name, password } = req.body;

      const result = await authServices.register({ email, name, password });

      res.status(201).json({

        success: true,

        message: "Usuario registrado exitosamente",

        data: result,

      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message: "Error al registrar usuario" + error.message,

      });

    }

  },

}