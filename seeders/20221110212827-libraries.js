'use strict';
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const libraries = [...Array(20)].map((_) => {
      return {
        vinyl_id: falso.randNumber({min:1,max:20}),
        owner_id: falso.randNumber({min:1,max:20}),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    })
    await queryInterface.bulkInsert('libraries',libraries)
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('libraries');
  }
};
