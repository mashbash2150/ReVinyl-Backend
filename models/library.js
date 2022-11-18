'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Library extends Model {

    static associate(models) {
    }
  }
  Library.init({
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