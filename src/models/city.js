'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Country, {
        foreignKey: 'countryId'
      })
      this.hasMany(models.User, {
        foreignKey: 'cityId'
      })
    }
  }
  City.init(
    {
      name: DataTypes.STRING,
      countryId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'City'
    }
  )
  return City
}
