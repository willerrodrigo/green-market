const Market = require('../models/market');
const Product = require('../models/product');

module.exports = {
  async index(req, res) {
    const { market } = req.headers;

    await Product.find({ market: market}, 'name', function(err, doc) {
      if(err) return res.send(err);

      return res.json(doc);
    }).sort('-createdAt');
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
      if (err) return res.send(err);

      return res.json(product);
    });
  },

  async show(req, res) {
    var productId = req.params.id;

    await Product.findById(productId, function(err, doc) {
      if(err) return res.send(err);

      return res.json(doc);
    });
  },

  async update(req, res) {
    const { _id, update } = req.body;

    await Product.findByIdAndUpdate(_id, update, function(err, doc) {
      if(err) return res.send(err);

      return res.json(doc);
    });
  },

  async delete(req, res) {
    var productId = req.params.id;

    await Product.findByIdAndRemove(productId, function(err, doc) {
      if(err) return res.send(err);

      return res.json(doc);
    });
  }
};
