import HttpException from '../utils/HttpException'
import UserModel from '../database/models/UserModel'
import Ilogin from '../interfaces/Ilogin'
import signToken from '../utils/SignToken'
import md5 from 'md5'

export default class LoginServices {
  public static async login(login: Ilogin): Promise<{
    token: string
    idUser: number
    name: string
  }> {
    const md5DescLogin = md5(login.password)
    const user = await UserModel.findOne({
      attributes: ['id', 'name', 'email', 'role'],
      where: { email: login.email, password: md5DescLogin },
    })
    if (!user) {
      throw new HttpException(401, 'Incorrect email or password')
    }
    return { token: signToken(user), idUser: user.id, name: user.name }
  }
}
