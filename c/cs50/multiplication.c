#include <stdio.h>
#include <cs50.h>

int main () {

	int n;
	do
	{
		n=get_int("Size: ");
	}
	while (n < 1);
	for (int i=0;  i < n; i++)
	{
		for (int j=0; j < n; j++)
		{
		int dob;
		dob = i*j;
		//if (dob < 10){printf(" ");}
		
		printf("%i * %i = %i \n", i, j, dob);
		}
		printf("\n");
	}

}
