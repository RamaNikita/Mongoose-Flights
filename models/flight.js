const { Schema, model } = require("mongoose");

const setDate = () => {
  let date = new Date();
  return date.setFullYear(date.getFullYear() + 1);
};
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
    default: setDate(),
    required: true,
  },
});
const Flight = model("Flight", flightSchema);
module.exports = Flight;
