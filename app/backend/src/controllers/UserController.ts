import { Request, Response, NextFunction } from 'express'
import { userServices as UserService } from '../services/UserService'

export class UserController {
  public static async userName(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const userName = await UserService.userName(req.body)
      res.status(200).json(userName)
    } catch (error) {
      next(error)
    }
  }
}
