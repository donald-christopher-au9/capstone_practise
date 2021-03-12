const mongoose = require("mongoose");
// const mongourl = "mongodb://localhost:27017/Practo";
const mongourl =
  "mongodb+srv://donald73:donald73@cluster0.gqs8u.mongodb.net/Practo?retryWrites=true&w=majority";
mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
});

module.exports = mongoose;
