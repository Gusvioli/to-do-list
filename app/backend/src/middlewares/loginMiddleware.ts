import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/HttpException';
import Joi from 'joi';

const joi = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;
  try {
    joi.validate({ email, password });
  } catch (error) {
    throw new HttpException(400, 'E-mail and password error');;
  }
  next();
};

export default loginValidation;
