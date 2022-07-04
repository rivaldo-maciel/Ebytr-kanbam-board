import IUserBoardServices from './interfaces/UserBoard.interface';
import UserBoard from '../database/models/UserBoard';
import GenericError from '../errors/GenericError';
import User from '../database/models/User';
import Board from '../database/models/Board';

class UserBoardServices implements IUserBoardServices {
  private _userBoardModel: typeof UserBoard;
  private _userModel: typeof User;
  private _boardModel: typeof Board;

  constructor(
    model: typeof UserBoard,
    userModel: typeof User,
    boardModel: typeof Board
  ) {
    this._userBoardModel = model;
    this._userModel = userModel;
    this._boardModel = boardModel;
  }

  public async create(userBoard: UserBoard): Promise<UserBoard> {
    const userId = userBoard.userId;
    const boardId = userBoard.boardId;
    const user = await this._userModel.findByPk(userId);
    const board = await this._userBoardModel.findByPk(boardId);
    if (!user) throw new GenericError('user does not exists', 404);
    if (!board) throw new GenericError('board does not exists', 404);
    const createdUserBoard = await this._userBoardModel.create({
      ...userBoard
    });
    return createdUserBoard;
  }

  public async getAll(): Promise<UserBoard[]> {
    const allUsersBoards = await this._userBoardModel.findAll();
    return allUsersBoards;
  }

  public async getById(id: string): Promise<UserBoard> {
    const userBoard = await this._userBoardModel.findByPk(id);
    if (!userBoard) throw new GenericError('userBoard not found', 404);
    return userBoard;
  }

  public async update(id: string, userBoard: UserBoard): Promise<UserBoard> {
    const userBoardToEdit = await this._userBoardModel.findByPk(id);
    if (!userBoardToEdit) throw new GenericError('userBoard not found', 404);
    await this._userBoardModel.update(userBoard, { where: { id } });
    return { id, ...userBoard } as UserBoard;
  }

  public async remove(id: string): Promise<void> {
    const userBoardToRemove = await this._userBoardModel.findByPk(id);
    if (!userBoardToRemove) throw new GenericError('userBoard not found', 404);
    await this._userBoardModel.destroy({ where: { id } });
  }
}

export default UserBoardServices;
