const mongoose = require('mongoose');
const routeSchema = new mongoose.Schema({
  from: String,
  to: String,
  price: Number,
  datetime: Date,
  seats: { type: Number, default: 40 },
  layout: { type: Array, default: [] }
});
module.exports = mongoose.model('Route', routeSchema);
