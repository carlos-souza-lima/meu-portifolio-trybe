/* EXERCICIOS PARA FIXAR */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* EXERCICIO 5 */

let maiorNumero = null;

for (let index = 0; index < numbers.length; index += 1) {
   if (numbers[index] > maiorNumero) {
       maiorNumero = numbers[index];
   }
   
}
console.log("O maior numero é:", maiorNumero);
