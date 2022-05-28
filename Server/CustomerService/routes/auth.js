const router = require("express").Router();
const User = require("../models/Customer");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        CustomerName:req.body.CustomerName,
        CustomerNumber:req.body.CustomerNumber,
        CustomerEmail:req.body.CustomerEmail,
        CustomerPassword: CryptoJS.AES.encrypt(req.body.CustomerPassword, process.env.SECRET_KEY).toString()

    });
    try {
        const user = await newUser.save();
        res.status(201).json({
            user:user,
            success:true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ CustomerEmail: req.body.CustomerEmail });
        !user && res.status(401).json("Wrong password or username!");

        const bytes = CryptoJS.AES.decrypt(user.CustomerPassword, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.CustomerPassword &&
        res.status(401).json("Wrong password or username!");


        res.status(200).json({ user });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;