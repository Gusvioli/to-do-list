import HttpException from "../utils/HttpException";
import ContentModel from "../database/models/ContentModel";

export class ContentsService {
    public static async contents(idUser: number): Promise<ContentModel[]> {
        const contents = await ContentModel.findAll({
            where: { idUser },
        });
        if (!contents) {
            throw new HttpException(404, 'Not found');
        }
        return contents;
    }
}