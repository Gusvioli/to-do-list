"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = __importDefault(require("../utils/HttpException"));
const validPasswordMiddleware = (req, res, next) => {
    try {
        const { password } = req.body;
        if (password.length < 6) {
            throw new HttpException_1.default(422, 'Password must be 6 characters');
        }
    }
    catch (error) {
        throw new HttpException_1.default(422, 'Password must be 6 characters');
    }
    next();
};
exports.default = validPasswordMiddleware;
