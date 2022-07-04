import { NextFunction, Request, Response } from 'express';
import GenericError from '../errors/GenericError';
import * as jwt from 'jsonwebtoken';

const TokenAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) throw new GenericError('token is required', 400);
    jwt.decode(token);
    
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'invalid token' });
  }
};

export default TokenAuth;
