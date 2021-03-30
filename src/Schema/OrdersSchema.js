/* Created by SathishKumar
* Created at (30/03/2021)
*/
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userWithAllBooks = new schema({

    user_id: { type: schema.Types.ObjectId, ref: 'User' },
    book_id: { type: schema.Types.ObjectId, ref: 'Book' },
    from_date: String,
    end_date: String

})

module.exports = mongoose.model('Orders', userWithAllBooks);