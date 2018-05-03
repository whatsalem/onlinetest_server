'use strict';
module.exports = (sequelize, DataTypes) => {
  var options = sequelize.define('options', {opt_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      que_id: DataTypes.BIGINT,
      optcontent: DataTypes.TEXT,
      optiscorrect: DataTypes.BOOLEAN,
      optorder: DataTypes.INTEGER,
  }, {});
  options.associate = function(models) {

  };
  return options;
};