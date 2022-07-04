import TaskColumn from '../../database/models/TaskColumn';

export default interface ITaskColumnServices {
  create(taskColumn: TaskColumn): Promise<TaskColumn>;
  getAll(): Promise<TaskColumn[]>;
  getById(id: string): Promise<TaskColumn>;
  update(id: string, taskColumn: TaskColumn): Promise<TaskColumn>;
  remove(id: string): Promise<void>;
}