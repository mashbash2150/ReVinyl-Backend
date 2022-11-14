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





      //commmented out before trying to replicate medium article lesson
      // User.hasOne(models.Library,{
      //   foreignKey: 'library_id',
      //   as:'library',
      //   onDelete:'CASCADE'
      // })

      //Deleted after deciding library would be the join table.  User has many vinyl VIA library
      // User.hasMany(models.Vinyl,{
      //   foreignKey: 'vinyl_id',
      //   as:'vinyl'
      // })
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};