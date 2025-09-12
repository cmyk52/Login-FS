import pool from "../config/db_connection.js"

const query_server = async (user) => {
    const query = `SELECT usuario, pass, email, nombre, apellido, rol FROM users WHERE usuario = ?`;

    try {
        const [rows] = await pool.execute(query, [user]);
        
        //  Verificar si rows está definido y tiene datos
        if (!rows || rows.length === 0) {
            return false; // 
        }
        
        return rows; // 

    } catch (error) {
        console.log("Error en query:", error);
        return false; //  Retorna false en caso de error (NO usar res aquí)
    }
}

export default query_server