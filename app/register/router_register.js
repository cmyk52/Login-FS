import express from 'express'
import create_users from './model_register.js'
const router_register = express.Router()

router_register.post("/", create_users)


export default router_register
