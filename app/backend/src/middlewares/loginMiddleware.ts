import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/HttpException';
import Joi from 'joi';

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(18).required(),
}).required();

const loginValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;
  try {
    const validateShema = schema.validate({ email, password }, { abortEarly: false });
    if(validateShema.error){
      next(new Error('E-mail or password incorrect ou empyt'));
    } else {
      next();
    }
  } catch (error) {
    throw new HttpException(400, 'E-mail or password error');
  }
};

export default loginValidation;
