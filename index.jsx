const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/me', (req, res) => {
    res.send('Hello Me!');
})

app.listen(5000, () => {
    console.log('Server running on port 5000');
})