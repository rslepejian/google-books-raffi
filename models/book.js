const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googlebook = new Schema({
  title: { type: String, required: true },
  author: { type: String},
  synopsis: {type: String},
  image: { type: String},
  link: {type: String} 
});

const Book = mongoose.model("Book", googlebook);

module.exports = Book;