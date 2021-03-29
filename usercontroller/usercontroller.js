const User = require('../schema/userschema');

const Book = require('../schema/bookschema');

const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.json({ users: users });
}


const UserDetails = async (req, res) => {
    const user = new User(req.body);
    user.save((error, result) => {
        if (error) {
            res.json({ status: false });
        } else {
            res.json({ status: true });
        }
    })
}

const getParticularUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    res.json({ user: user });
}

const storeBookDetails = async (req, res) => {
    const data = req.body;
    const user = new Book(data);
    user.save((error, result) => {
        if (error) {
            res.json({ status: false });
        } else {
            res.json({ status: true });

        }
    });
}

const getAllBooks = async (req, res) => {
    const users = await Book.find({});
    res.json({ books: users });
}


const getParticularBook = async (req, res) => {
    const user = await Book.findOne({ _id: req.params.id });
    res.json({ book: user });
}


const getUserByBook = async (req, res) => {
    const user = await Book.findOne({ _id: req.params.id }).populate('user_id');
    res.json({ user_with_book: user });
}

const getBookByUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id }).populate('book_id');
    res.json({ user_with_book: user });
}
module.exports = { getAllUsers, UserDetails, getParticularUser, storeBookDetails, getUserByBook, getAllBooks, getParticularBook, getBookByUser };