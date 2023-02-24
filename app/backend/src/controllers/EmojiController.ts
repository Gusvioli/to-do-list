import { Request, Response, NextFunction,} from 'express';
import { EmojiServices } from '../services/EmojiService';

export class EmojiController {
  public static async emoji(_req: Request, res: Response, next: NextFunction) {
    try {
      const emoji = await EmojiServices.emoji();
      res.status(200).json(emoji);
    } catch (error) {
      next(error);
    }
  }
}