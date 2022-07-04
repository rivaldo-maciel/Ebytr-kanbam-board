import UserBoard from '../../database/models/UserBoard';

export default interface IUserBoardServices {
  create(userBoard: UserBoard): Promise<UserBoard>;
  getAll(): Promise<UserBoard[]>;
  getById(id: string): Promise<UserBoard>;
  update(id: string, userBoard: UserBoard): Promise<UserBoard>;
  remove(id: string): Promise<void>;
}