/* Created by SathishKumar
* Created at (30/03/2021)
*/





const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  // user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  book_name: String,
  language: String,
  author_name: String,
  book_price: Number
});

module.exports = mongoose.model('Book', bookSchema);
