import HttpException from '../utils/HttpException'
import ContentModel from '../database/models/ContentModel'

export class UpdateEditContentsService {
  public static async updateEditContents(data: {
    idUser: any
    date: string
    status: string
    id: number
    emoji: string
    time: string
    description: string
  }): Promise<ContentModel[] | object> {
    const { id, date, emoji, time, description, status } = data
    const { idUser } = data.idUser
    const updateEditContents = await ContentModel.update(
      {
        date,
        emoji,
        time,
        description,
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
    if (!updateEditContents) {
      throw new HttpException(401, 'Unauthorized')
    }
    const returnUpdateEditContents = await ContentModel.findAll({
      where: { idUser, date },
      order: [['id', 'ASC']],
    })

    return {
      data: { data: returnUpdateEditContents, date, idUser },
      message: 'Update success',
    }
  }
}
