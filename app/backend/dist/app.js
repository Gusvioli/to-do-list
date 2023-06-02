"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LoginRoute_1 = __importDefault(require("./routes/LoginRoute"));
const UserRoute_1 = __importDefault(require("./routes/UserRoute"));
const NewUserRoute_1 = __importDefault(require("./routes/NewUserRoute"));
const TypesRoutes_1 = __importDefault(require("./routes/TypesRoutes"));
const ContentsRoutes_1 = __importDefault(require("./routes/ContentsRoutes"));
const EmojiRoute_1 = __importDefault(require("./routes/EmojiRoute"));
const NewContentsRoutes_1 = __importDefault(require("./routes/NewContentsRoutes"));
const UpadteContentsRoutes_1 = __importDefault(require("./routes/UpadteContentsRoutes"));
const UpadteEditContentsRoutes_1 = __importDefault(require("./routes/UpadteEditContentsRoutes"));
const DeleteContentsRoutes_1 = __importDefault(require("./routes/DeleteContentsRoutes"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const HttpErrorMiddleware_1 = __importDefault(require("./middlewares/HttpErrorMiddleware"));
const TokenValidateRoutes_1 = __importDefault(require("./routes/TokenValidateRoutes"));
const updateNewPassword_1 = __importDefault(require("./routes/updateNewPassword"));
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from '../swagger-output.json';
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.app.use('/login', LoginRoute_1.default);
        this.app.use('/userName', UserRoute_1.default);
        this.app.use('/newUser', NewUserRoute_1.default);
        this.app.use('/tokenValidate', TokenValidateRoutes_1.default);
        this.app.use('/emojis', EmojiRoute_1.default);
        this.app.use('/types', TypesRoutes_1.default);
        this.app.use('/contents', ContentsRoutes_1.default);
        this.app.use('/newContents', NewContentsRoutes_1.default);
        this.app.use('/deleteContents', DeleteContentsRoutes_1.default);
        this.app.use('/contentsUpdate', UpadteContentsRoutes_1.default);
        this.app.use('/contentsEditUpdate', UpadteEditContentsRoutes_1.default);
        this.app.use('/passwordUpdate', updateNewPassword_1.default);
        this.app.get('/', (_req, res) => res.json({ ok: true }));
        this.app.use((0, cors_1.default)());
        this.app.use(HttpErrorMiddleware_1.default);
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express_1.default.json());
        this.app.use(accessControl);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map