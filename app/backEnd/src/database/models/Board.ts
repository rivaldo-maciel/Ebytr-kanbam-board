import { Model, DataTypes } from 'sequelize';
import dbConfig from '.';
import Task from './Task';
import TaskColumn from './TaskColumn';

class Board extends Model {
  id?: string;
  title: string;
  admin: string;
}

Board.init(
  {
    title: DataTypes.STRING,
    admin: DataTypes.STRING,
  },
  {
    sequelize: dbConfig,
    modelName: 'Board',
    underscored: true,
    timestamps: false
  }
);

Board.hasMany(Task);
Board.belongsToMany(TaskColumn, { through: 'boardsColumns', foreignKey: 'boardId', as: 'columns' });
TaskColumn.belongsToMany(Board, { through: 'boardsColumns', foreignKey: 'columnId', as: 'boards' });

export default Board;