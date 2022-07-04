import { NextFunction, Request, Response, Router } from 'express';
import LoginServices from '../services/Login.services';
import LoginControllers from '../controllers/Login.controllers';
import User from '../database/models/User';
import LoginFieldsExistenceCheck from '../middlewares/LoginFieldsExistenceCheck';

const routes = Router();

const loginServices = new LoginServices(User);
const loginControllers = new LoginControllers(loginServices);

routes.post(
  '/',
  LoginFieldsExistenceCheck,
  (req: Request, res: Response, next: NextFunction) =>
    loginControllers.login(req, res, next)
);

export default routes;
