const { createProxyMiddleware } = require("http-proxy-middleware");
const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');
const PORT = 3000;

const userController = require('./controller/userController');
const loginController = require('./controller/loginController');
const signupController = require('./controller/signupController');
const goalController = require('./controller/goalController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/src', express.static(path.resolve(__dirname, './src')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
});


app.post('/login', loginController.verification,
  (req, res) => {
    console.log('hi')
    return res.status(200).json(res.locals)
    //res.sendFile(path.resolve(__dirname, '../src/components/Homepage2.jsx'))
  })

app.post('/signup', signupController.signup,signupController.firstHistory,
  (req, res) => {
    console.log('signed up')
    return res.status(200).json(res.locals)
    //res.sendFile(path.resolve(__dirname, '../src/components/Homepage2.jsx'))
  })

app.post('/history', userController.getUserInfo, userController.getAllHistory,
  (req, res) => {
    return res.status(200).json(res.locals)
  })
// app.post('/login', userController.logIn,
//   (req, res) => {
//     return res.status(200)
//   });

app.put('/history', userController.saveHistory,
  (req, res) => {
    return res.status(200).json(res.locals.history)
  });

app.put('/newgoal', goalController.newGoal,
  (req, res) => {
    return res.status(200).json(res.locals)
  });

app.delete('/delete', userController.deleteHistory,
  (req, res) => {
    return res.status(200).json('removed')
  });
   

app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});


app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});


app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

module.exports = app;