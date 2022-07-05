"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericError_1 = require("../errors/GenericError");
const Board_1 = require("../database/models/Board");
const Task_1 = require("../database/models/Task");
const TaskColumn_1 = require("../database/models/TaskColumn");
class UserServices {
    constructor(model) {
        this._userModel = model;
    }
    async userExistenceCheck(email) {
        const userExists = await this._userModel.findOne({
            where: { email: email }
        });
        if (userExists)
            throw new GenericError_1.default('user already exists', 400);
    }
    async create(user) {
        await this.userExistenceCheck(user.email);
        const newUser = await this._userModel.create({ ...user });
        return newUser;
    }
    async getAll() {
        const users = await this._userModel.findAll({
            include: [
                {
                    model: Board_1.default,
                    as: 'boards',
                    attributes: { exclude: ['usersBoards'] },
                    include: [
                        {
                            model: TaskColumn_1.default,
                            include: [{ model: Task_1.default }],
                            as: 'columns',
                        }
                    ],
                }
            ]
        });
        return users;
    }
    async getById(id) {
        const user = await this._userModel.findByPk(id);
        if (!user)
            throw new GenericError_1.default('user not found', 404);
        return user;
    }
    async update(id, user) {
        await this._userModel.update(user, { where: { id } });
        return { id, ...user };
    }
    async remove(id) {
        await this._userModel.destroy({ where: { id } });
    }
}
exports.default = UserServices;
//# sourceMappingURL=User.services.js.map