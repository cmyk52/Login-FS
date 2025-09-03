import express from 'express'
const router_404 = express.Router()

router_404.use((req,res)=>{
    const message = 'Something wrong was happen!'
    res.status(404).json(message)
})

export default router_404