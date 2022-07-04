import GenericError from '../errors/GenericError';
import User from '../database/models/User';
import IUserServices from './interfaces/User.interface';
import Board from '../database/models/Board';
import Task from '../database/models/Task';

class UserServices implements IUserServices {
  private _userModel: typeof User;

  constructor(model: typeof User) {
    this._userModel = model;
  }

  private async userExistenceCheck(email: string): Promise<void> {
    const userExists = await this._userModel.findOne({
      where: { email: email }
    });
    if (userExists) throw new GenericError('user already exists', 400);
  }

  public async create(user: User): Promise<User> {
    await this.userExistenceCheck(user.email);
    const newUser = await this._userModel.create({ ...user });
    return newUser;
  }

  public async getAll(): Promise<User[]> {
    const users = await this._userModel.findAll({ include: [{ model: Board, as: 'boards', include: [{ model: Task }] }] });
    return users;
  }

  public async getById(id: string): Promise<User> {
    const user = await this._userModel.findByPk(id);
    if (!user) throw new GenericError('user not found', 404);
    return user;
  }

  public async update(id: string, user: User): Promise<User> {
    await this._userModel.update(user, { where: { id } });
    return { id, ...user } as User;
  }

  public async remove(id: string): Promise<void> {
    await this._userModel.destroy({ where: { id } });
  }
}

export default UserServices;
