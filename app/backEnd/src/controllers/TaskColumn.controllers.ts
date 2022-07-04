import { Request, Response, NextFunction } from 'express';
import TaskColumn from '../database/models/TaskColumn';
import ITaskColumnServices from '../services/interfaces/TaskColumn.interface';
import ITaskColumnControllers from './interfaces/TaskColumn.interface';

class TaskColumnControllers implements ITaskColumnControllers {
  private _taskColumnServices: ITaskColumnServices;

  constructor(services: ITaskColumnServices) {
    this._taskColumnServices = services;
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> {
    try {
      const { title } = req.body;
      const createdTaskColumn = await this._taskColumnServices.create({
        title
      } as TaskColumn);
      return res.status(201).json(createdTaskColumn);
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
      const allTaskColumns = await this._taskColumnServices.getAll();
      return res.status(200).json(allTaskColumns);
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
      const taskColumn = await this._taskColumnServices.getById(id);
      return res.status(200).json(taskColumn);
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
      const { title } = req.body;
      const editedTaskColumn = await this._taskColumnServices.update(id, {
        title
      } as TaskColumn);
      return res.status(200).json(editedTaskColumn);
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
      await this._taskColumnServices.remove(id);
      return res.status(200).end();
    } catch (err) {
      next(err);
    }
  }
}

export default TaskColumnControllers;
