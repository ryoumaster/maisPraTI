
//FOR IN NO OBJ
/*
const professor = {
    nome: "Tony Stark",
    materia: "Matematica",
    notas: {
        aluno1:3.5,
        aluno2:4.0,
        aluno3:2.8
    }
}
//For In para Iterar sobre as propriedades dentro das notas,
//calcule a media e imprima se o aluno foi aprovado.
let valorNotas = 0;
let numeroAlunos = 0;
for (let alunos in professor.notas){//O let alunos diz respeito a chave, no caso esta assumindo chave aluno1 etc
    valorNotas += professor.notas[alunos];
    numeroAlunos++
}
let media = valorNotas/numeroAlunos;
if (media>3){
    console.log("Aprovado");
} */

//FOR OF OBJ
/*
const biblioteca = [
    {titulo:'12 regras para vida', autor: 'Jordan Peterson', ano: 1925},
    {titulo:'O hobbit', autor:'J.R.R TOLKIEN', ano: 1937},
    {titulo:'Senhora do jogo', autor:'Sidney Sheldon', ano: 2009},
    {titulo:'Zé carioca', autor:'Disney', ano:1948},
    {titulo:'Nação dopamina', autor:'Anna L', ano:2021}
]

/**
 * For of para iterar sobre o array biblioteca
 * para cada livro, verifique se foi pub antes de 2000
 * imprimir o titulo e o ano dos livros que atendem
 */
/*
//A variavel titulos representa o objeto inteiro, nao so a chave
for(let titulos of biblioteca){
    if (titulos.ano < 2000){
        console.log(`O livro "${titulos.titulo}", escrito por ${titulos.autor}, foi publicado em ${titulos.ano}`);
    }
}
*/
/*
const filmes = [
    {titulo:'Tropa de Elite', genero:'Ação'},
    {titulo:'Capitao Fantastico', genero:'Drama'},
    {titulo:'Poderoso chefao', genero:'Crime'},
    {titulo:'Clube da luta', genero:'Drama'},
    {titulo:'Oppenheimer', genero:'Biografia'},
    {titulo:'High school musical', genero:'Musical'},
    {titulo:'Barbie', genero:'Live action'},
]

/**Com forEach para iterar sobre o array, crie um
 * objeto para armazenar a contagem de filmes por genero
 * se existir, incremente a contagem, se nao adicione o genero
 * ao objeto com contagem inicial de 1 apos loop
 * imprima cada genero e o numero de filmes correspondentes.
 */
/*
let contagemGeneros = {};

filmes.forEach(filme => {
    if (contagemGeneros[filme.genero]){//Quando poe so o valor é pra ver se ele existe
        contagemGeneros[filme.genero]++;
    }else {
        contagemGeneros[filme.genero] = 1;
    }
});

for (let genero in contagemGeneros){
    console.log(contagemGeneros[genero] + " filmes do genero " + genero);
};
*/

//PESQUISA BINARIA
/*
const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length - 1; //tamanho do vetor -1 para pegar o tamanho real

    while (low <= high){
        const mid = Math.floor((low + high)/2);//math.floor para arredondar o numero
        const guess = list[mid];

        if (guess == item){
            return mid;
        }else if(guess > item){
            high = mid -1;
        }else {
            low = mid + 1;
        }
    }
    return null
}

    const myList = [1, 3, 5, 7, 9];
    console.log(binarySearch(myList, 3));
    */

    
