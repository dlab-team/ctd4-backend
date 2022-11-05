'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Charges',
      [
        {
          name: 'Desarrollador/a Full stack',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Desarrollador/a Backend',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Desarrollador/a Frontend',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Diseñador/a UI/UX Research o UI',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Desarrollador/a Movil',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Data Scientist o especialista Machine Learning',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ingeniería de Datos',
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
