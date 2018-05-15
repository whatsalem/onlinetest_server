'use strict';
module.exports = (sequelize, DataTypes) => 
{
  var users = sequelize.define('users',
  {   
    use_id: 
    {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    uset_id:DataTypes.BIGINT,
    useaccount:
    {
      allowNull: false,
      type: DataTypes.CHAR(50)
    },
    useenc_password: DataTypes.CHAR(255),
    token: DataTypes.CHAR(200),
    expired_time: DataTypes.DATE,
    usefirstname: DataTypes.CHAR(50),
    uselastname:DataTypes.CHAR(50),  
    usedob: DataTypes.DATE,
    usegender:DataTypes.BOOLEAN,
    useemail:DataTypes.CHAR(50),
    usephone:DataTypes.CHAR(50),
    useactive:DataTypes.BOOLEAN 
});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
