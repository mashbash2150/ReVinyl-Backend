'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Library extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      //commented out before testing replication of medium article lesson
      // Library.belongsTo(models.User, {
      //   foreignKey: 'user_id',
      //   as: 'user_library'
      // }) 
      // Library.hasMany(models.Vinyl, {
      //   foreignKey: 'vinyl_id',
      //   as: 'user_library'
      // }) 
      // define association here
    }
  }
  Library.init({
    // libraryName: DataTypes.STRING,
    // image: DataTypes.STRING,
    // notes: DataTypes.STRING,
    vinyl_id: {
      type:DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'vinyls',
        key: 'id'
      }
    },
    owner_id: {
      type:DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Library',
    tableName:'libraries'
  });
  return Library;
};