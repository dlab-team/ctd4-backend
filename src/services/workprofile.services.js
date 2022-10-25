const { sequelize } = require('../models');

const {
  WorkProfile,
  Database,
  DevLanguage,
  Tool,
  EducationExperience,
  SoftSkill,
  User
} = require("../models");

//* one workProfile  by User
const getWorkProfileByIdUser = async (userId) => {
  const workprofile = await WorkProfile.findOne({
    where: userId,
    include: [
      { model: User, attributes: { exclude: ["password"] } },
      { model: Database },
      { model: DevLanguage },
      { model: Tool },
      { model: EducationExperience },
      { model: SoftSkill },
    ],
    attributes: { exclude: ['user_id'] }
  })
  return workprofile;
}

//* create
const createWorkProfile = async (attr) => {
  try {

    const newWorkProfile = await sequelize.transaction(async (t) => {

      const workProfileOfAUser = await WorkProfile.create(attr, { transaction: t });

      for (const data of attr.databases) {
        // TODO: replace by model service
        const foundDatabase = await Database.findOne({ where: data.database_id });
        workProfileOfAUser.addDatabases(foundDatabase, { through: { level: data.level } });
      }
      for (const data of attr.dev_languages) {
        // TODO: replace by model service
        const foundDevLanguage = await DevLanguage.findOne({ where: data.devlanguage_id });
        workProfileOfAUser.addDevLanguages(foundDevLanguage, { through: { level: data.level } });
      }

      for (const data of attr.tools) {
        // TODO: replace by model service
        const foundTool = await Tool.findOne({ where: data.tool_id });
        workProfileOfAUser.addTools(foundTool);
      }
      for (const data of attr.soft_skills) {
        // TODO: replace by model service
        const foundSoftSkill = await SoftSkill.findOne({ where: data.softskill_id })
        workProfileOfAUser.addSoftSkills(foundSoftSkill)
      }
      for (const data of attr.education_experiences) {
        // TODO: replace by model service
        const saveEducationExperience = await EducationExperience.create(data, {
          transaction: t
        });
        workProfileOfAUser.addEducationExperience(saveEducationExperience);
      }

      return workProfileOfAUser;

    });

    return newWorkProfile;

  } catch (error) {
    return new Error(error);
  }

}

// * Send data
const getDataWorkprofile = () => {
  const educationLevels = WorkProfile.getAttributes().educational_level.values
  const relocationOptions = WorkProfile.getAttributes().relocation_option.values
  const devExperiences = WorkProfile.getAttributes().dev_experience.values
  const designExperiences = WorkProfile.getAttributes().design_experience.values
  const dataExperiences = WorkProfile.getAttributes().data_experience.values
  const genders = WorkProfile.getAttributes().gender.values
  const englishLevels = WorkProfile.getAttributes().english_level.values
  const workAvailabilities = WorkProfile.getAttributes().work_availability.values
  const educationStatuses = WorkProfile.getAttributes().education_status.values
  const visa = WorkProfile.getAttributes().visa.values
  const educationalExperience = {}

  const type = EducationExperience.getAttributes().type.values
  const area = EducationExperience.getAttributes().area.values
  educationalExperience['type'] = type
  educationalExperience['area'] = area

  return {
    educationLevels,
    relocationOptions,
    devExperiences,
    designExperiences,
    dataExperiences,
    genders,
    englishLevels,
    workAvailabilities,
    educationStatuses,
    visa,
    educationalExperience
  };
}


module.exports = {
  getDataWorkprofile,
  createWorkProfile,
  getWorkProfileByIdUser
}