const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const { response } = require("express");
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("search");
});

app.get("/results", function (req, res) {
  // Make a request for a user with a given ID
  let query = req.query.search;
  console.log(query);
  axios
    .get(`http://www.omdbapi.com/?s=%22${query}%22&apikey=thewdb`)
    .then(function (response) {
      data = response.data.Search;
      //   console.log(data);
      res.render("results", { data: data });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
