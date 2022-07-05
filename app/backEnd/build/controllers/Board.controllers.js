"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BoardControllers {
    constructor(services) {
        this._boardServices = services;
    }
    async create(req, res, next) {
        try {
            const { title, admin } = req.body;
            const createdBoard = await this._boardServices.create({
                title,
                admin
            });
            return res.status(201).json(createdBoard);
        }
        catch (err) {
            console.log(err);
            next(err);
        }
    }
    async getAll(req, res, next) {
        try {
            const allBoards = await this._boardServices.getAll();
            return res.status(200).json(allBoards);
        }
        catch (err) {
            next(err);
        }
    }
    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const board = await this._boardServices.getById(id);
            return res.status(200).json(board);
        }
        catch (err) {
            next(err);
        }
    }
    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { title, admin } = req.body;
            const editedBoard = await this._boardServices.update(id, {
                title,
                admin
            });
            return res.status(200).json(editedBoard);
        }
        catch (err) {
            next(err);
        }
    }
    async remove(req, res, next) {
        try {
            const { id } = req.params;
            await this._boardServices.remove(id);
            return res.status(200).end();
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = BoardControllers;
//# sourceMappingURL=Board.controllers.js.map