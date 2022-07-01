import GenericError from '../errors/GenericError';
import User from '../database/models/User';
class UserServices {
  private _userModel: typeof User;

  constructor() {
    this._userModel = User;
  }

  public async create(user: User): Promise<User> {
    const userExists = await this._userModel.findOne({ where: { email: user.email } });
    if (userExists) throw new GenericError('user already exists', 400);
    const newUser = await this._userModel.create({ ...user });
    return newUser;
  }
}

export default UserServices;
