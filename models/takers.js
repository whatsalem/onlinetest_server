'use strict';
module.exports = (sequelize, DataTypes) => {
  var takers = sequelize.define('takers', {
    tak_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    takid: {
      allowNull:false,
      type: DataTypes.CHAR(20),
      unique: true,
    },
    takefirstname: DataTypes.CHAR(50),
    taklastname: DataTypes.CHAR(100),
    takegender: DataTypes.BOOLEAN(),
    takdob: DataTypes.DATE(),
    takaddress: DataTypes.CHAR(200),
    takemail: DataTypes.CHAR(200),
    takphone: DataTypes.CHAR(20)
  });
  takers.associate = function(models) {
    // associations can be defined here
  };
  return takers;
};