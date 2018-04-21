'use strict';
module.exports = (sequelize, DataTypes) => {
  var labs = sequelize.define('labs', {
    lab_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    labname: {
      allowNull: false,
      type:DataTypes.CHAR(200),
      unique: true
    },
    labaddress: {
      allowNull: false,
      type:DataTypes.CHAR(255)
    }
  });
  labs.associate = function(models) {
    // associations can be defined here
  };
  return labs;
};