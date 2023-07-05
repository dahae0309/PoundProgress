const db = require('../models/userModel')


const userController = {};

//saveHistory

userController.saveHistory = (req, res, next) => {
  
  const { weight, userId } = req.body;

  console.log('req.body:',req.body);

  const text1 = "INSERT INTO weighthistory (weight, user_id) VALUES ($1, $2) RETURNING *;";
  db.query(text1, [weight, userId])
    .then(data => {
      console.log("data saved into DB")
      res.locals.history = data.rows;
      return next()
     })
    .catch(err => {
      return next({
        log: `userController.saveHistory: ERROR: ${err}`,
        message: { err: 'Error occurred in userController.saveHistory. Check server logs for more details.' }
      })
     })
}

userController.deleteHistory = (req, res, next) => {
  
  const { weightId } = req.body;

 // console.log('req.body:',req.body);

  const text = "DELETE FROM weightHistory WHERE id = ($1);";
  db.query(text, [weightId])
    .then(data => {
      console.log("data saved into DB")
      res.locals.history = data.rows;
      return next()
     })
    .catch(err => {
      return next({
        log: `userController.saveHistory: ERROR: ${err}`,
        message: { err: 'Error occurred in userController.saveHistory. Check server logs for more details.' }
      })
     })
}


userController.getAllHistory = (req, res, next) => {
  //find user by id
    //grab the array of history
      //send history to the frontend
  
  // const { weight } = req.body;
  
  const { userId } = req.body;
  console.log(userId)
  //console.log('req.body:',req.body);

  const text = "SELECT * FROM weightHistory WHERE user_id = $1";
  db.query(text,[userId])
    .then(data => {
      console.log("history DB", data.rows)
      res.locals.history = data.rows;
      return next()
     })
    .catch(err => {
      return next({
        log: `userController.getAllhistory: ERROR: ${err}`,
        message: { err: 'Error occurred in userController.getAllhistory. Check server logs for more details.' }
      })
    })
  
};

userController.getUserInfo = (req, res, next) => {
  //find user by id
    //grab the array of history
      //send history to the frontend
  
  // const { weight } = req.body;
  
  const { userId } = req.body;
  //console.log(userId)
  //console.log('req.body:',req.body);

  const text = "SELECT username, gender, height, weight, goal, created_at FROM users WHERE id = $1";
  db.query(text,[userId])
    .then(data => {
      console.log("userInfo", data.rows)
      res.locals.userInfo = data.rows;
      return next()
     })
    .catch(err => {
      return next({
        log: `userController.getUserInfo: ERROR: ${err}`,
        message: { err: 'Error occurred in userController.getUserInfo. Check server logs for more details.' }
      })
    })
  
};

module.exports = userController;