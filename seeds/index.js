const mongoose = require('mongoose');
const Item = require('../models/item');

mongoose.connect('mongodb://localhost:27017/qr-scanner')
    .then(() => {
        console.log("Connection OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO ERROR!")
        console.log(err);  
    });


    const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Item.deleteMany({});
    for (let i = 0; i < 20; i++) {
        const cost = (Math.floor(Math.random() * 30) + 10);
        const menu = new Item({
            name: 'biryani',  
            image: 'https://source.unsplash.com/collection/483251',
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero quasi, recusandae iste, quibusdam quam sed numquam error ea provident a, architecto id. A eius perspiciatis minus obcaecati quos vel?',
            cost,
            discount: 0,
            category: 'a',
            type: 'Non-Veg',
            is_available: true,
            serves: 'Serves 2'
           
        })
        await menu.save();
    }
}


seedDB().then(() => {
    mongoose.connection.close();
})