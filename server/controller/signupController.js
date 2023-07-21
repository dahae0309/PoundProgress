const db = require('../models/userModel')
const bcrypt = require('bcryptjs');
const saltRounds = 5;

const signupController = {};

//saveHistory

signupController.signup = async (req, res, next) => {
  console.log('inside signupController.signup');
  console.log(req.body)
  
  const { username, password, gender, height, weight, goal } = req.body;
  const hashedPW = await bcrypt.hash(password, saltRounds);

  const text = "SELECT username FROM users WHERE username = $1" 

  db.query(text, [username])
    .then(data => {
      //res.locals.userInfo = data.rows;
      console.log('what do we get here?', data.rows)

      if (data.rows.length > 0) {
        res.locals.status = "Existing Username"
        return next()
      } else { 
        const text1 = "INSERT INTO users (username, password, gender, height, weight, goal) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *"
        db.query(text1, [username, hashedPW, gender, height, weight, goal])
          .then(data => {
          //res.locals.userInfo = data.rows;
            console.log('data from db', data.rows)
            res.locals.status = "verified";
            res.locals.id = data.rows[0].id;
            return next();
          })
      }
        
    })
    .catch(err => {
      return next({
        log: `signupController.signup: ERROR: ${err}`,
        message: { err: 'Error occurred in signupController.signup. Check server logs for more details.' }
      })
     })

  // const text1 = "INSERT INTO users (username, password, gender, height, weight, goal) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *"
  //   db.query(text1, [username, hashedPW, gender, height, weight, goal])
  //   .then(data => {
  //     //res.locals.userInfo = data.rows;
  //     console.log('data from db', data.rows)
  //       res.locals.status = "verified";
  //       res.locals.id = data.rows[0].id;
  //       return next();
  //   })
  //   .catch(err => {
  //     return next({
  //       log: `signupController.signup: ERROR: ${err}`,
  //       message: { err: 'Error occurred in signupController.signup. Check server logs for more details.' }
  //     })
  //    })
  
}

signupController.firstHistory = (req, res, next) => {
  console.log('inside ssignupController.firstHistory');
  console.log(req.body)
  
  const { weight } = req.body;
  const { id } = res.locals

  console.log("here!!", id)
  if (id !== undefined) {
    const text1 = "INSERT INTO weighthistory (weight, user_id) VALUES ($1, $2) RETURNING *";
    db.query(text1, [weight, id])
      .then(data => {
        //res.locals.userInfo = data.rows;
        console.log('data from db', data.rows);
        return next();
      })
      .catch(err => {
        return next({
          log: `signupController.firstHistory: ERROR: ${err}`,
          message: { err: 'Error occurred in signupController.firstHistory. Check server logs for more details.' }
        });
      });
  } else {
    return next()
   }
}


//   console.log('req.body:',req.body);

//   const text1 = "SELECT pw, id FROM users WHERE username = $1";
//   db.query(text1, [username])
//     .then(data => {
//       //res.locals.userInfo = data.rows;
//       console.log('data from db', data.rows)
//       if (data.rows[0].pw === password) {
//         res.locals.status = "verified";
//         res.locals.id = data.rows[0].id
//         return next();
//       }
//       else {
//         res.locals.status = "incorrect password"
//         return next()
//        }
//      })
//     .catch(err => {
//       return next({
//         log: `loginController.verification: ERROR: ${err}`,
//         message: { err: 'Error occurred in loginController.verification. Check server logs for more details.' }
//       })
//      })
// }

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

module.exports = signupController;