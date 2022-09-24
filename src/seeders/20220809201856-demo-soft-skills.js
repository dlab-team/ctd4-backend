'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('SoftSkills', [
      {
        name: 'Eclipse IDE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Visual Studio Code',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pgadmin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MySql Workbench',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  async down(queryInterface, Sequelize) {

    return await queryInterface.bulkDelete('SoftSkills', null, {});

  }
};
