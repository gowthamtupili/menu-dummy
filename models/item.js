const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    cost: Number,
    description: String,
    discount: Number,
    is_available: Boolean,
    category: String,
    type: String,
    image: String,
    serves: String,
})


module.exports = mongoose.model('Item', ItemSchema);



