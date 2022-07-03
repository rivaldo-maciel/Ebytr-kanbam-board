import * as express from 'express';
import userRoutes from './routes/User';

class app {
  public _express: express.Express;

  constructor() {
    this._express = express();
    this.middlewares();
    this.routes();
  }

  private routes = (): void => {
    this._express.use('/users', userRoutes);
  };

  private middlewares = (): void => {
    this._express.use(express.json());
  };

  public start = (PORT: string | number): void => {
    this._express.listen(PORT, () =>
      console.log(`server running on port ${PORT}`)
    );
  };
}

export default app;
