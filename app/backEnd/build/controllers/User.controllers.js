"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserControllers {
    constructor(services) {
        this._userServices = services;
    }
    async create(req, res, next) {
        try {
            const { firstName, lastName, email, password, profileImage } = req.body;
            const newUser = await this._userServices.create({
                firstName,
                lastName,
                email,
                password,
                profileImage
            });
            return res.status(201).json(newUser);
        }
        catch (err) {
            next(err);
        }
    }
    async getAll(req, res, next) {
        try {
            const allUsers = await this._userServices.getAll();
            return res.status(200).json(allUsers);
        }
        catch (err) {
            next(err);
        }
    }
    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const user = await this._userServices.getById(id);
            return res.status(200).json(user);
        }
        catch (err) {
            next(err);
        }
    }
    async update(req, res, next) {
        try {
            const { firstName, lastName, email, password, profileImage } = req.body;
            const { id } = req.params;
            await this._userServices.update(id, {
                firstName,
                lastName,
                email,
                password,
                profileImage
            });
            return res
                .status(200)
                .json({ id, firstName, lastName, email, password, profileImage });
        }
        catch (err) {
            next(err);
        }
    }
    async remove(req, res, next) {
        try {
            const { id } = req.params;
            await this._userServices.remove(id);
            return res.status(200).end();
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = UserControllers;
//# sourceMappingURL=User.controllers.js.map