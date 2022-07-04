import GenericError from '../errors/GenericError';
import User from '../database/models/User';
import ILogin from './interfaces/Login.interface';

class LoginServices implements ILogin {
  private _userModel: typeof User;

  constructor(model: typeof User) {
    this._userModel = model;
  }

  public async login(email: string, password: string): Promise<void> {
    const user = await this._userModel.findOne({ where: { email }});
    if (!user) throw new GenericError('user not found', 404);
    if (user.password !== password) throw new GenericError('incorrect fields', 400);
  }
}

export default LoginServices;