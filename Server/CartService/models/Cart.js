const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CartSchema = new Schema({

    MovieName: {
        type: String,
        required:true,
        trim:true
    },

    TicketPrice:{
        type:Number,
        required:true,
        trim:true
    },
    TheaterLocation:{
        type:String,
        required:true,
        trim:true
    },

    MovieShowTimes:{
        type:String,
        required:true,
        trim:true
    },

    SeatNumbers:{
        type:Array,
        required:true,
        trim:true
    },

    ResDate:{
        type:Array,
        required:true,
        trim:true
    },

},{timestamp:true})

const Cart = mongoose.model('Cart',CartSchema)

module.exports = Cart