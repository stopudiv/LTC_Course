#include <stdio.h>

float bmi (float weight, float height){
	return (weight/(height*height));
}

int main() {
	float weight, height, bmi_i;
	printf("Enter you weight and your height in meters: \n");
	scanf("%f %f", &weight, &height);
	bmi_i = bmi(weight, height);
	printf("You BMI is equal: %f\n", bmi_i);
        if (bmi_i < 18.5) {printf("Your bmi is showing you are underweight!\n");}
        else if (bmi_i < 24.9 && bmi_i >= 18.5) {printf("You have healthy weight. Congratilations!\n");}
        else if (bmi_i < 29.9 && bmi_i >= 25) {printf("You are slightly overweight.\n");}
        else if (bmi_i >= 30) {printf("You are obese. Alarm!\n");}
	return 0;

}
