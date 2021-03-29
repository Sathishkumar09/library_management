const express = require('express');
const mongoose = require('mongoose');

const { getAllUsers, UserDetails, getParticularUser, storeBookDetails,  getAllBooks, getParticularBook,storeUserWithMultipleBooks,getAllOrders,getUserWithAllBooks,getBooksWithUser} = require('./controller/user_controller')

const app = express();
app.use(express.json());


async function connectDB() {
    await mongoose.connect('mongodb://127.0.0.1:27017/library', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}

connectDB();

const router = express.Router();


router.get('/users', getAllUsers);
router.post('/user', UserDetails);
router.get('/user/:id', getParticularUser);
router.post('/book', storeBookDetails);
router.get('/books', getAllBooks);
router.get('/book/:id', getParticularBook);
//router.get('/get_user_id/:id', getUserByBook);
//router.get('/get_book_id/:id', getBookByUser);
router.post('/orders',storeUserWithMultipleBooks);
router.get('/get_all_orders', getAllOrders);
router.get('/get_user_and_books/:id', getUserWithAllBooks);
router.get('/get_books_and_user/:id',getBooksWithUser)


app.use('/api/v1', router);


app.listen(9090, () => {
    console.log('app running ');
});