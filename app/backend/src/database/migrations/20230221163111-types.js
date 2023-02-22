module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('types', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('types');
  }
};
