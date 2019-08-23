const express = require('express');

const MarketController = require('./controllers/MarketController');
const ProductController = require('./controllers/ProductController');

const routes = new express.Router();

// MARKET
routes.get('/markets', MarketController.index);
routes.post('/markets', MarketController.store);

// PRODUCT
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);

module.exports = routes;