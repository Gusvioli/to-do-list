module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'emojis',
      [
        {
          id: 1,
          name: 'Sorriso',
          url: 'https://',
        },
      ],
      {},
    )
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('emojis', null, {})
  },
}
