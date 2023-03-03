import HttpException from "../utils/HttpException";
import ContentModel from "../database/models/ContentModel";

export class UpdateContentsService {
    public static async updateContents(data: {
        idUser: number,
        date: string,
    }): Promise<ContentModel[] | object> {
        const { idUser, date } = data;
        const updateContents = await ContentModel.update({
            // status: statusFront === 'Pendente' ? 'Concluido' : 'Pendente',
            updatedAt: new Date(),
        },{
            where: {
                idUser,
                date
             }
            });
        if (!updateContents) {
            throw new HttpException(401, 'Unauthorized');
        }
        const getContents = await ContentModel.findAll({
            attributes: ['date', 'status', 'idUser'],
            where: { idUser, date }});
        
        return getContents;
    }
}