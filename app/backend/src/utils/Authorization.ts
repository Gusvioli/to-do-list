import jwt from 'jsonwebtoken'

export default function authorization(token: string) {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error('Missing JWT_SECRET')
  }
  const verify = jwt.verify(token, secret)
  return verify
}
