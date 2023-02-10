module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'Gustavo Viera',
      email: 'gusviovieiradeoliveira@gmail.com',
      password: '1c37466c159755ce1fa181bd247cb925',
      role: 'admin',
    }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
