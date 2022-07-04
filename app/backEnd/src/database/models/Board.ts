import { Model, DataTypes } from 'sequelize';
import dbConfig from '.';

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

export default Board;