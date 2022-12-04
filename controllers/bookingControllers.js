let controller = {};
let models = require('../models');
let Booking = models.Booking;
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

controller.add = (booking) => {
    return new Promise((resolve, reject) => {
        Booking
            .create(booking)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
}

module.exports = controller;