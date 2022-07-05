"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Task_1 = require("./Task");
const TaskColumn_1 = require("./TaskColumn");
class Board extends sequelize_1.Model {
}
Board.init({
    title: sequelize_1.DataTypes.STRING,
    admin: sequelize_1.DataTypes.STRING,
}, {
    sequelize: _1.default,
    modelName: 'Board',
    underscored: true,
    timestamps: false
});
Board.hasMany(Task_1.default);
Board.belongsToMany(TaskColumn_1.default, { through: 'boardsColumns', foreignKey: 'boardId', as: 'columns' });
TaskColumn_1.default.belongsToMany(Board, { through: 'boardsColumns', foreignKey: 'columnId', as: 'boards' });
exports.default = Board;
//# sourceMappingURL=Board.js.map