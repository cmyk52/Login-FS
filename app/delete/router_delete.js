import express from 'express'
const router_delete = express.Router()

router_delete.get('/', (req,res)=>{
    res.status(200).send('hola delete')
})


export default router_delete