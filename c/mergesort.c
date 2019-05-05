#include <stdio.h>

void mergesort(int array[], int l, int r);
void merge(int array[], int l1, int l2, int r1, int r2);

void mergesort(int array[], int l, int r){ 
	int midpoint;
        //size_t n = sizeof(*array)/sizeof(array[0]);
	//printf("\nN is equal %ld\n", n);
	//if (n==1) {return;}
        //midpoint = n/2;
	//l=0;
	//r=n-1;
	if (l<r){
	midpoint = (l+r)/2;
        mergesort(array, l, midpoint); 
        mergesort(array, midpoint+1, r);
        merge(array, l, midpoint, midpoint+1, r); 
	}
}

void merge (int array[], int l1, int r1, int l2, int r2){
	int temp[10]={99, 99};
	int l, r, k;
	int i;
	l = l1;
	r = l2;
	printf("\n%d, %d, %d, %d\n", l1, r1, l2, r2);
	k=0;
	while (l<=r1 && r<=r2) {
		if (array[l] <  array[r]){
			temp[k++] = array[l++];
				printf("K and l are: %d, %d\n", k, l);}
		else {
			temp[k++]=array[r++];
				printf("K and r are: %d,  %d\n", k, r);}
	}
	while (l<=r1)
		temp[k++]=array[l++];
	while (r<=r2)
		temp[k++]=array[r++];
	for  (l=l1, r=0; l<=r2; l++, r++)
		array[l]=temp[r];
	for(i=0; i<2; i++)
		printf("%d ", temp[i]);
	}           

int main(){
 	int array[10] = {3, 5, 1, 7, 2, 7, 6, 0, 8, 4};
	//int array[2] = {10, 20};
	int  i;
	size_t n = sizeof(array)/sizeof(int);
	printf("\n%d\n", (int) n);
	mergesort(array, 0, n-1);
	printf("\nSorted array is :");
	for(i=0; i<n; i++)
		printf("%d ",array[i]);
	printf("\n");	
	return 0;
}

