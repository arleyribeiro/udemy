const express = require('express');

const app = express();

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