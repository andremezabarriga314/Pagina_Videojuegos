import { verifyToken } from "../utils/auth.js";



export const authenticate = (req, res, next) =>{

  try{

    //verificar si tiene token

    const token = req.headers.authorization?.split(" ")[1];

    if(!token){

      return res.status(401).json({

        sucess: false,

        message: "Token no proporcionado"

      });

    }



    //Verificar si el token es valido

    const decoded = verifyToken(token);

    if(!decoded){

      return res.status(401).json({

        sucess: false,

        message: "Token invalido o expirado"

      });

    }



    req.user = decoded;

    next()

  }catch(error){

    res.status(500).json({

      sucess: false,

      message: "Error de autenticacion"

    });

  }

};