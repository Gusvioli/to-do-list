import { Router } from 'express';
import editContentsMiddleware from '..//middlewares/editContentsMiddleware';
import {UpdateEditContentsController} from '../controllers/UpdateEditContentsController';

const router = Router();

router.put('/', editContentsMiddleware, UpdateEditContentsController.updateEditContents);

export default router;