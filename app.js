"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.listen(port, function () {
    console.log("app is running on ".concat(port, " "));
});
