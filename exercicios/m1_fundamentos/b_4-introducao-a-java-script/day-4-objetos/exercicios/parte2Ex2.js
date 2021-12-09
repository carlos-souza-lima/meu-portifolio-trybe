/* EXERCICIOS FUNÇÕES */

/* EXERCICIO 2*/

let numbers = [2, 1200, 3, 6, 7,  10, 700, 1]; 
let maiorNumero = null;
function ondeEstaOMaior(numbers) {
    let numeroAtual = null;
    for (let i in numbers) {
        numeroAtual = numbers[i]
        if (numeroAtual > maiorNumero) {
            maiorNumero = numeroAtual;
        }
    }
    indiceMaiorNumero = numbers.indexOf(maiorNumero);
    console.log(indiceMaiorNumero)

}
ondeEstaOMaior(numbers)