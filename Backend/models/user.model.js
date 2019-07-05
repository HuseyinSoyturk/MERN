const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: String,
    name: String,
    lastname: String,
    createdate: { type: Date, default: Date.now },
});

const User = mongoose.model('User' , userSchema)

module.exports = User;