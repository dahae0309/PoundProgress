const db = require('../models/userModel')


const loginController = {};

//saveHistory

loginController.verification = (req, res, next) => {
  console.log('inside loginController.verification')
  const  {username, password}  = req.body;

  console.log('req.body:',req.body);

  const text1 = "SELECT * FROM users WHERE username = $1";
  db.query(text1, [username])
    .then(data => {
      //res.locals.userInfo = data.rows;
      console.log('data from db', data.rows)
      if (data.rows.length === 0) {
        res.locals.status = "Cannot find username. Please sign up first."
        return next()
      }
      if (data.rows[0].password === password) {
        res.locals.status = "verified";
        res.locals.id = data.rows[0].id;
        // res.locals.username = data.rows[0].username;
        //res.locals.userInfo = data.rows[0]
        return next();
      }
      else {
        res.locals.status = "incorrect password"
        return next()
       }
     })
    .catch(err => {
      return next({
        log: `loginController.verification: ERROR: ${err}`,
        message: { err: 'Error occurred in loginController.verification. Check server logs for more details.' }
      })
     })
}

// loginController.deleteHistory = (req, res, next) => {
  
//   const { id } = req.body;

//  // console.log('req.body:',req.body);

//   const text1 = "DELETE FROM weightHistory WHERE id = ($1);";
//   db.query(text1, [id])
//     .then(data => {
//       console.log("data saved into DB")
//       res.locals.history = data.rows;
//       return next()
//      })
//     .catch(err => {
//       return next({
//         log: `userController.saveHistory: ERROR: ${err}`,
//         message: { err: 'Error occurred in userController.saveHistory. Check server logs for more details.' }
//       })
//      })
// }



// loginController.getAllHistory = (req, res, next) => {
//   //find user by id
//     //grab the array of history
//       //send history to the frontend
  
//   // const { weight } = req.body;

//   //console.log('req.body:',req.body);

//   const text2 = "SELECT * FROM weightHistory WHERE weight IS NOT NULL";
//   db.query(text2)
//     .then(data => {
//       //console.log("history DB", data)
//       res.locals.history = data.rows;
//       return next()
//      })
//     .catch(err => {
//       return next({
//         log: `userController.getAllhistory: ERROR: ${err}`,
//         message: { err: 'Error occurred in userController.getAllhistory. Check server logs for more details.' }
//       })
//      })
// };

module.exports = loginController;