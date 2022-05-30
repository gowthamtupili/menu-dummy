if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}


const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
var cors = require("cors");
const catchAsync = require('./utils/catchAsync')

const Category = require('./models/category');
const Restaurant = require('./models/restaurant');

const app = express();

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/qr-scanner';


mongoose.connect(dbUrl)
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
app.use(cors());

app.get('/', catchAsync(async (req, res) => {
    const rest = await Restaurant.findById('6294348e6d6b52ba81f87536').populate(
        'menu'
    );

    // res.render('menu/items', { items });
    res.json(rest);
}))

app.post('/item', catchAsync(async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save()
    res.redirect('/')
}))

app.patch('item/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const item = await Item.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    await item.save();
    res.redirect('/')
}))

app.delete('item/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    await Item.findByIdAndDelete(id);
    res.redirect('/');
}))

app.all('*', (req,res) => {
    res.send('Page Not Found');
})


const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})