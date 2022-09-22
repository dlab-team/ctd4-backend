'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    return await queryInterface.bulkInsert('UserStatuses', [
      {
        name: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'jobready',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'disabled',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('UserStatuses', null, {});

  }
};
