const express = require('express')
const mongoose = require('mongoose')

const app = express()

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_CONN_STRING

mongoose.connect("mongodb+srv://huseyin:deneme123@merntest-mgnke.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection;

connection.once('open' , ()=>{
    console.log('mongo geldi');
})

app.listen(port, () => {
    console.log(port, 'den geldim');
})