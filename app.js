const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');


const Item = require('./models/item');

const app = express();


mongoose.connect('mongodb://localhost:27017/qr-scanner')
    .then(() => {
        console.log("Database Connected!!!");
    })
    .catch(err => {
        console.log("OH NO ERROR!")
        console.log(err);  
    });


app.engine('ejs',ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));



app.all('*', (req,res) => {
    res.send('Page Not Found');
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})