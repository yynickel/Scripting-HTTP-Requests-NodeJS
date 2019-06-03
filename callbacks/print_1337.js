let getHTML = require("../http-functions");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function printUpperCase(html) {
  let leetspeak = { 'a': '4', 'e': '3', 'l': '1', 'o': '0', 's': '5', 't': '7', 'ck': 'x', 'er': '0r', 'you': 'j00' };
  let result = [];
  let i = 0;
  while (i < html.length) {
    switch (html[i]) {
      case 'e':
        if (html[i + 1] === 'r') {
          result.push("0r");
          i += 2;
        } else {
          result.push("3");
          i++;
        }
        break;
      case 'c':
        if (html[i + 1] === 'k') {
          result.push("x");
          i += 2;
        } else {
          result.push('c');
          i++;
        }
        break;
      case 'y':
        if (html[i + 1] === 'o' && html[i + 2] === 'u') {
          result.push("j00");
          i += 3;
        } else {
          result.push("y");
          i++;
          break;
        }
      default:
        if (leetspeak[html[i]]) {
          result.push(leetspeak[html[i]]);
        } else {
          result.push(html[i]);
        }
        i++;
        break;
    }
  }
  console.log(result.join(""));
}

getHTML(requestOptions, printUpperCase);