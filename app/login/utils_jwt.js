import conf from "./config.js"
import jwt from "jsonwebtoken"




const token_controller = async (body_user, token_key)=>{


    try{    
        // recuperamos desde las Variables de entorno la palabra secreta
        const token_key = conf.SECRET

        // creamos un cuerpo con los datos del usuario que debe ir en el token
        const user_data = {
            user: body_user.usuario,
            email: body_user.email,
            rol: body_user.rol
        }
        
        // firmamos el token y creamos su cuerpo con un tiempo de expiracion

        const token = jwt.sign(
            user_data,
            token_key,
            {expiresIn: '1h'}
        )

        // lo enviamos como resultado al modelo para el envio a traves del res.send
        return token
    }
        

    
    catch(error){
        console.error("Error en token_controller:", error.message);
        throw new Error("Error al generar el token");
    }
}

// exportamos el token al modelo
export default token_controller
