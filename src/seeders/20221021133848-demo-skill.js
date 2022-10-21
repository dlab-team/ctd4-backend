'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Skills',
      [
        {
          // full stack
          categoryId: 1,
          name: 'Ruby',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 1,
          name: 'Ruby On Rails',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 1,
          name: 'React',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 1,
          name: 'Mysql',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // backend
        {
          categoryId: 2,
          name: 'Mysql',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'Node',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'Rubyl',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'Postgresql',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // frontend
        {
          categoryId: 3,
          name: 'React',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Vue',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'html y css',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Tailwindcss',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Skills', null, {})
  }
}
