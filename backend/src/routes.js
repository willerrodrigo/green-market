const express = require('express');

const MarketController = require('./controllers/MarketController');
const ProductController = require('./controllers/ProductController');
const AuthController = require('./controllers/AuthController');

const routes = new express.Router();

// AUTH
routes.post('/markets/authenticate', AuthController.auth);

// MARKET
routes.get('/markets', MarketController.index);
routes.post('/markets/signup', MarketController.store);

// PRODUCT
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

module.exports = routes;