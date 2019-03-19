const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function bmi (weight, height){
 return (parseFloat(weight)/(parseFloat(height)*parseFloat(height)))
}

readline.question(`Enter weight and height in meters:`, partition)

function partition (stroka){
	console.log(stroka);
	let [w,h] = stroka.split(" ");
	console.log(bmi(w,h));
	readline.close();
	let alert = console.log;
	let bmi_i = bmi(w,h);
	if (bmi_i < 18.5) {alert("Your bmi is showing you are underweight!")}
	else if (bmi_i < 24.9 && bmi_i >= 18.5) {alert("You have healthy weight. Congratilations!")}
	else if (bmi_i < 29.9 && bmi_i >= 25) {alert("You are slightly overweight.")}
	else if (bmi_i >= 30) {alert("You are obese. Alarm!")}
}


