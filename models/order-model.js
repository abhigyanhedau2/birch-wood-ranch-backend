const mongoose = require('mongoose');

const getISTTime = () => {

    var currentTime = new Date();

    var currentOffset = currentTime.getTimezoneOffset();

    var ISTOffset = 330;   // IST offset UTC +5:30 

    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);

    // ISTTime now represents the time in IST coordinates

    var hoursIST = ISTTime.getHours()
    var minutesIST = ISTTime.getMinutes()
    var secondsIST = ISTTime.getSeconds()

    const finalISTTime = hoursIST + ":" + minutesIST + ":" + secondsIST;

    return finalISTTime;

};

const orderSchema = new mongoose.Schema({
    // Product and it's description for seller to see and user id 
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
    },
    orderedOn: {
        type: Date,
        // default: new Date().toLocaleString()
        default: getISTTime()
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