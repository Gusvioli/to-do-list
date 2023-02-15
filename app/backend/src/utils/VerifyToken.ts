import * as jwt from 'jsonwebtoken';
import HttpException from './HttpException';
import 'dotenv/config';

export default function verifyToken(token: string) {
  const secret = process.env.JWT_SECRET as unknown as string;
  try {
    const verifyTokens = jwt.verify(token, secret);
    return verifyTokens;
  } catch (error) {
    throw new HttpException(401, 'Token must be a valid token');
  }
}
