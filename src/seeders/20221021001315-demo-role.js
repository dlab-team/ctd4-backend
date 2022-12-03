'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Roles',
      [
        {
          // administrador
          name: 'admin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // Postulante
          name: 'user',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Roles', null, {})
  }
}
