"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericError_1 = require("../errors/GenericError");
const fileExistenceCheck = (field) => {
    if (!field) {
        throw new GenericError_1.default("all fields is required", 400);
    }
};
const UserFieldsExistenceCheck = (req, res, next) => {
    const { firstName, lastName, email, password, profileImage } = req.body;
    fileExistenceCheck(firstName);
    fileExistenceCheck(lastName);
    fileExistenceCheck(email);
    fileExistenceCheck(password);
    fileExistenceCheck(profileImage);
    next();
};
exports.default = UserFieldsExistenceCheck;
//# sourceMappingURL=UserFieldsExistenceCheck.js.map