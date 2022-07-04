import { Model, DataTypes } from 'sequelize';
import dbConfig from '.';

class UserBoard extends Model {
  userId: string;
  boardId: string;
}

UserBoard.init(
  {
    userId: DataTypes.STRING,
    boardId: DataTypes.STRING,
  },
  {
    sequelize: dbConfig,
    modelName: 'UserBoard',
    underscored: true,
    timestamps: false,
    tableName: 'usersBoards'
  }
);

UserBoard.removeAttribute('id');

export default UserBoard;