'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'users',
      {
        use_id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
		  allowNull: false,
        },
        createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
	  updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
        useaccount:{
			allowNull: false,
			type: Sequelize.CHAR(50),
			unique: true
			},
        useenc_password: Sequelize.CHAR(255),
        token: Sequelize.CHAR(200),
        expired_time: Sequelize.DATE,
        useenc_password: Sequelize.CHAR(50),
        usefirstname: Sequelize.CHAR(50),
        uselastname:Sequelize.CHAR(50),
        usedob: Sequelize.DATE,
        usegender:Sequelize.BOOLEAN,
        useemail:Sequelize.CHAR(50),
        usephone:Sequelize.CHAR(50),
        useactive:Sequelize.BOOLEAN,
        uset_id:Sequelize.BIGINT
      }
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};