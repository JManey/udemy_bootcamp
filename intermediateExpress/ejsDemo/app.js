const express = require("express");
const port = 3001;

const app = express();

// tell express to serve public file where our css is located
app.use(express.static("public"));

// set ejs view engine
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/fallinlovewith/:thing", function (req, res) {
  let thing = req.params.thing;
  res.render("love", { thingVar: thing });
});

app.get("/posts", function (req, res) {
  let posts = [
    { title: "post 1", author: "justin" },
    { title: "totally awesome", author: "Suzy" },
    { title: "whats going on?", author: "Eric" },
  ];
  res.render("posts", { posts: posts });
});

// setup listener
app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
