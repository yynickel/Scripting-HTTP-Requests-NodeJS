let https = require("https");

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    if (response.statusCode === 200) {
      response.on("data", function(chunk) {
        console.log(chunk + "\n");
      });
    } else {
      console.log("error");
    }
  });

}

getAndPrintHTMLChunks();