#include <stdio.h>
#include <stdlib.h>

int main()
{
    int entero;
    float flotante;
    char caracter;


    printf("ingrese el entero: ");

    scanf("%d",&entero);
    printf("ingrese el flotante: ");

    scanf("%f",&flotante);
    printf("ingrese el caracter: ");
    caracter=getche();
   // fflush(stdin);
    //scanf("%c",&caracter);

    printf("el entero es %d\n el flotante es %.2f\n el caracter es %c", entero, flotante, caracter);
    return 0;
}
