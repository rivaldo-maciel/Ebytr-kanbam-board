"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskControllers {
    constructor(services) {
        this._taskServices = services;
    }
    async create(req, res, next) {
        try {
            const { content, label, columnId, boardId, position } = req.body;
            const createdTask = await this._taskServices.create({
                content,
                label,
                columnId,
                boardId,
                position
            });
            console.log(content);
            return res.status(201).json(createdTask);
        }
        catch (err) {
            next(err);
        }
    }
    async getAll(req, res, next) {
        try {
            const allTasks = await this._taskServices.getAll();
            return res.status(200).json(allTasks);
        }
        catch (err) {
            next(err);
        }
    }
    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const task = await this._taskServices.getById(id);
            return res.status(200).json(task);
        }
        catch (err) {
            next(err);
        }
    }
    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { content, label, columnId, boardId, position } = req.body;
            const editedTask = await this._taskServices.update(id, {
                content,
                label,
                columnId,
                boardId,
                position
            });
            return res.status(200).json(editedTask);
        }
        catch (err) {
            next(err);
        }
    }
    async remove(req, res, next) {
        try {
            const { id } = req.params;
            await this._taskServices.remove(id);
            return res.status(200).end();
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = TaskControllers;
//# sourceMappingURL=Task.controllers.js.map