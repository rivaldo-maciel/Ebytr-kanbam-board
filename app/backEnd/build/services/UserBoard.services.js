"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericError_1 = require("../errors/GenericError");
class UserBoardServices {
    constructor(model, userModel, boardModel) {
        this._userBoardModel = model;
        this._userModel = userModel;
        this._boardModel = boardModel;
    }
    async create(userBoard) {
        const userId = userBoard.userId;
        const boardId = userBoard.boardId;
        const user = await this._userModel.findByPk(userId);
        const board = await this._boardModel.findByPk(boardId);
        if (!user)
            throw new GenericError_1.default('user does not exists', 404);
        if (!board)
            throw new GenericError_1.default('board does not exists', 404);
        const createdUserBoard = await this._userBoardModel.create({
            ...userBoard
        });
        return createdUserBoard;
    }
    async getAll() {
        const allUsersBoards = await this._userBoardModel.findAll();
        return allUsersBoards;
    }
    async getById(id) {
        const userBoard = await this._userBoardModel.findByPk(id);
        if (!userBoard)
            throw new GenericError_1.default('userBoard not found', 404);
        return userBoard;
    }
    async update(id, userBoard) {
        const userBoardToEdit = await this._userBoardModel.findByPk(id);
        if (!userBoardToEdit)
            throw new GenericError_1.default('userBoard not found', 404);
        await this._userBoardModel.update(userBoard, { where: { id } });
        return { ...userBoard };
    }
    async remove(id) {
        const userBoardToRemove = await this._userBoardModel.findByPk(id);
        if (!userBoardToRemove)
            throw new GenericError_1.default('userBoard not found', 404);
        await this._userBoardModel.destroy({ where: { id } });
    }
}
exports.default = UserBoardServices;
//# sourceMappingURL=UserBoard.services.js.map