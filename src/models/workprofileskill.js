'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkProfileSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkProfileSkill.init({
    workProfileId: DataTypes.INTEGER,
    skillId: DataTypes.INTEGER,
    level: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkProfileSkill',
  });
  return WorkProfileSkill;
};
