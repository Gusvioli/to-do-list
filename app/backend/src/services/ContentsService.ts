import HttpException from '../utils/HttpException'
import ContentModel from '../database/models/ContentModel'

export class ContentsService {
  public static async contents(idUserData: {
    idUser: number
  }): Promise<ContentModel[]> {
    const { idUser } = idUserData
    const contents = await ContentModel.findAll({
      attributes: [
        'id',
        'idUser',
        'emoji',
        'date',
        'time',
        'type',
        'description',
        'createdAt',
        'updatedAt',
        'status',
      ],
      where: { idUser },
      order: [['createdAt', 'ASC']],
    })
    if (!contents) {
      throw new HttpException(404, 'Not found')
    }
    return contents
  }

  public static async deleteContents(data: {
    idUser: number
    id: number
    date: string
  }): Promise<ContentModel[] | any> {
    const { idUser, id, date } = data
    const deleteContents = await ContentModel.destroy({
      where: { idUser, id, date },
    })
    if (!deleteContents) {
      throw new HttpException(404, 'Not found')
    }
    return { message: 'Deleted' }
  }
}
