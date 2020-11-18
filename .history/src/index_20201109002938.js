const express = require('express');
const app = express();
const path = require('path');

// Relative Absolute
console.log(__dirname);

// builtin middleware
app.use(express.static(staticPath));



app.get('/', (req, res) => {
    res.send('Hello World From The Express..!')
});

app.get('/about', (req, res) => {
    res.send('Hello World From The About Page..!');
})
app.listen(8000, () =>{
    console.log('Listing to the port at 8000..!');
});