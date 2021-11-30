/* EXERCICIOS PARA FIXAR */

let numbers = [5, 9, 32, 19, 70, 8, 100, 2, 35, 27];

/* EXERCICIO 7 */

let menorNumber = null;
menorNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (menorNumber > numbers[index]) {
        menorNumber = numbers[index];
    }
}console.log("O menor numero é:", menorNumber);