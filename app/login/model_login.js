import pass_hash from "./utils_crypto.js"
import query_server from "./utils_db.js"
import token_controller from "./utils_jwt.js"



// Creamos una funcion asyncronica con el res,req de la ruta para capturar el body de la solicitud y procesarla en la solicitud a la dba
const  get_users = async (req,res)=>{

   
    const {user, password } = req.body

    // Validando envio de usuario y password
    if(!user || !password){
        return res.status(401).json({message:'Falta ingresar usuario o pass'})
    }

    //Si hay usuario y pass, se realiza consulta a mysql para validar que el usuario exista devolviendo False en caso que no exista
    
    const result = await query_server(user)
    const body_user = result[0]

    
    if(result == false){
        return res.status(400).json({message:'Usuario no existe'})
    }

    //Si el usuario existe, se comprueba si la pass y la password hasheada estan correctas

    const pass_is_good = await pass_hash(password, result[0].pass)
    if(pass_is_good == false){
        return res.status(401).json({message:'Usuario o passowrd incorrecto'})
    }
    
    // enviamos cuerpo de la consulta a SQL para crear el token
    const token = await token_controller(body_user)
    console.log(token)

    res.status(200).json({message:"OKI DOKI"})

    


    console.log('succes')
    
    



}



// exportamos la funcion a las rutas para simplificar la ruta

export default get_users

