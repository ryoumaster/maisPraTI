/* 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros. */

const prompt = require("prompt-sync")();

let num1, num2, num3, num4;
num1 = parseInt(prompt("Digite o numero 1: "));
num2 = parseInt(prompt("Digite o numero 2: "));
num3 = parseInt(prompt("Digite o numero 3: "));
num1 = num1 + 25;
num2 = num2 * 3;
num3 = (12/100) * num3;
num4 = num1 + num2 + num3;
console.log(num4);
