"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginController_1 = __importDefault(require("../controllers/LoginController"));
const LoginValidationMiddleware_1 = __importDefault(require("../middlewares/LoginValidationMiddleware"));
const router = (0, express_1.Router)();
router.post('/login', LoginValidationMiddleware_1.default, LoginController_1.default.login);
exports.default = router;
