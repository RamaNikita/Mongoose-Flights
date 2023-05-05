const { Schema, model } = require("mongoose");
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: n / a,
    required: true,
  },
});
const Flight = model("Flight", flightSchema);
module.exports = Flight;
