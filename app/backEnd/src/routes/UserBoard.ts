import { Router } from 'express';
import UserBoardServices from '../services/UserBoard.services';
import UserBoardController from '../controllers/UserBoard.controller';
import UserBoard from '../database/models/UserBoard';
import User from '../database/models/User';
import Board from '../database/models/Board';
import UserBoardFieldsExistenceCheck from '../middlewares/UserBoardFieldsExistenceCheck';

const routes = Router();

const boardModel = Board
const userModel = User;
const userBoardModel = UserBoard;
const userBoardServices = new UserBoardServices(userBoardModel, userModel, boardModel);
const userBoardController = new UserBoardController(userBoardServices);

routes.post('/', UserBoardFieldsExistenceCheck, (req, res, next) => userBoardController.create(req, res, next));
routes.get('/', (req, res, next) => userBoardController.getAll(req, res, next));
routes.get('/:id', (req, res, next) => userBoardController.getById(req, res, next));
routes.put('/:id', UserBoardFieldsExistenceCheck, (req, res, next) => userBoardController.update(req, res, next));
routes.delete('/:id', (req, res, next) => userBoardController.remove(req, res, next));

export default routes;