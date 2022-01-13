/* EXERCICIOS PARA FIXAR */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* EXERCICIO 4 */

let soma = 0;

console.log(numbers.length);

for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    soma = soma + (numbers[index2]);
}
   let mediaAritimetica = soma / (numbers.length)
console.log('A média aritimetica é igual: ', mediaAritimetica);

if (mediaAritimetica > 20) {
    console.log("Valor maior que 20");
} 
else {
    console.log("Valor maior ou igual a 20");
}