"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskColumnControllers {
    constructor(services) {
        this._taskColumnServices = services;
    }
    async create(req, res, next) {
        try {
            const { title } = req.body;
            const createdTaskColumn = await this._taskColumnServices.create({
                title
            });
            return res.status(201).json(createdTaskColumn);
        }
        catch (err) {
            next(err);
        }
    }
    async getAll(req, res, next) {
        try {
            const allTaskColumns = await this._taskColumnServices.getAll();
            return res.status(200).json(allTaskColumns);
        }
        catch (err) {
            next(err);
        }
    }
    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const taskColumn = await this._taskColumnServices.getById(id);
            return res.status(200).json(taskColumn);
        }
        catch (err) {
            next(err);
        }
    }
    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { title } = req.body;
            const editedTaskColumn = await this._taskColumnServices.update(id, {
                title
            });
            return res.status(200).json(editedTaskColumn);
        }
        catch (err) {
            next(err);
        }
    }
    async remove(req, res, next) {
        try {
            const { id } = req.params;
            await this._taskColumnServices.remove(id);
            return res.status(200).end();
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = TaskColumnControllers;
//# sourceMappingURL=TaskColumn.controllers.js.map