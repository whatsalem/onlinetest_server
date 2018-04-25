'use strict';
module.exports = (sequelize, DataTypes) => {
  var subjects = sequelize.define('subjects',
  {
	  subcode:{ 
	  allowNull: false,
	  type:DataTypes.CHAR(20)
	  },
  sub_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      subname: DataTypes.CHAR(100)
  },
  );
  subjects.associate = function(models) {
    // associations can be defined here
  };
  return subjects;
};