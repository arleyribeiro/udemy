const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts');

const url = 'mongodb+srv://arley:sRyCrEUPV9cqIR9z@cluster0-mhqji.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to database!')
    })
    .catch(() => {
        console.log('Connection failed!');
    });

const app = express();

//Extract data of body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});

app.use("/api/posts", postsRoutes);
module.exports = app;