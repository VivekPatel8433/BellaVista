import mongoose from "mongoose";

const reservation = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    date: String,
    time: String,
    number: String,
    requests: String
})

const User = mongoose.model('User', reservation)

export default User;