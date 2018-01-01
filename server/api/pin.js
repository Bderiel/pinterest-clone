const router = require('express').Router();
const Pin = require('../models/pin');
const User = require('../models/user');


router.get('/:userId', (req, res, next) => { // find pin by user;
  const user = req.params.userId;
  Pin.find({ author: user })
    .then(pinsForUser => res.json(pinsForUser))
    .catch(next);
});

router.get('/', (req, res, next) => { // finds all pins for homepage
  Pin.find()
    .then(pinsForUser => res.json(pinsForUser))
    .catch(next);
});

router.post('/', (req, res, next) => { // creates a pin for logged in user
  const board = req.body.board || 'test board';
  const newPin = new Pin({
    image: req.body.image,
    description: req.body.description,
    author: req.user._id,
    tags: req.body.tags,
  });

  newPin.save()
    .then((savedPin) => {
      res.json(savedPin);
      return savedPin;
    })
    .then(createdPin => User.update({ _id: createdPin.author, 'boards.title': board }, { $push: { 'boards.$.pins': createdPin._id } }))
    .then((test)=>console.log(test))
    .catch(next);
});


router.put('/:pinId', (req, res, next) => { // Saves a pin for logged in user
  const pin = req.param.pinId;
  // find pin then update to user group
});

router.delete('/:pinId', (req, res, next) => {
  const pin = req.param.pinId;
  Pin.deleteOne({ _id: pin });
});

module.exports = router;
