'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Quizzes',
      [
        {
          name: 'html-css',
          url_logo: 'https://cdn-icons-png.flaticon.com/512/2085/2085206.png',
          duration: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'JavaScript',
          url_logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          duration: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Android',
          url_logo: 'https://cdn-icons-png.flaticon.com/512/270/270780.png',
          duration: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Azure DevOps',
          url_logo: 'https://cdn-icons-png.flaticon.com/512/873/873107.png',
          duration: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Quizzes', null, {})
  }
}
