let listaCoisas = Array();
listaCoisas['frutas'] = Array();
listaCoisas['frutas'][0] = "Morango";
listaCoisas['frutas'][1] = "Uva";
listaCoisas['frutas'][2] = "Laranja";
listaCoisas['frutas'][3] = "Bergamota";

//encontrar a posição do elemento no array
let aux = listaCoisas['frutas'].indexOf("Uva");
if(aux === -1){
    console.log('Elemento não existe no Array');
}else{
    console.log("Elemento existe e esta na posição: "+aux);
}
//Ordenar array em ordem alfabetica
console.log(listaCoisas['frutas'].sort());

