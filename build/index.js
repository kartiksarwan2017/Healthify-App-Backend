"use strict";

require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"]
});
require('dotenv').config();
var express = require('express');
var helmet = require('helmet');
var cors = require('cors');
var db = require('./config/mongoose');
var port = process.env.PORT || 8000;
var app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use('/', require('./routes'));
app.listen(port, function (err) {
  if (err) {
    console.log("Error while running server: ".concat(err));
    return;
  }
  console.log("Server is running on port: ".concat(port));
});