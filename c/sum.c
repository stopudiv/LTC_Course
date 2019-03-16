#include<stdio.h>

int addition(int a, int b){
	return a+b;
}

int main() {
   int x, y, result;
 
   printf("\nEnter the two numbers: ");
   scanf("%d %d", &x, &y);
 
   result = addition(x,y);
 
   printf("Addition of two number is: %d\n", result);
   return 0;
}


 


