'use strict';
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const libraries = [...Array(20)].map((_) => {
      return {
        libraryName: falso.randFirstName({ capitalize:true}),
        image: falso.randImg(),
        notes: falso.randPhrase(),
        vinyl_id: falso.randNumber({min:1,max:20}),
        owner_id: falso.randNumber({min:1,max:20}),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    })
    await queryInterface.bulkInsert('libraries',libraries)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('libraries');
  }
};
