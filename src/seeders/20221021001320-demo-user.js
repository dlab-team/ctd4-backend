'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'emerson@gmail.com',
          password: '2022Password',
          name: 'emerson',
          lastName: 'espinoza',
          phoneNumber: '986323844',
          address: 'calle 7, santiago',
          status: 'activo',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'seba@gmail.com',
          password: '2022Password',
          name: 'seba',
          lastName: 'vera',
          phoneNumber: '987323354',
          address: 'calle 8, santiago',
          status: 'activo',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'katherine@gmail.com',
          password: '2022Password',
          name: 'katherine',
          lastName: 'cornejo',
          phoneNumber: '985323856',
          address: 'calle 9, santiago',
          status: 'activo',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'angela@gmail.com',
          password: '2022Password',
          name: 'angela',
          lastName: 'medina',
          phoneNumber: '985323856',
          address: 'calle 11, santiago',
          status: 'activo',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'paul@gmail.com',
          password: '2022Password',
          name: 'paul',
          lastName: 'leivi',
          phoneNumber: '985323856',
          address: 'calle 12, santiago',
          status: 'activo',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'juan@gmail.com',
          password: '2022Password',
          name: 'juan',
          lastName: 'Esteban',
          phoneNumber: '985323856',
          address: 'calle 13, santiago',
          status: 'activo',
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
