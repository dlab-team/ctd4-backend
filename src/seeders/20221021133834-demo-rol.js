'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Rols',
      [
        {
          name: 'Adminstrador',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Postulante',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Empresa',
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
