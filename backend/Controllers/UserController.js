const express = require('express');
const user = require('../Models/UserModel');
const jwt= require('jsonwebtoken');
const login = async (req, res) => {
    const { username, password } = req.params;
    const founduser = await user.findOne({ username: username })
    console.log(founduser);
    if (!founduser) {
        return res.status(404).json({ message: "user not found" })
    }
    if (founduser.password != password) {
        return res.status(400).json({ message: "wrong password" })
    }
    const userPayload = founduser.toObject();
    const token=jwt.sign(userPayload,process.env.TOKEN,{expiresIn:'1h'});
    res.cookie("token",token,{
        httpOnly:true,
    })
    return res.status(200).json(founduser);

}
const register = async (req, res) => {
    const { username, password } = req.body;
    const founduser = await user.findOne({ username: username })
    if (founduser) {
        return res.status(404).json({ message: "user already exists" })
    }
    const newuser = new user({
        username: username,
        password: password
    })
    const saveduser = await newuser.save();
    return res.status(200).json({ message: "user created" })
}
module.exports = { login, register };