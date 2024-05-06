/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se 
os lados fornecidos formam realmente um triângulo. Caso forme, deve ser 
indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: 
A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

const prompt = require("prompt-sync")();

let A, B, C;
A = parseInt(prompt("Digite o lado A: "));
B = parseInt(prompt("Digite o lado B: "));
C = parseInt(prompt("Digite o lado C: "));

if (A < B + C && B < A + C && C < A + B){
    console.log("Forma um triangulo");
    if ((A == B) || (A == C) || (B == C)){
        console.log("Forma um triangulo Isoceles");
    }else if ((A != B) && (B != C)){
        console.log("É um triangulo escaleno");
    }else if ((A == B) && (B == C)){
        console.log("Triangulo Equilatero")
    }
}
