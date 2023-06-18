module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'contents',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        idUser: {
          type: Sequelize.INTEGER,
          allowNull: false,
          reference: {
            model: 'users',
            key: 'id',
          },
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        emoji: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        date: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        time: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
      {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
      },
    )
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('contents')
  },
}
