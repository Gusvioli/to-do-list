import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import loginMiddleware from '../middlewares/loginMiddleware';

const router = Router();

router.post('/', loginMiddleware, LoginController.login);

export default router;