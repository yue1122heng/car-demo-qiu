const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cars', { useNewUrlParser: true });

const classesModel = require('./models/classes');

module.exports = {
  classesModel
}


