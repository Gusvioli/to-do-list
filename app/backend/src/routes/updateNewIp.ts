import { Router } from 'express'
import { UpdateIpController } from '../controllers/UpdateIpController'

const router = Router()

router.post('/', UpdateIpController.updateIp)

export default router
