"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BoardColumnControllers {
    constructor(services) {
        this._boardColumnServices = services;
    }
    async create(req, res, next) {
        try {
            const { boardId, columnId } = req.body;
            const createdBoardColumn = await this._boardColumnServices.create({ boardId, columnId });
            return res.status(201).json(createdBoardColumn);
        }
        catch (err) {
            next(err);
        }
    }
    async getAll(req, res, next) {
        try {
            const allBoardColumns = await this._boardColumnServices.getAll();
            return res.status(200).json(allBoardColumns);
        }
        catch (err) {
            next(err);
        }
    }
    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const boardColumn = await this._boardColumnServices.getById(id);
            return res.status(200).json(boardColumn);
        }
        catch (err) {
            next(err);
        }
    }
    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { boardId, columnId } = req.body;
            const updatedBoardColumn = await this._boardColumnServices.update(id, { boardId, columnId });
            return res.status(200).json(updatedBoardColumn);
        }
        catch (err) {
            next(err);
        }
    }
    async remove(req, res, next) {
        try {
            const { id } = req.params;
            await this._boardColumnServices.remove(id);
            return res.status(200).end();
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = BoardColumnControllers;
//# sourceMappingURL=BoardColumn.controllers.js.map