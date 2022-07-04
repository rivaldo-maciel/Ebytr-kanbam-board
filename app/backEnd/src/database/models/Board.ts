import { Model, DataTypes } from 'sequelize';
import dbConfig from '.';
import Task from './Task';
import User from './User';
import UserBoard from './UserBoard';

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

export default Board;