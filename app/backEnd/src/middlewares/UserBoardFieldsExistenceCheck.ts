import { NextFunction, Request, Response } from 'express';
import GenericError from '../errors/GenericError';

const fileExistenceCheck = (field: string) => {
  if (!field) {
    throw new GenericError( "all fields is required", 400);
  }
}

const UserBoardFieldsExistenceCheck = (req: Request, res: Response, next: NextFunction) => {
  const { userId, boardId } = req.body;
  fileExistenceCheck(userId);
  fileExistenceCheck(boardId);

  next();
}

export default UserBoardFieldsExistenceCheck;