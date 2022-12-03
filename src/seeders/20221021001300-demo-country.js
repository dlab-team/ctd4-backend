'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Countries',
      [
        {
          name: 'Chile',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Perú',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Colombia',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bolivia',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ecuador',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Argentina',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Brasil',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'México',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Guatemala',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'El Salvador',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Uruguay',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Paraguay',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Panama',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Puerto Rico',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Honduras',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Nicaragua',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Haití',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'España',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Countries', null, {})
  }
}
