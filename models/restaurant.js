const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  restaurant_name: String,
  taking_orders: Boolean,
  menu: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
  ]
})


module.exports = mongoose.model('Restaurant',RestaurantSchema)