// Cau 1
    // Tao thu muc
    
// 2 Dinh nghia web server

const express = require('express');
const app = express();
//2 Web express
const hbs = require('express-handlebars');

// 2 Web express
app.use(express.static(__dirname + '/public'));
app.engine('hbs', hbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials/',
    defaultLayout: 'layout',
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    }
}));

// 2 New routes at index.js
app.set('view engine', 'hbs');

//sync data
app.get('/sync', (req, res) => {
    let models = require('./models');
    models.sequelize.sync().then(() => {
        res.send('sync completed!');
    })
})

//  // 2 New routes at index.js
// app.get('/', (req, res) => {
//     res.render('index');
// })

// trang chi tiet
app.use('/', require('./routes/indexRoute')); 
   
app.use('/bookings', require('./routes/bookingRoute')); 
// //web server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}`);
})

    // Tao CSDL
    // C2 >> Tao data base tren postgres
    // Sua cau hinh development theo cau hinh may
    // "username": "postgres",
    // "password": "Bmql8989",
    //     "database": "???",
    //     "host": "localhost",
    //     "dialect": "postgres"
    // },

    // sync data: npm install --no fund nodemon > nodemon index >>>  localhost:5000/sync
    // IS NOT A FUNCTION
    //index.js models >> row 23 change the old code to
    // var model = require(path.join(__dirname,file))(sequelize, Sequelize);
    // sequelize db:seed:all

// Cau 2
    // Web server >> above
    // index.html >> layout.hbs
        // Copy > Paste
        // Check part of code to define
        // Copy part to index.hbs >> change to {{body}}
        // Delete public/index.html
        // New routes at index.js
     // localhost:5000

    // recipes.html >> recipes.hbs
        // Copy {{body}} >> recipes.hbs <> featured
        // 

    // Dinh nghia va xu ly hien thi
        // New routes at index.js
        // recipeRoute.js >> dinh nghia routes
    // Chinh sua duong dan lien ket
        // layout.hbs edit img links ++ add "/" >> src ="/images/"; "/css"
        // chinh duong dan menu: layout.hbs Header
            //index.html = / ; /reciptes; #
// Cau 3
    // Tim Kiem && Hien thi danh sach
        // layout.hbs
            // form action: add method get && name keyword
        // recipesRoute
            //let keyword = req.query.keyword;
            
        
            //const controller = require('../controllers/recipeControllers')
            // route.get('/', async (req, res) => {
            //     let keyword = req.query.keyword;
            //     let recipes = await controller.search(keyword);
            //     res.locals.recipes = recipes;
            //     res.render('recipes');
                
            // });
        
        // read db: recipesController.js
        // read from recipes.hbs
            // {{#each recipes}}
            //     <li>
            //         <a href="/recipes/{{id}}"><img src="i{{smallImagePath}}" alt="Image"></a>
            //         <div>
            //             <h3><a href="/recipes/{{id}}">{{tittle}}</a></h3>
            //             <p>
            //                 {{{summary}}}
            //             </p>
            //         </div>
            //     </li>
            //     {{/each}}

// Cau 4
    // Hien thi chi tiet recipe
        // recipesController
            //             controller.getById = (id) =>
            // {
            //     return Recipe.findOne({
            //         where: { id: id },
            //         include: [
            //             {
            //                 models: models.Ingredient,
            //                 as: 'Ingredients'
            //             },
            //             {
            //                 models: models.Direction,
            //                 as: 'Directions'
            //             }
            //         ]
            //     });
            // }
        // recipesRoute
            //route.get('/:id', async (req, res) => {
            // let id = req.params.id;
            // let recipe = await controller.getById(id);
            // res.locals.recipe = recipe;
            // res.render('featured');
            // });
        // featured.hbs
        // direction them order
            
// Cau 5
    // Hien thi danh sach recipes xen ke
    // controller GetAll
    // new route '/' 
    // recipes.hbs
        // add enough type
        // enhance
    