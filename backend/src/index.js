const express = require('express');

const app = express();

const port = process.env.PORT || 3333;

app.get('/', (req, res) => {
    return res.send('Hello World!')
})

app.listen(port, (err) => {
    if(err)
        console.log('error')
    else
        console.log('server is running on port:'+ port)
})