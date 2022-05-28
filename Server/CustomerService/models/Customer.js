const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({

    CustomerName: {
        type: String,
        required:true,
        trim:true
    },
    CustomerNumber:{
        type:Number,
        required:true,
        trim:true
    },
    CustomerEmail:{
        type:String,
        required:true,
        trim:true
    },
    CustomerPassword:{
        type:String,
        required:true,
        trim:true
    },
    isAdmin:{
        type:Boolean,
        default: false
    }

},{timestamp:true})

const Customer = mongoose.model('Customer',CustomerSchema)

module.exports = Customer