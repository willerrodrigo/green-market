const Market = require('../models/market');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  async auth(req, res) {
    const { email, password } = req.body;

    await Market.findOne({ email }, function (err, user) {
      console.log("User Found: ", user);
      if (user === null) {
        return res.json({ err: 'Email not found!'});
      }

      bcrypt.compare(password, user.password, function (err, result) {
        if(err) {
          return res.send(err);
        }
        else {
          if (result === true) {
            console.log("Valid!");
            const token = jwt.sign({ email: user.email }, process.env.JWT_PRIVATE_KEY, { expiresIn: '1h' }); // Signing the token
            res.json({
              success: true,
              err: null,
              id: user._id,
              token
            });
          }
          else {
            res.json({
              success: false,
              token: null,
              err: 'Incorret password!'
            });
          }
        }
      });
    })
  },
};
