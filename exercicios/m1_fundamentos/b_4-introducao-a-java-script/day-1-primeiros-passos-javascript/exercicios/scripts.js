/* SEÇÃO DAS VARIAVEIS E CONSTANTES */
const firstNumber = 20;
const secondNumber = 100;
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