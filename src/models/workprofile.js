'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{
        foreignKey:"userId"
      }),
      this.belongsToMany(models.Skill,{through:"WorkProfileSkill",
      foreignKey:"workProfileId"
      })
    }
  }
  WorkProfile.init({
    userId: DataTypes.INTEGER,
    idealJobComment: DataTypes.STRING,
    featureProyect: DataTypes.STRING,
    activeVisa: DataTypes.ENUM("Estados unidos",
        "Unión europea",
        "Mi país de residencia actual",
        "Otros países"),
    currentJobSituation: DataTypes.ENUM("Cesante, busco empleo en TI por primera vez",
        "Cesante, ya he trabajado antes en TI",
        "Tengo trabajo en TI, pero busco otro",
        "Tengo trabajo (en otras áreas), pero busco en TI"),
    yearsExperience: DataTypes.INTEGER,
    dreamJobComment: DataTypes.STRING,
    urlLinkedin: DataTypes.STRING,
    urlGithub: DataTypes.STRING,
    urlWebsite: DataTypes.STRING,
    urlCv: DataTypes.STRING,
    fotoID: DataTypes.STRING,
    levelEnglish: DataTypes.ENUM("Ninguno",
        "Principiante A1",
        "Principiante A2",
        "Pre intermedio B1",
        "Intermedio B2",
        "Intermedio avanzado C1",
        "Avanzado C2"),
    employmentStatus: DataTypes.ENUM("quiero trabajo desde mi ciudad",
          "estoy disponible a migrar de mi ciudad dentro de mi país",
          "estoy disponible para migrar a otro país"),
    availability: DataTypes.ENUM("fulltime",
        "part-time",
        "freelancer"),
    softSkills: DataTypes.ENUM("Líder",
        "Resiliente/Perseverante",
        "Comunicación/Sociable",
        "Colaborativo/Empatía",
        "Aprendizaje ágil/Autónomo",
        "Flexible/Adaptable",
        "Responsable",
        "Innovador/Curioso",
        "Negociación",
        "Resolución de problemas",
        "Productividad/Iniciativa")
  }, {
    sequelize,
    modelName: 'WorkProfile',
  });
  return WorkProfile;
};
