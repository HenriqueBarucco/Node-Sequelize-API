/* eslint-disable linebreak-style */
'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Turmas', 'deletedAt', {      
      allowNull: true,
      type: Sequelize.DATE
    })
  },
  async down(queryInterface) {
    await queryInterface.removeColumn('Turmas', 'deletedAt')
  }
}