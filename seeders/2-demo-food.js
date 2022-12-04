'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    var food = [{ "id": 1, "name": "Lid Coffeecup 12oz D9542b", "summary": "Aenean auctor gravida sem.", "price": 58.85567, "menuId": 3 },
    { "id": 2, "name": "Bread - Raisin Walnut Oval", "summary": "Cras non velit nec nisi vulputate nonummy.", "price": 15.60456, "menuId": 2 },
    { "id": 3, "name": "Dip - Tapenade", "summary": "Aenean fermentum.", "price": 53.49306, "menuId": 2 },
    { "id": 4, "name": "Coffee - Beans, Whole", "summary": "Vestibulum sed magna at nunc commodo placerat.", "price": 87.49382, "menuId": 3 },
    { "id": 5, "name": "Cookies - Englishbay Wht", "summary": "Nulla ac enim.", "price": 38.26099, "menuId": 1 },
    { "id": 6, "name": "Plasticknivesblack", "summary": "Aenean auctor gravida sem.", "price": 86.64573, "menuId": 1 },
    { "id": 7, "name": "Tart - Pecan Butter Squares", "summary": "Nunc rhoncus dui vel sem.", "price": 95.95113, "menuId": 2 },
    { "id": 8, "name": "Whmis - Spray Bottle Trigger", "summary": "Cras non velit nec nisi vulputate nonummy.", "price": 5.54612, "menuId": 1 },
    { "id": 9, "name": "Nut - Cashews, Whole, Raw", "summary": "Sed vel enim sit amet nunc viverra dapibus.", "price": 82.37107, "menuId": 2 },
    { "id": 10, "name": "Blueberries - Frozen", "summary": "Nullam porttitor lacus at turpis.", "price": 82.1535, "menuId": 1 },
    { "id": 11, "name": "Mushroom - Chanterelle Frozen", "summary": "Nam nulla.", "price": 18.20958, "menuId": 3 },
    { "id": 12, "name": "Grand Marnier", "summary": "Integer ac leo.", "price": 6.63264, "menuId": 3 },
    { "id": 13, "name": "Sauce - Hollandaise", "summary": "Nam tristique tortor eu pede.", "price": 95.86189, "menuId": 1 },
    { "id": 14, "name": "Cookie Choc", "summary": "In hac habitasse platea dictumst.", "price": 11.95742, "menuId": 1 },
    { "id": 15, "name": "Wine - Red, Lurton Merlot De", "summary": "Quisque porta volutpat erat.", "price": 94.95307, "menuId": 3 },
    { "id": 16, "name": "Vermacelli - Sprinkles, Assorted", "summary": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.", "price": 72.9146, "menuId": 3 },
    { "id": 17, "name": "Nutmeg - Ground", "summary": "Duis aliquam convallis nunc.", "price": 88.53833, "menuId": 2 },
    { "id": 18, "name": "Lamb - Rack", "summary": "Ut at dolor quis odio consequat varius.", "price": 6.3716, "menuId": 2 },
    { "id": 19, "name": "Lamb Rack Frenched Australian", "summary": "Aenean sit amet justo.", "price": 38.36647, "menuId": 1 },
    { "id": 20, "name": "Worcestershire Sauce", "summary": "Integer a nibh.", "price": 81.42185, "menuId": 1 },
    { "id": 21, "name": "Turkey - Ground. Lean", "summary": "Nam dui.", "price": 7.40458, "menuId": 3 },
    { "id": 22, "name": "Onions - Red", "summary": "Curabitur convallis.", "price": 27.604, "menuId": 3 },
    { "id": 23, "name": "Salt - Celery", "summary": "Proin risus.", "price": 89.534, "menuId": 2 },
    { "id": 24, "name": "Sesame Seed", "summary": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", "price": 7.6414, "menuId": 1 },
    { "id": 25, "name": "Coffee - French Vanilla Frothy", "summary": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.", "price": 90.57931, "menuId": 1 },
    { "id": 26, "name": "Tuna - Canned, Flaked, Light", "summary": "Duis aliquam convallis nunc.", "price": 6.68051, "menuId": 1 },
    { "id": 27, "name": "Bay Leaf", "summary": "Suspendisse accumsan tortor quis turpis.", "price": 35.00148, "menuId": 2 },
    { "id": 28, "name": "Longos - Chicken Wings", "summary": "Aenean lectus.", "price": 34.37961, "menuId": 3 },
    { "id": 29, "name": "Table Cloth 62x120 White", "summary": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.", "price": 19.32573, "menuId": 1 },
    { "id": 30, "name": "Ecolab - Balanced Fusion", "summary": "Vivamus in felis eu sapien cursus vestibulum.", "price": 84.82031, "menuId": 3 },
    { "id": 31, "name": "Rice - Basmati", "summary": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", "price": 96.80917, "menuId": 2 },
    { "id": 32, "name": "Wine - Chenin Blanc K.w.v.", "summary": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.", "price": 52.33435, "menuId": 3 },
    { "id": 33, "name": "Kiwi", "summary": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.", "price": 12.31595, "menuId": 1 },
    { "id": 34, "name": "Pur Value", "summary": "Integer ac leo.", "price": 19.62901, "menuId": 2 },
    { "id": 35, "name": "Turkey - Whole, Fresh", "summary": "Sed vel enim sit amet nunc viverra dapibus.", "price": 96.9281, "menuId": 2 },
    { "id": 36, "name": "Gelatine Leaves - Envelopes", "summary": "Maecenas ut massa quis augue luctus tincidunt.", "price": 53.60885, "menuId": 2 },
    { "id": 37, "name": "Beer - Corona", "summary": "Morbi vel lectus in quam fringilla rhoncus.", "price": 89.53563, "menuId": 1 },
    { "id": 38, "name": "Black Currants", "summary": "Aenean auctor gravida sem.", "price": 43.83152, "menuId": 1 },
    { "id": 39, "name": "Seedlings - Clamshell", "summary": "In quis justo.", "price": 18.68381, "menuId": 2 },
    { "id": 40, "name": "Appetizer - Seafood Assortment", "summary": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.", "price": 95.94877, "menuId": 2 }];
    food.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Food', food, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Food', null, {});
  }
};
