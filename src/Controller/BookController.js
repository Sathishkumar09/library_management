/* Created by SathishKumar
* Created at (30/03/2021)
*/
const Book = require('../Schema/BookSchema');

/*to store book details
->param (req) datatype-of-object, 
->param (res) datatype-of-object,
->this function returns a json{} object
*/const storeBookDetails = async (req, res) => {
    const book = new Book(req.body);
    book.save((error, result) => {
        if (error) {
            res.json({ status: false });
        } else {
            res.json({ status: true });

        }
    });
}

/*to get all books
->param (req) datatype-of-object, 
->param (res) datatype-of-object,
->this function returns a json{} object
*/
const getAllBooks = async (req, res) => {
    const books = await Book.find({});
    res.json({ books: books });
}

/*to get a particular book by id
->param (req) datatype-of-object, 
->param (res) datatype-of-object,
->this function returns a json{} object
*/
const getParticularBook = async (req, res) => {
    const book = await Book.findOne({ _id: req.params.id });
    res.json({ book: book });
}
module.exports = { storeBookDetails, getAllBooks, getParticularBook };