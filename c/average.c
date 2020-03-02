#include <stdio.h>

int  main() {
	int i, n, sum = 0, numbers;
	float Average;
	
	printf("\nPlease enter how many numbers you want?\n");
	scanf("%d", &n);
	
	printf("\nEnter elements\n");
	for (i=0; i<n; ++i)
	{
		scanf("%d", &numbers);
		sum = sum + numbers;
	}
	
	Average =  sum/n;
	
	printf("Sum is %i\n", sum);	
	printf("Average is\n %0.5f\n", Average);
	return 0;

}
