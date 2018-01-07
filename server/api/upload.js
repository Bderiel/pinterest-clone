const router = require('express').Router();
const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(),
  // file size limitation in bytes
  limits: { fileSize: 52428800 },
});

router.post('/', upload.single('photo'), (req, res, next) => {
  console.log(req.file, 'test');
  res.send('hit');
});

module.exports = router;
