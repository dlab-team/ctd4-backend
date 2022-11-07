'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Skills',
      [
        {
          // Nivel 1 - Lenguajes: minimo de experiencia o menos de 1 año
          categoryId: 1,
          name: 'Python',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 1,
          name: 'JavaScript',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 1,
          name: 'HTML/CSS',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 1,
          name: 'Java',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          categoryId: 1,
          name: 'PHP',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 1,
          name: 'Ruby',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 1,
          name: 'Scala, Perl y/o Go',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 1,
          name: 'C/C++',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          categoryId: 1,
          name: 'Kotlin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 1,
          name: 'Swift',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 1,
          name: 'C#',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 1,
          name: 'TypeScript',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 1,
          name: 'Assembly',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 1,
          name: 'R',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 1,
          name: 'Go',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 1,
          name: 'Bash/Shell',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Nivel 1 - Framework: minimo de experiencia o menos de 1  año
        {
          categoryId: 2,
          name: 'Oracle',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'Cassandra',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'SQLite',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'Redis',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'MongoDB',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'PostgreSQL',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'MySQL',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'Firabase Realtime Database',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'MariaDB',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'Microsoft SQL Server',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'JQuery',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'React',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'Sprint',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'Angular',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'Vue',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'Laravel',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'Django',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'Ruby On Rails',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'ASP.NET o ASP.NETCore',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'Flask',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'Express.js',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'FastAPI',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: '.NET',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 2,
          name: 'Node.js',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Nivel 1 - Herramientas: minimo de experiencia o menos de 1  año
        {
          categoryId: 3,
          name: 'Github',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Adobe Illustrator',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Adobe Photoshop',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Adobe XD',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'AWS',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Docker',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'GIT',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Google Analitics',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Google Cloud Plataform',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Google Data Studio',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Google Data Studio',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Invision',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'InVision Studio',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Jira',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Kubernetes',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Marvel',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Microsoft Excel',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Microsoft Azure',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Miro',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Power BI',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Proto.io',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Qlik',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Sketch',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'SPSS',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Tableau',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Unity 3D',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Unreal Engie',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 3,
          name: 'Zepelin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Nivel 2 - Lenguajes almenos 2 años de experiencia
        {
          // Nivel 2 - Lenguajes: minimo de experiencia o menos de 1 año
          categoryId: 4,
          name: 'Python',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 4,
          name: 'JavaScript',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 4,
          name: 'HTML/CSS',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 4,
          name: 'Java',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          categoryId: 4,
          name: 'PHP',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 4,
          name: 'Ruby',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 4,
          name: 'Scala, Perl y/o Go',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 4,
          name: 'C/C++',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          categoryId: 4,
          name: 'Kotlin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 4,
          name: 'Swift',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 4,
          name: 'C#',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 4,
          name: 'TypeScript',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 4,
          name: 'Assembly',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 4,
          name: 'R',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 4,
          name: 'Go',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 4,
          name: 'Bash/Shell',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Nivel 2 - Framework: minimo de experiencia o menos de 1  año
        {
          categoryId: 5,
          name: 'Oracle',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'Cassandra',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'SQLite',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'Redis',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'MongoDB',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'PostgreSQL',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'MySQL',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'Firabase Realtime Database',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'MariaDB',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'Microsoft SQL Server',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'JQuery',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'React',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'Sprint',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'Angular',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'Vue',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'Laravel',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'Django',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'Ruby On Rails',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'ASP.NET o ASP.NETCore',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'Flask',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'Express.js',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'FastAPI',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: '.NET',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 5,
          name: 'Node.js',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Nivel 2 - Herramientas: minimo de experiencia o menos de 1  año
        {
          categoryId: 6,
          name: 'Github',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Adobe Illustrator',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Adobe Photoshop',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Adobe XD',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'AWS',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Docker',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'GIT',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Google Analitics',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Google Cloud Plataform',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Google Data Studio',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Google Data Studio',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Invision',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'InVision Studio',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Jira',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Kubernetes',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Marvel',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Microsoft Excel',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Microsoft Azure',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Miro',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Power BI',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Proto.io',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Qlik',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Sketch',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'SPSS',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Tableau',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Unity 3D',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Unreal Engie',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 6,
          name: 'Zepelin',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        // Nivel 3 - Lenguajes almenos mas 2 años de experiencia
        {
          // Nivel 3 - Lenguajes: minimo de experiencia o menos de 1 año
          categoryId: 7,
          name: 'Python',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 7,
          name: 'JavaScript',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 7,
          name: 'HTML/CSS',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 7,
          name: 'Java',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          categoryId: 7,
          name: 'PHP',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 7,
          name: 'Ruby',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 7,
          name: 'Scala, Perl y/o Go',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 7,
          name: 'C/C++',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          categoryId: 7,
          name: 'Kotlin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 7,
          name: 'Swift',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 7,
          name: 'C#',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 7,
          name: 'TypeScript',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 7,
          name: 'Assembly',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 7,
          name: 'R',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 7,
          name: 'Go',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 7,
          name: 'Bash/Shell',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Nivel 3 - Framework: minimo de experiencia o menos de 1  año
        {
          categoryId: 8,
          name: 'Oracle',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'Cassandra',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'SQLite',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'Redis',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'MongoDB',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'PostgreSQL',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'MySQL',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'Firabase Realtime Database',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'MariaDB',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'Microsoft SQL Server',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'JQuery',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'React',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'Sprint',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'Angular',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'Vue',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'Laravel',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'Django',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'Ruby On Rails',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'ASP.NET o ASP.NETCore',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'Flask',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'Express.js',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'FastAPI',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: '.NET',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 8,
          name: 'Node.js',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Nivel 3 - Herramientas: minimo de experiencia o menos de 1  año
        {
          categoryId: 9,
          name: 'Github',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Adobe Illustrator',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Adobe Photoshop',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Adobe XD',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'AWS',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Docker',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'GIT',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Google Analitics',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Google Cloud Plataform',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Google Data Studio',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Google Data Studio',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Invision',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'InVision Studio',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Jira',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Kubernetes',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Marvel',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Microsoft Excel',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Microsoft Azure',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Miro',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Power BI',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Proto.io',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Qlik',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Sketch',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'SPSS',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Tableau',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Unity 3D',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Unreal Engie',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 9,
          name: 'Zepelin',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Skills', null, {})
  }
}
