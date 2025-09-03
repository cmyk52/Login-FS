import express from 'express'
const router_login = express.Router()


router_login.post('/', (req,res)=>{
    const {user, password } = req.body
    console.log(req.body)
    res.status(200).send('hola login')
})
export default router_login