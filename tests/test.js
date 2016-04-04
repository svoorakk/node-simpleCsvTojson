var fs = require('fs');
var csv2Json = require('../');
var path = require('path');

var sample = fs.readFileSync(path.join(__dirname,'sample.csv'));

csv2Json.getJson(sample, function(err, json) {
	if (err) {
		console.log('Test failed due to error');
	}
	else if (json.length != 36) {
		console.log('Test failed as Json array is of unexpected length');
	}
	else if (!json[0]) {
		console.log('Test failed as Json is not an array');
	}
	else if (!json[0].FromCurrency) {
		console.log('Test failed as Json object does not have expected fields');
	}
	else {
		console.log('Test passed');
	}
});