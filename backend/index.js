// import express from "express";
// import cors from "cors";
// const app = express();
// app.use(cors());


// app.get("/getdata", (req, res) => {
//     res.send("hello");
// })
// app.listen(6000, () => console.log("app is running"));



const express = require("express");
const UserRoutes = require("./Routes/UserRoutes");
const app = express();
const bodyparser = require("body-parser");
require("./Connection/conn")
    // const Conn=require("./Connection/conn")

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


app.get('/test', (req, res) => {
    res.send("working");
})

app.use(UserRoutes)

app.listen(8000, () => {
    console.log("server is runing")
})