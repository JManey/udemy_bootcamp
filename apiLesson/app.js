const axios = require("axios");
// Make a request for a user with a given ID
axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then(function (response) {
    // eval(require("locus"));
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
