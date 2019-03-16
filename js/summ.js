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
	let x = stroka.split(" ")[0];
	let y = stroka.split(" ")[1];
	console.log(sum_js(x,y));
	readline.close();
}




