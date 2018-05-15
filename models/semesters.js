'use strict';
module.exports = (sequelize, DataTypes) => {
  var semesters = sequelize.define('semesters', {
    sem_id: 
    {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    semsemester: 
    {
      allowNull: false,
      type:DataTypes.INTEGER,
      //unique: true
    },
    semyear: 
    {
      allowNull: false,
      type:DataTypes.INTEGER,
    },
    semiscurrent: 
    {
      allowNull: false,
      type:DataTypes.INTEGER,
    }
  });
  semesters.associate = function(models) {
    // associations can be defined here
  };
  return semesters;
};