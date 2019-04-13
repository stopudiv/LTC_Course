#include <stdio.h>
#include <stdlib.h>

int reverse_sorter(const void *first_arg, const void *second_arg) {
    int* first = (int*) first_arg;
    int* second = (int*) second_arg;
    if (*first < *second) {return 1;}
    else if (*first > *second) {return -1;}
    else if (*first == *second) {return 0;}
    return 0;
}


int  main()
{
	int array[10] = {3, 5, 1, 7, 2, 7, 6, 0, 8, 4};
	size_t n = sizeof(array)/sizeof(int);
	//printf("\n%d\n", (int) n);
	qsort(array, n, sizeof(int), &reverse_sorter);
	int loop;
        for(loop = 0; loop < 10; loop++)
        printf("\n%d\n", array[loop]);
	return 0;	
}
