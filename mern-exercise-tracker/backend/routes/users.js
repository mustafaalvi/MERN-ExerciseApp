const router = require('express').Router();
let User = require('../models/user.model');

router.route('/viewusers').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const height = req.body.height;
  const weight = req.body.weight;

  const newUser = new User({username, height, weight});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;