import { NextFunction, Request, Response } from 'express';
import GenericError from '../errors/GenericError';

const fileExistenceCheck = (field: string) => {
  if (!field) {
    throw new GenericError(`${field} is required`, 400);
  }
}

const BoardFieldsExistenceCheck = (req: Request, res: Response, next: NextFunction) => {
  const { title, admin } = req.body;
  fileExistenceCheck(title);
  fileExistenceCheck(admin);

  next();
}

export default BoardFieldsExistenceCheck;