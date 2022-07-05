import { Router } from 'express';
import BoardServices from '../services/Board.services';
import BoardControllers from '../controllers/Board.controllers';
import Board from '../database/models/Board';
import BoardFieldsExistenceCheck from '../middlewares/BoardFielsExistenceCheck';
import TokenAuth from '../middlewares/TokenAuth';
import BoardColumn from '../database/models/BoardColumn';

const routes = Router();

const boardColumnModel = BoardColumn;
const boardModel = Board;
const boardServices = new BoardServices(boardModel, boardColumnModel);
const boardControllers = new BoardControllers(boardServices);

routes.post('/', BoardFieldsExistenceCheck, TokenAuth, (req, res, next) => boardControllers.create(req, res, next));
routes.get('/', TokenAuth, (req, res, next) => boardControllers.getAll(req, res, next));
routes.get('/:id', TokenAuth, (req, res, next) => boardControllers.getById(req, res, next));
routes.put('/:id', TokenAuth, BoardFieldsExistenceCheck, (req, res, next) => boardControllers.update(req, res, next));
routes.delete('/:id', TokenAuth, (req, res, next) => boardControllers.remove(req, res, next));

export default routes;