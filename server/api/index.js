const router = require('express').Router();

// router.get('/', (req, res, next) => {
//   res.send('test api route');
// });

router.use('/pin', require('./pin'));


module.exports = router;
