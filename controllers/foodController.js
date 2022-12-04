const controller = {};
const models = require('../models');
//HERRE
const Food = models.Food;
const sequelize = require('sequelize');
const Op = sequelize.Op;

// KEYWORD
controller.search = (keyword) => {
    return Food.findAll({
        where: {
            [Op.or]: {
            title: {
                [Op.iLike]: `%${keyword}`
            }        }
        }
    })
}

// ID
controller.getById = (id) =>
{
    return Food.findOne({
        where: { id: id },
         include: [
            {
                model: models.Menu,
                as: 'Menus'
            }
        ]
    });
}

// ALL
controller.getAll = () => {
    return Food.findAll({
        include: [
            {
                model: models.Menu,
                as: 'Menus'
            }
        ]
    });
    }
module.exports = controller;