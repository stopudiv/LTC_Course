#include <stdio.h>  
#include <stdlib.h> 
#include <string.h>
  
int main () {

	FILE *fp;
	char c [1024];
	fp = fopen("um.um", "w+");
	fread(c, strlen(c) +1, 1, fp);
	printf("%s\n", c);
	fclose(fp);

	printf("Address of 'c' %pn",&c);
	return(0);
}
