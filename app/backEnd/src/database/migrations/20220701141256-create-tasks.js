'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING
      },
      label: {
        type: Sequelize.STRING
      },
      columnId: {
        type: Sequelize.INTEGER,
        references: { model: 'taskColumns', key: 'id' }
      },
      boardId: {
        type: Sequelize.INTEGER,
        references: { model: 'boards', key: 'id' }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};
