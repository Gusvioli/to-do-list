"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrorMiddleware = (erro, _req, res, _next) => {
    const { status, message } = erro;
    res.status(status || 500).json({ message });
};
exports.default = httpErrorMiddleware;
//# sourceMappingURL=HttpErrorMiddleware.js.map