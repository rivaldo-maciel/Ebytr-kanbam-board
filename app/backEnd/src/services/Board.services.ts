import GenericError from '../errors/GenericError';
import Board from '../database/models/Board';
import IBoard from './interfaces/Board.interface';
import BoardColumn from '../database/models/BoardColumn';

class BoardServices implements IBoard {
  private _boardModel: typeof Board;
  private _boardColumnModel: typeof BoardColumn;

  constructor(boardModel: typeof Board, boardColumnModel: typeof BoardColumn) {
    this._boardModel = boardModel;
    this._boardColumnModel = boardColumnModel;
  }

  public async create(board: Board): Promise<Board> {
    const createdBoard = await this._boardModel.create({ ...board });
    await this._boardColumnModel.create({ boardId: createdBoard.id, columnId: '1' });
    await this._boardColumnModel.create({ boardId: createdBoard.id, columnId: '2' });
    await this._boardColumnModel.create({ boardId: createdBoard.id, columnId: '3' });
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
