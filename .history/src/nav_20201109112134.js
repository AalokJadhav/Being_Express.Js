// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     res.status(200).send('Welcome to Home Page..!')
// });

// // To send HTML Data
// app.get('/html', (req, res) => {
//     res.status(200).send('<h1>Welcome to Home Page..!</h1>')
// });

// // To send Json Data using JavaScript Object
// app.get('/json', (req, res) => {
//     res.status(200).send({
//         id:  '1',
//         name: 'Alok',
//         city: 'Kolhapur'
//     })
// });

// // To send Json Data using JavaScript Arry Of An Object
// // Step 1
// app.get('/jsonarray', (req, res) => {
//     res.status(200).send([{
//         id:  '1',
//         name: 'Alok',
//         city: 'Kolhapur'
//     },
//     {
//         id:  '2',
//         surname: 'Jadhav',
//         state: 'Maharashtra'
//     }])
// });

// // To send Json Data using JavaScript Arry Of An Object
// // Step 2
// app.get('/jsonarray1', (req, res) => {
//     res.status(200).json([{
//         id:  '1',
//         name: 'Alok',
//         city: 'Kolhapur'
//     },
//     {
//         id:  '2',
//         surname: 'Jadhav',
//         state: 'Maharashtra'
//     }])
// });

// // Note : The both methods are identical when an object or array is passed
// //         but res.json() will also convert non-objects like null, undefined which are not valid  JSON


// app.get('/about', (req, res) => {
//     res.status(200).send('Welcome to About Page..!')
// });

// app.get('/contact', (req, res) => {
//     res.status(200).send('Welcome to Contact Page..!')
// });

// app.get('/temp', (req, res) => {
//     res.status(200).send('Welcome to Temp Page..!')
// });

// app.listen(8000, () => {
//     console.log( 'Listing to the port at 8000..!');
// })
