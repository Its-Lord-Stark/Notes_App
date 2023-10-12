require('dotenv').config();

const express= require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 5000 || process.env.PORT;

//Middlewares we gonna use:
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//Static Files being used:
app.use(express.static('public'));


//Templating Engine

app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


//Routes

app.use('/', require('./server/routes/index'));
// app.use('/', require('./server/routes/dashboard'));






//Last route

app.get('*', function(req,res){

    res.status(404).render('404');
})



//Listning to port

app.listen(port, ()=>
{ (console.log('Status Running on ${port}'))}
);

