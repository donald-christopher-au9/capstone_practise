const port = process.env.PORT || 1111;
const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");
const Doctorroute = require("./routes/DoctorRoute");
const CityRoute = require("./routes/CityRoute");

require("./Database/mongoose");
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use(cors());
app.use("/city", CityRoute);

app.use("/doctors", Doctorroute);

app.listen(port, () => console.log(`Server is on ${port}`));
