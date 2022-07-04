import { Request, Response, NextFunction } from 'express';
import GenericError from '../errors/GenericError';

const ErrorMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log(err);
  if (err instanceof GenericError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'internal error' });
};

export default ErrorMiddleware;
