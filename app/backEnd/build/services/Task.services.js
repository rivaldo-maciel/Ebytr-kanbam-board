"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericError_1 = require("../errors/GenericError");
class TaskServices {
    constructor(model) {
        this._taskModel = model;
    }
    async create(task) {
        const createdTask = await this._taskModel.create({ ...task });
        return createdTask;
    }
    async getAll() {
        const allTasks = await this._taskModel.findAll();
        return allTasks;
    }
    async getById(id) {
        const task = await this._taskModel.findByPk(id);
        if (!task)
            throw new GenericError_1.default('task not found', 404);
        return task;
    }
    async update(id, task) {
        const taskToEdit = await this._taskModel.findByPk(id);
        if (!taskToEdit)
            throw new GenericError_1.default('task not found', 404);
        await this._taskModel.update(task, { where: { id } });
        return { id, ...task };
    }
    async remove(id) {
        const taskToEdit = await this._taskModel.findByPk(id);
        if (!taskToEdit)
            throw new GenericError_1.default('task not found', 404);
        await this._taskModel.destroy({ where: { id } });
    }
}
exports.default = TaskServices;
//# sourceMappingURL=Task.services.js.map