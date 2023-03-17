"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoginService_1 = __importDefault(require("../services/LoginService"));
class LoginController {
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield LoginService_1.default.login(req.body);
                const { token, idUser, name } = data;
                res.status(200).json({ message: 'Login successful', token, idUser, name });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = LoginController;
//# sourceMappingURL=LoginController.js.map