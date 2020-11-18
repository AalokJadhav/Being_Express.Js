const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Home Page..!')
});

app.get('/about', (req, res) => {
    res.status(200).send('Welcome to About Page..!')
});

app.get('/contact', (req, res) => {
    res.status(200).send('Welcome to Contact Page..!')
});

app.get('/temp', (req, res) => {
    res.status(200).send('Welcome to Temp Page..!')
});

app.listen(8000, () => {
    console.log( 'Listing to the port at 8000..!');
})
