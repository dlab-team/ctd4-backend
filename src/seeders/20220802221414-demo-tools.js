'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Tools', [
            {
                name: 'Adobe Illustrator',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Adobe Photoshop',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Adobe XD',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'AWS',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Docker',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Figma',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Git',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Google Analytics',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Google Cloud Platform',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Google Data Studio',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Invision',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'InVision Studio',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Jira',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Kubernetes',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Marvel',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Microsoft Excel',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Microsoft Azure',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Miro',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Power BI',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Proto.io',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Qlik',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Sketch',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'SPSS',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Tableau',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Unity 3D',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Unreal Engine',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Zeplin',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Tools', null, {});
    }
};
