'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Charges',
      [
        {
          name: 'Full stack',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Backend',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Frontend',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Data Science',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'UI/UX',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Charges', null, {})
  }
}
