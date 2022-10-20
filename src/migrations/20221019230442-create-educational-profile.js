'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EducationalProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      levelEducational: {
        type: Sequelize.ENUM("Universidad Completa",
          "Universidad Incompleta o en curso",
          "Instituto Profesional o CFT completa",
          "Instituto Profesional o CFT incompleta o en curso",
          "Educación Media Completa",
          "Bootcamp Completo",
          "Bootcamp Incompleto o en curso",
          "Escolar Completa",
          "Escolar Incompleta")
      },
      careerName: {
        type: Sequelize.STRING
      },
      institutionName: {
        type: Sequelize.STRING
      },
      institutionType: {
        type: Sequelize.ENUM("Postgrado",
          "Universidad",
          "Instituto",
          "Bootcamp",
          "Otro")
      },
      currentSituation: {
        type: Sequelize.ENUM("Egresado/a",
        "Titulado/a",
        "En Curso")
      },
      graduationDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EducationalProfiles');
  }
};
