const db = require('../models/userModel')
const bcrypt = require('bcryptjs');
const saltRounds = 5;

const signupController = {};


signupController.signup = async (req, res, next) => {
  console.log('inside signupController.signup');
  console.log(req.body)
  
  const { username, password, gender, height, weight, goal } = req.body;
  const hashedPW = await bcrypt.hash(password, saltRounds);

  const text = "SELECT username FROM users WHERE username = $1" 

  db.query(text, [username])
  .then(data => {
    //console.log('what do we get here?', data.rows)

  if (data.rows.length > 0) {
    res.locals.status = "Existing Username"
    return next()
  } else { 
    const text1 = "INSERT INTO users (username, password, gender, height, weight, goal) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *"
    db.query(text1, [username, hashedPW, gender, height, weight, goal])
      .then(data => {
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
}

signupController.firstHistory = (req, res, next) => {
  //console.log('inside ssignupController.firstHistory');
  //console.log(req.body)
  
  const { weight } = req.body;
  const { id } = res.locals

  if (id !== undefined) {
    const text1 = "INSERT INTO weighthistory (weight, user_id) VALUES ($1, $2) RETURNING *";
    db.query(text1, [weight, id])
    .then(data => {
      //console.log('data from db', data.rows);
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

module.exports = signupController;