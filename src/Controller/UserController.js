/* Created by SathishKumar
* Created at (30/03/2021)
*/
const User = require('../Schema/UserSchema');

/*  to store user details
->param (req) datatype-of-object, 
->param (res) datatype-of-object,
->this function returns a json{} object
*/

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

/* to get all users
->param (req) datatype-of-object, 
->param (res) datatype-of-object,
->this function returns a json{} object
*/
const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.json({ users: users });
}

/*to get particular user by id
->param (req) datatype-of-object, 
->param (res) datatype-of-object,
->this function returns a json{} object
*/
const getParticularUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    res.json({ user: user });
}

module.exports = { storeUserDetails, getAllUsers, getParticularUser };