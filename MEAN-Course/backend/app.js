const express = require('express');

const app = express();

//CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});

app.use("/api/posts", (req, res, next) => {
    const posts = [
        { id: '1', title: 'First Post', content: 'First Content'},
        { id: '2', title: 'Second Post', content: 'Second Content'},
        { id: '3', title: 'Third Post', content: 'Third Content'},
        { id: '4', title: 'Fouth Post', content: 'Fouth Content'},
        { id: '5', title: 'Fifth Post', content: 'Fifth Content'}
    ]
    res.status(200).json({
        message: 'Posts fetched succesfully!',
        posts: posts
    });
});

module.exports = app;