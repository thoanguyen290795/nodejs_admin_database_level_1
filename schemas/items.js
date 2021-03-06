const mongoose = require('mongoose');
const collection = "items"; 
const schema = new mongoose.Schema({
    name:  String, // String is shorthand for {type: String}
    status: String,
    ordering:   Number
  });

module.exports = mongoose.model(collection, schema); 