module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'Gustavo Vieira',
          email: 'gustavo@gustavo.com',
          password: 'e10adc3949ba59abbe56e057f20f883e',
          role: 'usertest',
        },
      ],
      {},
    )
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  },
}
