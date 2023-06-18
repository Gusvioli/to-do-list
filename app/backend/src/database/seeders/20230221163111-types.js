module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'types',
      [
        {
          id: 1,
          name: 'Listas Simples',
          url: '/simple',
        },
      ],
      {},
    )
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('types', null, {})
  },
}
