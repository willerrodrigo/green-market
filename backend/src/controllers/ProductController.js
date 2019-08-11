const Market = require('../models/market');

module.exports = {
  async index(req, res) {
    const { market } = req.headers;

    const loggedMarket = await Market.findById(market);

    return res.json(loggedMarket.products);
  },

  async store(req, res) {
    const { market } = req.headers;

    const loggedMarket = await Market.findById(market);

    const {
      name, price, weight, volume, category
    } = req.body;

    const product = {
      name,
      price,
      weight,
      volume,
      category
    };

    loggedMarket.products.push(product);

    loggedMarket.save(function (err) {
      if (err) return console.log(err);
      console.log('Success!');
    });

    return res.json(product);
  },
};
