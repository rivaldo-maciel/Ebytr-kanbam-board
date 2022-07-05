"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericError_1 = require("../errors/GenericError");
class BoardServices {
    constructor(boardModel, boardColumnModel) {
        this._boardModel = boardModel;
        this._boardColumnModel = boardColumnModel;
    }
    async create(board) {
        const createdBoard = await this._boardModel.create({ ...board });
        await this._boardColumnModel.create({ boardId: createdBoard.id, columnId: '1' });
        await this._boardColumnModel.create({ boardId: createdBoard.id, columnId: '2' });
        await this._boardColumnModel.create({ boardId: createdBoard.id, columnId: '3' });
        return createdBoard;
    }
    async getAll() {
        const allBoards = await this._boardModel.findAll();
        return allBoards;
    }
    async getById(id) {
        const board = await this._boardModel.findByPk(id);
        if (!board)
            throw new GenericError_1.default('board not found', 404);
        return board;
    }
    async update(id, board) {
        const boardToEdit = await this._boardModel.findByPk(id);
        if (!boardToEdit)
            throw new GenericError_1.default('board not found', 404);
        await this._boardModel.update(board, { where: { id } });
        return { id, ...board };
    }
    async remove(id) {
        const boardToEdit = await this._boardModel.findByPk(id);
        if (!boardToEdit)
            throw new GenericError_1.default('board not found', 404);
        await this._boardModel.destroy({ where: { id } });
    }
}
exports.default = BoardServices;
//# sourceMappingURL=Board.services.js.map