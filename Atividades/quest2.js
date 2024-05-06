/* 2. Escreva um algoritmo para ler o número de eleitores de um município, 
o número de votos brancos, nulos e válidos. Calcular e escrever o percentual
que cada um representa em relação ao total de eleitores. */

const prompt = require("prompt-sync")();

let eleitores, votosBrancos, votosNulos, votosValidos;
eleitores = parseInt(prompt("Digite a quantidade de eleitores: "));
votosBrancos = parseInt(prompt("Digite a quantidade de votos brancos: "));
votosNulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
votosValidos = parseInt(prompt("Digite a quantidade de votos validos: "));
votosBrancos = (votosBrancos/eleitores) * 100;
console.log('A porcentagem de votos brancos foi de ', votosBrancos, '%');
votosNulos = (votosNulos/eleitores) * 100;
console.log('A porcentagem de votos brancos foi de ', votosNulos, '%');
votosValidos = (votosValidos/eleitores) * 100;
console.log('A porcentagem de votos brancos foi de ', votosValidos, '%');
