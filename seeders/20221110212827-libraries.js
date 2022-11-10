'use strict';
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [...Array(20)].map((_) => {
      return {
        libraryName: falso.randName({length:6, capitalize:true}),
        image: falso.randImg(),
        notes: falso.randPhrase(),
        vinyl_id: falso.randNumber({min:1,max:20}),
        user_id: falso.randNumber({min:1,max:20}),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    })
    await queryInterface.bulkInsert('libraries', libraries)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
