"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericError_1 = require("../errors/GenericError");
class BoardColumnServices {
    constructor(model) {
        this._boardColumnModel = model;
    }
    async create(boardColumn) {
        const createdBoardColumn = await this._boardColumnModel.create({
            ...boardColumn
        });
        return createdBoardColumn;
    }
    async getAll() {
        const allBoardColumns = await this._boardColumnModel.findAll();
        return allBoardColumns;
    }
    async getById(id) {
        const boardColumn = await this._boardColumnModel.findByPk(id);
        if (!boardColumn)
            throw new GenericError_1.default('boardColumn not found', 404);
        return boardColumn;
    }
    async update(id, boardColumn) {
        const boardColumnToEdit = await this._boardColumnModel.findByPk(id);
        if (!boardColumnToEdit)
            throw new GenericError_1.default('boardColumn not found', 404);
        await this._boardColumnModel.update(boardColumn, { where: { id } });
        return { id, ...boardColumn };
    }
    async remove(id) {
        const boardColumnToRemove = await this._boardColumnModel.findByPk(id);
        if (!boardColumnToRemove)
            throw new GenericError_1.default('boardColumn not found', 404);
        await this._boardColumnModel.destroy({ where: { id } });
    }
}
exports.default = BoardColumnServices;
//# sourceMappingURL=BoardColumn.services.js.map