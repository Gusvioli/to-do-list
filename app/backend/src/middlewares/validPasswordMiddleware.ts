import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/HttpException';

const validPasswordMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password } = req.body;
    if (password.length < 6) {
      throw new HttpException(422, 'Password must be 6 characters');
    }
  } catch (error) {
    throw new HttpException(422, 'Password must be 6 characters');
  }
  next();
};

export default validPasswordMiddleware;
