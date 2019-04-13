#include <stdio.h>


int main() {
	int x = 1;
	int* y = &x;
	x = 5;
	printf("%d", *y);
	return 0;
}

