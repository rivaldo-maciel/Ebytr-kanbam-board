import { Router } from 'express';
import BoardServices from '../services/Board.services';
import BoardControllers from '../controllers/Board.controllers';
import Board from '../database/models/Board';
import BoardFieldsExistenceCheck from '../middlewares/BoardFielsExistenceCheck';

const routes = Router();

const boardModel = Board;
const boardServices = new BoardServices(boardModel);
const boardControllers = new BoardControllers(boardServices);

routes.post('/', BoardFieldsExistenceCheck, (req, res, next) => boardControllers.create(req, res, next));
routes.get('/', (req, res, next) => boardControllers.getAll(req, res, next));
routes.get('/:id', (req, res, next) => boardControllers.getById(req, res, next));
routes.put('/:id', BoardFieldsExistenceCheck, (req, res, next) => boardControllers.update(req, res, next));
routes.delete('/:id', (req, res, next) => boardControllers.remove(req, res, next));

export default routes;