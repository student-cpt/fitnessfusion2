const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,

    },
    Email: {
        type: String,
        required: true,
        trim: true,

    },
    PhoneNumber: {
        type: Number,
        required: true,


    },
    password: {
        type: String,
        required: true,
        trim: true,

    }
})

const Usermodel = mongoose.model("user", UserSchema);

module.exports = Usermodel;