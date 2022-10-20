'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EducationalProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{
        foreignKey:"userId"
      })
    }
  }
  EducationalProfile.init({
    userId: DataTypes.INTEGER,
    levelEducational: DataTypes.ENUM,
    careerName: DataTypes.STRING,
    institutionName: DataTypes.STRING,
    institutionType: DataTypes.STRING,
    currentSituation: DataTypes.ENUM,
    graduationDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'EducationalProfile',
  });
  return EducationalProfile;
};
