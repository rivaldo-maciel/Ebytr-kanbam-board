import Task from '../../database/models/Task';

export default interface ITaskServices {
  create(model: Task): Promise<Task>;
  getAll(): Promise<Task[]>;
  getById(id: string): Promise<Task>;
  update(id: string, task: Task): Promise<Task>;
  remove(id: string): Promise<void>;
}