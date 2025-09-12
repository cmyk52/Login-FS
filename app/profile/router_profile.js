import express from 'express'
import get_profile from './model_get_profile.js'
import patch_profile from './model_patch_profile.js'
import delete_profile from './model_delete_profile.js'
import verify_token from './utils_jwt.js' // este es el middleware para verificar que existe token jwt(cookie)
const router_profile = express.Router()


router_profile.get('/', verify_token, get_profile )
router_profile.patch('/', verify_token, patch_profile )
router_profile.delete('/', verify_token, delete_profile)

export default router_profile