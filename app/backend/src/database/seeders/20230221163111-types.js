module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('types', [{
      id: 1,
      name: 'To do List simples',
      url: '/simple',
    },
    {
      id: 2,
      name: 'To do List estudos',
      url: '/education',
    },
    {
      id: 3,
      name: 'To do List plus',
      url: '/plus',
    }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('types', null, {});
  }
};
