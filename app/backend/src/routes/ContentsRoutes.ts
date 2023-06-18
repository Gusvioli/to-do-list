import { Router } from 'express'
import { ContentsController } from '../controllers/ContentsController'

const router = Router()

router.post('/', ContentsController.contents)

export default router
