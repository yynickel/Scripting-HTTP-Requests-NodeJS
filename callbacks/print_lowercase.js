let getHTML = require("../http-functions");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printUpperCase(html) {

  console.log(html.toLowerCase());
}

getHTML(requestOptions, printUpperCase);