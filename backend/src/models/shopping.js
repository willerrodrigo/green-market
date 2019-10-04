const { Schema, model } = require('mongoose');

const ShoppingSchema = new Schema({
    market: {
        type: Schema.Types.ObjectId,
        ref: 'Market'
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    totalWeight: {
        type: Number,
        required: true,
    },
    bags: {
        type: Number,
        required: true,
    },
}, {
        timestamps: true,
    });

module.exports = model('Shopping', ShoppingSchema);