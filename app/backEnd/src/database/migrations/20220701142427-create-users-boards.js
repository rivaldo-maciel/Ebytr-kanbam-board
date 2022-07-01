'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('usersBoards', {
      boardId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: { model: 'boards', key: 'id' }
      },
      userId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: { model: 'users', key: 'id' }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usersBoards');
  }
};
