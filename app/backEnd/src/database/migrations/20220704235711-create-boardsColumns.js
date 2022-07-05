'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('boardsColumns', {
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
      columnId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'taskColumns', key: 'id' },
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'column_id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('boardsColumns');
  }
};
