const Market = require('../models/market');
const bcrypt = require('bcryptjs');

module.exports = {
  async index(req, res) {
    const market = await Market.find();

    return res.json(market);
  },

  async store(req, res) {
    const {
       name, phone, email, password
    } = req.body;
    const saltRounds = 10;
    console.log(req.body);

    bcrypt.hash(password, saltRounds, async function (err, hash) {
      if(err) {
        return res.send(err);
      }
      else {
        await Market.create({
          name,
          phone,
          email,
          password: hash
        }, function (err, doc) {
          if (err) return res.send(err);

          return res.json(doc);
        })
      }
    });
  },
};
