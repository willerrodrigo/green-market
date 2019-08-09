const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-khaqg.mongodb.net/greenmarket?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const port = process.env.PORT || 3333;

app.get('/', (req, res) => {
    return res.send('Hello World!');
});

app.listen(port, (err) => {
    if(err)
        console.log('error');
    else
        console.log('server is running on port:'+ port);
})