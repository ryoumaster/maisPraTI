
const prompt = require("prompt-sync")();

/*let numero;
numer = parseInt(prompt("Digite o numero"));
if (numer % 2 == 0){
    console.log("é par");
}
else{
    console.log("é impar");

}
*/
/* verificar se é triangulo:
let lado1 = parseInt(prompt("insira o lado 1"));
let lado2 = parseInt(prompt("insira o lado 2"));
let lado3 = parseInt(prompt("insira o lado 3"));
if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2+lado3 > lado1){
    console.log("É possivel formar um trangulo com essas medidas");
}else{
    console.log("não é possivel");
}
*/
/* Calculadora simples
let num1 = parseInt(prompt("Digite o numero 1: "));
let num2 = parseInt(prompt("Digite o numero 2: "));
let operacao = prompt("Digite a operação (+, -, /, *): ");

let resultado;
if (operacao === '+'){
resultado = num1+num2;
}
else if(operacao === '-'){
resultado = num1 - num2;
}
else if (operacao === '/'){
    if(num2 != 0){
        resultado = num1/num2;
    }
    else{console.log("error");}
}
else if (operacao === '*'){
    resultado = num1*num2;
}
else {
    console.log("error");
}
console.log(resultado);
*/
/* SWITCH CASE
let dia = parseInt(prompt("Insira o dia da semana: "));
let nomeDia;
switch(dia){
    case 1: nomeDia = "Domingo";
    break;
    case 2: nomeDia = "Segunda";
    break;
    case 3: nomeDia = "Terça";
    break;
    case 4: nomeDia = "Quarta";
    break;
    case 5: nomeDia = "Quinta";
    break;
    case 6: nomeDia = "Sexta";
    break;
    case 7: nomeDia = "Sabado";
    break;
    default: console.log("Digite um numero de 1 a 7");
        break;
}
console.log("Dia é:", nomeDia);
*/

/*
let num1 = parseInt(prompt("Digite o numero 1: "));
let num2 = parseInt(prompt("Digite o numero 2: "));
let operacao = prompt("Digite a operação (+, -, /, *): ");

let resultado;
switch(operacao){
    case '+': resultado = num1+num2;
    break;
    case '*': resultado = num1*num2;
    break;
    case '-': resultado = num1-num2;
    break;
    case '/': if (num2 != 0){
        resultado = num1/num2;
    }else {console.log("erro");}
    break;
}
console.log(resultado);
*/

/*
let cont = 0;
let calculo = 0;
while (cont<=1000){
    calculo += cont;
    cont++;
}
console.log(calculo);
*/
const numeroCorreto = Math.floor((Math.random()*10));
let tentativa;
do{
    tentativa = parseInt(prompt("Adivinhe um numero entre 1 e 10: "))
    if (tentativa < numeroCorreto){
        console.log("tente numero maior");
    }
    else if (tentativa > numeroCorreto){
        console.log("tente um numero menor");
    }
}while(tentativa !== numeroCorreto);
console.log("Parabens! voce acertou");