"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Task extends sequelize_1.Model {
}
Task.init({
    content: sequelize_1.DataTypes.STRING,
    label: sequelize_1.DataTypes.STRING,
    columnId: sequelize_1.DataTypes.STRING,
    boardId: sequelize_1.DataTypes.STRING,
    position: sequelize_1.DataTypes.STRING
}, {
    sequelize: _1.default,
    modelName: 'Task',
    underscored: true,
    timestamps: false
});
exports.default = Task;
//# sourceMappingURL=Task.js.map