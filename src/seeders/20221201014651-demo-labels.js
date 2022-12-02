'use strict';

const { query } = require("express");

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Labels',
      [ 
        /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
        {
          //Charges
          
            name: 'Desarrollador/a Full stack',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Desarrollador/a Backend',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Desarrollador/a Frontend',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Diseñador/a UI/UX Research o UI',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Desarrollador/a Movil',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Data Scientist o especialista Machine Learning',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Ingeniería de Datos',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          { 

          // Nivel 1 - Lenguajes: minimo de experiencia o menos de 1 año
        
          name: 'Python',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
      
          name: 'JavaScript',
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
          
          name: 'PHP',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          
          name: 'Ruby',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          
          name: 'Scala, Perl y/o Go',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          
          name: 'C/C++',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          
          name: 'Kotlin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          
          name: 'Swift',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          
          name: 'C#',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          
          name: 'TypeScript',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          
          name: 'Assembly',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          
          name: 'R',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          
          name: 'Go',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          
          name: 'Bash/Shell',
          createdAt: new Date(),
          updatedAt: new Date()
        }
        
      ],
      {}
    )
  
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Labels', null, {})
  }
};
