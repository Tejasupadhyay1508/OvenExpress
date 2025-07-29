const express = require('express');
const { getCartById } = require('../controllers/cartController');
const cartRouter = express.Router();
cartRouter.get('/:id',getCartById); // Registering the route to get cart by ID

module.exports = cartRouter; // Exporting the cart router