'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Categories',
      [
        {
          // experiencia minima o menos de 1 año
          name: 'Lenguaje - Nivel 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Framework - Nivel 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Herramientas - Nivel 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // experiencia de almenos 2 años
        {
          name: 'Lenguaje - Nivel 2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Framework - Nivel 2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Herramientas - Nivel 2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // experiencia de mas de 2 años
        {
          name: 'Lenguaje - Nivel 3',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Framework - Nivel 3',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Herramientas - Nivel 3',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Categories', null, {})
  }
}
