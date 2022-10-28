'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.WorkProfile,{through:"WorkProfileSkill",
      foreignKey:"skillId"
      }),
      this.hasOne(models.Category,{
        foreignKey:"categoryId"
      })
    }
  }
  Skill.init({
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};
