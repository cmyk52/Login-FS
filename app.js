import express from 'express';
const app = express()
import cors from 'cors'

//Config
import conf from './app/config/variables_entorno.js' 

//Import routes
import router_login from './app/login/router_login.js'
import router_delete from './app/delete/router_delete.js'
import router_profile from './app/profile/router_profile.js'
import router_register from './app/register/router_register.js'
import router_404 from './app/404/router_404.js'




//Midlewares
app.use(express.json()) // Para procesar application/json
app.use(cors()) // Para evitar problemas de CORS con fetch



//Routes
app.use('/login', router_login)
app.use('/delete', router_delete)
app.use('/profile', router_profile)
app.use('/register', router_register)
app.use(router_404)


app.listen(conf.PORT, ()=>{
    console.log(`servidor escuchado en http://localhost:${conf.PORT}`)
})