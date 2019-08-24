const Market = require('../models/market');
const Product = require('../models/product');

module.exports = {
  async index(req, res) {
    const { market } = req.headers;

    const products = await Product.find({ market: market}, 'name');

    return res.json(products);
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

  async show(req, res) {
    var productId = req.params.id;

    const product = await Product.findById(productId);

    return res.json(product);
  },

  async update(req, res) {
    const { filter, update } = req.body;

    const product = await Product.findOneAndUpdate(filter, update, {
      new: true
    });

    console.log(product);
    return res.json(product);
  },

  async delete(req, res) {

  }
};
