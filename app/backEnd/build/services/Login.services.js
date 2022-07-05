"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericError_1 = require("../errors/GenericError");
class LoginServices {
    constructor(model) {
        this._userModel = model;
    }
    async login(email, password) {
        const user = await this._userModel.findOne({ where: { email } });
        if (!user)
            throw new GenericError_1.default('user not found', 404);
        if (user.password !== password)
            throw new GenericError_1.default('incorrect fields', 400);
    }
}
exports.default = LoginServices;
//# sourceMappingURL=Login.services.js.map