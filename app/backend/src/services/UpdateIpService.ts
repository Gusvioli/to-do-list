import UserIpModel from '../database/models/UserIpModel'
import HttpException from '../utils/HttpException'

export class UpdateIpService {
  public static async updateIp(data: { ip: string }) {
    const { ip } = data

    const verificarip = await UserIpModel.findOne({
      where: {
        ip,
      },
    })

    if(!verificarip){
      const returno = await UserIpModel.create({
        ip,
      })

      if (!returno) {
        throw new HttpException(401, 'Erro add Ip')
      }
      return returno
    }
  }
}
