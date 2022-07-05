"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericError_1 = require("../errors/GenericError");
const jwt = require("jsonwebtoken");
const TokenAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token)
            throw new GenericError_1.default('token is required', 400);
        jwt.decode(token);
        next();
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({ message: 'invalid token' });
    }
};
exports.default = TokenAuth;
//# sourceMappingURL=TokenAuth.js.map