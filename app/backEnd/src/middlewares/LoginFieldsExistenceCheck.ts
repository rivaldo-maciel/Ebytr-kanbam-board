import { NextFunction, Request, Response } from 'express';
import GenericError from '../errors/GenericError';

const fileExistenceCheck = (field: string) => {
  if (!field) {
    throw new GenericError("all fields is required", 400);
  }
}

const LoginFieldsExistenceCheck = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  fileExistenceCheck(email);
  fileExistenceCheck(password);

  next();
}

export default LoginFieldsExistenceCheck;