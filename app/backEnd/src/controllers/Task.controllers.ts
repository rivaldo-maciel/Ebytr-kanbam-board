import { Request, Response, NextFunction } from 'express';
import Task from '../database/models/Task';
import ITaskServices from '../services/interfaces/Task.interface';
import ITaskControllers from './interfaces/Task.interface';

class TaskControllers implements ITaskControllers {
  private _taskServices: ITaskServices;

  constructor(services: ITaskServices) {
    this._taskServices = services;
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> {
    try {
      const { content, label, columnId, boardId, position } = req.body;
      const createdTask = await this._taskServices.create({
        content,
        label,
        columnId,
        boardId,
        position
      } as Task);
      console.log(content);
      return res.status(201).json(createdTask);
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
      const allTasks = await this._taskServices.getAll();
      return res.status(200).json(allTasks);
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
      const task = await this._taskServices.getById(id);
      return res.status(200).json(task);
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
      const { content, label, columnId, boardId, position } = req.body;
      const editedTask = await this._taskServices.update(id, {
        content,
        label,
        columnId,
        boardId,
        position
      } as Task);
      return res.status(200).json(editedTask);
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
      await this._taskServices.remove(id);
      return res.status(200).end();
    } catch (err) {
      next(err);
    }
  }
}

export default TaskControllers;
