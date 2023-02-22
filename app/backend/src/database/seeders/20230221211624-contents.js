module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('contents', [{
      id: 1,
      idUser: 1,
      type: 'simple',
      image: 'https://i.imgur.com/1Z1Z1Z1.jpg',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      descript: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('types', null, {});
  }
};
