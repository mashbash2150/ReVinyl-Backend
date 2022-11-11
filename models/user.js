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
     User.hasMany(models.Vinyl, {
        as: 'owner',
        // foreignKey: 'vinyl_id'
        foreignKey: 'id'
      })
      User.belongsToMany(models.Vinyl,{
        as:'libraries',
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
    passwordDigest: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};