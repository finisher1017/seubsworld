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
const jbRoutes = require('./routes/projects/john-brown/index.js');
const cineRoutes = require('./routes/projects/cine-1/cine-1.js');
const enforcerRoutes = require('./routes/projects/enforcer/enforcer.js');
const omegaRoutes = require('./routes/projects/omega-man/omega-man.js');
const enforcerBizRoutes = require('./routes/projects/enforcer-biz/enforcer-biz.js');
const lightingTestRoutes = require('./routes/projects/lighting-test/lighting-test.js');
const stillPhotoRoutes = require('./routes/projects/still-photography/still-photography.js');



mongoose.connect("mongodb://localhost/seubsworld");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
app.use(indexRoutes);
app.use(jbRoutes);
app.use(cineRoutes);
app.use(enforcerRoutes);
app.use(omegaRoutes);
app.use(enforcerBizRoutes);
app.use(lightingTestRoutes);
app.use(stillPhotoRoutes);




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




