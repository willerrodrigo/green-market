const { Schema, model } = require('mongoose');

const MarketSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: String,

}, {
    timestamps: true,
});

module.exports = model('Market', MarketSchema);