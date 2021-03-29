const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
   // book_id: { type: schema.Types.ObjectId, ref: 'Book' },
    username: String,
    password: String,
    repeat_password: String,
    birth_year: Number,
    email: String

})
module.exports = mongoose.model('User', userSchema);