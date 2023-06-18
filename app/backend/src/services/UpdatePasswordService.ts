import HttpException from '../utils/HttpException'
import md5 from 'md5'
import UserModel from '../database/models/UserModel'

export class UpdatePasswordService {
  public static async updatePassword(data: {
    nameUsed: string
    emailUsed: string
    newPassword: string
  }): Promise<UserModel[] | object> {
    const { nameUsed, emailUsed, newPassword } = data
    const updatePassword = await UserModel.update(
      {
        password: md5(newPassword),
      },
      {
        where: {
          name: nameUsed,
          email: emailUsed,
        },
      },
    )
    console.log(updatePassword[0])
    if (updatePassword[0] === 0) {
      throw new HttpException(401, 'Unauthorized')
    }
    return { message: 'Password updated' }
  }
}
