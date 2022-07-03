import User from '../../database/models/User';

export default interface IUserServices {
  create(model: User): Promise<User>;
  getAll(): Promise<User[]>;
  getById(id: string): Promise<User>;
  update(id: string, user: User): Promise<User>;
  remove(id: string): void;
}
