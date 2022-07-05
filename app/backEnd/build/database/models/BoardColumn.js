"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class BoardColumn extends sequelize_1.Model {
}
BoardColumn.init({
    boardId: { type: sequelize_1.DataTypes.STRING, references: { model: 'boards', key: 'id' } },
    columnId: { type: sequelize_1.DataTypes.STRING, references: { model: 'taskColumns', key: 'id' } },
}, {
    sequelize: _1.default,
    modelName: 'BoardColumn',
    underscored: true,
    timestamps: false,
    tableName: 'boardsColumns'
});
exports.default = BoardColumn;
//# sourceMappingURL=BoardColumn.js.map