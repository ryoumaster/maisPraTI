//OBJETO
/*
const pessoa = {
    nome: "Paulo",
    idade: 23,
    profissao: "musico",
    email: "paulo@teste.com",
    empregada: true,
    descrever: function(){
        console.log("meu nome é" + nome + "tenho " + idade)
    }
}

console.log(pessoa.nome);

const carro = {
    Marca: "Fiat",
    modelo: "uno",
    placa: "abc02x",
    ligado: false,

    ligarCarro(){
        ligado = true;
        return ligado;
    }
}
carro.ligarCarro();

console.log(carro.ligarCarro());
console.log(carro.ligado);
*/
/*
const pessoa = {
    nome: "Paulo",
    idade: 23,
    profissao: "musico",
    email: "paulo@teste.com",
    empregada: true,
    descrever: function(){
        console.log("meu nome é" + nome + "tenho " + idade)
    }
}*/

//FOR IN
/*
for (let chave in pessoa){
    console.log(chave + ": " + pessoa[chave]);
}
*/

//FOR OF
/*
let numeros = [10,20,30,100];
for(let numero of numeros){
    console.log(numero);
}
*/
/*
const carro = [{
    Marca: "Fiat",
    modelo: "uno",
    placa: "abc02x"
},
{
    Marca: "ford",
    modelo: "quadrado",
    placa: "abc02x",
}
]

for(let chave in carro){//ADEQUADO PARA OBJETOS
    console.log(carro[chave]);
}
for(let chave of carro){ //mais usado para valores e arrrays
    console.log(chave['modelo']);
}*/

//FOREACH
/*let cores = ['AZUL', 'PRETO', 'BRANCO']
cores.forEach((cor, indice) => {console.log(indice + ":" + cor)})//BOM PARA OPERAÇÕES EM ARRAY QUE NECESSITA MANTER ORDEM
*/

let numeros = [1,2,3,4];
let total = 0;
numeros.forEach((numeros,indice) => {
    console.log(numeros * 2);
    total += numeros
})
console.log(total);