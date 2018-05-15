'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => 
  {
    return queryInterface.createTable('tests', {
      tes_id: 
      {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:Sequelize.INTEGER
      },
      sub_id:
      {
        type:Sequelize.BIGINT,
        allowNull:false,
      },
      use_id:
      {
        type: Sequelize.BIGINT,
        allowNull:false,
      },
      sem_id:
      {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      test_id:
      {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      testitle:Sequelize.CHAR(200),
      tesversion:Sequelize.BIGINT,
      tesdate:Sequelize.DATE,
      testime:Sequelize.BIGINT,
      teslanguage:Sequelize.CHAR(2),
      tesisshuffle:Sequelize.BOOLEAN,
      tesisheadphone:Sequelize.BOOLEAN,
      tesisframe:Sequelize.BOOLEAN,
      tesisactive:Sequelize.BOOLEAN,
      tesislocked:Sequelize.BOOLEAN,
      tespassword:Sequelize.CHAR(50),
      tesenc_password: Sequelize.CHAR(100),
      tesmax_score: Sequelize.FLOAT,
      tesnote: Sequelize.CHAR(255),
      createdAt: 
      {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: 
      {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tests');
  }
};