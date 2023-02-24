import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/HttpException';
import { verifyToken } from '../utils/VerifyToken';

const tokenValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validateToken = verifyToken(req.body);
    if(validateToken.error){
      next(new Error(validateToken.error.message));
    } else {
      next();
    }
  } catch (error) {
    throw new HttpException(400, 'Token error');
  }
};

export default tokenValidation;
