/* Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo. */

let num, cont, step;
num = 101;
cont = 0;

while(cont < 50){
    step = 0;
    for (let i = 2; i < num; i++){
        if (num % i == 0){
            step++;
        }
    }
    if (step == 0){
        console.log(num, "é primo");
        cont++;
    }
    num++;
}