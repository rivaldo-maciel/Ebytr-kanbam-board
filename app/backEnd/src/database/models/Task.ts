import { Model, DataTypes } from 'sequelize';
import dbConfig from '.';

class Task extends Model {
  id?: string;
  content: string;
  label: string;
  columnId: string;
  boardId: string;
  position: string;
}

Task.init(
  {
    content: DataTypes.STRING,
    label: DataTypes.STRING,
    columnId: DataTypes.STRING,
    boardId: DataTypes.STRING,
    position: DataTypes.STRING
  },
  {
    sequelize: dbConfig,
    modelName: 'Task',
    underscored: true,
    timestamps: false
  }
);

export default Task;
