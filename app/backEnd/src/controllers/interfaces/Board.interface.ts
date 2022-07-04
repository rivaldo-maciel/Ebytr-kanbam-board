import { Request, Response, NextFunction } from 'express';

export default interface IBoardControllers {
    create(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    getAll(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    getById(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    update(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    remove(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}