"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Task_1 = require("./Task");
class TaskColumn extends sequelize_1.Model {
}
TaskColumn.init({
    title: sequelize_1.DataTypes.STRING,
}, {
    sequelize: _1.default,
    modelName: 'TaskColumn',
    underscored: true,
    timestamps: false,
    tableName: 'taskColumns'
});
TaskColumn.hasMany(Task_1.default, { foreignKey: 'columnId' });
Task_1.default.belongsTo(TaskColumn, { foreignKey: 'columnId' });
exports.default = TaskColumn;
//# sourceMappingURL=TaskColumn.js.map