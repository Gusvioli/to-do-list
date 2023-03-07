import HttpException from "../utils/HttpException";
import ContentModel from "../database/models/ContentModel";

export class UpdateContentsService {
    public static async updateContents(data: {
        idUser: any,
        date: string,
        status: string,
        id: number,
    }): Promise<ContentModel[] | object> {
        const { id, date, status } = data;
        const { idUser } = data.idUser;
        const updateContents = await ContentModel.update({
            status: status,
            updatedAt: new Date(),
        },{
            where: {
                idUser,
                date,
                id,
             }
            });
        if (!updateContents) {
            throw new HttpException(401, 'Unauthorized');
        }
        const getContents = await ContentModel.findAll({
            attributes: ['id', 'date', 'status', 'idUser'],
            where: { idUser, date, id }});
        
        return getContents;
    }
}