#include <stdio.h>
#include <cs50.h>
#include <math.h>

int main(void) {
    float n;
    int cents;
    int quarters;
    int dimes;
    int nickels;
    int pennies;
    do {
    n = get_float("Write a number: ");
    cents = round(n*100);
    }
    while (n <= 0);
    quarters = (cents / 25);
    dimes = (cents % 25) / 10;
    nickels = ((cents % 25) % 10) / 5;
    pennies = ((cents % 25) % 10) % 5;
    printf ("%d\n", quarters + dimes + nickels + pennies);
    return (0);
}

