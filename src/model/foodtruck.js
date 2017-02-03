import mongoose from 'mongoose';
import Review from './review';
let Schema = mongoose.Schema;

let FoodtruckSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  foodtype: {
    type: String,
    required: true
  },
  avgcost: Number,
  geometry: {
    type: { type: String, default: 'Point' },
    coordinates: [Number]
  },
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
});

module.exports = mongoose.model('FoodTruck', FoodtruckSchema);
