let https = require("https");

function getHTML(options, callback) {
  https.get(options, function(response) {
    if (response.statusCode === 200) {
      var result = "";
      response.on("data", function(chunk) {
        result += chunk;
      });
      response.on("end", function() {
        callback(result);
      });
    } else {
      console.log("error");
    }
  });
}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);