"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const HttpErrorMiddleware_1 = __importDefault(require("./middlewares/HttpErrorMiddleware"));
const loginRoute_1 = __importDefault(require("./routes/loginRoute"));
// import swaggerUi from 'swagger-ui-express';/
// import swaggerDocument from '../swagger-output.json';
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.app.get('/', (_req, res) => res.json({ ok: true }));
        this.app.use('/login', loginRoute_1.default);
        // this.app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
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
