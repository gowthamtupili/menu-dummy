const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    cost: Number,
    description: String,
    discount: Number,
    is_available: Boolean,
    category: String,
    veg_or_not: String,
    image: String,
    serves: String,
});


const CategorySchema = new Schema({
  category: String,
  items: [ItemSchema],  
})


module.exports = mongoose.model('Category', CategorySchema);



