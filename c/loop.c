#include <stdio.h>
int main () {
	int a [] = {1,1,2,3,5,8,13,21};
	int n = sizeof(a) / sizeof(a[0]);
	int product =1;
	printf("%d", n);
	int step, sum = 0;
	int sum1 = 0;
	for (step = 0; step < n; ++step){
	sum1 += a[step];
	}
	for (step =0; step <  n; step +=2){
	product = product * a[step];
	}
	step = 0;
	while (step < n){
	sum += a[step];
	++step;
	}
	printf("\n%d\n", sum1);
	printf("%d\n", sum);
	printf("%d\n", product);
	return 0;
	
}
