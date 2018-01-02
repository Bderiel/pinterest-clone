const router = require('express').Router();
const Pin = require('../models/pin');
const User = require('../models/user');

router.get('/', (req, res, next) => {
  res.send('test board route');
});

router.post('/', (req, res, next) => {
  User.update({ _id: req.user._id }, {
    $addToSet: { // creates board if unique name
      boards: {
        title: req.body.title,
        description: req.body.description,
      },
    },
  })
    .then(createdBoard => res.json(createdBoard))
    .catch(next);
});

router.get('/:user', (req, res, next) => {
  const { user } = req.params;
  User.findOne({ username: user })
    .then(foundUser => res.json(foundUser.boards))
    .catch(next);
});


module.exports = router;
