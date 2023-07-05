const db = require('../models/userModel')


const goalController = {};


goalController.newGoal = (req, res, next) => {
  console.log('inside goalController.newGoal');
  console.log(req.body)
  
  const { newGoal, userId } = req.body;

  const text1 = "UPDATE users SET goal = $1 WHERE id = $2 RETURNING *"
    db.query(text1, [newGoal, userId])
    .then(data => {
      //res.locals.userInfo = data.rows;
      console.log('updated data', data)
        // res.locals.status = "verified";
        // res.locals.id = data.rows[0].id;
        return next();
    })
    .catch(err => {
      return next({
        log: `goalController.newGoal: ERROR: ${err}`,
        message: { err: 'Error occurred in goalController.newGoal. Check server logs for more details.' }
      })
     })
  
};
module.exports = goalController;