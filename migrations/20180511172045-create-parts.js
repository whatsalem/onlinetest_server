'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parts', {
      par_id: 
      {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sub_id: 
      {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      parid:Sequelize.CHAR(10),
      parname: Sequelize.CHAR(100),
      pardirection:Sequelize.CHAR(255),
      pardefault_score:Sequelize.INTEGER,
      pardefault_column:Sequelize.INTEGER,
      pardefault_level:Sequelize.INTEGER,
      parorder:Sequelize.INTEGER,
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
    return queryInterface.dropTable('parts');
  }
};