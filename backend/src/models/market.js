const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    volume: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

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
    products: [ProductSchema]
}, {
    timestamps: true,
});

module.exports = model('Market', MarketSchema);