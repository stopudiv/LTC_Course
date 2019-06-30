let lineReader = require('readline').createInterface({
	input: require('fs').createReadStream('names.txt')
});

lineReader.on('line', function (line){
	console.log('Line from file: ', line);
});

let i;
let count = 0;

require('fs').createReadStream(process.argv[2])
	.on('data', function(chunk) {
		for (i=0; i < chunk.length; ++i)
			if (chunk[i] == 10) count++;
	})
	.on('end', function() {
	 console.log(count);
	});


const count1 = (str) => {
  const re = /.../g
  return ((str || '').match(re) || []).length
}

const count2 = (str) => {
 const re = /^[a-z]+$/g
 return ((str || '').match(re) || []).length
}

const str1 = 'abc, def, ghi, fgtht'


console.log(`'${str1}' has ${count1(str1)} occurrences of pattern '/.../g'`)

console.log(`'${str1}' has ${count1(str1)} occurrences of pattern '/...../g'`)
