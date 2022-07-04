import Board from '../../database/models/Board';

export default interface IBoardServices {
  create(model: Board): Promise<Board>;
  getAll(): Promise<Board[]>;
  getById(id: string): Promise<Board>;
  update(id: string, board: Board): Promise<Board>;
  remove(id: string): Promise<void>;
}