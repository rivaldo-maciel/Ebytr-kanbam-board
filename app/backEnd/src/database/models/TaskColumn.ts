import { Model, DataTypes } from 'sequelize';
import dbConfig from '.';

class TaskColumn extends Model {
  id?: string;
  title: string;
}

TaskColumn.init(
  {
    title: DataTypes.STRING,
    admin: DataTypes.STRING,
  },
  {
    sequelize: dbConfig,
    modelName: 'TaskColumn',
    underscored: true,
    timestamps: false
  }
);

export default TaskColumn;