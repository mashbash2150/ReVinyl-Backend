'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vinyl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    Vinyl.belongsTo(models.User, {
        as: 'owner',
        foreignKey: 'owner_id'
      })
     Vinyl.belongsToMany(models.User,{
      as:'vinyls',
      through:models.Library,
      foreignKey:'vinyl_id'
     })
    }
  }
  Vinyl.init({
    user_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    published: DataTypes.STRING,
    rarity: DataTypes.INTEGER,
    image: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vinyl',
    tableName: 'vinyls'
  });
  return Vinyl;
};