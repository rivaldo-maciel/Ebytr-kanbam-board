import { Model, DataTypes } from 'sequelize';
import dbConfig from '.';
import Board from './Board';

class User extends Model {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profileImage: string;
}

User.init(
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profileImage: DataTypes.STRING
  },
  {
    sequelize: dbConfig,
    modelName: 'User',
    underscored: true,
    timestamps: false
  }
);

User.belongsToMany(Board, { through: 'usersBoards', as: 'boards' });
Board.belongsToMany(User, { through: 'usersBoards', as: 'users' });

export default User;
