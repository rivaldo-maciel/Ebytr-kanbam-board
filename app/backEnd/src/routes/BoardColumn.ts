import { Router } from 'express';
import BoardColumnServices from '../services/BoardColumn.services';
import BoardColumnControllers from '../controllers/BoardColumn.controllers';
import BoardColumn from '../database/models/BoardColumn';

const routes = Router();

const boardColumnModels = BoardColumn
const boardColumnServices = new BoardColumnServices(boardColumnModels);
const boarColumnControllers = new BoardColumnControllers(boardColumnServices);

routes.post('/', (req, res, next) => boarColumnControllers.create(req, res, next));
routes.get('/', (req, res, next) => boarColumnControllers.getAll(req, res, next));
routes.get('/:id', (req, res, next) => boarColumnControllers.getById(req, res, next));
routes.put('/:id', (req, res, next) => boarColumnControllers.update(req, res, next));
routes.delete('/:id', (req, res, next) => boarColumnControllers.remove(req, res, next));

export default routes;