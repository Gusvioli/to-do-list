import HttpException from '../utils/HttpException'
import ContentModel from '../database/models/ContentModel'

export class UpdateContentsService {
  public static async updateContents(data: {
    idUser: any
    date: string
    status: string
    id: number
  }): Promise<ContentModel[] | object> {
    const { id, date, status } = data
    const { idUser } = data.idUser
    const updateContents = await ContentModel.update(
      {
        status,
        updatedAt: new Date(),
      },
      {
        where: {
          idUser,
          date,
          id,
        },
      },
    )
    if (!updateContents) {
      throw new HttpException(401, 'Unauthorized')
    }

    return { message: 'Contents updated' }
  }
}
