import { Router } from 'express'
import { UpdatePasswordController } from '../controllers/UpdatePasswordController'
import newPasswordMiddleware from '../middlewares/newPasswordMiddleware'

const router = Router()

router.put('/', newPasswordMiddleware, UpdatePasswordController.updatePassword)

export default router
