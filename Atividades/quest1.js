/* 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, 
calcular e escrever o valor correspondente em graus Fahrenheit.*/
const prompt = require("prompt-sync")();

let celcius = 0;
celcius = parseFloat(prompt("Digite os graus em celcius "))
celcius = (celcius * 1.8) + 32;
console.log("Os graus transformados em Farenheint são: ", celcius);