'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Databases', [
            {
                name: 'Cassandra',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Couchbase',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'DynamoDB',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Elasticsearch',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Firebase',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'IBM DB2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'MariaDB',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Microsoft SQL Server',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'MongoDB',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'MySQL',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Oracle',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'PostgreSQL',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Redis',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'SQLite',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '.NET',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Angular.js',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Ansible',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Apache Spark',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'ASP.NET',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Chef',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cordova',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Deno',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Django',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Drupal',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Express',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'FastAPI',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Flask',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Flow',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Flutter',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Gatsby',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Hadoop',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'JQuery',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Keras',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Kubernetes',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Laravel',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'NumPy',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Pandas',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Pulumi',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Puppet',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Qt',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'React Native',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'React.js',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Ruby on Rails',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Spring',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Svelte',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Symfony',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'TensorFlow',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Terraform',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Torch/PyTorch',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Vue.js',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Xamarin',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Yarn',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        down: (queryInterface, Sequelize) => {
            return queryInterface.bulkDelete('Databases', null, {});
        }
    }
}
