import { Router } from 'express';
import TaskServices from '../services/Task.services';
import TaskControllers from '../controllers/Task.controllers';
import Task from '../database/models/Task';
import TaskFieldsExistenceCheck from '../middlewares/TaskFieldsExistenceCheck';
import TokenAuth from '../middlewares/TokenAuth';

const routes = Router();

const taskModel = Task
const taskServices = new TaskServices(taskModel);
const taskControllers = new TaskControllers(taskServices);

routes.post('/', TokenAuth, TaskFieldsExistenceCheck, (req, res, next) => taskControllers.create(req, res, next));
routes.get('/', TokenAuth, (req, res, next) => taskControllers.getAll(req, res, next));
routes.get('/:id', TokenAuth, (req, res, next) => taskControllers.getById(req, res, next));
routes.put('/:id', TokenAuth, TaskFieldsExistenceCheck, (req, res, next) => taskControllers.update(req, res, next));
routes.delete('/:id', TokenAuth, (req, res, next) => taskControllers.remove(req, res, next));

export default routes;