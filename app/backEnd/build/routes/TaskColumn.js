"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TaskColumn_services_1 = require("../services/TaskColumn.services");
const TaskColumn_controllers_1 = require("../controllers/TaskColumn.controllers");
const TaskColumn_1 = require("../database/models/TaskColumn");
const TaskColumnFieldExistenceCheck_1 = require("../middlewares/TaskColumnFieldExistenceCheck");
const routes = (0, express_1.Router)();
const taskColumnModels = TaskColumn_1.default;
const taskColumnServices = new TaskColumn_services_1.default(taskColumnModels);
const taskColumnControllers = new TaskColumn_controllers_1.default(taskColumnServices);
routes.post('/', TaskColumnFieldExistenceCheck_1.default, (req, res, next) => taskColumnControllers.create(req, res, next));
routes.get('/', (req, res, next) => taskColumnControllers.getAll(req, res, next));
routes.get('/:id', (req, res, next) => taskColumnControllers.getById(req, res, next));
routes.put('/:id', TaskColumnFieldExistenceCheck_1.default, (req, res, next) => taskColumnControllers.update(req, res, next));
routes.delete('/:id', (req, res, next) => taskColumnControllers.remove(req, res, next));
exports.default = routes;
//# sourceMappingURL=TaskColumn.js.map