#include <stdio.h>

void nothing(int* x)
{
	int y;
	y = (*x) * 2;
	printf("\n%d", y);
	*x = y;
} 

int main() 
{
	int x = 42;
	nothing(&x);
	printf("%d\n", x);
	return 0;
}
