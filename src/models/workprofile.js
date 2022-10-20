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
    jobAvailibility: DataTypes.ENUM,
    idealJobComment: DataTypes.STRING,
    featureProyect: DataTypes.STRING,
    activeVisa: DataTypes.ENUM,
    currentJobSituation: DataTypes.ENUM,
    yearsExperience: DataTypes.INTEGER,
    dreamJobComment: DataTypes.STRING,
    urlLinkedin: DataTypes.STRING,
    urlGithub: DataTypes.STRING,
    urlWebsite: DataTypes.STRING,
    urlCv: DataTypes.STRING,
    levelEnglish: DataTypes.ENUM,
    employmentStatus: DataTypes.ENUM,
    availability: DataTypes.ENUM,
    softSkills: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'WorkProfile',
  });
  return WorkProfile;
};
