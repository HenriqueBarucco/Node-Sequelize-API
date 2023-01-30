/* eslint-disable linebreak-style */
'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Matriculas', 'deletedAt', {      
      allowNull: true,
      type: Sequelize.DATE
    })
  },
  async down(queryInterface) {
    await queryInterface.removeColumn('Matriculas', 'deletedAt')
  }
}