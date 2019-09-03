const { Schema, model } = require('mongoose');

const MarketSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
}, {
    timestamps: true,
});

module.exports = model('Market', MarketSchema);