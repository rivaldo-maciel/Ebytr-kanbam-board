import BoardColumn from '../../database/models/BoardColumn';

export default interface IBoardColumnServices {
  create(model: BoardColumn): Promise<BoardColumn>;
  getAll(): Promise<BoardColumn[]>;
  getById(id: string): Promise<BoardColumn>;
  update(id: string, boardColumn: BoardColumn): Promise<BoardColumn>;
  remove(id: string): Promise<void>;
}