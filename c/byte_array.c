#include <stdio.h>  
#include <stdlib.h> 
#include <string.h>

int fsize(FILE *fp){
    int prev=ftell(fp);
    fseek(fp, 0L, SEEK_END);
    int sz=ftell(fp);
    fseek(fp,prev,SEEK_SET); //go back to where we were
    return sz;
}
  
int main () {

	FILE *fp;
	fp = fopen("um.um", "rb");

	char *c= malloc(fsize(fp)); //[fsize(fp)];
	//fp = fopen("um.um", "rb");
	fread(c, fsize(fp), 1, fp);
	printf("%s\n", c);
	fclose(fp);

	int loop;
   	for(loop = 0; loop < 1024; loop++)
      	printf("%d ", c[loop]);

	printf("Address of 'c' %pn",&c);
	return(0);
}
