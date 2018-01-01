const router = require('express').Router();
const Pin = require('../models/pin');
const User = require('../models/user');

router.get('/', (req, res, next) => {
  res.send('test board route');
});

router.post('/', (req, res, next) => {
  User.update({ _id: req.user._id }, {
    $push: {
      boards: {
        title: req.body.title,
        description: req.body.description,
      },
    },
  })
    .then(createdBoard => res.json(createdBoard));
});


module.exports = router;
