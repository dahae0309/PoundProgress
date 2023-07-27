const db = require('../models/userModel')

const infoController = {};

infoController.updateInfo = (req, res, next) => {
  // console.log('inside infoController');
  // console.log(req.body)
  
  const { id, gender, height, weight, goal } = req.body;

  const text = "UPDATE users SET gender = $2, height = $3, weight = $4 WHERE id = $1 RETURNING *"
    db.query(text, [id, gender, height, weight])
    .then(data => {
      console.log('updated data', data.rows)
      return next();
    })
    .catch(err => {
      return next({
        log: `infoController.updateInfo: ERROR: ${err}`,
        message: { err: 'Error occurred in infoController.updateInfo. Check server logs for more details.' }
      })
     })
};

infoController.updateWeight = (req, res, next) => {
  // console.log('inside infoController updateWeight');
  // console.log(req.body)
  
  const { id, weight } = req.body;

  const text = "UPDATE weighthistory SET weight = $2 WHERE id = $1 RETURNING *"
    db.query(text, [id, weight])
    .then(data => {
      console.log('updated data', data.rows)
      return next();
    })
    .catch(err => {
      return next({
        log: `infoController.updateInfo: ERROR: ${err}`,
        message: { err: 'Error occurred in infoController.updateInfo. Check server logs for more details.' }
      })
     })
};

module.exports = infoController;