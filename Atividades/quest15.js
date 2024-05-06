/* Fazer um algoritmos para receber um número decimal e o peso de cada número 
até que o usuário digite o número 0. Fazer a média ponderada desses números 
e pesos respectivos. */

const prompt = require("prompt-sync")();
let numero, cont, resultado, soma, peso;
numero = 1;
soma = 0;
cont = 0;
peso = 0;
while(numero != 0){
    numero = parseInt(prompt("Digite um numero(para parar digite 0): "));
    cont = parseInt(prompt("Digite o peso(digite 0 para sair): "));
    numero = numero * cont;
    soma += numero
    peso = peso + cont
    if (numero === 0){
        peso = peso - cont;
    }
}
    if (soma != 0 ){
    resultado = soma/peso;
    console.log("A média dos valores adicionados é: ",resultado);
    }