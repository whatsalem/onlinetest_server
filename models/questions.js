'use strict';
module.exports = (sequelize, DataTypes) => {
	var questions = sequelize.define('questions', {
		que_id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		anst_id: DataTypes.INTEGER,
		par_id: DataTypes.BIGINT,
		pas_id: DataTypes.BIGINT,
		quecontent: DataTypes.TEXT,
		queisshuffle: DataTypes.BOOLEAN,
		quescore: DataTypes.FLOAT,
		queopt_column: DataTypes.INTEGER,
		queisbank: DataTypes.BOOLEAN,
		quelevel: DataTypes.INTEGER,
		quemedia: DataTypes.CHAR(50),
		quereference: DataTypes.CHAR(100),
		queorder: DataTypes.INTEGER
	}, {});
	var options = sequelize.define('options', {
		opt_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      que_id: DataTypes.BIGINT,
      optcontent: DataTypes.TEXT,
      optiscorrect: DataTypes.BOOLEAN,
      optorder: DataTypes.INTEGER,
  }, {});
	questions.associate = function(models) {
	questions.hasMany(options,{foreignKey : 'que_id'})
	};
	return questions;
};