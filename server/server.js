const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
// const mongoose = require('mongoose');
// const cookieSession = require('cookie-session')

const userController = require('./controller/userController');

const PORT = 3000;

const app = express();

//will use SQL for DB


app.use(express.json());
app.use(express.urlencoded());

// app.use('/src', express.static(path.resolve(__dirname, './src')));


/**
* root
*/
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './src/index.html'));
});


/**
* signup
*/
// app.get('/signup',
//   (req, res) => {
//     res.sendFile(path.resolve(__dirname, './src/signup.html'));
//   });

// app.post('/signup',
//   userController.createUser,
//   (req, res) => {
//     res.sendFile(path.resolve(__dirname, './src/main.html'))//direct to main pg
//   });


/**
* login
*/
// app.post('/login',
//   userController.verifyUser,
//   (req, res) => {
//     res.sendFile(path.resolve(__dirname, './src/main.html')) //direc to main pg

//   });


/**
* post history
*/

app.post('/history',
  userController.saveHistory,
  (req, res) => {
    res.status(200.).json(res.locals.history) //send data back to main page
  });


/**
* Authorized routes
*/
// app.get('/main',
//   (req, res) => {
//     res.sendFile(path.resolve(__dirname, './src/main.html')); //we are going to connect to DB 
//   });

// app.get('/main/userInfo', userController.getAllHistory, (req, res) => {  //data from DB
//   res.send( { history: res.locals.history });
// })

/**
 * 404 handler
 */
app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

module.exports = app;
