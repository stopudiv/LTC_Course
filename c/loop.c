#include <stdio.h>
int main () {
	int a [] = {1,1,2,3,5,8,13,21};
	int n = sizeof(a) / sizeof(a[0]);
	printf("%d", n);
	int step, sum = 0;
	for (step = 0; step < n; ++step){
	sum += a[step];
	}
	printf("\n%d\n", sum);
	return 0;
	
}
