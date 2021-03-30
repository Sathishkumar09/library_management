/* Created by SathishKumar
* Created at (30/03/2021)
*/




const express = require('express');
const mongoose = require('mongoose');

const { getAllUsers, storeUserDetails, getParticularUser, storeBookDetails, getAllBooks, getParticularBook, storeUserWithMultipleBooks, getAllLibraryDetails, toGetUserWithBookCollections } = require('./Controller/UserController')

const app = express();
app.use(express.json());

//DB connection

async function connectDB() {
    await mongoose.connect('mongodb://127.0.0.1:27017/library', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}

connectDB();



// Routes

const router = express.Router();

// To Store and get users details
router.post('/user', storeUserDetails);
router.get('/users', getAllUsers);
router.get('/user/:id', getParticularUser);

//To Store and get book details
router.post('/book', storeBookDetails);
router.get('/books', getAllBooks);
router.get('/book/:id', getParticularBook);

//to store user with their books details and to get that stored details
router.post('/orders', storeUserWithMultipleBooks);
router.get('/get-all-orders', getAllLibraryDetails);
router.get('/get-user-and-books/:id', toGetUserWithBookCollections);


app.use('/api/v1', router);

//server connection

app.listen(9090, () => {
    console.log('app running');
});