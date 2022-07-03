import { Model, DataTypes } from 'sequelize';
import dbConfig from '.';

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

export default User;
