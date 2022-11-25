const mongoose = require('mongoose');

function initDateInTimezone(offsetHours) {
    const timezoneOffsetInMS = offsetHours * 60 * 60000;
    let d = new Date().getTimezoneOffset() * 60000 + timezoneOffsetInMS;
    const date = new Date(new Date().getTime() - d);
    return date;
}


const orderSchema = new mongoose.Schema({
    // Product and it's description for seller to see and user id 
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
    },
    orderedOn: {
        type: Date,
        // default: Date.now()
        default: initDateInTimezone(-5.5)
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
    },
    sellerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
});

const Order = new mongoose.model('Order', orderSchema);

module.exports = Order;