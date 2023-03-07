module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('contents', [{
      id: 1,
      idUser: 1,
      type: 'simple',
      emoji: '100',
      date: '2023-12-31',
      time: '15:35',
      descript: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'Pendente',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 2,
      idUser: 1,
      type: 'simple',
      emoji: '100',
      date: '2023-12-31',
      time: '15:35',
      descript: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'Pendente',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('types', null, {});
  }
};
