"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class UserBoard extends sequelize_1.Model {
}
UserBoard.init({
    userId: { type: sequelize_1.DataTypes.STRING, references: { model: 'users', key: 'id' } },
    boardId: { type: sequelize_1.DataTypes.STRING, references: { model: 'boards', key: 'id' } },
}, {
    sequelize: _1.default,
    modelName: 'UserBoard',
    underscored: true,
    timestamps: false,
    tableName: 'usersBoards'
});
exports.default = UserBoard;
//# sourceMappingURL=UserBoard.js.map