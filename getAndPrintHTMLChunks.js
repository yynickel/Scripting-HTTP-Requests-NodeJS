let https = require("https");

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    if (response.statusCode === 200) {
      var result = "";
      response.on("data", function(chunk) {
        result = result + chunk + "\n----------------\n";
      });
      response.on("end", function() {
        console.log(result);
      })
    } else {
      console.log("error");
    }
  });

}

getAndPrintHTMLChunks();