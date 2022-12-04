const controller = {};
const models = require('../models');
//HERRE
const Menu = models.Menu;
const sequelize = require('sequelize');
const Op = sequelize.Op;

// KEYWORD
controller.search = (keyword) => {
    return Menu.findAll({
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
    return Menu.findOne({
        where: { id: id },
         include: [
            {
                model: models.Food,
                as: 'Foods'
            }
        ]
    });
}

// ALL
controller.getAll = () => {
    return Menu.findAll({
        include: [
            {
                model: models.Food,
                as: 'Foods'
            }
        ]
    });
    }
module.exports = controller;