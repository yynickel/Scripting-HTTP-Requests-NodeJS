let https = require("https");

module.exports = function getHTML(options, callback) {
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