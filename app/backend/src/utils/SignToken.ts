import * as jsonwebtoken from 'jsonwebtoken';
import Ilogin from '../interfaces/Ilogin';

export default function signToken(ilogin: Ilogin) {
  const jwt = jsonwebtoken;
  const { name, email, role } = ilogin;
  const passSecret = process.env.JWT_SECRET as jsonwebtoken.Secret;
  const payload = {
    name,
    email,
    role,
  };
  return jwt.sign(payload, passSecret, { expiresIn: '1d', algorithm: 'HS256' });
}
