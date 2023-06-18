import { Router } from 'express'
import { UpdateContentsController } from '../controllers/UpdateContentsController'

const router = Router()

router.put('/', UpdateContentsController.updateContents)

export default router
