import { Request, Response, NextFunction,} from 'express';
import LoginService from '../services/LoginService';

export default class LoginController {
  public static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await LoginService.login(req.body);
      const {token, idUser, name} = data;
      res.status(200).json({ message: 'Login successful', token, idUser, name });
    } catch (error) {
      next(error);
    }
  }
}