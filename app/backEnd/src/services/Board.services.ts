import GenericError from '../errors/GenericError';
import Board from '../database/models/Board';
import IBoard from './interfaces/Board.interface';
import User from '../database/models/User';

class BoardServices implements IBoard {
  private _boardModel: typeof Board;

  constructor(boardModel: typeof Board) {
    this._boardModel = boardModel;
  }

  public async create(board: Board): Promise<Board> {
    const createdBoard = await this._boardModel.create({ ...board });
    return createdBoard;
  }

  public async getAll(): Promise<Board[]> {
    const allBoards = await this._boardModel.findAll();
    return allBoards;
  }

  public async getById(id: string): Promise<Board> {
    const board = await this._boardModel.findByPk(id);
    if (!board) throw new GenericError('board not found', 404);
    return board;
  }

  public async update(id: string, board: Board): Promise<Board> {
    const boardToEdit = await this._boardModel.findByPk(id);
    if (!boardToEdit) throw new GenericError('board not found', 404);
    await this._boardModel.update(board, { where: { id } });
    return { id, ...board } as Board;
  }

  public async remove(id: string): Promise<void> {
    const boardToEdit = await this._boardModel.findByPk(id);
    if (!boardToEdit) throw new GenericError('board not found', 404);
    await this._boardModel.destroy({ where: { id } });
  }
}

export default BoardServices;
