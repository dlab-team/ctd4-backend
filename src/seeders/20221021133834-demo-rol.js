'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Rols',
      [
        {
          // administrador
          level: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // Postulante
          level: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // empresa
          level: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Rols', null, {})
  }
}
