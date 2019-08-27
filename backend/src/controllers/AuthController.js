const Market = require('../models/market');

module.exports = {
  async auth(req, res) {
    const { email, password } = req.body;
    console.log("User submitted: ", email, password);
  },
};
