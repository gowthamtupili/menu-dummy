const mongoose = require('mongoose');
const Category = require('../models/category');
const Restaurant = require('../models/restaurant');
require('dotenv').config();


const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/qr-scanner';



mongoose.connect(dbUrl)
    .then(() => {
        console.log("Connection OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO ERROR!")
        console.log(err);  
    });


    const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {

    // const rest = new Restaurant({
    //     restaurant_name: 'xyz',
    //     taking_orders: true
    // })
    // console.log(rest);
    // pid = '6294348e6d6b52ba81f87536'
    // const rest = await Restaurant.findById(pid);
    // console.log(rest);
    const cat1 = await Category.findById('629435a2333a4417cf0c9d5e') 

        item = 
            {     
                name:"Chicken Biryani",
                cost :260,
                description :"delicious and must try",
                quantity : 1,
                discount :20,
                is_available :true,
                category :"biryani",
                veg_or_not:"non_veg",
                image :"https://biryanigurucom.files.wordpress.com/2018/03/chicken-biryani.jpg?w=2560",
                serves :"serves 1-2"     
            }
        
        cat1.items.push(item);

    await cat1.save();
    // rest.menu.push(cat);
    // await rest.save();
    // for (let i = 0; i < 20; i++) {
    //     const cost = (Math.floor(Math.random() * 30) + 10);
    //     const menu = new Item({
    //         name: 'biryani',  
    //         image: 'https://source.unsplash.com/collection/483251',
    //         description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero quasi, recusandae iste, quibusdam quam sed numquam error ea provident a, architecto id. A eius perspiciatis minus obcaecati quos vel?',
    //         cost,
    //         discount: 0,
    //         category: 'a',
    //         type: 'Non-Veg',
    //         is_available: true,
    //         serves: 'Serves 2'
           
    //     })
    //     await menu.save();
    // }
}


seedDB().then(() => {
    mongoose.connection.close();
})