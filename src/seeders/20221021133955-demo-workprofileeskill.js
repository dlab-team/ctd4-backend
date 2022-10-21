'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'WorkProfileSkills',
      [
        {
          workProfileId: 1,
          skillId: 1,
          level: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('WorkProfileSkills', null, {})
  }
}
