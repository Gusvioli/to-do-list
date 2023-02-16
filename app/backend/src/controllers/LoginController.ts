import { Request, Response, NextFunction,} from 'express';
import LoginService from '../services/LoginService';

export default class LoginController {
  public static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await LoginService.login(req.body);
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      next(error);
    }
  }
}