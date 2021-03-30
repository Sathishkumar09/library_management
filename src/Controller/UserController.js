/* Created by SathishKumar
* Created at (30/03/2021)
*/





const User = require('../Schema/UserSchema');

const Book = require('../Schema/BookSchema');

const Orders = require('../Schema/OrdersSchema');

//to store user details
const storeUserDetails = (req, res) => {
    const user = new User(req.body);
    user.save((error, result) => {
        if (error) {
            res.json({ status: false });
        } else {
            res.json({ status: true });
        }
    })
}

// to get all users

const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.json({ users: users });
}

//to get particular user by id

const getParticularUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    res.json({ user: user });
}

//to store book details
const storeBookDetails = async (req, res) => {
    const book = new Book(req.body);
    book.save((error, result) => {
        if (error) {
            res.json({ status: false });
        } else {
            res.json({ status: true });

        }
    });
}

//to get all books
const getAllBooks = async (req, res) => {
    const books = await Book.find({});
    res.json({ books: books });
}

//to get a particular book by id
const getParticularBook = async (req, res) => {
    const book = await Book.findOne({ _id: req.params.id });
    res.json({ book: book });
}

//to store user with multiple books
const storeUserWithMultipleBooks = async (req, res) => {
    const order = new Orders(req.body);
    order.save((error, result) => {
        if (error) {
            res.json({ status: false, message: "oops like something went wrong" });
        } else {
            res.json({ status: true, data: order, message: "Order placed successfully" });

        }
    });
}

//to get all the users with their books
const getAllLibraryDetails = async (req, res) => {
    const orders = await Orders.find({}).populate('book_id').populate('user_id');
    res.json({ orders: orders });
}

//to get a particular user with books
const toGetUserWithBookCollections = async (req, res) => {
    const userWithBooks = await Orders.findOne({ user_id: req.params.id }).populate('user_id').populate('book_id');
    res.json({ user_with_all_books: userWithBooks });
}


module.exports = { storeUserDetails, getAllUsers, getParticularUser, storeBookDetails, getAllBooks, getParticularBook, storeUserWithMultipleBooks, getAllLibraryDetails, toGetUserWithBookCollections };