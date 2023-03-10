import { Router } from 'express';
import {UpdateEditContentsController} from '../controllers/UpdateEditContentsController';

const router = Router();

router.put('/', UpdateEditContentsController.updateEditContents);

export default router;