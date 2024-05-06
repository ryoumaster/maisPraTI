//Arrays e funções

/*
let elementos = [1, 2, 3, 4];

function somarArray(vetor){
    let soma = 0;
    for(let i = 0; i < vetor.length; i++){
        soma = soma + vetor[i]
    }
    return soma;
}
    console.log("A soma dos elementos é: ",somarArray(elementos)); 
    */

//encontrar maior numero da array
/*
let elementos = [1, 2, 3, 4];

function maiorElemento(vetor){
    let guardarValor = 0;
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] > guardarValor){
            guardarValor = vetor[i];
        }
    }
    return guardarValor;
}
    console.log("o maior valor é: ",maiorElemento(elementos));
    */

    //Inverter array
    /*
    function inverterArray(vetor){
       let vetorResultado = [];
       for(i = vetor.length - 1; i >= 0; i--){
        vetorResultado.push(vetor[i]);
       }
       return vetorResultado;
    }
    console.log("o vetor invertido é: ",inverterArray([2,3,1,5]));
    */


    //somar todos os elementos de uma matriz

    /*
    function somarMatriz(matriz){
        let soma = 0;
        for (let i = 0; i < matriz.length; i++){
            for (let j = 0; j<matriz[i].length; j++){
                soma += matriz [i][j];
            }
        }
        return soma;
    }
    console.log("A soma dos elementos é: ",somarMatriz([[1,2],[3,4]])); */

    /*
    function maiorElementoMatriz(matriz){
        let maior = matriz[0][0];
        for (let i = 0; i < matriz.length; i++){
            for (let j = 0; j < matriz[i].length; j++){
                if (maior < matriz[i][j]){
                    maior = matriz[i][j];
                }
            }
        }
        return maior;
    }

    console.log("o maior elemento é: ",maiorElementoMatriz([[1,2],[3,4]])); */

    //String: considerado um valor primitivo, ao ser interpretado pelo JS converte em objetos.

    /*
    let nome = 'paulo'
    console.log(nome.toLocaleUpperCase()); */

    //Funções avançadas matematica
    /*
    let x = Math.ceil(10.100);
    console.log(x);
    x = Math.round(10.100);
    console.log(x);
    x = Math.random();
    console.log(x); */

    //DATAS
    let data = new Date();
    console.log(data.getDate()); // pega o dia
    console.log(data.getMonth()+1); // pega o mes, tem que somar mais 1 pq conta de 0 a 11
    console.log(data.getFullYear()); //pega o ano
    console.log(data.getDate(),"/",(data.getMonth()+1),"/",data.getFullYear());
    console.log(data.toString()); //Imprime a data atual