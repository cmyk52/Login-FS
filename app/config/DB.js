import {config} from 'dotenv' // importar config
config() // iniciar config

const DB = { // creamos un objeto 
USER: process.env.DB_USER ,
PASSWORD: process.env.DB_PASSWORD,
PORT: process.env.DB_PORT
}

export default  DB // exportamos el objeto