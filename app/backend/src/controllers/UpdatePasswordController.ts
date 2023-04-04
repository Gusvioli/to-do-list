import { Request, Response, NextFunction,} from 'express';
import { UpdatePasswordService } from '../services/UpdatePasswordService';

export class UpdatePasswordController {
  public static async updatePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const updatePassword = await UpdatePasswordService.updatePassword(req.body);
      res.status(200).json(updatePassword);
    } catch (error) {
      next(error);
    }
  }
}