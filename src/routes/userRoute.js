const express = require('express');
const { createUser } = require('../controllers/userController');
//we have to initialise a router object to add routes in a new file
const userRouter = express.Router();


userRouter.post('/',createUser);//this is route registration


module.exports = userRouter; //exporting the router object