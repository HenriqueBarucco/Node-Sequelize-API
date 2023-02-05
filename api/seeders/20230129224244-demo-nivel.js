'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert('Niveis', [
            {
                descr_nivel: 'básico',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                descr_nivel: 'intermediário',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                descr_nivel: 'avançado',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete('Niveis', null, {})
    }
}
