module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'usersIps',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        ip: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        data: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      },
      {},
    )
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('usersIps')
  },
}
