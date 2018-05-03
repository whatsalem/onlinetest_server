'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions', {
      que_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      anst_id: Sequelize.INTEGER,
      par_id: Sequelize.BIGINT,
      pas_id: Sequelize.BIGINT,
      quecontent: Sequelize.TEXT,
      queisshuffle: Sequelize.BOOLEAN,
      quescore: Sequelize.FLOAT,
      queopt_column: Sequelize.INTEGER,
      queisbank: Sequelize.BOOLEAN,
      quelevel: Sequelize.INTEGER,
      quemedia: Sequelize.CHAR(50),
      quereference: Sequelize.CHAR(100),
      queorder: Sequelize.INTEGER,
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
    return queryInterface.dropTable('questions');
  }
};