'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('semesters', {
      sem_id: 
      {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      semsemester: 
      {
        allowNull: false,
        type:Sequelize.INTEGER,
	      //unique: true
      },
      semyear: 
      {
        allowNull: false,
        type:Sequelize.INTEGER,
      },
      semiscurrent: 
      {
        allowNull: false,
        type:Sequelize.INTEGER,
      },
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
    return queryInterface.dropTable('semesters');
  }
};