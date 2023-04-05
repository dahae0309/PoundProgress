const db = require('../models/userModel')


const userController = {};

//saveHistory

userController.saveHistory = (req, res, next) => {
  
  const { weight } = req.body;

  console.log('req.body:',req.body);

  const text1 = "INSERT INTO weightHistory (weight) VALUES ($1)";
  db.query(text1, [weight])
    .then(data => {
      console.log("data saved into DB", data)
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
 
// userController.getAllhistory = (req, res, next) => {
//   //find user by id
//     //grab the array of history
//       //send history to the frontend
// };

module.exports = userController;