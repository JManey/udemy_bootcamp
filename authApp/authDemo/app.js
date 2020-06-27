const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const User = require("./models/user");

//setup dotenv and database
require("dotenv").config();
require("./config/database");

const app = express();

app.set("view engine", "ejs");

app.use(
  require("express-session")({
    secret: "Ginger Rocks and so to does Tracy",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port: ${process.env.PORT}`);
});

app.get("/secret", function (req, res) {
  res.render("secret");
});
