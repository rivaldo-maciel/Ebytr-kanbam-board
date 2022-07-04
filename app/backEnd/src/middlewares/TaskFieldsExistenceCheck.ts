import { NextFunction, Request, Response } from 'express';
import GenericError from '../errors/GenericError';

const fileExistenceCheck = (field: string) => {
  if (!field) {
    throw new GenericError("all fields is required", 400);
  }
}

const TaskFieldsExistenceCheck = (req: Request, res: Response, next: NextFunction) => {
  const { content, label, columnId, boardId, position } = req.body;
  fileExistenceCheck(content);
  fileExistenceCheck(label);
  fileExistenceCheck(columnId);
  fileExistenceCheck(boardId);
  fileExistenceCheck(position);

  next();
}

export default TaskFieldsExistenceCheck;