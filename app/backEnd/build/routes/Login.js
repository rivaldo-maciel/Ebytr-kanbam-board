"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Login_services_1 = require("../services/Login.services");
const Login_controllers_1 = require("../controllers/Login.controllers");
const User_1 = require("../database/models/User");
const LoginFieldsExistenceCheck_1 = require("../middlewares/LoginFieldsExistenceCheck");
const routes = (0, express_1.Router)();
const loginServices = new Login_services_1.default(User_1.default);
const loginControllers = new Login_controllers_1.default(loginServices);
routes.post('/', LoginFieldsExistenceCheck_1.default, (req, res, next) => loginControllers.login(req, res, next));
exports.default = routes;
//# sourceMappingURL=Login.js.map