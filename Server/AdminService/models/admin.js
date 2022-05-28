const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name:{ type: String },
    username: { type: String, required: true},
    password: { type: String, required: true},
    isSystemAdmin: { type: Boolean, required: true, default: false},
    isMovieAdmin: { type: Boolean, required:true, default: false}
})

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;