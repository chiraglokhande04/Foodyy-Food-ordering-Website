const express = require('express');
const userRouter = express.Router();
const User = require('../Models/User');
const { body, validationResult } = require('express-validator');
const userController = require('../Controllers/userController')

userRouter.post('/createUser', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('name').isLength({ min: 3 })
], userController.createUser);


userRouter.post('/login', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], userController.login);



module.exports = userRouter;
