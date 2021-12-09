/* EXERCICIOS PARA FIXAR */

let numbers = [5, 9, 32, 19, 70, 8, 100, 2, 35, 27];

/* EXERCICIO 6 */

let quantidadeImpares = null;
let valorAtual = null; 

for (let index = 0; index < numbers.length; index += 1) {
    valorAtual = (numbers[index]) % 2;

    if (valorAtual === 1) {
        quantidadeImpares += 1;
    }
}
if (quantidadeImpares === null) {
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log("A quantidade de impares é :", quantidadeImpares);
}