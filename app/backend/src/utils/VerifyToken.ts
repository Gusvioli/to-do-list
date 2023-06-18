import jwt from 'jsonwebtoken'
import HttpException from './HttpException'
import 'dotenv/config'

export function verifyToken({ token }: any): any {
  const JWT_SECRET = process.env.JWT_SECRET as jwt.Secret
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    throw new HttpException(401, 'Token must be a valid token')
  }
}
