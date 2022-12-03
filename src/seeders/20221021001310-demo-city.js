'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Cities',
      [
        // chile
        {
          name: 'Santiago',
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Concepción',
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Antofagasta',
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Arica',
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Serena',
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Maule',
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Curico',
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Iquique',
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Magallanes',
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Viña del Mar',
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Valparaiso',
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // peru
        {
          name: 'Lima',
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Huánuco',
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'La Libertad',
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Callao',
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Tacna',
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Piura',
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Puno',
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ancash',
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Junin',
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ucayaly',
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Loreto',
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Cities', null, {})
  }
}
