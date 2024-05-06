/* Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5. */
for (let cont = 1000; cont < 2000; cont++){
    if (cont%11 === 5){
        console.log(cont);
    }
}