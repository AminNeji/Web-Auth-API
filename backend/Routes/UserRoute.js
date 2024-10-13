const express=require('express');
const route = express.Router();
const userController = require('../Controllers/UserController');

route.get('/login/:username/:password', userController.login);
route.post('/register', userController.register);

module.exports = route;