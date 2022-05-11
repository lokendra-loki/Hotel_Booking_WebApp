import User from '../models/User.js';


//Update User
export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error)
    }
}


//Delete User
export const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({ msg: "This User has been deleted", deletedUser });
    } catch (error) {
        next(error)
    }
}


//Get User
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
}


//GetAll Users
export const getAllUser = async (req, res, next) => {
    try {
        const users = await User.find()
        res.status(200).json(users);
    } catch (error) {
        next(error)
    }
}