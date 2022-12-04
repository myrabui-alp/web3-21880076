'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let menus = [{
      name: 'Breakfast'
    },
    {
      name: 'Lunch'
    },
    {
      name: 'Dinner'
    }];
    menus.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('Menus', menus, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Menus', null, {});
  }
};
