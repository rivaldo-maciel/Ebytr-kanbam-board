import * as express from 'express';
import ErrorMiddleware from './middlewares/ErrorMid';
import userRoutes from './routes/User';
import boardRoutes from './routes/Board';
import taskRoutes from './routes/Task';
import taskColumnRoutes from './routes/TaskColumn';
import userBoardRoutes from './routes/UserBoard';
import loginRoutes from './routes/Login';
import boardColumnRoutes from './routes/BoardColumn';

class app {
  public _express: express.Express;

  constructor() {
    this._express = express();
    this.config();
    this.routes();
    this.useErrorMiddleware();
  }

  private routes(): void {
    this._express.use('/users', userRoutes);
    this._express.use('/boards', boardRoutes);
    this._express.use('/tasks', taskRoutes);
    this._express.use('/taskColumns', taskColumnRoutes);
    this._express.use('/usersBoards', userBoardRoutes);
    this._express.use('/login', loginRoutes);
    this._express.use('/boardsColumns', boardColumnRoutes);
  }

  private config(): void {
    this._express.use(express.json());
  }

  private useErrorMiddleware(): void {
    this._express.use(ErrorMiddleware);
  }

  public start(PORT: string | number): void {
    this._express.listen(PORT, () =>
      console.log(`server running on port ${PORT}`)
    );
  }
}

export default app;
