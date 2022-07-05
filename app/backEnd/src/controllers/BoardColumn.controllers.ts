import IBoardColumnServices from '../services/interfaces/BoardColumn.interface';
import IBoardColumnControllers from './interfaces/BoardColumn.interface';
import { Request, Response, NextFunction } from 'express';
import BoardColumn from '../database/models/BoardColumn';

class BoardColumnControllers implements IBoardColumnControllers {
  private _boardColumnServices: IBoardColumnServices;

  constructor(services: IBoardColumnServices) {
    this._boardColumnServices = services;
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const { boardId, columnId } = req.body;
      const createdBoardColumn = await this._boardColumnServices.create({ boardId, columnId } as BoardColumn);
      return res.status(201).json(createdBoardColumn);
    } catch (err) {
      next(err);
    }
  }

  public async getAll(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const allBoardColumns = await this._boardColumnServices.getAll();
      return res.status(200).json(allBoardColumns);
    } catch (err) {
      next(err);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const { id } = req.params;
      const boardColumn = await this._boardColumnServices.getById(id);
      return res.status(200).json(boardColumn);
    } catch (err) {
      next(err);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const { id } = req.params;
      const { boardId, columnId } = req.body;
      const updatedBoardColumn = await this._boardColumnServices.update(id, { boardId, columnId } as BoardColumn);
      return res.status(200).json(updatedBoardColumn);
    } catch (err) {
      next(err);
    }
  }

  public async remove(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const { id } = req.params;
      await this._boardColumnServices.remove(id);
    } catch (err) {
      next(err);
    }
  }

}

export default BoardColumnControllers;