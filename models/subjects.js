'use strict';
module.exports = (sequelize, DataTypes) => 
{
  var subjects = sequelize.define('subjects',
  {
    sub_id: 
    {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    subcode:
    { 
      allowNull: false,
      type:DataTypes.CHAR(20)
	  },
    subname: DataTypes.CHAR(100),
    parent_id: DataTypes.BIGINT,
  },);
  subjects.associate = function(models) 
  {
    // associations can be defined here
  };
  return subjects;
};