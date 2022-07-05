"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericError_1 = require("../errors/GenericError");
const fileExistenceCheck = (field) => {
    if (!field) {
        throw new GenericError_1.default("all fields is required", 400);
    }
};
const UserBoardFieldsExistenceCheck = (req, res, next) => {
    const { userId, boardId } = req.body;
    fileExistenceCheck(userId);
    fileExistenceCheck(boardId);
    next();
};
exports.default = UserBoardFieldsExistenceCheck;
//# sourceMappingURL=UserBoardFieldsExistenceCheck.js.map