"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
require("dotenv/config");
class LoginControllers {
    constructor(services) {
        this._loginServices = services;
    }
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            await this._loginServices.login(email, password);
            const secret = process.env.JWT_SECRET;
            const jwtConfig = {
                expiresIn: '1d',
                algorithm: 'HS256',
            };
            const token = jwt.sign({ email, password }, secret, jwtConfig);
            return res.status(200).json({ token });
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = LoginControllers;
//# sourceMappingURL=Login.controllers.js.map