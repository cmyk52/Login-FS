import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host:"localhost",
    port:3306,
    database:"users",
    user:"admin",
    password:"admin"
})

export default pool


