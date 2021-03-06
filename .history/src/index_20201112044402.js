const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

// Relative Absolute
console.log(__dirname);

const staticPath = path.join(__dirname , '../public');
console.log(path.join(__dirname, '../public'));

const templatePath = path.join(__dirname , '../templates/views');
const partialsPath = path.join(__dirname , '../templates/partials')


// To set the viewEngine
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

// builtin middleware
app.use(express.static(staticPath));

// Template Engine Route
app.get('', (req, res) => {
    res.render('index', {
        UserName: 'Alok'
    });
});

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/', (req, res) => {
    res.send('Hello World From The Express..!')
});

app.get('/about', (req, res) => {
    res.send('Hello World From The About Page..!');
});

app.get('*', (req, res) =>{
    res.render('404', {
        errormsg: 'Opps Page not foune..!'
    })
})
app.listen(8000, () =>{
    console.log('Listing to the port at 8000..!');
});