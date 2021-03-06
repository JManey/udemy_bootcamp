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
// this is how to get rec.body working in express
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ==================
// Routes
// ==================
// home route
app.get("/", function (req, res) {
  res.render("home");
});

// secret page protected route
app.get("/secret", isLoggedIn, function (req, res) {
  res.render("secret");
});

// sign up form route
app.get("/register", function (req, res) {
  res.render("register");
});

//=====protected routes=======

// handle user sign up
app.post("/register", function (req, res) {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        return res.render("register");
      }
      passport.authenticate("local")(req, res, function () {
        res.redirect("/secret");
      });
    }
  );
});

//login routes

//login form
app.get("/login", function (req, res) {
  res.render("login");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login",
  }),
  function (req, res) {}
);

// logout
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

//  =======================

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

// ========================
app.listen(process.env.PORT, () => {
  console.log(`App listening on port: ${process.env.PORT}`);
});
