const User = require('../schema/user_schema');

const Book = require('../schema/book_schema');

const Orders = require('../schema/orders');

// to get all users
const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.json({ users: users });
}

//to store user details
const UserDetails =  (req, res) => {
    const user = new User(req.body);
    user.save((error, result) => {
        if (error) {
            res.json({ status: false });
        } else {
            res.json({ status: true });
        }
    })
}

//to get particular user by id

const getParticularUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    res.json({ user: user });
}
s
//to store book details
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

//to get all books
const getAllBooks = async (req, res) => {
    const users = await Book.find({});
    res.json({ books: users });
}

//to get a particular book by id
const getParticularBook = async (req, res) => {
    const user = await Book.findOne({ _id: req.params.id });
    res.json({ book: user });
}

//to get user by book id
// const getUserByBook = async (req, res) => {
//     const user = await Book.findOne({ _id: req.params.id }).populate('user_id');
//     res.json({ user_with_book: user });
// }

//to get book by user id
// const getBookByUser = async (req, res) => {
//     const user = await User.findOne({ _id: req.params.id }).populate('book_id');
//     res.json({ user_with_book: user });
// }

// to store user with multiple books
const storeUserWithMultipleBooks = async (req, res) => {
    const data = req.body;
    const order = new Orders(data);
    order.save((error, result) => {
        if (error) {
            res.json({ status: false, message:"oops like something went wrong" });
        } else {
            res.json({ status: true, data:order, message:"Order placed successfully" });

        }
    });
}

//to get all the users with their books
const getAllOrders = async (req, res) => {
    const orders = await Orders.find({}).populate('book_id').populate('user_id');
    res.json({ orders: orders });
}

//to get a particular user with his books
const getUserWithAllBooks = async (req, res) => {
    const userWithBooks = await  Orders.findOne({user_id: req.params.id}).populate('user_id').populate('book_id');
    res.json({ orders: userWithBooks });
}

//to find users by using book id
const getBooksWithUser = async (req, res) => {
    const booksWithUser = await  Orders.findOne({book_id: req.params.id}).populate('user_id').populate('book_id');
    res.json({ orders: booksWithUser });
}


module.exports = { getAllUsers, UserDetails, getParticularUser, storeBookDetails,  getAllBooks, getParticularBook, storeUserWithMultipleBooks,getAllOrders,getUserWithAllBooks,getBooksWithUser };