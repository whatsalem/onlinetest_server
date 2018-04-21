'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('testtypes', {
      test_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      testname: {
        allowNull: false,
        type: Sequelize.CHAR(100),
        unique: true
      },
      testiscurrent: Sequelize.BOOLEAN,
      testorder: Sequelize.TINYINT,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('testtypes');
  }
};