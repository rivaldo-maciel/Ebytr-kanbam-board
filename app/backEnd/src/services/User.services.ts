import GenericError from '../errors/GenericError';
import User from '../database/models/User';
import IUserServices from './interfaces/User.interface';

class UserServices implements IUserServices {
  private _userModel: typeof User;

  constructor(model: typeof User) {
    this._userModel = model;
  }

  public async create(user: User): Promise<User> {
    const userExists = await this._userModel.findOne({
      where: { email: user.email }
    });
    if (userExists) throw new GenericError('user already exists', 400);
    const newUser = await this._userModel.create({ ...user });
    return newUser;
  }

  public async getAll(): Promise<User[]> {
    const users = await this._userModel.findAll();
    return users;
  }

  public async getById(id: string): Promise<User> {
    const user = await this._userModel.findByPk(id);
    if (!user) throw new GenericError('user not found', 404);
    return user;
  }

  public async update(id: string, user: User): Promise<User> {
    await this._userModel.update(user, { where: { id } });
    return user;
  }

  public async remove(id: string): Promise<void> {
    await this._userModel.destroy({ where: { id } });
  }
}

export default UserServices;
