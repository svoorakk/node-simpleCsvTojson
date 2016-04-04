"option strict" 

exports.getJson = function (txt, callback) {
	var err = null;
	var lines = txt.toString().split("\r\n");
	var fields = lines[0].split(',');
	lines.splice(0,1);
	var objs = [];
	lines.forEach(function(line, idx, array) {
		if (line.length == 0)
			return;
		var vals = line.split(',');
		var obj = {};
		vals.forEach(function(val, i, all) {
			obj[fields[i]] = val;
		});
		objs.push(obj);
	});
	callback(err, objs);
};