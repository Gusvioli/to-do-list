import { Request, Response, NextFunction } from 'express'
import { UpdateContentsService } from '../services/UpdateContentsService'

export class UpdateContentsController {
  public static async updateContents(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const updateContents = await UpdateContentsService.updateContents(
        req.body,
      )
      res.status(200).json(updateContents)
    } catch (error) {
      next(error)
    }
  }
}
