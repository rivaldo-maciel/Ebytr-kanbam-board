"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Board_1 = require("./Board");
class User extends sequelize_1.Model {
}
User.init({
    firstName: sequelize_1.DataTypes.STRING,
    lastName: sequelize_1.DataTypes.STRING,
    email: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.STRING,
    profileImage: sequelize_1.DataTypes.STRING
}, {
    sequelize: _1.default,
    modelName: 'User',
    underscored: true,
    timestamps: false
});
User.belongsToMany(Board_1.default, { through: 'usersBoards', as: 'boards' });
Board_1.default.belongsToMany(User, { through: 'usersBoards', as: 'users' });
exports.default = User;
//# sourceMappingURL=User.js.map