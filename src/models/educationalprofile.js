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
    levelEducational: DataTypes.ENUM("Universidad Completa",
          "Universidad Incompleta o en curso",
          "Instituto Profesional o CFT completa",
          "Instituto Profesional o CFT incompleta o en curso",
          "Educación Media Completa",
          "Bootcamp Completo",
          "Bootcamp Incompleto o en curso",
          "Escolar Completa",
          "Escolar Incompleta"),
    careerName: DataTypes.STRING,
    institutionName: DataTypes.STRING,
    institutionType: DataTypes.ENUM("Postgrado",
          "Universidad",
          "Instituto",
          "Bootcamp",
          "Otro"),
    currentSituation: DataTypes.ENUM("Egresado/a",
        "Titulado/a",
        "En Curso"),
    graduationDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'EducationalProfile',
  });
  return EducationalProfile;
};
