const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    market: {
        type: Schema.Types.ObjectId,
        ref: 'Market'
    },
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

module.exports = model('Product', ProductSchema);