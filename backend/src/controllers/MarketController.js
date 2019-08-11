const Market = require('../models/market');

module.exports = {
  async index(req, res) {
    const market = await Market.find();

    return res.json(market);
  },

  async store(req, res) {
    const {
       name, phone, email
    } = req.body;

    const market = await Market.create({
      name,
      phone,
      email,
    });

    return res.json(market);
  },
};
