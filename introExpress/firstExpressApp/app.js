const express = require("express");
const port = 3000;

const app = express();

// home route
app.get("/", function (req, res) {
  res.send("Hi, there, welcome to my assignment!");
});

app.get("/speak/pig", function (req, res) {
  res.send("The pig says 'Oink'!");
});

// speak route
app.get("/speak/:animal", function (req, res) {
  let animal = req.params.animal;
  let sound;
  if (animal === "pig") {
    sound = "Oink Oink!";
  } else if (animal === "cow") {
    sound = "Moo!";
  } else if (animal === "dog") {
    sound = "Woof Woof!";
  } else sound = "Hmm, I'm not sure about that:(";
  res.send(sound);
});

// repeat route
app.get("/repeat/:message/:times", function (req, res) {
  let message = req.params.message;
  let times = Number(req.params.times);
  let result = "";
  console.log(message, times);
  for (let i = 0; i < times; i++) {
    result += message + " ";
  }
  res.send(result);
});

// catch all *
app.get("*", function (req, res) {
  console.log("This is an invalid route");
  res.send("Sorry, page not found...What are you looking for?");
});

//tell express to listen for requests(start server)

app.listen(port, () => {
  console.log("app listening on port: ", port);
});
