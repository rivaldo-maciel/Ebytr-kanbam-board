"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Task_services_1 = require("../services/Task.services");
const Task_controllers_1 = require("../controllers/Task.controllers");
const Task_1 = require("../database/models/Task");
const TaskFieldsExistenceCheck_1 = require("../middlewares/TaskFieldsExistenceCheck");
const TokenAuth_1 = require("../middlewares/TokenAuth");
const routes = (0, express_1.Router)();
const taskModel = Task_1.default;
const taskServices = new Task_services_1.default(taskModel);
const taskControllers = new Task_controllers_1.default(taskServices);
routes.post('/', TokenAuth_1.default, TaskFieldsExistenceCheck_1.default, (req, res, next) => taskControllers.create(req, res, next));
routes.get('/', TokenAuth_1.default, (req, res, next) => taskControllers.getAll(req, res, next));
routes.get('/:id', TokenAuth_1.default, (req, res, next) => taskControllers.getById(req, res, next));
routes.put('/:id', TokenAuth_1.default, TaskFieldsExistenceCheck_1.default, (req, res, next) => taskControllers.update(req, res, next));
routes.delete('/:id', TokenAuth_1.default, (req, res, next) => taskControllers.remove(req, res, next));
exports.default = routes;
//# sourceMappingURL=Task.js.map