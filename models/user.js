'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define assoUciation here
      User.hasOne(models.Library,{
        foreignKey: 'library_id',
        as:'library',
        onDelete:'CASCADE'
      })
      User.hasMany(models.Vinyl,{
        foreignKey: 'vinyl_id',
        as:'vinyl'
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