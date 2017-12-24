const mongoose = require('mongoose');

const { Schema } = mongoose;

const pinSchema = new Schema({
  image: { type: String, required: true },
  description: { type: String, required: false },
  author: { type: String, required: true },
  board: { type: String, required: true },
  tags: { type: String, required: false },
});

// PageSchema.statics.findByTag = function (tag) {
//   return this.find({ tags: { $elemMatch: { $eq: tag } } ).exec()
// })


const Pin = mongoose.model('pin', pinSchema);

module.exports = Pin;
