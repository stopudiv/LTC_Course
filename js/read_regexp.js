let lineReader = require('readline').createInterface({
	input: require('fs').createReadStream('names.txt')
});

lineReader.on('line', function (line){
	console.log('Line from file: ', line);
});
