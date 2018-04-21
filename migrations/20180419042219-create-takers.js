'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('takers', {
      tak_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      takid: {
        allowNull:false,
        type: Sequelize.CHAR(20),
        unique: true,
      },
      takefirstname: Sequelize.CHAR(50),
      taklastname: Sequelize.CHAR(100),
      takegender: Sequelize.BOOLEAN(),
      takdob: Sequelize.DATE(),
      takaddress: Sequelize.CHAR(200),
      takemail: Sequelize.CHAR(200),
      takphone: Sequelize.CHAR(20),
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
    return queryInterface.dropTable('takers');
  }
};