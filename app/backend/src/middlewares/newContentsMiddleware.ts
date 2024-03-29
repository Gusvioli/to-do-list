import { Request, Response, NextFunction } from 'express'
import HttpException from '../utils/HttpException'
import Joi from 'joi'

const schema = Joi.object({
  idUser: Joi.number().min(1).max(1000).required(),
  type: Joi.string().min(3).max(18).required(),
  emoji: Joi.string().min(0).max(32).required(),
  date: Joi.string().min(10).max(10).required(),
  time: Joi.string().min(5).max(5).required(),
  description: Joi.string().min(2).max(255).required(),
  status: Joi.string().min(6).max(18).required(),
}).required()

const NewUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { idUser, type, emoji, date, time, description, status } = req.body
  try {
    const validateShema = schema.validate(
      {
        idUser,
        type,
        emoji,
        date,
        time,
        description,
        status,
      },
      { abortEarly: false },
    )
    if (validateShema.error) {
      next(new Error(validateShema.error.message))
    } else {
      next()
    }
  } catch (error) {
    throw new HttpException(400, 'E-mail, password or name error')
  }
}

export default NewUserController
