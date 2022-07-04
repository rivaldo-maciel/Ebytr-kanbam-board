import { Request, Response, NextFunction } from 'express';
import UserBoard from '../database/models/UserBoard';
import IUserBoardServices from '../services/interfaces/UserBoard.interface';
import IUserBoardControllers from './interfaces/UserBoard.interface';

class UserBoardController implements IUserBoardControllers {
  private _userBoardServices: IUserBoardServices;

  constructor(services: IUserBoardServices) {
    this._userBoardServices = services;
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> {
    try {
      const { userId, boardId } = req.body;
      const createdUserBoard = await this._userBoardServices.create({
        userId,
        boardId
      } as UserBoard);
      return res.status(201).json(createdUserBoard);
    } catch (err) {
      next(err);
    }
  }

  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> {
    try {
      const allUsersBoards = await this._userBoardServices.getAll();
      return res.status(200).json(allUsersBoards);
    } catch (err) {
      next(err);
    }
  }

  public async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> {
    try {
      const { id } = req.params;
      const userBoard = await this._userBoardServices.getById(id);
      return res.status(200).json(userBoard);
    } catch (err) {
      next(err);
    }
  }

  public async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> {
    try {
      const { id } = req.params;
      const { userId, boardId } = req.body;
      const updatedUserBoard = await this._userBoardServices.update(id, {
        userId,
        boardId
      } as UserBoard);
      return res.status(200).json(updatedUserBoard);
    } catch (err) {
      next(err);
    }
  }

  public async remove(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> {
    try {
      const { id } = req.params;
      await this._userBoardServices.remove(id);
      return res.status(200).end();
    } catch (err) {
      next(err);
    }
  }
}

export default UserBoardController;
