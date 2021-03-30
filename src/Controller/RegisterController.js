/* Created by SathishKumar
* Created at (30/03/2021)
*/
const Orders = require('../Schema/OrdersSchema');

/*to store user with multiple books
->param (req) datatype-of-object, 
->param (res) datatype-of-object,
->this function returns a json{} object
*/const storeUserWithMultipleBooks = async (req, res) => {
    const order = new Orders(req.body);
    order.save((error, result) => {
        if (error) {
            res.json({ status: false, message: "oops like something went wrong" });
        } else {
            res.json({ status: true, data: order, message: "Order placed successfully" });

        }
    });
}

/*to get all the users with their books
->param (req) datatype-of-object, 
->param (res) datatype-of-object,
->this function returns a json{} object
*/
const getAllLibraryDetails = async (req, res) => {
    const orders = await Orders.find({}).populate('book_id').populate('user_id');
    res.json({ orders: orders });
}

/*to get a particular user with books
->param (req) datatype-of-object, 
->param (res) datatype-of-object,
->this function returns a json{} object
*/
const toGetUserWithBookCollections = async (req, res) => {
    const userWithBooks = await Orders.findOne({ user_id: req.params.id }).populate('user_id').populate('book_id');
    res.json({ user_with_all_books: userWithBooks });
}

module.exports = { storeUserWithMultipleBooks, getAllLibraryDetails, toGetUserWithBookCollections };