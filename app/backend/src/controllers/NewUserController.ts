import { Request, Response, NextFunction } from 'express'
import { NewUserServices } from '../services/NewUserService'

export class NewUserController {
  public static async newUser(req: Request, res: Response, next: NextFunction) {
    try {
      const newUser = await NewUserServices.newUser(req.body)
      const { token, id } = newUser
      res.status(201).json({ message: 'user created successfully', token, id })
    } catch (error) {
      next(error)
    }
  }
}
