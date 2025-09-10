import pool from "../config/db_connection.js"
import bcrypt from "bcrypt"




// Model

const create_users = async (req,res)=>{
    let {user, pass,recovery, email, name, last_name, rol } = req.body;
    console.log(req.body);





    if(!user || !pass || !recovery || !email || !name || !last_name || !rol ){
        res.status(400).json({message:"Usuario no puede ser creado por falta de informacion"})
        return
    }

    // conf bcrypt
    const salt_round = 10
    pass = String(pass)
    const hash = await bcrypt.hash(pass, salt_round)
    
   

    try{
        const [result] = await pool.query(`INSERT INTO users (usuario, pass, recovery, email, nombre, apellido, rol) VALUES (?,?,?,?,?,?,?)`, 
            [user, hash,recovery, email, name, last_name, rol]) 
        
        
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
        console.error(error)
    }

    
    
}

export default create_users