const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({

    CustomerID: {
        type: String,
        required:true,
        trim:true
    },

    CustomerName: {
        type: String,
        required:true,
        trim:true
    },

    TicketPrice:{
        type:Number,
        required:true,
        trim:true
    },

    TheaterName:{
        type:String,
        required:true,
        trim:true
    },

    SeatNumbers:{
        type:Array,
        required:true,
        trim:true
    },

},{timestamp:true})

const Reservation = mongoose.model('Reservation',ReservationSchema)

module.exports = Reservation