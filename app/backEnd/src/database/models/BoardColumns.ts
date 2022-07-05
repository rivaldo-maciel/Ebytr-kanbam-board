import { Model, DataTypes } from 'sequelize';
import dbConfig from '.';

class BoardColumn extends Model {
  id?: string;
  boardId: string;
  columnId: string;
}

BoardColumn.init(
  {
    boardId: { type: DataTypes.STRING, references: { model: 'boards', key: 'id' }},
    columnId: { type: DataTypes.STRING, references: { model: 'taskColumns', key: 'id' }},
  },
  {
    sequelize: dbConfig,
    modelName: 'BoardColumn',
    underscored: true,
    timestamps: false,
    tableName: 'boardsColumns'
  }
);

export default BoardColumn;