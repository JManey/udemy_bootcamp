const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

//temp database:P
let friends = ["Justin", "Tony", "Samantha", "Jerry"];

// home page
app.get("/", function (req, res) {
  res.render("home");
});

// friends page
app.get("/friends", function (req, res) {
  res.render("friends", { friends: friends });
});

// add friend

app.post("/addFriend", function (req, res) {
  let newFriend = req.body.name;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
