const db = require('../models/userModel')


const userController = {};



//saveHistory

userController.saveHistory = (req, res, next) => {
  
   console.log('req.body:',req.body);
  const { inputWeight } = body.req
  const text1 = "INSERT INTO weightHistory (weight) VALUES ($1);"
  db.query(text1, [inputWeight])
    .then(data => {
      console.log(data.rows)
      res.locals.history = data.rows
      return next()
     })
    .catch(err => {
      return next({
        log: `userController.saveHistory: ERROR: ${err}`,
        message: { err: 'Error occurred in userController.saveHistory. Check server logs for more details.' }
      })
     })
 }

/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/
userController.getAllhistory = (req, res, next) => {
  //find user by id
    //grab the array of history
      //send history to the frontend
  
};

/**
* createUser - create and save a new User into the database.
// */
// userController.createUser = (req, res, next) => {
//   const date = new Date()
//   const { username, password, gender, weight, height } = req.body;

//   //check if every info has entered
//     if (!username || !password || !gender || !weight || !height) {
//     return next({ err: 'Missing informations'})
//   }

//   //add new user into db (****need to add date)
//   const params = [username, password, gender, weight, height, date];
//   const text1 = 'INSERT INTO users (username, password, gender, weight, height, date ) VALUES ($1,$2,$3,$4,$5,$6)';
//   db.query(text1, params)
//     .then(data => {
//       res.locals.newUser = data;
//       return next();
//     })
//     .catch(err => {
//       return next({
//         log: `userController.createUser: ERROR: ${err}`,
//         message: {err: 'Error occurred in userController.createUser. Check server logs for more details.'}
//       });
//     });
  

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
// userController.verifyUser = (req, res, next) => {
//   const { username, password } = req.body;
//   if (!username || !password) {
//     return next('Missing username or password')
//   }
// db.query() //need to finish this part
//   .then(data => {
//     console.log('log-in data:', data);
//     if (!data) {
//       res.redirect('/signup');
//     }
//     if (data.password === password) {
//       return next();
//     } else {
//       res.redirect('/signup');
//     }
//   })
//     .catch((err) => {
//       return next({
//         log: `userController.verifyUser: ERROR: ${err}`,
//         message: {err: 'Error occurred in userController.verifyUser. Check server logs for more details.'}
//       })
//     })
// }
// module.exports = userController;