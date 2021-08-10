const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const product = require('./product')
app.get('/', (req,res) => {
    res.render('home' ,{product})
})


//handle bars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//use css
app.use(express.static('public'))

app.listen(3000)