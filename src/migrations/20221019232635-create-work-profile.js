'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorkProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      idealJobComment: {
        type: Sequelize.STRING
      },
      featureProyect: {
        type: Sequelize.STRING
      },
      activeVisa: {
        type: Sequelize.ENUM("Estados unidos",
        "Unión europea",
        "Mi país de residencia actual",
        "Otros países")
      },
      currentJobSituation: {
        type: Sequelize.ENUM("Cesante, busco empleo en TI por primera vez",
        "Cesante, ya he trabajado antes en TI",
        "Tengo trabajo en TI, pero busco otro",
        "Tengo trabajo (en otras áreas), pero busco en TI")
      },
      yearsExperience: {
        type: Sequelize.INTEGER
      },
      dreamJobComment: {
        type: Sequelize.STRING
      },
      urlLinkedin: {
        type: Sequelize.STRING
      },
      urlGithub: {
        type: Sequelize.STRING
      },
      urlWebsite: {
        type: Sequelize.STRING
      },
      urlCv: {
        type: Sequelize.STRING
      },
      levelEnglish: {
        type: Sequelize.ENUM("Ninguno",
        "Principiante A1",
        "Principiante A2",
        "Pre intermedio B1",
        "Intermedio B2",
        "Intermedio avanzado C1",
        "Avanzado C2")
      },
      employmentStatus: {
        type: Sequelize.ENUM("quiero trabajo desde mi ciudad",
          "estoy disponible a migrar de mi ciudad dentro de mi país",
          "estoy disponible para migrar a otro país")
      },
      availability: {
        type: Sequelize.ENUM("fulltime",
        "part-time",
        "freelancer")
      },
      softSkills: {
        type: Sequelize.ENUM("Líder",
        "Resiliente/Perseverante",
        "Comunicación/Sociable",
        "Colaborativo/Empatía",
        "Aprendizaje ágil/Autónomo",
        "Flexible/Adaptable",
        "Responsable",
        "Innovador/Curioso",
        "Negociación",
        "Resolución de problemas",
        "Productividad/Iniciativa")
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
    await queryInterface.dropTable('WorkProfiles');
  }
};
