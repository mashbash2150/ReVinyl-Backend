'use strict';
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [...Array(20)].map((_) => {
      return {
        owner_id:  falso.randNumber({min:1,max:20}),
        title: falso.randWord({length:8}),
        artist: falso.randSinger(),
        genre: falso.randMusicGenre(),
        published: falso.randWord({length:8}),
        rarity: falso.randWord({length:8}),
        image: falso.randImg(),
        price: falso.randNumber({min:1,max:50}),
        description: falso.randWord(),
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
    
      }
    })
    await queryInterface.bulkInsert('vinyls', vinyls)
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
