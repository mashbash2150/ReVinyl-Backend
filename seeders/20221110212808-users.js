'use strict';
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [...Array(20)].map((_) => {
      return {
        username: falso.randUserName(),
        email: falso.randEmail(),
        createdAt: new Date(),
        updatedAt: new Date(),
    
      }
    })
    await queryInterface.bulkInsert('users', users)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    //  * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users');
  }
};
