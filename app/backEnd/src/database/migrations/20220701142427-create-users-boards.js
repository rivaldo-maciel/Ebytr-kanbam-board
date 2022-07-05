'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('usersBoards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      boardId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'boards', key: 'id' },
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'board_id'
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'user_id'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usersBoards');
  }
};
