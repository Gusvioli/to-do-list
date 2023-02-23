import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/HttpException';
import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().min(3).max(18).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(18).required(),
}).required();

const NewUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, email, password } = req.body;
  try {
    const validateShema = schema.validate({ name, email, password }, { abortEarly: false });
    if (validateShema.error) {
      next(new Error(validateShema.error.message));
    } else {
      next();
    }
  } catch (error) {
    throw new HttpException(400, 'E-mail, password or nameerror');
  }
};

export default NewUserController;
