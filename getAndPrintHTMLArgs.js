let https = require("https");

function getAndPrintHTML(options) {
  https.get(options, function(response) {
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions);