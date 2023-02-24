import { Router } from 'express';
import { EmojiController } from '../controllers/EmojiController';

const router = Router();

router.get('/', EmojiController.emoji);

export default router;