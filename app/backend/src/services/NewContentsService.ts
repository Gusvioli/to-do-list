import HttpException from '../utils/HttpException'
import ContentModel from '../database/models/ContentModel'
import Icontents from '../interfaces/Icontents'

export class NewContentsService {
  public static async newContents(idUserData: Icontents): Promise<object> {
    const newContents = await ContentModel.create({ ...idUserData })
    if (!newContents) {
      throw new HttpException(401, 'could not create content')
    }
    return newContents
  }
}
