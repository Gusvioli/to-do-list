import { Request, Response, NextFunction } from 'express'
import HttpException from '../utils/HttpException'

const httpErrorMiddleware = (
  erro: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { status, message } = erro as HttpException
  res.status(status || 500).json({ message })
}

export default httpErrorMiddleware
