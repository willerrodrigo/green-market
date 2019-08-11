const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-khaqg.mongodb.net/greenmarket?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, (err) => {
    if(err)
        console.log('error');
    else
        console.log('server is running on port: '+ 3333);
})
