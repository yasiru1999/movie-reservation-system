const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TheaterSchema = new Schema({

    TheaterName: {
        type: String,
        required:true,
        trim:true
    },
    TheaterAdultTicket:{
        type:Number,
        required:true,
        trim:true
    },
    TheaterChildTicket:{
        type:Number,
        required:true,
        trim:true
    },
    TheaterLocation:{
        type:String,
        required:true,
        trim:true
    },
    SheetCount:{
        type:Number,
        required:true,
        trim:true
    },
    MovieShowTimes:{
        type:String,
        required:true,
        trim:true
    }

},{timestamp:true})

const Theater = mongoose.model('Theater',TheaterSchema)

module.exports = Theater