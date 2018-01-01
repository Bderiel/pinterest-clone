const router = require('express').Router();

// router.get('/', (req, res, next) => {
//   res.send('test api route');
// });

router.use('/pin', require('./pin'));
router.use('/board', require('./board'));


module.exports = router;
