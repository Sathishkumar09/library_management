const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
   user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    bookName: String,
    language: String,
    authorName: String,
    bookPrice: Number
});

module.exports = mongoose.model('Book', bookSchema);
