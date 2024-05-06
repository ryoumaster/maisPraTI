function calcularAreaTerreno(largura, comprimento){
    let area = largura * comprimento;
    return area;
}

let prompt = require('prompt-sync')();
let lg = prompt("DIGITE A LARGURA: ");
let cp = prompt("DIGITE O COMPRIMENTO: ");

let resultado = calcularAreaTerreno(lg,cp);
console.log("o terreno possui " + resultado + " metros quadrados");