import HttpException from '../utils/HttpException'
import EmojiModel from '../database/models/EmojiModel'

export class EmojiServices {
  public static async emoji(): Promise<EmojiModel[]> {
    const emojis = await EmojiModel.findAll()
    if (!emojis) {
      throw new HttpException(404, 'Not found')
    }
    return emojis
  }
}
