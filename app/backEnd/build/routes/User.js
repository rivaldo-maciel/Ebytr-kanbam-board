"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_services_1 = require("../services/User.services");
const User_controllers_1 = require("../controllers/User.controllers");
const User_1 = require("../database/models/User");
const UserFieldsExistenceCheck_1 = require("../middlewares/UserFieldsExistenceCheck");
const userModels = User_1.default;
const userServices = new User_services_1.default(userModels);
const userControllers = new User_controllers_1.default(userServices);
const routes = (0, express_1.Router)();
routes.post('/', UserFieldsExistenceCheck_1.default, (req, res, next) => userControllers.create(req, res, next));
routes.get('/', (req, res, next) => userControllers.getAll(req, res, next));
routes.get('/:id', (req, res, next) => userControllers.getById(req, res, next));
routes.put('/:id', UserFieldsExistenceCheck_1.default, (req, res, next) => userControllers.update(req, res, next));
routes.delete('/:id', (req, res, next) => userControllers.remove(req, res, next));
exports.default = routes;
//# sourceMappingURL=User.js.map