const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World From The Express..!')
});
app.listen(8000, () =>{
    console.log('Listing to the port at 8000..!');
});