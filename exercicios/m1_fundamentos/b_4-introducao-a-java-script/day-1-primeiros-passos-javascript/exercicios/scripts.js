/* SEÇÃO DAS VARIAVEIS E CONSTANTES */
const firstNumber = 200;
const secondNumber = 10000;
const thirdNumber = 506;
let resultOperacao ;

/* PARTE 1 */

/* 1° PROGRAMA  ADIÇÃO */
resultOperacao = firstNumber + secondNumber;
console.log(resultOperacao);

/* 2° PROGRAMA SUBTRAÇÃO  */
resultOperacao = firstNumber - secondNumber;
console.log(resultOperacao); 
resultOperacao = secondNumber - firstNumber;
console.log(resultOperacao);

/* 3° PROGRAMA MULTIPLICAÇÃO */
resultOperacao = firstNumber * secondNumber; 
console.log( resultOperacao);

/* 4° PROGRAMA DIVISÃO */
resultOperacao = firstNumber / secondNumber; 
console.log(resultOperacao);
resultOperacao = secondNumber / firstNumber;
console.log(resultOperacao);

/* 5° PROGRAMA MODULO (RESTO DA DIVISÃO) */
resultOperacao = firstNumber % secondNumber;
console.log(resultOperacao);
resultOperacao = secondNumber % firstNumber;
console.log(resultOperacao);

/* PARTE 2 */
/* retorne o maior numero */
if (firstNumber > secondNumber) {
    console.log("O maior numero é: ", firstNumber);
} else {
    console.log("o maior numero é: ", secondNumber);
}

/* PARTE 3 */
/* retorne o maior de tres numeros */
if (firstNumber > secondNumber && firstNumber > thirdNumber ) {
    console.log ("O número" , firstNumber, "é o maior dos três. ")
} 
else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
console.log ("O numero", secondNumber, "é o maior dos três");
} 
else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
console.log("o numero", thirdNumber, "é  o maior dos três");
}

/* PARTE 4 */
/* dizer se onmumero é positivo ou negativo */
if (firstNumber > 0) {
    console.log("este numero é POSITIVO");
} 
else if (firstNumber < 0) {
    console.log("este numero é NEGATIVO");
}
else {
    console.log("este numero é ZERO");
}