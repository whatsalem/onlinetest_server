'use strict';
module.exports = (sequelize, DataTypes) => 
{
  var tests = sequelize.define('tests', 
  {
    tes_id: 
      {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:DataTypes.INTEGER
      },
      sub_id:
      {
        type:DataTypes.BIGINT,
        allowNull:false,
      },
      use_id:
      {
        type: DataTypes.BIGINT,
        allowNull:false,
      },
      sem_id:
      {
        type: DataTypes.INTEGER,
        allowNull:false,
      },
      test_id:
      {
        type: DataTypes.INTEGER,
        allowNull:false,
      },
      testitle:DataTypes.CHAR(200),
      tesversion:DataTypes.BIGINT,
      tesdate:DataTypes.DATE,
      testime:DataTypes.BIGINT,
      teslanguage:DataTypes.CHAR(2),
      tesisshuffle:DataTypes.BOOLEAN,
      tesisheadphone:DataTypes.BOOLEAN,
      tesisframe:DataTypes.BOOLEAN,
      tesisactive:DataTypes.BOOLEAN,
      tesislocked:DataTypes.BOOLEAN,
      tespassword:DataTypes.CHAR(50),
      tesenc_password: DataTypes.CHAR(100),
      tesmax_score: DataTypes.FLOAT,
      tesnote: DataTypes.CHAR(255),
  },);
  tests.associate = function(models) 
  {
    // associations can be defined here
  };
  return tests;
};