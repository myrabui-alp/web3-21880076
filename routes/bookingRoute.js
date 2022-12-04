let express = require('express');
let router = express.Router();

router.post('/', (req, res, next) => {
    let controller = require('../controllers/bookingController');
    let booking = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        date: req.body.date,
        time: req.body.time,
        people: req.body.people,
        message: req.body.message,
    };    
    controller
        .add(booking)
        .then(data => {
            res.redirect('/details/' +data.id);
        })
        .catch(error => next(error));
})

module.exports = router;

