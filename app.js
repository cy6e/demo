const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layouts/main');
app.set('view engine','ejs');

const route = require('./server/routes/recipeRoutes.js')
app.use('/', route);

app.listen(port,()=>console.log(`listening to port ${port}`));

