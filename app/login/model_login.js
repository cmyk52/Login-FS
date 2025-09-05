import pool from "../config/db_connection.js"

// Creamos una funcion asyncronica con el res,req de la ruta para capturar el body de la solicitud y procesarla en la solicitud a la dba
const  get_users = async (req,res)=>{

   
    const {user, password } = req.body


        try{
        const [rows, fields] = await pool.query('SELECT usuario, pass FROM users WHERE usuario = ?', [user])

            // Valida si es undefined al momento de consultar a la dba
            if (rows.length === 0) {
            return res.status(401).json({ message: "Usuario no encontrado" })
            }

            // Valida los datos segun respuesta de la dba
            if(user !== rows[0].usuario || password !== rows[0].pass){
            res.status(401).json({message:"Usuario o password incorrecto!"})
            console.log('error')
            return
            }

            // Si el usuario y password son correctos envia OK
            res.status(200).json({message:"OKI DOKI"})
            console.log('succes')


        }
    catch(error){
        console.log(error)
        // En caso de error del servidor, responderemos a la ruta status 500
        res.status(500).json({ message: "Error en el servidor" })
    }
    

}



// exportamos la funcion a las rutas para simplificar la ruta

export default get_users