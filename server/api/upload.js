const router = require('express').Router();
const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(),
  // file size limitation in bytes
  limits: { fileSize: 52428800 },
});

router.post('/', upload.single('photo'), (req, res, next) => {
  console.log(process.env.amazons3, 'test');

  res.send(process.env.amazons3);
});

module.exports = router;
