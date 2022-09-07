'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('DevLanguages', [
            {
                name: 'APL',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Assembly',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Bash/Shell',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'C',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'C#',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'C++',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Clojure',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'COBOL',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Crystal',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Dart',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Delphi',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Elixir',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Erlang',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'F#',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Go',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Groovy',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Haskell',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'HTML/CSS',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Java',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'JavaScript',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Julia',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Kotlin',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'LISP',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Matlab',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Node.js',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Objective-C',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Perl',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'PHP',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'PowerShell',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Python',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'R',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Ruby',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Rust',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Scala',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'SQL',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Swift',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'TypeScript',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'VBA',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('DevLanguages', null, {});
    }
};
