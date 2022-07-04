import GenericError from '../errors/GenericError';
import Task from '../database/models/Task';
import ITaskServices from './interfaces/Task.interface';

class TaskServices implements ITaskServices {
  private _taskModel: typeof Task;

  constructor(model: typeof Task) {
    this._taskModel = model;
  }

  public async create(task: Task): Promise<Task> {
    const createdTask = await this._taskModel.create({ ...task });
    return createdTask;
  }

  public async getAll(): Promise<Task[]> {
    const allTasks = await this._taskModel.findAll();
    return allTasks;
  }

  public async getById(id: string): Promise<Task> {
    const task = await this._taskModel.findByPk(id);
    if (!task) throw new GenericError('task not found', 404);
    return task;
  }

  public async update(id: string, task: Task): Promise<Task> {
    const taskToEdit = await this._taskModel.findByPk(id);
    if (!taskToEdit) throw new GenericError('task not found', 404);
    await this._taskModel.update(task, { where: { id } });
    return { id, ...task } as Task;
  }

  public async remove(id: string): Promise<void> {
    const taskToEdit = await this._taskModel.findByPk(id);
    if (!taskToEdit) throw new GenericError('task not found', 404);
    await this._taskModel.destroy({ where: { id } });
  }
}

export default TaskServices;
