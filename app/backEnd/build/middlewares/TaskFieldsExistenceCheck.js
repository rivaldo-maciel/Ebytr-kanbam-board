"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericError_1 = require("../errors/GenericError");
const fileExistenceCheck = (field) => {
    if (!field) {
        throw new GenericError_1.default("all fields is required", 400);
    }
};
const TaskFieldsExistenceCheck = (req, res, next) => {
    const { content, label, columnId, boardId, position } = req.body;
    fileExistenceCheck(content);
    fileExistenceCheck(label);
    fileExistenceCheck(columnId);
    fileExistenceCheck(boardId);
    fileExistenceCheck(position);
    next();
};
exports.default = TaskFieldsExistenceCheck;
//# sourceMappingURL=TaskFieldsExistenceCheck.js.map