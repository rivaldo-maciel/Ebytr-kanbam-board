import { Model, DataTypes } from 'sequelize';
import dbConfig from '.';

class UserBoard extends Model {
  id?: string;
  userId: string;
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

export default UserBoard;