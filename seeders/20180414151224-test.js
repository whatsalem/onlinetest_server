'use strict';
var faker = require('faker/locale/en');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
	return queryInterface.bulkInsert('subjects', [{
		subcode: faker.name.firstName(),
		createdAt:faker.date.future(),
		updatedAt:faker.date.past()	
	        
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
	return queryInterface.bulkDelete('subjects', null, {});
  }
};
