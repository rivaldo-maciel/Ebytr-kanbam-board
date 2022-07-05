import GenericError from '../errors/GenericError';
import BoardColumn from '../database/models/BoardColumn';
import IBoardColumnServices from './interfaces/BoardColumn.interface';

class BoardColumnServices implements IBoardColumnServices {
  private _boardColumnModel: typeof BoardColumn;

  constructor(model: typeof BoardColumn) {
    this._boardColumnModel = model;
  }

  public async create(boardColumn: BoardColumn): Promise<BoardColumn> {
    const createdBoardColumn = await this._boardColumnModel.create({
      ...boardColumn
    });
    return createdBoardColumn;
  }

  public async getAll(): Promise<BoardColumn[]> {
    const allBoardColumns = await this._boardColumnModel.findAll();
    return allBoardColumns;
  }

  public async getById(id: string): Promise<BoardColumn> {
    const boardColumn = await this._boardColumnModel.findByPk(id);
    if (!boardColumn) throw new GenericError('boardColumn not found', 404);
    return boardColumn;
  }

  public async update(
    id: string,
    boardColumn: BoardColumn
  ): Promise<BoardColumn> {
    const boardColumnToEdit = await this._boardColumnModel.findByPk(id);
    if (!boardColumnToEdit)
      throw new GenericError('boardColumn not found', 404);
    await this._boardColumnModel.update(boardColumn, { where: { id } });
    return { id, ...boardColumn } as BoardColumn;
  }

  public async remove(id: string): Promise<void> {
    const boardColumnToRemove = await this._boardColumnModel.findByPk(id);
    if (!boardColumnToRemove)
      throw new GenericError('boardColumn not found', 404);
    await this._boardColumnModel.destroy({ where: { id } });
  }
}

export default BoardColumnServices;
