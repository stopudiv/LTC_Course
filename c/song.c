#include <stdio.h>

int printsong(int count)
{
	if (count >0)
	{
	printf("%d bottle of beer on the wall, %d bottle of beer.\n", count, count);
	printf("Take one down, pass it around, %d bottle of beer on the wall...\n", count-1);
	printsong(count-1);
}
	else
{
	printf("no more bottles of beer on the wall, no more bottles of beer.\n");
	printf("We've taken them down and passed them around; now  we're drunl and passed out!\n");
	};
	return 0;
};
int main()
{
	printsong(99);
};
