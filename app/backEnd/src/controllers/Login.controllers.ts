import { Request, Response, NextFunction } from 'express';
import ILogin from '../services/interfaces/Login.interface';
import ILoginControllers from './interfaces/Login.interface';
import * as jwt from 'jsonwebtoken';
import { SignOptions } from 'jsonwebtoken';
import 'dotenv/config';

class LoginControllers implements ILoginControllers {
  private _loginServices: ILogin;

  constructor(services: ILogin) {
    this._loginServices = services;
  }

  public async login(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const { email, password } = req.body;
      await this._loginServices.login(email, password);
      const secret = process.env.JWT_SECRET;
      const jwtConfig = {
        expiresIn: '1d',
        algorithm: 'HS256',
      };
      const token = jwt.sign({ email, password }, secret as string, jwtConfig as SignOptions);
      return res.status(200).json({ token });
    } catch (err) {
      next(err);
    }
  }
}

export default LoginControllers;