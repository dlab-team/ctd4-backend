const httpStatus = require('http-status');

const getSkillInfo = async (skillId) => {
  try {
    const skillInfo = await Skill.findOne({
      where: {id: skillId}
    });
      return skillInfo
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: error.mesagge
    });
  }
};

module.exports = {getSkillInfo}
