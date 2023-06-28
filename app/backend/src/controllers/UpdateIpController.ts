import { Request, Response, NextFunction } from 'express'
import { UpdateIpService } from '../services/UpdateIpService'

export class UpdateIpController {
  public static async updateIp(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const updateIp = await UpdateIpService.updateIp(req.body)
      console.log(updateIp)

      res.status(200).json(updateIp)
    } catch (error) {
      next(error)
    }
  }
}
