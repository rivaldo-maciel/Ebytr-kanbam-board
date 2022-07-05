"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserBoardController {
    constructor(services) {
        this._userBoardServices = services;
    }
    async create(req, res, next) {
        try {
            const { userId, boardId } = req.body;
            const createdUserBoard = await this._userBoardServices.create({
                userId,
                boardId
            });
            return res.status(201).json(createdUserBoard);
        }
        catch (err) {
            next(err);
        }
    }
    async getAll(req, res, next) {
        try {
            const allUsersBoards = await this._userBoardServices.getAll();
            return res.status(200).json(allUsersBoards);
        }
        catch (err) {
            next(err);
        }
    }
    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const userBoard = await this._userBoardServices.getById(id);
            return res.status(200).json(userBoard);
        }
        catch (err) {
            next(err);
        }
    }
    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { userId, boardId } = req.body;
            const updatedUserBoard = await this._userBoardServices.update(id, {
                userId,
                boardId
            });
            return res.status(200).json(updatedUserBoard);
        }
        catch (err) {
            next(err);
        }
    }
    async remove(req, res, next) {
        try {
            const { id } = req.params;
            await this._userBoardServices.remove(id);
            return res.status(200).end();
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = UserBoardController;
//# sourceMappingURL=UserBoard.controller.js.map