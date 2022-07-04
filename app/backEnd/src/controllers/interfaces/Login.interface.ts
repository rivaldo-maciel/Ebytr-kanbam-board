import { Request, Response, NextFunction } from 'express';

export default interface ILoginControllers {
    login(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}