const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    // customer details
    CustomerName: String,
    CustomerPhone: Number,
    CustomerEmail: String,
    CustomerAddress: String, 
    CustomerAge: Number
    
    
});

module.exports = mongoose.model('customerSchema',customerSchema);