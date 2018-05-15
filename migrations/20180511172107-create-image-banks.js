'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('image_banks', {
      img_id: 
    {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT
    },
    par_id:
    { 
      allowNull: false,
      type:Sequelize.INTEGER
    },
    imgurl: Sequelize.CHAR(50),


      createdAt: 
      {
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
    return queryInterface.dropTable('image_banks');
  }
};