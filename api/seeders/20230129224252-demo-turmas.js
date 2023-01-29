'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Turmas', [
      {
        data_inicio: "2020-02-01",
        nivel_id: 1,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2020-02-01",
        nivel_id: 2,
        docente_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2020-02-01",
        nivel_id: 3,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2020-07-01",
        nivel_id: 3,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
