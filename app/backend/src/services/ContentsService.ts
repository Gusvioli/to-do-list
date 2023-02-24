import HttpException from "../utils/HttpException";
import ContentModel from "../database/models/ContentModel";

export class ContentsService {
    public static async contents(idUserData: { idUser: number; }): Promise<ContentModel[]> {
        const { idUser } = idUserData;
        const contents = await ContentModel.findAll({
            attributes: [
                "emoji",
                "descript",
                "date",
                "type",
                "createdAt",
                "updatedAt",
                "status"
            ],
            where: { idUser },
        });
        if (!contents) {
            throw new HttpException(404, 'Not found');
        }
        return contents;
    }
}