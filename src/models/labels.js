'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Labels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {//FALTA
      // define association here 
      // this.belongsTo(models.User)
    }
  }
  Labels.init({
    name: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Labels',
  });
  return Labels
}