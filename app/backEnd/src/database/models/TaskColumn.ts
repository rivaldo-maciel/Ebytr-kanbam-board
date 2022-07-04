import { Model, DataTypes } from 'sequelize';
import dbConfig from '.';

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

export default TaskColumn;