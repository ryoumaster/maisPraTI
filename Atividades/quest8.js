/* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos
valores iguais) e escreve-los em ordem crescente. */

const prompt = require("prompt-sync")();
let valor1, valor2;
valor1 = parseInt(prompt("Digite o valor 1: "));
valor2 = parseInt(prompt("Digite o valor 2: "));
if (valor1 > valor2){
    console.log(valor2+"\n"+valor1);
}else console.log(valor1+"\n"+valor2);