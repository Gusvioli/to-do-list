import  * as jsonwebtoken from 'jsonwebtoken';
import Ilogin from '../interfaces/Ilogin';
import 'dotenv/config';

export default function signToken(ilogin: Ilogin) {
  const { id, name, email, role } = ilogin;
  const payload = { id, name, email, role };
  const jwt = jsonwebtoken;
  const JWT_SECRET = process.env.JWT_SECRET as jsonwebtoken.Secret;
  return jwt.sign(payload, JWT_SECRET,
    {
      expiresIn: '30d',
      algorithm: 'HS256'
    });
}
