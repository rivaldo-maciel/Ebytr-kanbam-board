import { Request, Response, NextFunction } from 'express';
import GenericError from '../errors/GenericError';

const fileExistenceCheck = (field: string) => {
  if (!field) {
    throw new GenericError("all fields is required", 400);
  }
}

const TaskColumnFieldsExistenceCheck = (req: Request, res: Response, next: NextFunction) => {
  const { title } = req.body;
  fileExistenceCheck(title);

  next();
}

export default TaskColumnFieldsExistenceCheck;