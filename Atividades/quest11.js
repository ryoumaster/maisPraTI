/* Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros.
Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido
é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor 
NULO ou NEGATIVO. */

const prompt = require("prompt-sync")();
let num1 = 1;
while(num1 > 0){
num1 = parseInt(prompt("Digite um numero"));
if (num1%2==0){
    console.log('O numero: ',num1,' é par');
}else console.log('O numero ',num1,' é impar');
}