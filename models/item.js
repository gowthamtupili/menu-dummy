const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    image: String
})


module.exports = mongoose.model('Item', ItemSchema);