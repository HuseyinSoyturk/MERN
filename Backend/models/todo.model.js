const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    userId: String,
    message: String,
    date: { type: Date, default: Date.now },
    active: Boolean,
});

const Todo = mongoose.model('Todo' , todoSchema)

module.exports = Todo;