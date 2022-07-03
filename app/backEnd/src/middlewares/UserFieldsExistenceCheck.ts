import { NextFunction, Request, Response } from 'express';
import GenericError from '../errors/GenericError';

const fileExistenceCheck = (field: string) => {
  if (!field) {
    throw new GenericError(`${field} is required`, 400);
  }
}

const UserFieldsExistenceCheck = (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, email, password, profileImage } = req.body;
  fileExistenceCheck(firstName);
  fileExistenceCheck(lastName);
  fileExistenceCheck(email);
  fileExistenceCheck(password);
  fileExistenceCheck(profileImage);

  next();
}

export default UserFieldsExistenceCheck;