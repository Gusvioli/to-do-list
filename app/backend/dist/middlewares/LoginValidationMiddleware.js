"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = __importDefault(require("../utils/HttpException"));
const joi_1 = __importDefault(require("joi"));
const joi = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).required(),
});
const authMiddleware = (req, res, next) => {
    const { email, password } = req.body;
    try {
        joi.validate({ email, password });
    }
    catch (error) {
        throw new HttpException_1.default(400, 'All fields must be filled');
    }
    next();
};
exports.default = authMiddleware;
