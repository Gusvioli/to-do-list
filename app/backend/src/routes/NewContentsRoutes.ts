import { Router } from 'express'
import newContentsMiddleware from '../middlewares/newContentsMiddleware'
import { NewContentsController } from '../controllers/NewContentsController'

const router = Router()

router.post('/', newContentsMiddleware, NewContentsController.newContents)

export default router
