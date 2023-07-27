const db = require('../models/userModel')

const goalController = {};

goalController.newGoal = (req, res, next) => {
  console.log('inside goalController.newGoal');
  console.log(req.body)
  
  const { newGoal, userId } = req.body;

  const text1 = "UPDATE users SET goal = $1 WHERE id = $2 RETURNING *"
  db.query(text1, [newGoal, userId])
  .then(data => {
    console.log('updated data', data)
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