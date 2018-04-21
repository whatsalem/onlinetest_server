'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usertypes', {
      uset_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      usetname: {
        allowNull: false,
        type: Sequelize.CHAR(100),
        unique: true
      },
      usetisadmin: Sequelize.BOOLEAN,
      usetnote: Sequelize.CHAR(255),
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
    return queryInterface.dropTable('usertypes');
  }
};