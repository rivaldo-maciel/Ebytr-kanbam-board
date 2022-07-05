"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericError_1 = require("../errors/GenericError");
const ErrorMiddleware = (err, req, res, _next) => {
    console.log(err);
    if (err instanceof GenericError_1.default) {
        return res.status(err.status).json({ message: err.message });
    }
    return res.status(500).json({ message: 'internal error' });
};
exports.default = ErrorMiddleware;
//# sourceMappingURL=ErrorMid.js.map