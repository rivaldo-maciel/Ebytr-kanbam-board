'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('usersBoards', {
      boardId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'boards', key: 'id' }
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usersBoards');
  }
};
