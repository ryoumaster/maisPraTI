/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia,
e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que 
leia o número de maçãs compradas, calcule e escreva o valor total da compra. */
const prompt = require("prompt-sync")();

let total, qtd;
qtd = parseInt(prompt("Digite o total de maçãs compradas: "));
if (qtd >= 12){
    total = qtd * 0.25;
}else total = qtd * 0.35;
console.log("Total da compra: R$",total.toFixed(2));