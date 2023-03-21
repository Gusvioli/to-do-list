import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/HttpException';
import Joi from 'joi';

const schema = Joi.object({
  emoji: Joi.string().min(0).max(32).required(),
  date: Joi.string().min(10).max(10).required(),
  time: Joi.string().min(5).max(5).required(),
  description: Joi.string().min(2).max(255).required(),
}).required();

const NewUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    emoji,
    date,
    time,
    description,
  } = req.body;
  try {
    const validateShema = schema.validate({
      emoji,
      date,
      time,
      description,
    }, { abortEarly: false });
    if (validateShema.error) {
      next(new Error(validateShema.error.message));
    } else {
      next();
    }
  } catch (error) {
    throw new HttpException(400, 'Verifique os dados, e tente novamente!');
  }
};

export default NewUserController;
