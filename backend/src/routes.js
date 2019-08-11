const express = require('express');

const MarketController = require('./controllers/MarketController');
const ProductController = require('./controllers/ProductController');

const routes = new express.Router();

// MARKET
routes.get('/markets', MarketController.index);
routes.post('/markets', MarketController.store);

// PRODUCT
routes.get('/markets/products', ProductController.index);
routes.post('/markets/products', ProductController.store);

module.exports = routes;