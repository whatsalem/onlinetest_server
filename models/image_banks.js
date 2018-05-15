'use strict';
module.exports = (sequelize, DataTypes) => {
  var image_banks = sequelize.define('image_banks', 
  {
    img_id: 
    {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    par_id:
    { 
      allowNull: false,
      type:DataTypes.INTEGER
    },
    imgurl: DataTypes.CHAR(50),
  },);
  image_banks.associate = function(models) {
    // associations can be defined here
  };
  return image_banks;
};