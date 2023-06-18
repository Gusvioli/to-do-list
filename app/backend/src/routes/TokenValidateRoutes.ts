import { Router } from 'express'
import TokenMiddleware from '../middlewares/TokenMiddleware'

const router = Router()

router.post('/', TokenMiddleware, (_req, res) => res.json({ token: true }))

export default router
