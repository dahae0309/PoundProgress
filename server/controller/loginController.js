const db = require('../models/userModel')
const bcrypt = require('bcryptjs');

const loginController = {};

loginController.verification = (req, res, next) => {
  //console.log('inside loginController.verification')
  const  {username, password}  = req.body;

  //console.log('req.body:',req.body);

  const text1 = "SELECT * FROM users WHERE username = $1";
  db.query(text1, [username])
  .then(data => {
    //res.locals.userInfo = data.rows;
    console.log('data from db', data.rows)
    if (data.rows.length === 0) {
      res.locals.status = "Cannot find username. Please sign up first."
      return next()
    }
    const dbPassword = data.rows[0].password;
    if (bcrypt.compareSync(password, dbPassword)) {
      res.locals.status = "verified";
      res.locals.id = data.rows[0].id;
      return next();
    } else {
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

module.exports = loginController;