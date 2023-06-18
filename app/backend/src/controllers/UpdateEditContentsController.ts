import { Request, Response, NextFunction } from 'express'
import { UpdateEditContentsService } from '../services/UpdateEditContentsService'

export class UpdateEditContentsController {
  public static async updateEditContents(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const updateContents = await UpdateEditContentsService.updateEditContents(
        req.body,
      )
      res.status(200).json(updateContents)
    } catch (error) {
      next(error)
    }
  }
}
