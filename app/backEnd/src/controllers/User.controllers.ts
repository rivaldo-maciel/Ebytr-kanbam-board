import { NextFunction, Request, Response } from 'express';
import User from '../database/models/User';
import IUserServices from '../services/interfaces/User.interface';
import IUserControllers from './interfaces/User.interface';

class UserControllers implements IUserControllers {
  private _userServices: IUserServices;

  constructor(services: IUserServices) {
    this._userServices = services;
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> {
    try {
      const { firstName, lastName, email, password, profileImage } = req.body;
      const newUser = await this._userServices.create({
        firstName,
        lastName,
        email,
        password,
        profileImage
      } as User);
      return res.status(201).json(newUser);
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
      const allUsers = await this._userServices.getAll();
      return res.status(200).json(allUsers);
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
      const user = await this._userServices.getById(id);
      return res.status(200).json(user);
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
      const { firstName, lastName, email, password, profileImage } = req.body;
      const { id } = req.params;
      await this._userServices.update(id, {
        firstName,
        lastName,
        email,
        password,
        profileImage
      } as User);
      return res
        .status(200)
        .json({ id, firstName, lastName, email, password, profileImage });
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
      await this._userServices.remove(id);
      return res.status(200).json();
    } catch (err) {
      next(err);
    }
  }
}

export default UserControllers;
