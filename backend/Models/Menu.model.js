const mongoose = require('mongoose');
const menuSchema = mongoose.Schema({
  title: String,
  combo: String,
  price: Number,
  imageUrl: String
});
const Menu = mongoose.model('menu', menuSchema)

module.exports = Menu;