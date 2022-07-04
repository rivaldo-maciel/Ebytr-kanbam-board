import { Router } from 'express';
import TaskColumnServices from '../services/TaskColumn.services';
import TaskColumnControllers from '../controllers/TaskColumn.controllers';
import TaskColumn from '../database/models/TaskColumn';
import TaskColumnFieldsExistenceCheck from '../middlewares/TaskColumnFieldExistenceCheck';

const routes = Router();

const taskColumnModels = TaskColumn;
const taskColumnServices = new TaskColumnServices(taskColumnModels);
const taskColumnControllers = new TaskColumnControllers(taskColumnServices);

routes.post('/', TaskColumnFieldsExistenceCheck, (req, res, next) => taskColumnControllers.create(req, res, next));
routes.get('/', (req, res, next) => taskColumnControllers.getAll(req, res, next));
routes.get('/:id', (req, res, next) => taskColumnControllers.getById(req, res, next));
routes.put('/:id', TaskColumnFieldsExistenceCheck, (req, res, next) => taskColumnControllers.update(req, res, next));
routes.delete('/:id', (req, res, next) => taskColumnControllers.remove(req, res, next));

export default routes;