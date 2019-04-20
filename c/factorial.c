#include <stdio.h>
long int factorial (int n) {
	if (n > 1) {return n*factorial(n-1);}
	else {return 1;}
}

int main() {
	int  n;
	printf("Enter natural number: \n");
	scanf("%d", &n);
	factorial(n);
	printf("Factorial of %d = %ld\n", n, factorial(n));
	return 0;
}
