'use strict'

// default password = Abssd1234

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'admin@mail.com',
          fullname: 'Admin',
          password:
            '$2a$10$lt6u4R2Hm6IMQDhl4WfHV..n2kmAMUytCISIhk192uPYmIKHkl6XC',
          cityId: 1,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'user@mail.com',
          fullname: 'User',
          password:
            '$2a$10$lt6u4R2Hm6IMQDhl4WfHV..n2kmAMUytCISIhk192uPYmIKHkl6XC',
          cityId: 1,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Users', null, {})
  }
}
