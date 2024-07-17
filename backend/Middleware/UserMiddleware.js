// const { response } = require("express");
const Usermodel = require("../../.vscode/Models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.creatUser = async(req, res) => {
    const { username, Email, PhoneNumber, password } = req.body;
    try {
        const newpassword = await bcrypt.hash(password, 10);
        const response = await Usermodel.create({
            username: username,
            Email: Email,
            PhoneNumber: PhoneNumber,
            password: newpassword
        });
        res.status(201).json({ message: "user create sucess", response });
    } catch (error) {
        res.status(501).json({ message: "problem ho gyi alien", error })
    }
}


exports.loginuser = async(req, res) => {
    const { Email, password } = req.body;
    try {
        const response = await Usermodel.findOne({ Email: Email });

        if (response) {
            const pass = response.password;
            const check = await bcrypt.compare(password, pass);
            if (check == true) {
                const token = jwt.sign({ response }, "meranamhailakhan")
                return res.status(200).json({ message: "bhai welcome", Token: token })
            }
            return res.status(501).json({ message: "password mismatch" })
        }
        return res.status(501).json({ message: "user not found" })

    } catch (error) {
        res.status(501).json({ message: "problem ho gyi alien" })
    }
}

exports.Getuser = async(req, res) => {
    const { id } = req.body;
    const Token = req.headers.authtoken;
    try {
        const decode = jwt.verify(Token, "meranamhailakhan")
        if (decode.response._id) {
            const response = await Usermodel.findOne({ _id: id });
            if (response) {
                return res.status(200).json(response);
            } else {
                return res.status(501).json({ message: "token invalid" })
            }
        }
        res.status(404).json({ message: "user not found" })

    } catch (error) {
        res.status(501).json({ message: "errore occured" })

    }
}