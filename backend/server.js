const express = require('express');
const app = express();

//DB connection
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/eat_quick_db')
  .then(() => console.log('connection successful'));

//Models
const Menu = require('./Models/Menu.model');

//CORS
const cors = require('cors');
app.use(cors());

//Routes
app.get('/api/menu', (req, res) => {

  Menu
    .find()
    .then(allMenus => res.json(allMenus));
});

app.get('/api/detallepedido/:menu_id', (req, res) => {

  const { menu_id } = req.params

  Menu
      .findById(menu_id)
      .then(menu => res.json(menu))
})


app.listen(5005, () => console.log('Server started'));