const express = require('express');
const route = express.Router();
// HERE
const controller = require('../controllers/menuController')

//1-4 #SEARCH
// route.get('/', async (req, res) => {
//     let keyword = req.query.keyword;
//     let recipes = await controller.search(keyword);
//     res.locals.recipes = recipes;
//     res.render('recipes');
    
// });

//5 #ODD #SEARCH
route.get('/', async (req, res) => {
    let keyword = req.query.keyword;
    let menus = [];
    if (keyword && keyword.trim() != ''){
        menus = await controller.search(keyword);
    }
    else {
        menus = await controller.getAll();        
    }
    res.locals.menus = menus;
    res.render('index');
    
});

// #SEARCH BY ID
route.get('/:id', async (req, res) => {
    let id = req.params.id;
    let menu = await controller.getById(id);
    res.locals.menu = menu;
    res.render('index');
});

module.exports = route;