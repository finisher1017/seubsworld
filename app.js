// app requirements
const express = require('express');
const app = express();
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const methodOverride = require("method-override");
const port = (process.env.PORT || 3000);

// route requirements
const indexRoutes = require('./routes/index.js');


mongoose.connect("mongodb://localhost/seubsworld");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
app.use(indexRoutes);




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




