'use strict';
module.exports = (sequelize, DataTypes) => {
  var testtypes = sequelize.define('testtypes', {
    test_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    testname: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      unique: true
    },
    testiscurrent: DataTypes.BOOLEAN,
    testorder: DataTypes.TINYINT
  });
  testtypes.associate = function(models) {
    // associations can be defined here
  };
  return testtypes;
};