import GenericError from '../errors/GenericError';
import TaskColumn from '../database/models/TaskColumn';
import ITaskColumnServices from './interfaces/TaskColumn.interface';

class TaskColumnServices implements ITaskColumnServices {
  private _taskColumnModel: typeof TaskColumn;

  constructor(taskColumnModel: typeof TaskColumn) {
    this._taskColumnModel = taskColumnModel;
  }

  public async create(taskColumn: TaskColumn): Promise<TaskColumn> {
    const createdTaskColumn = await this._taskColumnModel.create({
      ...taskColumn
    });
    return createdTaskColumn;
  }

  public async getAll(): Promise<TaskColumn[]> {
    const allTaskColumns = await this._taskColumnModel.findAll();
    return allTaskColumns;
  }

  public async getById(id: string): Promise<TaskColumn> {
    const taskColumn = await this._taskColumnModel.findByPk(id);
    if (!taskColumn) throw new GenericError('taskColumn not found', 404);
    return taskColumn;
  }

  public async update(id: string, taskColumn: TaskColumn): Promise<TaskColumn> {
    const taskColumnToEdit = await this._taskColumnModel.findByPk(id);
    if (!taskColumnToEdit) throw new GenericError('taskColumn not found', 404);
    await this._taskColumnModel.update({ ...taskColumn }, { where: { id } });
    await this._taskColumnModel.update(taskColumn, { where: { id } });
    return { id, ...taskColumn } as TaskColumn;
  }

  public async remove(id: string): Promise<void> {
    const taskColumnToRemove = await this._taskColumnModel.findByPk(id);
    if (!taskColumnToRemove)
      throw new GenericError('taskColumn not found', 404);
    await this._taskColumnModel.destroy({ where: { id } });
  }
}

export default TaskColumnServices;
