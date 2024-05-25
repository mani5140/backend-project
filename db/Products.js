const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userId:String,
    company:String,
    quantity:Number
})

module.exports = mongoose.model("products",productSchema);