#include <stdio.h>

void poetry () {
	printf("у попа была собака,\n он её любил,\n она съела кусок мяса, он её убил\n");
	printf("в землю закопал,\n и надпись написал, что ");
	poetry();
};

int  main () {
	poetry();
	return 0;
};
