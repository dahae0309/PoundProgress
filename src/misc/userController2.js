const db = require('../../server/models/userModel')


const userController = {};

userController.logIn = (req, res, next) => {
  const { username, password } = req.body
  const text = "SELECT * FROM userHistory WHERE username = ($1)"
  db.query(text, [username])
    .then(data => {
      console.log('data from DB:', data)
      //if password matches
        //redirect to hompage
  })
   
 }

console.log(req.body)



//saveHistory

userController.saveHistory = (req, res, next) => {
  
  const { weight } = req.body;

  //console.log('req.body:',req.body);

  const text1 = "INSERT INTO weightHistory (weight) VALUES ($1) RETURNING *;";
  db.query(text1, [weight])
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
  
  const { id } = req.body;

 // console.log('req.body:',req.body);

  const text1 = "DELETE FROM weightHistory WHERE id = ($1);";
  db.query(text1, [id])
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

  //console.log('req.body:',req.body);

  const text2 = "SELECT * FROM weightHistory WHERE weight IS NOT NULL";
  db.query(text2)
    .then(data => {
      //console.log("history DB", data)
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

module.exports = userController;