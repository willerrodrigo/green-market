const Market = require('../models/market');
const Product = require('../models/product');

module.exports = {
  async index(req, res) {
    const { market } = req.headers;

    const loggedMarket = await Market.findById(market);

    return res.json(loggedMarket.products);
  },

  async store(req, res) {
    const {
      name, price, weight, volume, category, market
    } = req.body;

    const loggedMarket = await Market.findById(market);

    const product = await Product.create({
      market,
      name,
      price,
      weight,
      volume,
      category
    });

    loggedMarket.products.push(product._id);

    await loggedMarket.save(function (err) {
      if (err) return console.log(err);
      console.log('Success!');
    });

    return res.json(product);
  },
};
