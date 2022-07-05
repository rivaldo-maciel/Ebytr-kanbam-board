"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericError_1 = require("../errors/GenericError");
class TaskColumnServices {
    constructor(taskColumnModel) {
        this._taskColumnModel = taskColumnModel;
    }
    async create(taskColumn) {
        const createdTaskColumn = await this._taskColumnModel.create({
            ...taskColumn
        });
        return createdTaskColumn;
    }
    async getAll() {
        const allTaskColumns = await this._taskColumnModel.findAll();
        return allTaskColumns;
    }
    async getById(id) {
        const taskColumn = await this._taskColumnModel.findByPk(id);
        if (!taskColumn)
            throw new GenericError_1.default('taskColumn not found', 404);
        return taskColumn;
    }
    async update(id, taskColumn) {
        const taskColumnToEdit = await this._taskColumnModel.findByPk(id);
        if (!taskColumnToEdit)
            throw new GenericError_1.default('taskColumn not found', 404);
        await this._taskColumnModel.update({ ...taskColumn }, { where: { id } });
        await this._taskColumnModel.update(taskColumn, { where: { id } });
        return { id, ...taskColumn };
    }
    async remove(id) {
        const taskColumnToRemove = await this._taskColumnModel.findByPk(id);
        if (!taskColumnToRemove)
            throw new GenericError_1.default('taskColumn not found', 404);
        await this._taskColumnModel.destroy({ where: { id } });
    }
}
exports.default = TaskColumnServices;
//# sourceMappingURL=TaskColumn.services.js.map