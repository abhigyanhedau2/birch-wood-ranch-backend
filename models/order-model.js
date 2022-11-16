const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    // Product and it's description for seller to see and user id 
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
    },
    orderedOn: {
        type: Date,
        // default: new Date().toLocaleString()
        default: (new Date()).toISOString()
    },
    totalProductsPrice: {
        type: Number
    },
    totalProductsQuantity: {
        type: Number
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
});

const Order = new mongoose.model('Order', orderSchema);

module.exports = Order;