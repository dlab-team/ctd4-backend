const httpStatus = require('http-status');
const { json } = require('sequelize');
const { Skill } = require('../models');

const getSkills = async (req, res) => {
  try{
    const skills = await Skill.findAll({
      attributes: ['id', 'name']
    })
    res.json(skills)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok:false,
      msg: console.error.mesagge
    });
  }
};
module.exports = {getSkills}
