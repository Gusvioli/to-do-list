import { Router } from 'express';
import {TypesController} from '../controllers/TypesController';

const router = Router();

router.get('/', TypesController.types);

export default router;