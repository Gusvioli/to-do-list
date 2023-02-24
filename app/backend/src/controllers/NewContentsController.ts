import { Request, Response, NextFunction,} from 'express';
import { NewContentsService } from '../services/NewContentsService';

export class NewContentsController {
  public static async newContents(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    try {
      const newContents = await NewContentsService.newContents(req.body);
      res.status(201).json({ message: 'content created successfully', newContents });
    } catch (error) {
      next(error);
    }
  }
}