import { Model, DataTypes } from 'sequelize';
import dbConfig from '.';

class UserBoard extends Model {
  id?: string;
  userId: string;
  boardId: string;
}

UserBoard.init(
  {
    userId: { type: DataTypes.STRING, references: { model: 'users', key: 'id' }},
    boardId: { type: DataTypes.STRING, references: { model: 'boards', key: 'id' }},
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