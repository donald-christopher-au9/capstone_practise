const express = require("express");
const CityRoute = express.Router();
const city = require("../mongomodals/Citymodal");

CityRoute.post("/api", (req, res) => {
  const citydata = new city(req.body);
  citydata.save().then((r) => res.send(r));
});

CityRoute.get("/all", (req, res) => {
  city.find().then((result) => res.send(result));
});

CityRoute.get("/:id", (req, res) => {
  city.findById(req.params.id).then((result) => res.send(result));
});
module.exports = CityRoute;
