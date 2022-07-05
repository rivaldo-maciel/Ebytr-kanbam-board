"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BoardColumn_services_1 = require("../services/BoardColumn.services");
const BoardColumn_controllers_1 = require("../controllers/BoardColumn.controllers");
const BoardColumn_1 = require("../database/models/BoardColumn");
const routes = (0, express_1.Router)();
const boardColumnModels = BoardColumn_1.default;
const boardColumnServices = new BoardColumn_services_1.default(boardColumnModels);
const boarColumnControllers = new BoardColumn_controllers_1.default(boardColumnServices);
routes.post('/', (req, res, next) => boarColumnControllers.create(req, res, next));
routes.get('/', (req, res, next) => boarColumnControllers.getAll(req, res, next));
routes.get('/:id', (req, res, next) => boarColumnControllers.getById(req, res, next));
routes.put('/:id', (req, res, next) => boarColumnControllers.update(req, res, next));
routes.delete('/:id', (req, res, next) => boarColumnControllers.remove(req, res, next));
exports.default = routes;
//# sourceMappingURL=BoardColumn.js.map