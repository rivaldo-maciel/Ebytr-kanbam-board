import { Request, Response, NextFunction } from 'express';
import Board from '../database/models/Board';
import IBoardServices from '../services/interfaces/Board.interface';
import IBoardControllers from './interfaces/Board.interface';

class BoardControllers implements IBoardControllers {
  private _boardServices: IBoardServices;

  constructor(services: IBoardServices) {
    this._boardServices = services;
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> {
    try {
      const { title, admin } = req.body;
      const createdBoard = await this._boardServices.create({
        title,
        admin
      } as Board);
      return res.status(201).json(createdBoard);
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
      const allBoards = await this._boardServices.getAll();
      return res.status(200).json(allBoards);
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
      const board = await this._boardServices.getById(id);
      return res.status(200).json(board);
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
      const { title, admin } = req.body;
      const editedBoard = await this._boardServices.update(id, {
        title,
        admin
      } as Board);
      return res.status(200).json(editedBoard);
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
      await this._boardServices.remove(id);
      return res.status(200).end();
    } catch (err) {
      next(err);
    }
  }
}
