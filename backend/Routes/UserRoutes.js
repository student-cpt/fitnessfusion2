const express = require("express");
const { creatUser, loginuser, Getuser } = require("../Middleware/UserMiddleware");

const UserRoutes = express.Router();

UserRoutes.post('/signup', creatUser)

UserRoutes.post('/signin', loginuser)
UserRoutes.post('/getuser', Getuser)

module.exports = UserRoutes;