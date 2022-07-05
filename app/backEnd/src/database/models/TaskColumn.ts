import { Model, DataTypes } from 'sequelize';
import dbConfig from '.';
import Task from './Task';

class TaskColumn extends Model {
  id?: string;
  title: string;
}

TaskColumn.init(
  {
    title: DataTypes.STRING,
  },
  {
    sequelize: dbConfig,
    modelName: 'TaskColumn',
    underscored: true,
    timestamps: false,
    tableName: 'taskColumns'
  }
);

TaskColumn.hasMany(Task, { foreignKey: 'columnId' });
Task.belongsTo(TaskColumn, { foreignKey: 'columnId' });

export default TaskColumn;