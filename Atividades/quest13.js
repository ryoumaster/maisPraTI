/* Escrever um algoritmo que leia 5 valores para uma variável N e, 
para cada um deles, calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N
*/

const prompt = require("prompt-sync")();
let cont1, cont, numero, resultado;
cont1 = 0;
while(cont1 < 5 ){
    numero = parseInt(prompt("Digite um numero: "));
    for (cont = 1; cont <= numero; cont++){
        resultado = numero * cont;
        console.log(cont,'x',numero,'=',resultado);
    }
    cont1++;
}