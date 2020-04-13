#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int n;
    int spaces;
    int hash;
    do{
        n = get_int("Height: ");
    }
    while (n < 0 || n > 8);
    for (int i = 0; i< n; i++)
    {
        for (spaces = n - i; spaces >= 2; spaces --)
        {
            printf(" ");
        }

	for (spaces = n - i; spaces > 1; spaces --)
        {
            printf(".");
        }

	for (spaces = n - i; spaces >= 0; spaces --)
        {
            printf("$");
        }



        for (hash =0; hash <= i; hash ++)
        {
            printf("#");
        }
        printf("\n");
    }
    return (0);
}

