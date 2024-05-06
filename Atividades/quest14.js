/* Fazer um algoritmo para receber números decimais até que o usuário digite 0 
e fazera média aritmética desses números. */

const prompt = require("prompt-sync")();
let numero, cont, resultado, soma;
numero = 1;
soma = 0;
cont = 0;
while(numero != 0){
    numero = parseInt(prompt("Digite um numero(para parar digite 0): "));
    soma += numero;
    cont= cont + 1;
}
    if (soma != 0 ){
    cont = cont -1;
    resultado = soma/cont;
    console.log("A média dos valores adicionados é: ",resultado);
    }