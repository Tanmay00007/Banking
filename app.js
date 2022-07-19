require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'))

app.use(require('./router/app'))

mongoose.connect('mongodb://127.0.0.1:27017/db1')

app.set("view engine", "ejs")


app.listen(3000 || process.env.PORT , function(){
    console.log("Server Started")
});