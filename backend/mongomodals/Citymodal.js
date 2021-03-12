const mongoose = require("mongoose");

const Cityschema = new mongoose.Schema({
  cityname: {
    type: String,
  },
  statename: {
    type: String,
  },
});
const city = mongoose.model("City", Cityschema);
module.exports = city;
