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

router.get('/pin/:boardId', (req, res, next) => {
  const { boardId } = req.params;
  User.findOne({ 'boards._id': boardId }, { 'boards.$': 1 })
    .populate({
      path: 'boards.pins',
    })
  // Pin.find() for later
  //   .populate({ path: 'author', select: 'username'})
    .exec((err, board) => {
      if (err) return;
      res.json(board.boards[0]);
    })
    // .then(foundUser => res.json(foundUser))
    .catch(next);
});
router.get('/:user', (req, res, next) => {
  const { user } = req.params;
  User.findOne({ username: user })
    .then(foundUser => res.json(foundUser.boards))
    .catch(next);
});


module.exports = router;
