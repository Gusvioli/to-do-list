import HttpException from "../utils/HttpException";
import UserModel from "../database/models/UserModel";
import { verifyToken } from "../utils/VerifyToken";

export class userServices {
    public static async userName(token: string): Promise<UserModel> {
        const retornVerify = verifyToken(token);
        const userName = await UserModel.findOne({
            attributes: ['name'],
            where: { email: retornVerify.email },
        });
        if (!userName) {
            throw new HttpException(401, 'Incorrect email or token');
        }
        return userName;
    }
}