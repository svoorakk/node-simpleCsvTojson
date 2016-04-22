# simpleCsvTojson

Module to convert a CSV file into a JSON Array. Following is assumed :
- Line break character sequence is "\r\n"
- Field separator is comma
- First line has field names
All values are represented as strings.

Installing:
<pre>
npm install simpleCsvTojson
</pre>
Usage:
<pre>
var simpleCsvToJson = require('simpleCsvToJson');
simpleCsvToJson.getJson(txt, function(err,json) {
  console.log(json);
});
</pre>
