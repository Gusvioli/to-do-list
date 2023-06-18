import { Request, Response, NextFunction } from 'express'
import { TypesService } from '../services/TypesService'

export class TypesController {
  public static async types(_req: Request, res: Response, next: NextFunction) {
    try {
      const types = await TypesService.types()
      res.status(200).json(types)
    } catch (error) {
      next(error)
    }
  }
}
