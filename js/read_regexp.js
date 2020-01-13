let lineReader = require('readline').createInterface({
	input: require('fs').createReadStream('names.txt')
});

let count0 = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let re1 = /^.....$/g;
let re2 = /^[a-z]+$/g;
let re3 = /^[A-Z][a-z]+[0-9!?.,;\-]+$/g;


lineReader.on('line', function (line){
	count0++;
	if (((line || '').match(re1) || []).length != 0){count1++;}
	if (((line || '').match(re2) || []).length != 0){count2++;}	
	if (((line || '').match(re3) || []).length != 0){count3++;}
	console.log('Line from file: ', line, count0, count1, count2, count3);
	//if (((line || '').match(re1) || []).length != 0){count1++;}
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


const count4 = (str) => {
  const re = /^.....$/g
  return ((str || '').match(re) || []).length
}

const count5 = (str) => {
 const re = /^[a-z]+$/g
 return ((str || '').match(re) || []).length
}

const count6 = (str) => {
 const re = /^[A-Z][a-z]+\d*[.!?\\-]*$/g
 return ((str  || '').match(re) || []).length
}

const str1 = 'abc, def, ghi, fgtht'


//console.log(`'${str1}' has ${count1(str1)} occurrences of pattern '/.../g'`)

//console.log(`'${str1}' has ${count2(str1)} occurrences of pattern '/...../g'`)

//console.log(`'$(str1)' has ${count3(str1)} occurrences of pattern '/.../g'`)
