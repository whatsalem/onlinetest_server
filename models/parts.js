'use strict';
module.exports = (sequelize, DataTypes) => {
  var parts = sequelize.define('parts', {
    par_id: 
      {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sub_id: 
      {
        allowNull: false,
        type: DataTypes.BIGINT
      },
      parid:DataTypes.CHAR(10),
      parname: DataTypes.CHAR(100),
      pardirection:DataTypes.CHAR(255),
      pardefault_score:DataTypes.INTEGER,
      pardefault_column:DataTypes.INTEGER,
      pardefault_level:DataTypes.INTEGER,
      parorder:DataTypes.INTEGER,
  },);
  parts.associate = function(models) {
    // associations can be defined here
  };
  return parts;
};