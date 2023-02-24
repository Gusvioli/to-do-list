module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('contents', [{
      id: 1,
      idUser: 1,
      type: 'simple',
      emoji: 'https://i.imgur.com/1Z1Z1Z1.jpg',
      date: '2020-12-31',
      descript: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'Pendente',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 2,
      idUser: 1,
      type: 'simple',
      emoji: 'https://i.imgur.com/1Z1Z1Z1.jpg',
      date: '2020-12-31',
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
