let https = require("https");

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
    if (response.statusCode === 200) {
      var result = "";
      response.on("data", function(chunk) {
        result += chunk;
      });
      response.on("end", function() {
        console.log(result);
      })
    } else {
      console.log("error");
    }
  });

}

getAndPrintHTML();