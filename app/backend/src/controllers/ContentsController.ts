import { Request, Response, NextFunction } from 'express'
import { ContentsService } from '../services/ContentsService'

export class ContentsController {
  public static async contents(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const contents = await ContentsService.contents(req.body)
      res.status(200).json(contents)
    } catch (error) {
      next(error)
    }
  }

  public static async deleteContents(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const deleteContents = await ContentsService.deleteContents(req.body)
      res.status(200).json(deleteContents)
    } catch (error) {
      next(error)
    }
  }
}
