import { Router } from 'express'
import { NewUserController } from '../controllers/NewUserController'
import newUserMiddleware from '../middlewares/newUserMiddleware'

const router = Router()

router.post('/', newUserMiddleware, NewUserController.newUser)

export default router
