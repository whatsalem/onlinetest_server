'use strict';
module.exports = (sequelize, DataTypes) => {
  var usertypes = sequelize.define('usertypes', {
    uset_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    usetname: {
      allowNull: false,
      type: DataTypes.CHAR(100),
      unique: true
    },
    usetisadmin: DataTypes.BOOLEAN,
    usetnote: DataTypes.CHAR(255)
  });
  usertypes.associate = function(models) {
    // associations can be defined here
  };
  return usertypes;
};