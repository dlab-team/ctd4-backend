'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Users', 'cityId', {
      type: Sequelize.INTEGER,
      allowNull: true
    })

    await queryInterface.addColumn('Users', 'name', {
      type: Sequelize.STRING,
      allowNull: true
    })

    await queryInterface.addColumn('Users', 'lastName', {
      type: Sequelize.STRING,
      allowNull: true
    })

    await queryInterface.addColumn('Users', 'phoneNumber', {
      type: Sequelize.STRING,
      allowNull: true
    })

    await queryInterface.addColumn('Users', 'address', {
      type: Sequelize.STRING,
      allowNull: true
    })

    await queryInterface.addColumn('Users', 'status', {
      type: Sequelize.ENUM('pending', 'active', 'jobReady'),
      defaultValue: 'pending',
      allowNull: false
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Users', 'cityId')
    await queryInterface.removeColumn('Users', 'name')
    await queryInterface.removeColumn('Users', 'lastName')
    await queryInterface.removeColumn('Users', 'phoneNumber')
    await queryInterface.removeColumn('Users', 'address')
    await queryInterface.removeColumn('Users', 'status')
  }
}
