const { createProxyMiddleware } = require("http-proxy-middleware");
const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');
const PORT = 3000;

const userController = require('./controller/userController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/src', express.static(path.resolve(__dirname, './src')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
});

app.get('/history', userController.getAllHistory,
  (req, res) => {
    return res.status(200).json(res.locals.history)
  })

// app.post('/login', userController.logIn,
//   (req, res) => {
//     return res.status(200)
//   });



app.post('/history', userController.saveHistory,
  (req, res) => {
    return res.status(200).json(res.locals.history)
  });

app.delete('/delete', userController.deleteHistory,
  (req, res) => {
    return res.status(200).json('remoed')
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