'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {

     User.hasMany(models.Vinyl, {
        as: 'owner',
        foreignKey: 'id'
      })
      User.belongsToMany(models.Vinyl,{
        as:'cart',
        through:models.Library,
        foreignKey:'owner_id'
      })
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordDigest: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};