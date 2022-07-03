import { Router } from 'express';
import UserServices from '../services/User.services';
import UserControllers from '../controllers/User.controllers';
import User from '../database/models/User';

const userModels = User;
const userServices = new UserServices(userModels);
const userControllers = new UserControllers(userServices);

const routes = Router();

routes.post('/', (req, res, next) => userControllers.create(req, res, next));
routes.get('/', (req, res, next) => userControllers.getAll(req, res, next));
routes.get('/:id', (req, res, next) => userControllers.getById(req, res, next));
routes.put('/:id', (req, res, next) => userControllers.update(req, res, next));
routes.delete('/:id', (req, res, next) => userControllers.remove(req, res, next));

export default routes;