/* Created by SathishKumar
* Created at (30/03/2021)
*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    repeat_password: String,
    birth_year: Number,
    email: String

})
module.exports = mongoose.model('User', userSchema);