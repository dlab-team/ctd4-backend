'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'WorkProfiles',
      [
        {
          userId: 2,
          idealJobComment: 'empresas solidas en desarrollo de software',
          featureProyect: 'Ser parte de un proyecto de software',
          activeVisa: 'Estados unidos',
          currentJobSituation: 'Tengo trabajo en TI, pero busco otro',
          yearsExperience: 2,
          dreamJobComment: 'Bien ambiente laboral',
          urlLinkedin: 'https://www.linkedin.com/in/emersonespinozaaguirre/',
          urlGithub: 'https://github.com/emersonxinay',
          urlWebsite: 'https://emersonespinoza.com',
          urlCv: 'https://drive.google.com/drive/',
          levelEnglish: 'Principiante A2',
          employmentStatus: 'quiero trabajo desde mi ciudad',
          availability: 'part-time',
          softSkills: 'Colaborativo/Empatía',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('WorkProfiles', null, {})
  }
}
