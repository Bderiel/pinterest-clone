const router = require('express').Router();
const multer = require('multer');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  subregion: 'us-east-1',
});


const upload = multer({
  storage: multer.memoryStorage(),
  // file size limitation in bytes
  limits: { fileSize: 52428800 },
});

router.post('/', upload.single('photo'), (req, res) => {
  const params = {
    Bucket: 'brian-pinterest-clone',
    Key: req.file.originalname,
    Body: req.file.buffer,
    ACL: 'public-read', // permisions
  };
  s3.putObject(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.message);
    } else {
      res.json({
        status: 'success',
        url: `https://s3.amazonaws.com/brian-pinterest-clone/${req.file.originalname}`,
      });
    }
  });
});

module.exports = router;
