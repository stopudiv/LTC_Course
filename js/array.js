let cars = ["Saab", "Volvo", "BMW"];
let houses =  new Array("One", "Two", "Three");
console.log(cars[0]);
console.log(houses[houses.length -1]);
let arlen = cars.length;
console.log(arlen);
let numbers = [4, 6, 7, 8, 9];
console.log(numbers);
cars[cars.length] = "Koranda";
console.log(cars[cars.length-1]);
cars.unshift("Honda");
console.log(cars);
cars.splice(2,1);
console.log(cars);
let newar = cars.concat(houses);
console.log(newar);
let newar2 = numbers.map(Math.sqrt);
console.log(newar2);
console.log(newar2.length);
