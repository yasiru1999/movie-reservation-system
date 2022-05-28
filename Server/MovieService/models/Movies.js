const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MovieSchema = new Schema({

    MovieName: {
        type: String,
        required:true,
        trim:true
    },
    MovieDescription:{
        type:String,
        required:true,
        trim:true
    },
    MovieCasts:{
        type:String,
        required:true,
        trim:true
    },
    MovieTheater:{
        type:String,
        required:true,
        trim:true
    },
    MovieShowTimes:{
        type:Array,
        required:true,
        trim:true
    },
    img: {
        type: String
    },
    trailer: {
        type: String
    }

},{timestamp:true})

const Movies = mongoose.model('Movies',MovieSchema)

module.exports = Movies