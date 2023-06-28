module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'usersIps',
      [
        {
          id: 1,
          ip: '0.0.0.0',
          data: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('usersIps', null, {})
  },
}
