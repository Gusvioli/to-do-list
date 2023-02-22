import HttpException from "../utils/HttpException";
import TypeModel from "../database/models/TypeModel";

export class TypesService {
    public static async types(): Promise<TypeModel[]> {
        const types = await TypeModel.findAll({
            attributes: ['name', 'url'],
        });
        if (!types) {
            throw new HttpException(404, 'Not found');
        }
        return types;
    }
}