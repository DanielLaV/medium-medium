'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('StoriesToTopics', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('StoriesToTopics', null, {});

  }
};
