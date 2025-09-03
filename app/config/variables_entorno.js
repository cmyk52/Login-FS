import {config} from 'dotenv' // importar config
config() // iniciar config

const conf = { // creamos un objeto 
PORT: process.env.PORT || 4001,
}

export default  conf // exportamos el objeto


