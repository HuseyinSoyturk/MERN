const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

//routes
const todoRouter = require('./routes/todo')
const userRouter = require('./routes/user')

app.use('/todo' , todoRouter)
app.use('/user' , userRouter)

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_CONN_STRING

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection;

connection.once('open' , ()=>{
    console.log('mongo geldi');
})

app.listen(port, () => {
    console.log(port, 'den geldim');
})