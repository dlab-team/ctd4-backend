'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'EducationalProfiles',
      [
        {
          userId: 1,
          levelEducational: 'Universidad Completa',
          careerName: 'Ingeniero Software',
          institutionName: 'Universidad De Chile',
          institutionType: 'Universidad',
          currentSituation: 'Titulado/a',
          graduationDate: '2020-03-12',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          levelEducational: 'Universidad Completa',
          careerName: 'Ingeniero Software',
          institutionName: 'Universidad De Chile',
          institutionType: 'Universidad',
          currentSituation: 'Titulado/a',
          graduationDate: '2021-05-11',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          levelEducational: 'Universidad Completa',
          careerName: 'Ingeniero Software',
          institutionName: 'Universidad De Chile',
          institutionType: 'Universidad',
          currentSituation: 'Titulado/a',
          graduationDate: '2021-01-11',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          levelEducational: 'Universidad Completa',
          careerName: 'Ingeniero Software',
          institutionName: 'Universidad De Chile',
          institutionType: 'Universidad',
          currentSituation: 'Titulado/a',
          graduationDate: '2020-04-11',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 5,
          levelEducational: 'Universidad Completa',
          careerName: 'Ingeniero Software',
          institutionName: 'Universidad De Chile',
          institutionType: 'Universidad',
          currentSituation: 'Titulado/a',
          graduationDate: '2019-11-11',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 6,
          levelEducational: 'Universidad Completa',
          careerName: 'Ingeniero Software',
          institutionName: 'Universidad De Lima',
          institutionType: 'Universidad',
          currentSituation: 'Titulado/a',
          graduationDate: '2019-11-11',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('EducationalProfiles', null, {})
  }
}
