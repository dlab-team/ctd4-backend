'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Users', 'gender', {
      type: Sequelize.ENUM('Femenino', 'Masculino', 'Otros'),
      allowNull: true
    })

    await queryInterface.addColumn('Users', 'chargeId', {
      type: Sequelize.INTEGER,
      allowNull: true
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Users', 'gender')
    await queryInterface.removeColumn('Users', 'chargeId')
  }
};
