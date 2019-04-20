let a = [1,1,2,3,5,8,13,21];
let step = 0;
let sum = 0;
let product = 1;
while (step < a.length) {sum += a[step]; step++;}
for (step=0; step < a.length; step +=2) {product*=a[step];}
console.log(sum);
console.log(product);
