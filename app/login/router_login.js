import express from 'express'
const router_login = express.Router()
import get_users from './model_login.js'


router_login.post('/', get_users)

export default router_login