import { Request, Response, NextFunction,} from 'express';
import { NewContentsService } from '../services/NewContentsService';

export class NewContentsController {
  public static async newContents(req: Request, res: Response, next: NextFunction) {
    try {
      const newContents = await NewContentsService.newContents(req.body);
      res.status(201).json({status: 201, message: 'content created successfully', newContents });
    } catch (error) {
      next(error);
    }
  }
}