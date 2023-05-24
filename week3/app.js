// Require file server
"use strict";
var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");

var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let ejs = require("ejs");
const router = express.Router();
var app = express();
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);

// Set up your routing
router.get("/", function (req, res) {
  res.render("index", { pagename: "Home" }); //Views/index.ejs
});

router.get("/about", function (req, res) {
  res.render("about", { pagename: "About" }); //views/about.ejs
});

router.post("/login", function (req, res) {
  console.log(req.body);
  res.redirect("/");
  var errors = [];

router.post("/reg", function(req, res){ 
    res.redirect("/")
    var errors = []; 
})

// VAlidate to ensure that each field is not empty 
  if (req.body.first === "") {
    errors.push("First Name is required");
  }

  if (req.body.last === "") {
    errors.push("Last Name is required");
  }

  if (req.body.address === "") {
    errors.push("Address is required");
  }

  if (req.body.city === "") {
    errors.push("City is required");
  }

  if (req.body.state === "") {
    errors.push("State is required");
  }

//   Validate that zip is a number 
  if (req.body.zip === "") {
    errors.push("Zip is required");
  } else if (isNaN(req.body.age)){
    errors.push("Zip Code must be a number!")
  }

  if (req.body.age === undefined) {
    errors.push("Age is required");
  }

  if (req.body.gender === undefined) {
    errors.push("Gender is required");
  }

  if (!req.body.consent) {
    errors.push("Consent is required");
  }

  if (req.body.bio === "") {
    errors.push("Bio is required");
  }

  res.render("index", { pagename: "Home", errors: errors }); //Views/index.ejs
});

app.use(express.static("public"));
app.use("/", router);
var server = app.listen("8080");
