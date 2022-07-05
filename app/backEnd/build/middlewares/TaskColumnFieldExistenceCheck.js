"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericError_1 = require("../errors/GenericError");
const fileExistenceCheck = (field) => {
    if (!field) {
        throw new GenericError_1.default("all fields is required", 400);
    }
};
const TaskColumnFieldsExistenceCheck = (req, res, next) => {
    const { title } = req.body;
    fileExistenceCheck(title);
    next();
};
exports.default = TaskColumnFieldsExistenceCheck;
//# sourceMappingURL=TaskColumnFieldExistenceCheck.js.map