"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericError_1 = require("../errors/GenericError");
const fileExistenceCheck = (field) => {
    if (!field) {
        throw new GenericError_1.default("all fields is required", 400);
    }
};
const BoardFieldsExistenceCheck = (req, res, next) => {
    const { title, admin } = req.body;
    fileExistenceCheck(title);
    fileExistenceCheck(admin);
    next();
};
exports.default = BoardFieldsExistenceCheck;
//# sourceMappingURL=BoardFielsExistenceCheck.js.map