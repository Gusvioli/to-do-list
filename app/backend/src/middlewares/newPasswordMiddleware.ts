import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/HttpException';
import Joi from 'joi';

const schema = Joi.object({
  nameUsed: Joi.string().min(3).max(18).required(),
  emailUsed: Joi.string().email().required(),
  newPassword: Joi.string().min(6).max(18).required(),
}).required();

const NewUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    nameUsed,
    emailUsed,
    newPassword,
  } = req.body;
  try {
    const validateShema = schema.validate({
      nameUsed,
      emailUsed,
      newPassword,
    }, { abortEarly: false });
    if (validateShema.error) {
      next(new Error(validateShema.error.message));
    } else {
      next();
    }
  } catch (error) {
    throw new HttpException(400, 'E-mail, password or name error');
  }
};

export default NewUserController;
