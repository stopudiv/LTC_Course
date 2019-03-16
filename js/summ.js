const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function sum_js (x, y)
{
        return (parseInt(x) + parseInt(y));
}

readline.question(`Enter two numbers:`, partition)

function partition (stroka){
	console.log(stroka);
	let [x,y] = stroka.split(" ");
	console.log(sum_js(x,y));
	readline.close();
}




