'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'UserRols',
      [
        {
          userId: 1,
          rolId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          rolId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('UserRols', null, {})
  }
}
