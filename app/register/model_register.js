import pool from "../config/db_connection.js"

const create_users = async (req,res)=>{
    const {user, pass,recovery, email, name, last_name, rol } = req.body;
    console.log(req.body)

    if(!user || !pass || !recovery || !email || !name || !last_name || !rol ){
        res.status(401).json({message:"Usuario no puede ser creado por falta de informacion"})
        return
    }

    try{
        const [result] = await pool.query(`INSERT INTO users (usuario, pass, recovery, email, nombre, apellido, rol) VALUES (?,?,?,?,?,?,?)`, 
            [user, pass,recovery, email, name, last_name, rol]) 
        
        
        res.status(201).json({message:"Usuario creado con exito"})
        console.log(result)

        
    }

    catch(error){
        if(error.code == 'ER_DUP_ENTRY'){
            res.status(409).json({message:"Usuario ya existe"})
            console.error(error)
            return
        }
        res.status(500).json({message:"Something gone wrong"})
        onsole.error(error)
    }

    
    
}

export default create_users