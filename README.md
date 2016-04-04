# node-csv2json

Module to convert a CSV file into a JSON Array. Following is assumed :
- Line break character sequence is "\r\n"
- Field separator is comma
- First line has field names
All values are represented as strings.

Installing:
<pre>
npm install csvTojson
</pre>
Usage:
<pre>
var csv2Json = require('csvToJson');
csv2Json.getJson(txt, function(err,json) {
  console.log(json);
});
</pre>
