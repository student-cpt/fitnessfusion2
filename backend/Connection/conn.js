const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aman:aman123@backend.e5eheie.mongodb.net/").then(() => {
    console.log("my db is connect", );



}).catch((error) => {
    console.log("problem is connect", error)
})