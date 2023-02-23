import HttpException from "../utils/HttpException";
import UserModel from "../database/models/UserModel";
import Iuser from "../interfaces/Iuser";
import md5 from "md5";
import signToken from "../utils/SignToken";

export class NewUserServices {
    public static async newUser({name, email, password, role}: Iuser): Promise<any> {
        const findEmail = await UserModel.findOne({where: {email}});
        if (findEmail?.dataValues.email === email) {
            throw new HttpException(401, 'Email already in use');
        }
        const md5Password = md5(password);
        const newUser = await UserModel.create({
            name,
            email,
            password: md5Password,
            role,
        });
        if (!newUser) {
            throw new HttpException(401, 'Unable to create user');
        }
        return {token: signToken(newUser), id: newUser.id};
    }
}