"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericError_1 = require("../errors/GenericError");
const fileExistenceCheck = (field) => {
    if (!field) {
        throw new GenericError_1.default("all fields is required", 400);
    }
};
const LoginFieldsExistenceCheck = (req, res, next) => {
    const { email, password } = req.body;
    fileExistenceCheck(email);
    fileExistenceCheck(password);
    next();
};
exports.default = LoginFieldsExistenceCheck;
//# sourceMappingURL=LoginFieldsExistenceCheck.js.map